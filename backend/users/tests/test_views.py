from django.test import TestCase
from rest_framework.test import APIClient

class ViewTestCase(TestCase):
  @classmethod
  def setUpTestData(cls):
    cls.client = APIClient()

    cls.user_data = {
      "email": "charlie@email.com",
      "first_name": "Charlie",
      "last_name": "Brown",
      "is_admin": True,
    }

  def test_should_return_users(self):
    response_get = self.client.get('/api/v1/users/')
    self.assertIsNotNone(response_get.data)

  def test_should_return_required_fields(self):
    user = self.client.post('/api/v1/users/', {})

    for field, errors in user.data.items():
      self.assertEqual(errors[0], 'This field is required.')

  def test_should_return_required_fields(self):
    user = self.client.post('/api/v1/users/', {"email": "charlie"})

    self.assertEqual(user.data["email"][0], "Enter a valid email address.")