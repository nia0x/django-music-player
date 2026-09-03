
from django.shortcuts import render


from django.shortcuts import render
from .models import Music

from django.shortcuts import render
from .models import Music


def music(request):
    songs = Music.objects.all()

    return render(request, "music/music.html", {
        "songs": songs,
        "song": songs.first(),
    })