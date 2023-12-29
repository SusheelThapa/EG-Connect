from rest_framework import serializers
from .models import User, Petition, Signature, Notice


# Serializer for User Registration
class UserRegisterationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "first_name", "last_name", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    # Overriding the create method to create a user instance
    def create(self, validate_data):
        return User.objects.create_user(**validate_data)

    # Serializer for User Login


# Serializer for User Login
class UserLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255)

    class Meta:
        model = User
        fields = ["username", "password"]


# Serializer for User Profile
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "first_name", "last_name"]


# Serializer for Petitions
class PetitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Petition
        fields = [
            "id",
            "user",
            "title",
            "description",
            "creation_date",
            "status",
            "target_signatures",
            "is_petition",
        ]
        extra_kwargs = {"is_petition": {"read_only": True}, "status":{"read_only":True}}

    def create(self, validated_data):
        validated_data["is_petition"] = True
        return Petition.objects.create(**validated_data)


# Serializer for Policies (treated as Petitions with 'is_petition' False)
class PoliciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Petition
        fields = [
            "id",
            "user",
            "title",
            "description",
            "creation_date",
            "status",
            "target_signatures",
            "is_petition",
        ]
        extra_kwargs = {"is_petition": {"read_only": True}}

    # Setting 'is_petition' to False for every created instance
    def create(self, validated_data):
        validated_data["is_petition"] = False
        return Petition.objects.create(**validated_data)


# Serializer for Signatures
class SignatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signature
        fields = ["id", "petition", "user"]


# Serializer for Notices
class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = ["id", "title", "description", "creation_date"]
