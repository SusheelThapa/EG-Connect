from django.urls import path, include
from . import views

urlpatterns = [
    path('api/user/', views.UserAPIView.as_view(), name='petition-list'),
    path('api/petition/', views.PetitionAPIView.as_view(), name='article-list'),
    path('api/signature/', views.SignatureAPIView.as_view(), name='article-list'),
]
