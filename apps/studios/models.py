from django.utils.translation import gettext_lazy as _
from mongoengine import Document, StringField, ReferenceField, BooleanField, DateTimeField, URLField, DecimalField, IntField

class Studio(Document):
    """
    Model representing a music studio.
    """
    name = StringField(max_length=255, required=True)
    owner = ReferenceField('User', required=True)
    description = StringField()
    address = StringField()
    contact_email = StringField()
    contact_phone = StringField(max_length=15)
    website = URLField()
    logo = StringField()  # Store the path to the image
    is_active = BooleanField(default=True)
    created_at = DateTimeField()
    updated_at = DateTimeField()

    meta = {
        'collection': 'studios',
        'indexes': ['owner'],
        'ordering': ['-created_at']
    }

    def __str__(self):
        return self.name

class Room(Document):
    """
    Model representing a room within a studio.
    """
    ROOM_TYPES = (
        ('recording', _('Recording Room')),
        ('rehearsal', _('Rehearsal Room')),
        ('mixing', _('Mixing Room')),
        ('production', _('Production Suite')),
        ('other', _('Other')),
    )

    studio = ReferenceField(Studio, required=True)
    name = StringField(max_length=255, required=True)
    room_type = StringField(choices=ROOM_TYPES, default='recording')
    description = StringField()
    capacity = IntField(min_value=1)
    hourly_rate = DecimalField(precision=2)
    equipment = StringField()
    photos = StringField()  # Store the path to the image
    is_active = BooleanField(default=True)
    created_at = DateTimeField()
    updated_at = DateTimeField()

    meta = {
        'collection': 'rooms',
        'indexes': ['studio'],
        'ordering': ['studio', 'name']
    }

    def __str__(self):
        return f"{self.studio.name} - {self.name}"
