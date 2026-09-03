
from django.shortcuts import render


from django.shortcuts import render
from .models import Music

def music(request):
    song = Music.objects.first()

    return render(request, "music/music.html", {
        "song": song
    })