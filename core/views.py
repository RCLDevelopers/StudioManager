from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

@api_view(['GET'])
def api_root(request, format=None):
    """
    API root endpoint that provides links to all available endpoints.
    """
    return Response({
        'auth': {
            'login': reverse('accounts:token_obtain_pair', request=request, format=format),
            'refresh_token': reverse('accounts:token_refresh', request=request, format=format),
            'register': reverse('accounts:register', request=request, format=format),
        },
        'user': {
            'profile': reverse('accounts:profile', request=request, format=format),
        },
        'admin': request.build_absolute_uri('/admin/'),
        'documentation': 'API documentation will be available soon.',
    }) 