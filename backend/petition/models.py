from django.db import models

# Create your models here.
from django.db import models

STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    registration_date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.username

class Petition(models.Model):
   
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    creation_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    target_signatures = models.PositiveIntegerField()
    is_petition = models.BooleanField()
    tags = models.ManyToManyField('Tag')

    def __str__(self) -> str:
        return self.title


    
class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)


class Signature(models.Model):
    petition = models.ForeignKey(Petition, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    signature_date = models.DateTimeField(auto_now_add=True)
