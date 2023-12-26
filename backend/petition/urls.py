from django.urls import path, include
from . import views

urlpatterns = [
    path('api/user/', views.UserRegistrationView.as_view(), name='user'),
    path('api/login/', views.UserLoginView.as_view(), name='login'),
    path('api/me/', views.UserProfileView.as_view()),
    path('api/petition/', views.PetitionAPIView.as_view(), name='petition-list'),
    path('api/signature/', views.SignatureAPIView.as_view(), name='signature'),
    path('api/policies/', views.PoliciesAPIView.as_view(), name='policy-list'),
    path('api/notices/', views.NoticeAPIView.as_view(), name='notice-list'),
]
