require 'httparty'

Song.destroy_all
    Song.create({
      title: "Can't Buy Me Love",
      audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/The%20Beatles%20-%20Can%27t%20Buy%20Me%20Love.mp3",
      album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/cant_buy_me_love.jpeg",
      artist: "The Beatles",
      genre: "Rock"
    })

    Song.create({
      title: "Awake",
      audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/Tycho%20-%20Awake.mp3",
      album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/awake_tycho.png",
      artist: "Tycho",
      genre: "Electric"
    })

    Song.create({
      title: "Wavves",
      audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/Wavves%20-%20Green%20Eyes.mp3",
      album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/green_eyes_wavves.jpeg",
      artist: "Green Eyes",
      genre: "Electric"
    })

    Song.create({
      title: "King",
      audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/King%20-%20J%20Dilla%20%28Jay%20Stay%20Paid%29.mp3",
      album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/king_j_dilla.jpeg",
      artist: "J Dilla",
      genre: "Hip Hop"
    })

    Song.create({
      title: "Polish Girl",
      audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/Neon%20Indian%20-%20Polish%20Girl.mp3",
      album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/polish_girl_neon_indian.jpeg",
      artist: "Neon Indian",
      genre: "Rock"
    })

    Song.create({
      title: "Wildfire",
      audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/SBTRKT%20-%20Wildfire.mp3",
      album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/wildfire_sbtrkt.jpeg",
      artist: "sbtrkt",
      genre: "Electric"
    })

    Song.create({
      title: "Hang Loose",
      audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/Alabama%20Shakes%20-%20Hang%20Loose.mp3",
      album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/hang_loose_alabama_shakes.jpeg",
      artist: "Alabama Shakes",
      genre: "Rock"
    })

    Song.create({
      title: "G-osh",
      audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/Jamie%20xx%20-%20Gosh%20%28Official%20Music%20Video%29.mp3",
      album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/gosh_jamiexx.jpeg",
      artist: "Jamie xx",
      genre: "Rock"
    })

    Song.create({
      title: "Really Love",
      audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/D%27Angelo%2c%20The%20Vanguard%20-%20Really%20Love.mp3",
      album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/really_love_dangelo.jpeg",
      artist: "D'Angelo",
      genre: "R&B"
    })

    Song.create({
      title: "The motto",
      audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/Drake%20-%20The%20Motto%20%28Explicit%29%20ft.%20LIL%20WAYNE%2c%20Tyga.mp3",
      album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/the_motto_drake.png",
      artist: "Drake",
      genre: "Hip Hop"
    })
