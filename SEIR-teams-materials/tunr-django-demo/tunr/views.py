from django.shortcuts import render, redirect
from .models import Artist, Song
from .forms import ArtistForm
# Create your views here.


def artist_list(request):
    artists = Artist.objects.all()
    return render(request, 'tunr/artist_list.html', {'artists': artists})


def artist_detail(request, pk):
    artist = Artist.objects.get(id=pk)
    return render(request, 'tunr/artist_detail.html', {'artist': artist})


def artist_create(request):
    # check if the request is a POST request
    if request.method == 'POST':
        # if it is, instantiate a form with the ArtistForm model
        form = ArtistForm(request.POST)
    # check that the form data is valid
        if form.is_valid():
            # if the form data is valid, then save the form
            artist = form.save()
    # and redirect the user to the artist_detail
            return redirect('artist_detail', pk=artist.pk)
    else:
        # if it's not POST request
        # render an empty artist form for the user to fill out
        form = ArtistForm()
    return render(request, 'tunr/artist_form.html', {'form': form})


def song_list(request):
    songs = Song.objects.all()
    return render(request, 'tunr/song_list.html', {'songs': songs})


def song_detail(request, pk):
    song = Song.objects.get(id=pk)
    return render(request, 'tunr/song_detail.html', {'song': song})
