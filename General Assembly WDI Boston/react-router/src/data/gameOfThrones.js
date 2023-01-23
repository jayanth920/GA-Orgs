'use strict'

const gameOfThrones = [
  {
    name: 'Starks',
    wikiSuffix: 'House_Stark',
    people: [
      {
        name: 'Eddard "Ned" Stark',
        description:
          'Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark',
        wikiSuffix: 'Eddard_Stark',
        id: 1
      },
      {
        name: 'Benjen Stark',
        description: 'Brother of Eddard Stark - First ranger of the Nights Watch',
        wikiSuffix: 'Benjen_Stark',
        id: 2
      },
      {
        name: 'Robb Stark',
        description: 'Son of Eddard and Catelyn Stark - Direwolf: Grey Wind',
        wikiSuffix: 'Robb_Stark',
        id: 3
      },
      {
        name: 'Sansa Stark',
        description: 'Daughter of Eddard and Catelyn Stark - Direwolf: Lady',
        wikiSuffix: 'Sansa_Stark',
        id: 4
      },
      {
        name: 'Arya Stark',
        description: 'Daughter of Eddard and Catelyn Stark - Direwolf: Nymeria',
        wikiSuffix: 'Arya_Stark',
        id: 5
      },
      {
        name: 'Brandon "Bran" Stark',
        description: 'Son of Eddard and Catelyn Stark - Direwolf: Summer',
        wikiSuffix: 'Brandon_Stark',
        id: 6
      },
      {
        name: 'Rickon Stark',
        description: 'Son of Eddard and Catelyn Stark - Direwolf: Shaggydog',
        wikiSuffix: 'Rickon_Stark',
        id: 7
      },
      {
        name: 'Jon Snow',
        description:
          'Bastard son of Eddard Stark - Steward in the Nights Watch - Direwolf: Ghost',
        wikiSuffix: 'Jon_Snow',
        id: 8
      }
    ],
    id: 1
  },
  {
    name: 'Lannisters',
    wikiSuffix: 'House_Lannister',
    people: [
      {
        name: 'Tywin Lannister',
        description: 'Lord of Casterly Rock - Warden of the West',
        wikiSuffix: 'Tywin_Lannister',
        id: 9
      },
      {
        name: 'Tyrion Lannister',
        description: 'Son of Tywin Lannister - The Imp',
        wikiSuffix: 'Tyrion_Lannister',
        id: 10
      },
      {
        name: 'Jaime Lannister',
        description:
          'The Kingslayer - Knight of the Kingsgaurd - Son of Tywin Lannister',
        wikiSuffix: 'Jaime_Lannister',
        id: 11
      },
      {
        name: 'Queen Cersei (Lannister) Baratheon',
        description:
          'Married to King Robert Baratheon - Daughter of Tywin Lannister',
        wikiSuffix: 'Cersei_Lannister',
        id: 12
      }
    ],
    id: 2
  },
  {
    name: 'Baratheons',
    wikiSuffix: 'House_Baratheon',
    people: [
      {
        name: 'King Robert Baratheon',
        description: 'The first of his name - Lord of the Seven Kingdoms',
        wikiSuffix: 'Robert_Baratheon',
        id: 13
      },
      {
        name: 'Stannis Baratheon',
        description:
          'Lord of Dragonstone - Master of Ships - Brother of Robert Baratheon',
        wikiSuffix: 'Stannis_Baratheon',
        id: 14
      },
      {
        name: 'Renly Baratheon',
        description:
          'Lord of Storms End - Master of Laws - Brother of Robert Baratheon',
        wikiSuffix: 'Renly_Baratheon',
        id: 15
      },
      {
        name: 'Joffrey Baratheon',
        description:
          'Heir to the Iron Throne - Son of Robert and Cersei Baratheon',
        wikiSuffix: 'Joffrey_Baratheon',
        id: 16
      },
      {
        name: 'Tommen Baratheon',
        description: 'Son of Robert and Cersei Baratheon',
        wikiSuffix: 'Tommen_Baratheon',
        id: 17
      },
      {
        name: 'Myrcella Baratheon',
        description: 'Daughter of Robert and Cersei Baratheon',
        wikiSuffix: 'Myrcella_Baratheon',
        id: 18
      }
    ],
    id: 3
  },
  {
    name: 'Targaryens',
    wikiSuffix: 'House_Targaryen',
    people: [
      {
        name: 'Daenerys Targaryen',
        description:
          'Stormborn - Khaleesi of the Dothraki - The Unburnt - Mother of Dragons - Daughter of Aerys II Targaryen "The Mad King"',
        wikiSuffix: 'Daenerys_Targaryen',
        id: 19
      },
      {
        name: 'Viserys Targaryen',
        description: 'The Beggar King - Son of Aerys II Targaryen "The Mad King"',
        wikiSuffix: 'Viserys_Targaryen',
        id: 20
      }
    ],
    id: 4
  },
  {
    name: 'Greyjoys',
    wikiSuffix: 'House_Greyjoy',
    people: [
      {
        name: 'Balon Greyjoy',
        description: 'Lord Reaper of Pyke - Head of House Greyjoy',
        wikiSuffix: 'Balon_Greyjoy',
        id: 21
      },
      {
        name: 'Theon Greyjoy',
        description:
          'Ward of the Starks - Heir to the Iron Islands - Son of Balon Greyjoy',
        wikiSuffix: 'Theon_Greyjoy',
        id: 22
      },
      {
        name: 'Yara Greyjoy',
        description: 'Ironborn - Son of Balon Greyjoy',
        wikiSuffix: 'Yara_Greyjoy',
        id: 23
      }
    ],
    id: 5
  },
  {
    name: 'Tyrells',
    wikiSuffix: 'House_Tyrell',
    people: [
      {
        name: 'Margaery (Tyrell) Baratheon',
        description:
          'Wife of Renly Baratheon - Sister of Loras Tyrell - Granddaughter of Olenna Tyrell',
        wikiSuffix: 'Margaery_Tyrell',
        id: 24
      },
      {
        name: 'Loras Tyrell',
        description:
          'Heir to Highgarden - Commander of the Kings Gaurd - Brother of Margaery Baratheon',
        wikiSuffix: 'Loras_Tyrell',
        id: 25
      }
    ],
    id: 6
  },
  {
    name: 'Tullys',
    wikiSuffix: 'House_Tully',
    people: [
      {
        name: 'Catelyn (Tully) Stark',
        description: 'Married to Eddard Stark - Daughter of Hoster Tully',
        wikiSuffix: 'Catelyn_Tully',
        id: 26
      },
      {
        name: 'Lysa (Tully) Arryn',
        description: 'Widow of Jon Arryn - Daughter of Hoster Tully',
        wikiSuffix: 'Lysa_Tully',
        id: 27
      },
      {
        name: 'Edmure Tully',
        description: 'Heir to Riverrun - Son of Hoster Tully',
        wikiSuffix: 'Edmure_Tully',
        id: 28
      },
      {
        name: 'Brynden Tully',
        description:
          'Lord of Riverrun - Head of House Tully - Brother of Hoster Tully',
        wikiSuffix: 'Brynden_Tully',
        id: 29
      }
    ],
    id: 7
  },
  {
    name: 'Redwyne',
    wikiSuffix: 'House_Redwyne',
    people: [
      {
        name: 'Olenna (Redwyne) Tyrell',
        description: 'Matriarch of House Tyrell - Queen of Thorns',
        wikiSuffix: 'Olenna_Tyrell',
        id: 30
      }
    ],
    id: 8
  },
  {
    name: 'Freys',
    wikiSuffix: 'House_Freys',
    people: [
      {
        name: 'Walder Frey',
        description: 'Lord of the Crossing - Head of House Frey',
        wikiSuffix: 'Walder_Frey',
        id: 31
      }
    ],
    id: 9
  },
  {
    name: 'Arryns',
    wikiSuffix: 'House_Arryns',
    people: [
      {
        name: 'Jon Arryn',
        description:
          'Lord of the Eyrie - Head of House Arryn - Warden of the East - Defender of the Vale',
        wikiSuffix: 'Jon_Arryn',
        id: 32
      }
    ],
    id: 10
  },
  {
    name: 'Dothrakis',
    wikiSuffix: 'House_Dothrakis',
    people: [
      {
        name: 'Khal Drogo',
        description:
          'Leader of the Dothraki people - Dothraki Warlord - Married to Daenerys Targaryen',
        wikiSuffix: 'Drogo',
        id: 33
      }
    ],
    id: 11
  }
]

export default gameOfThrones
