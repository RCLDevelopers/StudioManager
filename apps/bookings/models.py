from django.utils.translation import gettext_lazy as _
from mongoengine import Document, StringField, ReferenceField, DateTimeField, DecimalField, IntField

class Booking(Document):
    """
    Model representing a booking for a studio room.
    """
    STATUS_CHOICES = (
        ('pending', _('Pending')),
        ('confirmed', _('Confirmed')),
        ('cancelled', _('Cancelled')),
        ('completed', _('Completed')),
    )

    user = ReferenceField('User', required=True)
    room = ReferenceField('Room', required=True)
    start_time = DateTimeField(required=True)
    end_time = DateTimeField(required=True)
    status = StringField(choices=STATUS_CHOICES, default='pending')
    total_price = DecimalField(precision=2)
    notes = StringField()
    number_of_guests = IntField(min_value=1, default=1)
    created_at = DateTimeField()
    updated_at = DateTimeField()

    meta = {
        'collection': 'bookings',
        'indexes': [
            'user',
            'room',
            'start_time',
            'end_time',
            'status'
        ],
        'ordering': ['-start_time']
    }

    def __str__(self):
        return f"{self.room.studio.name} - {self.room.name} ({self.start_time})"

    def calculate_duration(self):
        """Calculate the duration of the booking in hours"""
        duration = self.end_time - self.start_time
        return duration.total_seconds() / 3600

    def calculate_total_price(self):
        """Calculate the total price based on duration and room rate"""
        duration = self.calculate_duration()
        return float(self.room.hourly_rate) * duration

class BookingStatus(Document):
    """
    Model for tracking booking status changes.
    """
    booking = ReferenceField(Booking, required=True)
    status = StringField(choices=Booking.STATUS_CHOICES)
    notes = StringField()
    created_by = ReferenceField('User')
    created_at = DateTimeField()

    meta = {
        'collection': 'booking_statuses',
        'indexes': ['booking', 'created_at'],
        'ordering': ['-created_at']
    }

    def __str__(self):
        return f"{self.booking} - {self.status} ({self.created_at})"
