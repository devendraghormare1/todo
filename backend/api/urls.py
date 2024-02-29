from django.urls import path, include
from .views import TodoListCreate, TodoRetriveUpdateDestroy

urlpatterns = [
    path('todos/', TodoListCreate.as_view(), name="Todo-list"),
    path('todos/<int:pk>/', TodoRetriveUpdateDestroy.as_view(), name="Todo-details"),
]
