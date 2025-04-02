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

## 🚀 Features

### 🎨 Frontend Features
- **Modern Dashboard**
  - Real-time analytics and statistics
  - Revenue tracking with interactive charts
  - Customer growth visualization
  - Website traffic analysis
  - Responsive Material-UI components

- **User Interface**
  - Clean and intuitive design
  - Responsive layout for all devices
  - Dark/Light theme support
  - Interactive data visualization
  - Real-time updates

### 🔧 Backend Features
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

## 💻 Technology Stack

### Frontend
- **Framework**: React with TypeScript
- **UI Library**: Material-UI (MUI)
- **State Management**: React Context API
- **Charts**: ECharts
- **Build Tool**: Vite
- **Package Manager**: npm/yarn
- **Code Quality**: ESLint, Prettier

### Backend
- **Framework**: Django 3.1.12
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API**: Django REST Framework
- **File Storage**: Django Media Files
- **Security**: bcrypt password hashing

## 🚀 Getting Started

### Frontend Setup
1. Install Node.js dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
   Access at http://localhost:5173

### Backend Setup
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
   Access at http://127.0.0.1:8000/

## 📚 API Documentation

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

## ⚙️ Configuration

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

## 🔒 Security Considerations

- JWT tokens for API authentication
- Passwords hashed using bcrypt
- CORS configured for secure cross-origin requests
- Media files served through Django's secure file server
- Environment variables for sensitive data
- TypeScript for type safety
- ESLint and Prettier for code quality

## 🌐 Production Deployment

1. Build frontend:
   ```bash
   npm run build
   ```
2. Configure backend:
   - Set `DEBUG = False` in settings
   - Configure MongoDB authentication
   - Set up environment variables
   - Configure CORS settings
   - Set up static/media file serving
   - Install SSL/TLS certificates
   - Configure logging

## 🧪 Testing

Default superuser credentials for testing:
- Email: admin@example.com
- Password: 12345678

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.
