from django.urls import path
from . import views


urlpatterns = [
    path('projects', views.getProjects, name="projects"),
    path('images/<str:pk>', views.getImages, name="projects"),
    path('notes/create', views.createMessage, name="projects"),
]