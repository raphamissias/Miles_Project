from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  email = models.EmailField(max_length=127, unique=True)
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  is_admin = models.BooleanField(null=True, default=False)
  updated_at = models.DateTimeField(auto_now=True)

  def get_full_name(self):
    return f"{self.first_name} {self.last_name}"