from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User, Petition, Article, Signature, Comment
from .serializers import UserSerializer, PetitionSerializer, ArticleSerializer, SignatureSerializer, CommentSerializer
# Create your views here.

class UserAPIView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PetitionAPIView(APIView):
    def get(self, request):
        petitions = Petition.objects.all()
        serializer = PetitionSerializer(petitions, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PetitionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SignatureAPIView(APIView):
    def get(self, request):
        signatures = Signature.objects.all()
        serializer = SignatureSerializer(signatures, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SignatureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
