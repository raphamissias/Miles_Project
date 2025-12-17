from django.shortcuts import render
from rest_framework import generics
from users.serializers import UserSerializer
from users.models import User

class UserView(generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer