from django.urls import path, include
from . import views

urlpatterns = [
    path('api/user/', views.UserAPIView.as_view(), name='user'),
    path('api/petition/', views.PetitionAPIView.as_view(), name='petition-list'),
    path('api/signature/', views.SignatureAPIView.as_view(), name='signature'),
    path('api/policies/', views.PoliciesAPIView.as_view(), name='policy-list'),
    path('api/notices/', views.NoticeAPIView.as_view(), name='notice-list'),
]
