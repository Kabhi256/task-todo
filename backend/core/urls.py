from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponseRedirect

def redirect_to_frontend(request):
    return HttpResponseRedirect("http://localhost:3000/")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('api.urls')),
    path('', redirect_to_frontend)
]
