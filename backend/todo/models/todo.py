from django.db import models
from django.contrib.auth.models import User

class Todo(models.Model):
    """
        TODO Model
    """

    class TaskStatus(models.TextChoices):
        PENDING = 'Pending', 'Pending'
        COMPLETED = 'Completed', 'Completed'
        IN_PROGRESS = 'In progress', 'In progress'
        CANCELLED = 'Cancelled', 'Cancelled'

    task_name = models.CharField(max_length=255, help_text='Name of task')
    description = models.TextField(help_text='Description of the task', blank=True)
    status = models.CharField(max_length=15, choices=TaskStatus.choices, default=TaskStatus.PENDING, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return f"{self.created_by.username}"