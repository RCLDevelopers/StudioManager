# Zangtics Digital Studio Manager

<div align="left" >
<center>
      <a href="https://www.zangticsdigital.com" align="center">
        <img src="public/zangtics-logo.png" alt="Zangtics Digital Logo" width="50" height="50">
      </a>    
</center>
<center>
       <h1 style="display: inline-block; margin-left: 10px;">Studio Manager</h1>
</center>
</div>

A comprehensive studio management solution designed for modern production environments. Our platform streamlines operations for TV, radio, photo, and video studios while providing powerful tools for resource management and client engagement.

[![Studio Manager Dashboard][product-screenshot]](https://www.zangticsdigital.com)

## 📋 Table of Contents
- [About](#about)
- [Core Features](#core-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Contact](#contact)
- [License](#license)

## 🎯 About

Zangtics Digital Studio Manager is an all-in-one solution for managing digital media production workflows. Built by industry professionals for industry professionals, it combines powerful booking capabilities, resource management, and project tracking tools in one intuitive platform.

## 🚀 Core Features

### 📱 Client Booking & Management
- **Website Booking Portal**
  - Studio showcase with detailed descriptions and photos
  - Comprehensive service catalog
  - Real-time availability calendar
  - Online booking system with payment integration
  - Automated booking confirmations
- **QR Code Integration**
  - Quick access to booking pages
  - Mobile-friendly interface
- **Client Management**
  - Secure client database
  - Booking history tracking
  - Client preferences management

### 🎥 Studio & Equipment Management
- **Studio Inventory**
  - Detailed studio specifications
  - Equipment tracking
  - Maintenance scheduling
- **Equipment Management**
  - Comprehensive equipment catalog
  - Borrowing system
  - Maintenance tracking
  - Condition monitoring

### 📅 Task & Calendar Management
- **Unified Calendar System**
  - Multi-view calendar (daily/weekly/monthly)
  - Resource allocation tracking
  - Booking integration
- **Task Management**
  - Project task creation and assignment
  - Progress tracking
  - Priority management
  - Resource conflict detection

### 🔔 Smart Notifications
- Booking confirmations
- Task assignments and updates
- Equipment return reminders
- Payment notifications
- Customizable notification preferences

### 👥 Multi-User Platform
- Role-based access control
- Secure authentication
- Activity logging
- Team collaboration tools

### 💳 Payment Integration
- M-Pesa integration
- PayPal support
- Paystack integration
- Payment tracking
- Financial reporting

### 📊 Advanced Features
- **Project Management**
  - Project timeline tracking
  - Task dependencies
  - Team collaboration
- **Financial Tools**
  - Quotation generation
  - Invoice management
  - Revenue tracking
- **Analytics & Reporting**
  - Custom report generation
  - Data visualization
  - Performance metrics
- **Document Management**
  - Centralized storage
  - Document linking
  - Version control

## 💻 Technology Stack

Our platform is built using modern, reliable technologies:

[![TypeScript][TypeScript]][TypeScript-url]
[![React][React.js]][React-url]
[![Material][Material]][Material-url]
[![Firebase][Firebase]][Firebase-url]
[![AWS][AWS]][AWS-url]
[![Python][Python]][Python-url]
[![Laravel][Laravel]][Laravel-url]
[![MySQL][MySQL]][MySQL-url]

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser

### Installation
1. Clone the repository
   ```sh
   git clone https://github.com/RCLDevelopers/studio-manager.git
   ```
2. Navigate to project directory
   ```sh
   cd studio-manager
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start development server
   ```sh
   npm run dev
   ```
   Access at http://localhost:3000

## 📞 Contact

Zangtics Digital - [Website](https://www.zangticsdigital.com)
- 📍 Located in Nairobi, KENYA
- 📱 Phone: +254 700 579 704
- ⏰ Working Hours: 08:00am - 11:00pm (Mon-Thu)
- ✉️ Email: info@zangticsdigital.com
- 💻 GitHub: [@RCLDevelopers](https://github.com/RCLDevelopers)

Project Link: [https://github.com/RCLDevelopers/studio-manager](https://github.com/RCLDevelopers/studio-manager)

## 📄 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Material]: https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[Material-url]: https://mui.com/
[Apache-chart]: https://img.shields.io/badge/echart-4.7.0-green
[product-screenshot]: public/homepage.png
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Firebase]: https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/
[AWS]: https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white
[AWS-url]: https://aws.amazon.com/
[Python]: https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54
[Python-url]: https://www.python.org/
[Laravel]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com/
[MySQL]: https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/

# Studio Manager SaaS

A comprehensive Studio Management System built with Django and MongoDB, designed to help studio owners manage their facilities, bookings, and clients efficiently.

## Features

- **User Management**
  - User registration and authentication
  - JWT-based authentication system
  - User profiles with role-based access control
  - Password encryption using bcrypt

- **Studio Management**
  - Studio space management
  - Equipment inventory
  - Facility details and amenities
  - Availability scheduling

- **Booking System**
  - Real-time availability checking
  - Booking management
  - Schedule conflicts prevention
  - Booking history

- **Payment Processing**
  - Secure payment processing
  - Invoice generation
  - Payment history tracking
  - Refund management

## Technology Stack

- **Backend**: Django 3.1.12
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API**: Django REST Framework
- **File Storage**: Django Media Files
- **Security**: bcrypt password hashing

## Setup Instructions

1. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Configure MongoDB:
   - Install MongoDB if not already installed
   - Create a database named 'studiomanager'
   - Update MongoDB settings in `core/settings.py` if needed

4. Apply migrations:
   ```bash
   python manage.py migrate
   ```

5. Create a superuser:
   ```bash
   python manage.py createsuperuser
   # Use these credentials for testing:
   # Email: admin@example.com
   # Password: 12345678
   ```

6. Run the development server:
   ```bash
   python manage.py runserver
   ```

## API Endpoints

### Base URL: `http://127.0.0.1:8000/`

### Authentication Endpoints
- **Login**: `POST /api/accounts/token/`
  - Request body: `{"email": "user@example.com", "password": "userpassword"}`
  - Returns: Access and refresh tokens

- **Refresh Token**: `POST /api/accounts/token/refresh/`
  - Request body: `{"refresh": "your-refresh-token"}`
  - Returns: New access token

- **Register**: `POST /api/accounts/register/`
  - Request body: `{"email": "user@example.com", "password": "userpassword", "first_name": "John", "last_name": "Doe"}`

### User Management
- **User Profile**: `GET /api/accounts/profile/`
  - Requires: Authentication token
  - Returns: User profile information

### Admin Interface
- **Admin Panel**: `/admin/`
  - Requires: Superuser credentials
  - Manage users, studios, bookings, and payments

## Database Configuration

### MongoDB Settings
```python
MONGODB_DATABASES = {
    'default': {
        'name': 'studiomanager',
        'host': 'localhost',
        'port': 27017,
    }
}
```

## Security Considerations

- JWT tokens are used for API authentication
- Passwords are hashed using bcrypt
- CORS is configured for secure cross-origin requests
- Media files are served through Django's secure file server
- Environment variables should be used for sensitive data in production

## Production Deployment

For production deployment:
1. Set `DEBUG = False` in settings
2. Configure proper MongoDB authentication
3. Use environment variables for sensitive data
4. Set up proper CORS configuration
5. Configure proper static and media file serving
6. Set up SSL/TLS certificates
7. Configure proper logging

## Testing

Default superuser credentials for testing:
- Email: admin@example.com
- Password: 12345678

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
