from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from apps.studios.models import Room

class Booking(models.Model):
    """
    Model representing a booking for a studio room.
    """
    STATUS_CHOICES = [
        ('pending', _('Pending')),
        ('confirmed', _('Confirmed')),
        ('cancelled', _('Cancelled')),
        ('completed', _('Completed')),
    ]

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='bookings'
    )
    room = models.ForeignKey(
        Room,
        on_delete=models.CASCADE,
        related_name='bookings'
    )
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    notes = models.TextField(blank=True)
    number_of_guests = models.PositiveIntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _('booking')
        verbose_name_plural = _('bookings')
        ordering = ['-start_time']
        # Ensure no overlapping bookings for the same room
        constraints = [
            models.CheckConstraint(
                check=models.Q(end_time__gt=models.F('start_time')),
                name='check_end_time_after_start_time'
            )
        ]

    def __str__(self):
        return f"{self.room.studio.name} - {self.room.name} ({self.start_time})"

    def calculate_duration(self):
        """Calculate the duration of the booking in hours"""
        duration = self.end_time - self.start_time
        return duration.total_seconds() / 3600

    def calculate_total_price(self):
        """Calculate the total price based on duration and room rate"""
        duration = self.calculate_duration()
        return self.room.hourly_rate * duration

class BookingStatus(models.Model):
    """
    Model for tracking booking status changes.
    """
    booking = models.ForeignKey(
        Booking,
        on_delete=models.CASCADE,
        related_name='status_history'
    )
    status = models.CharField(max_length=20, choices=Booking.STATUS_CHOICES)
    notes = models.TextField(blank=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='booking_status_changes'
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = _('booking status')
        verbose_name_plural = _('booking statuses')
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.booking} - {self.status} ({self.created_at})"
