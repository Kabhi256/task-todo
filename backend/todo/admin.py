from django.contrib import admin
from todo.models.todo import Todo

# Register your models here.
@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ['task_name', 'status', 'created_at', 'created_by']
    list_filter = ['created_by', 'status']