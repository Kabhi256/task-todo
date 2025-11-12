from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from rest_framework.response  import Response
from rest_framework.views import APIView

class LoginView(APIView):
    def post(self, request):
        try:
            username = request.data.get('username')
            password = request.data.get('password')
            user = authenticate(username=username, password=password)

            if user is not None:
                login(request, user)
                return Response({ 'success': True, 'message': 'Login successful' }, status=status.HTTP_200_OK)
            else:
                return Response({ 'success': False, 'message': 'Invalid credentials' }, status=status.HTTP_401_UNAUTHORIZED)
            
        except Exception as e:
            return Response({ 'success': False, 'error': f'{str(e)}' }, status=status.HTTP_400_BAD_REQUEST)
        