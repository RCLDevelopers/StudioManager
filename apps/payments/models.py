from django.utils.translation import gettext_lazy as _
from mongoengine import Document, StringField, ReferenceField, DateTimeField, DecimalField, DateField

class Payment(Document):
    """
    Model representing a payment for a booking.
    """
    PAYMENT_STATUS_CHOICES = (
        ('pending', _('Pending')),
        ('completed', _('Completed')),
        ('failed', _('Failed')),
        ('refunded', _('Refunded')),
    )

    PAYMENT_METHOD_CHOICES = (
        ('credit_card', _('Credit Card')),
        ('debit_card', _('Debit Card')),
        ('bank_transfer', _('Bank Transfer')),
        ('cash', _('Cash')),
        ('other', _('Other')),
    )

    booking = ReferenceField('Booking', required=True)
    amount = DecimalField(precision=2)
    payment_method = StringField(choices=PAYMENT_METHOD_CHOICES)
    status = StringField(choices=PAYMENT_STATUS_CHOICES, default='pending')
    transaction_id = StringField()
    payment_date = DateTimeField()
    notes = StringField()
    created_by = ReferenceField('User')
    created_at = DateTimeField()
    updated_at = DateTimeField()

    meta = {
        'collection': 'payments',
        'indexes': ['booking', 'payment_date'],
        'ordering': ['-payment_date']
    }

    def __str__(self):
        return f"Payment for {self.booking} - {self.amount}"

class Invoice(Document):
    """
    Model representing an invoice for a booking.
    """
    INVOICE_STATUS_CHOICES = (
        ('draft', _('Draft')),
        ('sent', _('Sent')),
        ('paid', _('Paid')),
        ('cancelled', _('Cancelled')),
        ('overdue', _('Overdue')),
    )

    booking = ReferenceField('Booking', required=True, unique=True)
    invoice_number = StringField(unique=True)
    status = StringField(choices=INVOICE_STATUS_CHOICES, default='draft')
    amount = DecimalField(precision=2)
    tax_amount = DecimalField(precision=2, default=0)
    total_amount = DecimalField(precision=2)
    issue_date = DateField()
    due_date = DateField()
    notes = StringField()
    created_at = DateTimeField()
    updated_at = DateTimeField()

    meta = {
        'collection': 'invoices',
        'indexes': ['booking', 'invoice_number', 'issue_date'],
        'ordering': ['-issue_date']
    }

    def __str__(self):
        return f"Invoice {self.invoice_number} for {self.booking}"

    def calculate_total(self):
        """Calculate total amount including tax"""
        return float(self.amount) + float(self.tax_amount)
