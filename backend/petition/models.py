from django.db import models

# Create your models here.
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    registration_date = models.DateTimeField(auto_now_add=True)

class Petition(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    creation_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20)
    target_signatures = models.PositiveIntegerField()
    is_petition = models.BooleanField()
    

class Signature(models.Model):
    petition = models.ForeignKey(Petition, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    signature_date = models.DateTimeField(auto_now_add=True)
