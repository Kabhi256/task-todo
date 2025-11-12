from rest_framework import serializers
from todo.models.todo import Todo

class TodoSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Todo
        fields = ['id', 'task_name', 'description', 'status','created_at', 'created_by']
        read_only = ['id', 'created_at', 'created_by']