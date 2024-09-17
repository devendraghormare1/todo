from django.shortcuts import render
from .serializers import TodoSerializer
from rest_framework import generics
from .models import Todo

# Create your views here.


class TodoListCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoRetriveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer