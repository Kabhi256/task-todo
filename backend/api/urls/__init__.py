from django.urls import path, include

app_name = 'api'

urlpatterns = [
    path('todos/', include('api.urls.todo')),
    path('auth/', include('api.urls.auth')),
]