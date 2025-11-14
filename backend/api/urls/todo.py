from django.urls import path
from api.views.todo import TodoDetail, TodoListCreate

urlpatterns = [
    path('', TodoListCreate.as_view(), name='todos'),
    path('<int:pk>/', TodoDetail.as_view(), name='todo-detail'),

]