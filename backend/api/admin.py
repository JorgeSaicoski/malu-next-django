from django.contrib import admin
from .models import Project, Image, Message

# Register your models here.

admin.site.register(Project)
admin.site.register(Image)
admin.site.register(Message)