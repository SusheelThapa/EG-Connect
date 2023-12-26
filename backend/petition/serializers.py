from rest_framework import serializers
from .models import User, Petition, Signature, Notice

class UserRegisterationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','first_name','last_name', 'password']
        extra_kwargs={
            'password':{'write_only':True}
        }

    def create(self, validate_data):
        return User.objects.create_user(**validate_data)
    
class UserLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255)
    class Meta:
        model = User
        fields = ['username','password']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']


class PetitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Petition
        fields = ['id', 'user', 'title', 'description', 'creation_date', 'status', 'target_signatures','is_petition']
        extra_kwargs = {'is_petition':{'read_only': True}}

    def create(self, validated_data):
        validated_data['is_petition'] = True
        return Petition.objects.create(**validated_data)
    
class PoliciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Petition
        fields = ['id', 'user', 'title', 'description', 'creation_date', 'status', 'target_signatures','is_petition']
        extra_kwargs = {'is_petition':{'read_only': True}}

    def create(self, validated_data):
        validated_data['is_petition'] = False
        return Petition.objects.create(**validated_data)

class SignatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signature
        fields = ['id', 'petition', 'user']


class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = ['id', 'title', 'description', 'creation_date']