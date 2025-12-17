from django.test import TestCase
from users.models import User

# Create your tests here.
class UserTestCase(TestCase):
  @classmethod
  def setUpTestData(cls):
    cls.user_data = {
      "email": "charlie@email.com",
      "first_name": "Charlie",
      "last_name": "Brown",
      "is_admin": True,
    }

    cls.user = User.objects.create(**cls.user_data)

  def test_users_method_working(self):
    user = User.objects.get(email="charlie@email.com")
    self.assertEqual(user.first_name, self.user_data["first_name"])

  def test_get_full_name(self):
    result = self.user.get_full_name()
    expected = f"{self.user.first_name} {self.user.last_name}"

    self.assertEqual(expected, result)

  def test_expect_id_to_be_1(self):
    self.assertEqual(self.user.id, 1)