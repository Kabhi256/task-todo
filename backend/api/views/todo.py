from rest_framework.response import Response
from rest_framework.views import APIView
from api.serializers.todo import TodoSerializer
from todo.models.todo import Todo
from rest_framework import status
from django.shortcuts import get_object_or_404

class TodoDetail(APIView):
    def get_object(self, pk) -> Todo: 
        """
            Query to get todo object

        Args:
            pk (int): primary key of todo
        """
        return get_object_or_404(Todo, pk=pk)
        
    def get(self, request, pk):
        """
            GET: Returns the selected todo

        Args:
            pk (int): unique identifier of the todo
        """
        try:
            todo = self.get_object(pk)
            serializer = TodoSerializer(todo)
            return Response({ 'success' : True, 'todo' : serializer.data }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({ 'success': False, 'error': f'{str(e)}' }, status=status.HTTP_400_BAD_REQUEST)
        
    def put(self, request, pk):
        try:
            todo = self.get_object(pk)
            if not todo: 
                return Response({ 'success': False, 'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)

            serializer = TodoSerializer(todo, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({ 'success': True, 'todo': serializer.data }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({ 'success': False, 'error': f'{str(e)}' }, status=status.HTTP_400_BAD_REQUEST)
            

    def delete(self, request, pk):
        try:
            todo = self.get_object(pk)
            if not todo: 
                return Response({ 'success': False, 'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
            todo.delete()
            return Response({'success': True}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({ 'success': False, 'error': f'{str(e)}' }, status=status.HTTP_400_BAD_REQUEST)
        
        

class TodoListCreate(APIView):

    def get(self, request, *args, **kwargs):
        try:
            todos = Todo.objects.all()
            serializer = TodoSerializer(todos, many=True)
            return Response({ 'success' : True, 'todos' : serializer.data }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({ 'success': False, 'error': f'{str(e)}' }, status=status.HTTP_400_BAD_REQUEST)
        
    def post(self, request):
        try:
            serializer = TodoSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response({ 'success': True, 'todo': serializer.data }, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({ 'success': False, 'error': f'{str(e)}' }, status=status.HTTP_400_BAD_REQUEST)