from mongoengine import Document, StringField, BooleanField, DateTimeField, DateField, EmailField
import bcrypt

class User(Document):
    """
    Custom user model for Studio Manager application.
    """
    # Authentication fields
    username = StringField(max_length=150, required=True, unique=True)
    email = EmailField(required=True, unique=True)
    password = StringField(max_length=128)
    first_name = StringField(max_length=150)
    last_name = StringField(max_length=150)
    is_staff = BooleanField(default=False)
    is_active = BooleanField(default=True)
    is_superuser = BooleanField(default=False)
    last_login = DateTimeField(null=True)
    date_joined = DateTimeField()

    # Additional fields
    phone_number = StringField(max_length=15)
    profile_picture = StringField()  # Store the path to the image
    is_studio_owner = BooleanField(default=False)
    is_staff_member = BooleanField(default=False)
    date_of_birth = DateField()
    address = StringField()
    bio = StringField()
    created_at = DateTimeField()
    updated_at = DateTimeField()

    meta = {
        'collection': 'users',
        'indexes': ['email', 'username']
    }

    def __str__(self):
        return self.email

    def get_full_name(self):
        """Return the first_name plus the last_name, with a space in between."""
        full_name = f"{self.first_name} {self.last_name}"
        return full_name.strip()

    def get_short_name(self):
        """Return the short name for the user."""
        return self.first_name

    def set_password(self, raw_password):
        """Sets the user's password."""
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(raw_password.encode(), salt)
        self.password = hashed.decode()
        self.save()

    def check_password(self, raw_password):
        """Checks if the provided password matches the stored hash."""
        return bcrypt.checkpw(raw_password.encode(), self.password.encode())

    def has_perm(self, perm, obj=None):
        """Does the user have a specific permission?"""
        return True if self.is_superuser else False

    def has_module_perms(self, app_label):
        """Does the user have permissions to view the app `app_label`?"""
        return True if self.is_superuser else False

    @property
    def is_anonymous(self):
        """Always returns False. This is a way of comparing User objects to anonymous users."""
        return False

    @property
    def is_authenticated(self):
        """Always returns True. This is a way of telling if the user has been authenticated."""
        return True
