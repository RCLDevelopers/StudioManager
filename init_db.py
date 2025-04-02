import os
from datetime import datetime
from decimal import Decimal
from mongoengine import connect

print("Connecting to MongoDB...")
connect(
    db='studio_manager',
    host='localhost',
    port=27017,
    username='',  # Set in production
    password=''   # Set in production
)

print("Importing models...")
from apps.accounts.models import User
from apps.studios.models import Studio, Room
from apps.bookings.models import Booking, BookingStatus

def create_superuser():
    """Create a superuser if it doesn't exist."""
    print("Checking for existing superuser...")
    if not User.objects(email='admin@example.com'):
        print("Creating new superuser...")
        now = datetime.now()
        user = User(
            email='admin@example.com',
            username='admin',
            first_name='Admin',
            last_name='User',
            is_staff=True,
            is_superuser=True,
            is_active=True,
            phone_number='+1234567890',
            date_of_birth=datetime(1990, 1, 1),
            created_at=now,
            updated_at=now,
            date_joined=now
        )
        user.set_password('admin123')
        user.save()
        print('Superuser created successfully')
    else:
        print('Superuser already exists')

def create_sample_studio():
    """Create a sample studio with rooms if it doesn't exist."""
    print("Checking for existing sample studio...")
    if not Studio.objects(name='Sample Studio'):
        print("Creating new sample studio...")
        admin = User.objects(email='admin@example.com').first()
        studio = Studio(
            name='Sample Studio',
            owner=admin,
            description='A sample recording studio',
            address='123 Music Street',
            contact_email='studio@example.com',
            contact_phone='+1234567890',
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        studio.save()
        
        print("Creating sample rooms...")
        # Create sample rooms
        rooms = [
            {
                'name': 'Recording Room A',
                'description': 'Professional recording room',
                'room_type': 'recording',
                'hourly_rate': Decimal('100.00'),
                'capacity': 5
            },
            {
                'name': 'Practice Room B',
                'description': 'Practice room with basic equipment',
                'room_type': 'rehearsal',
                'hourly_rate': Decimal('50.00'),
                'capacity': 3
            }
        ]
        
        for room_data in rooms:
            print(f"Creating room: {room_data['name']}")
            room = Room(
                studio=studio,
                **room_data,
                created_at=datetime.now(),
                updated_at=datetime.now()
            )
            room.save()
        
        print('Sample studio and rooms created successfully')
    else:
        print('Sample studio already exists')

def main():
    """Initialize the database with sample data."""
    print('Starting database initialization...')
    create_superuser()
    create_sample_studio()
    print('Database initialization completed successfully')

if __name__ == '__main__':
    main() 