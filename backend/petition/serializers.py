from rest_framework import serializers
from .models import User, Petition, Signature

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'registration_date']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        return user

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