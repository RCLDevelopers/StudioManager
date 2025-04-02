from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils.translation import gettext_lazy as _
from mongoengine import Document, StringField, EmailField, BooleanField, DateTimeField, DateField

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class User(Document):
    """
    Custom user model for Studio Manager application.
    """
    email = EmailField(unique=True, required=True)
    username = StringField(max_length=150, unique=True, required=True)
    first_name = StringField(max_length=150)
    last_name = StringField(max_length=150)
    phone_number = StringField(max_length=15)
    profile_picture = StringField()  # Store the path to the image
    is_studio_owner = BooleanField(default=False)
    is_staff_member = BooleanField(default=False)
    is_active = BooleanField(default=True)
    is_staff = BooleanField(default=False)
    is_superuser = BooleanField(default=False)
    date_of_birth = DateField()
    address = StringField()
    bio = StringField()
    created_at = DateTimeField()
    updated_at = DateTimeField()
    last_login = DateTimeField()

    # Use email as the unique identifier for authentication
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    objects = UserManager()

    meta = {
        'collection': 'users',
        'indexes': ['email', 'username']
    }

    def __str__(self):
        return self.email

    def get_full_name(self):
        """
        Return the first_name plus the last_name, with a space in between.
        """
        full_name = f"{self.first_name} {self.last_name}"
        return full_name.strip()

    def get_short_name(self):
        """Return the short name for the user."""
        return self.first_name

    def has_perm(self, perm, obj=None):
        """Does the user have a specific permission?"""
        return True if self.is_superuser else False

    def has_module_perms(self, app_label):
        """Does the user have permissions to view the app `app_label`?"""
        return True if self.is_superuser else False
