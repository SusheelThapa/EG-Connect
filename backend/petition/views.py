from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User, Petition, Signature, Notice
from .serializers import UserSerializer, PetitionSerializer, SignatureSerializer , PoliciesSerializer, NoticeSerializer
# Create your views here.

class UserAPIView(APIView):
    def get(self, request):
        user = User.objects.get(id = request.user.id)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class PetitionAPIView(APIView):
    def get(self, request):
        petitions = Petition.objects.filter(is_petition = True)
        serializer = PetitionSerializer(petitions, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PetitionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class PoliciesAPIView(APIView):
    def get(self, request):
        petitions = Petition.objects.filter(is_petition = False)
        serializer = PoliciesSerializer(petitions, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PoliciesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    

class SignatureAPIView(APIView):

    def post(self, request):
        serializer = SignatureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NoticeAPIView(APIView):
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