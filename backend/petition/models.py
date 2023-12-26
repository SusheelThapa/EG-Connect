from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
from django.db import models

# Choices for the status of petitions and notices
STATUS_CHOICES = [
    ("draft", "Draft"),
    ("pending", "Pending"),
    ("approved", "Approved"),
    ("rejected", "Rejected"),
]


# Custom User model extending Django's AbstractUser
class User(AbstractUser):
    pass


# Model representing a petition or policy
class Petition(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    creation_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    target_signatures = models.PositiveIntegerField()
    is_petition = models.BooleanField()
    tags = models.ManyToManyField("Tag")

    def __str__(self) -> str:
        return self.title  # String representation showing the petition's title


# Model for tags associated with petitions
class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self) -> str:
        return self.name



# Model representing a signature for a petition
class Signature(models.Model):
    petition = models.ForeignKey(Petition, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    signature_date = models.DateTimeField(auto_now_add=True)


# Model representing a notice
class Notice(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title
