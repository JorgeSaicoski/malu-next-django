from django.db import models

# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=30, null=False, default="Nome do Projeto")
    description = models.TextField(default="Descreva o Projeto")
    image = models.CharField(max_length=600, default="")
    category = models.CharField(max_length=3, default="arq")
    def __str__(self):
        return self.name

class Images(models.Model):
    name = models.CharField(max_length=30, default="")
    url = models.CharField(max_length=600, default="")
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    def __str__(self):
        return self.url

class Messages(models.Model):
    name = models.CharField(max_length=30, default="")
    email = models.CharField(max_length=60, default="")
    body = models.TextField(blank = True)
    created = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.body