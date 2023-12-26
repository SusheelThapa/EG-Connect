from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User, Petition, Signature, Notice
from .serializers import (
    UserRegisterationSerializer,
    PetitionSerializer,
    SignatureSerializer,
    PoliciesSerializer,
    NoticeSerializer,
    UserLoginSerializer,
    UserProfileSerializer,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from .renderers import UserRenderer

from .AIfilter import petition_checker


# Utility function to generate JWT tokens for a user


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }


# View for user registration
class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserRegisterationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)
        return Response(
            {"token": token, "msg": "Registration Successful"},
            status=status.HTTP_201_CREATED,
        )


# View for user login
class UserLoginView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.data.get("username")
        password = serializer.data.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            token = get_tokens_for_user(user)
            return Response(
                {"token": token, "msg": "Login Success"}, status=status.HTTP_200_OK
            )
        else:
            return Response(
                {"errors": {"non_field_errors": ["Email or Password is not Valid"]}},
                status=status.HTTP_404_NOT_FOUND,
            )


# View for fetching user profile
class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


# API view for handling petitions
class PetitionAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        petitions = Petition.objects.filter(is_petition=True, status="approved")
        serializer = PetitionSerializer(petitions, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PetitionSerializer(data=request.data)
        if serializer.is_valid():
            res = petition_checker(serializer.validated_data['description'])
            if res:
               serializer.validated_data['status'] = "approved"
            else:
               serializer.validated_data['status'] = "rejected"
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PoliciesAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        petitions = Petition.objects.filter(is_petition=False, status="approved")
        serializer = PoliciesSerializer(petitions, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PoliciesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# API view for handling signatures
class SignatureAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = SignatureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# API view for handling notices
class NoticeAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        notices = Notice.objects.all()
        serializer = NoticeSerializer(notices, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = NoticeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
