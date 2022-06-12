from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Project, Image, Message
from .serializer import ProjectSerializer, ImageSerializer, MessageSerializer


# Create your views here.



#Get project from specific category
@api_view(['GET'])
def getProjectsCategory(request, pk):
    projects = Project.objects.filter(category=pk).order_by('id')
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

#Get specifc project
@api_view(['GET'])
def getProjectsName(request, pk):
    projects = Project.objects.get(id=pk)
    serializer = ProjectSerializer(projects, many=False)
    return Response(serializer.data)

#Get all projects
@api_view(['GET'])
def getProjects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)
#Get image from specific project
@api_view(['GET'])
def getImages(request, pk):
    images = Image.objects.filter(project=pk).order_by('id')
    serializer = ImageSerializer(images, many=True)
    return Response(serializer.data)

#Get all image
@api_view(['GET'])
def getImagesAll(request):
    images = Image.objects.all()
    serializer = ImageSerializer(images, many=True)
    return Response(serializer.data)

#Create a new message
@api_view(['POST'])
def createMessage(request):
    data = request.data
    message = Message.objects.create(
        name = data['name'],
        email = data['email'],
        body = data['body']
    )
    serializer = MessageSerializer(message, many=False)
    return Response(serializer.data)
