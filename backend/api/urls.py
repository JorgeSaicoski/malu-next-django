from django.urls import path
from . import views


urlpatterns = [
    path('projects', views.getProjects, name="projects"),
    path('projects/category/<str:pk>', views.getProjectsCategory, name="projectsCategory"),
    path('projects/name/<str:pk>', views.getProjectsName, name="projectsName"),
    path('images/<str:pk>', views.getImages, name="image"),
    path('images', views.getImagesAll, name="images"),
    path('notes/create', views.createMessage, name="notescreate"),
]