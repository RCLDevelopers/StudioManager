from rest_framework_mongoengine import serializers
from .models import User

class UserSerializer(serializers.DocumentSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'phone_number',
                 'profile_picture', 'is_studio_owner', 'is_staff_member', 'date_of_birth',
                 'address', 'bio', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

class UserRegistrationSerializer(serializers.DocumentSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'first_name', 'last_name', 'phone_number',
                 'is_studio_owner', 'date_of_birth', 'address')

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user 