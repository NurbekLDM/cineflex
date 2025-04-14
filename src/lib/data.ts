
export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  voteAverage: number;
  genres: string[];
  runtime: number;
  trailerUrl: string;
  screenshots: string[];
  cast: {
    id: number;
    name: string;
    character: string;
    profilePath: string;
  }[];
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    posterPath: "https://images.unsplash.com/photo-1579566346927-c68383817a25?q=80&w=2070&auto=format&fit=crop",
    backdropPath: "https://images.unsplash.com/photo-1518134346374-184f9d21cea2?q=80&w=2069&auto=format&fit=crop",
    releaseDate: "2024-03-01",
    voteAverage: 8.5,
    genres: ["Science Fiction", "Adventure"],
    runtime: 166,
    trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
    screenshots: [
      "https://images.unsplash.com/photo-1517775559260-f3a7196c0308?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545486332-9e0999ec7b79?q=80&w=1923&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop"
    ],
    cast: [
      {
        id: 1,
        name: "Timothée Chalamet",
        character: "Paul Atreides",
        profilePath: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
      },
      {
        id: 2,
        name: "Zendaya",
        character: "Chani",
        profilePath: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 3,
        name: "Rebecca Ferguson",
        character: "Lady Jessica",
        profilePath: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
      },
      {
        id: 4,
        name: "Josh Brolin",
        character: "Gurney Halleck",
        profilePath: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 2,
    title: "The Batman",
    overview: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    posterPath: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1974&auto=format&fit=crop",
    backdropPath: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=2069&auto=format&fit=crop",
    releaseDate: "2022-03-04",
    voteAverage: 7.8,
    genres: ["Action", "Crime", "Drama"],
    runtime: 176,
    trailerUrl: "https://www.youtube.com/embed/mqqft2x_Aa4",
    screenshots: [
      "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?q=80&w=1936&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?q=80&w=1965&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612036782180-6f0822045d55?q=80&w=2070&auto=format&fit=crop"
    ],
    cast: [
      {
        id: 5,
        name: "Robert Pattinson",
        character: "Bruce Wayne / Batman",
        profilePath: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1974&auto=format&fit=crop"
      },
      {
        id: 6,
        name: "Zoë Kravitz",
        character: "Selina Kyle / Catwoman",
        profilePath: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=1854&auto=format&fit=crop"
      },
      {
        id: 7,
        name: "Paul Dano",
        character: "Edward Nashton / The Riddler",
        profilePath: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 3,
    title: "Everything Everywhere All at Once",
    overview: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
    posterPath: "https://images.unsplash.com/photo-1603475516744-1d24cc296868?q=80&w=2071&auto=format&fit=crop",
    backdropPath: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    releaseDate: "2022-03-25",
    voteAverage: 8.9,
    genres: ["Action", "Adventure", "Comedy"],
    runtime: 139,
    trailerUrl: "https://www.youtube.com/embed/wxN1T1uxQ2g",
    screenshots: [
      "https://images.unsplash.com/photo-1460904577954-8fadb262612c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614344863073-33658c468096?q=80&w=2069&auto=format&fit=crop"
    ],
    cast: [
      {
        id: 8,
        name: "Michelle Yeoh",
        character: "Evelyn Wang",
        profilePath: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop"
      },
      {
        id: 9,
        name: "Ke Huy Quan",
        character: "Waymond Wang",
        profilePath: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop"
      },
      {
        id: 10,
        name: "Jamie Lee Curtis",
        character: "Deirdre Beaubeirdre",
        profilePath: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 4,
    title: "Oppenheimer",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    posterPath: "https://images.unsplash.com/photo-1614521084980-811d04f6c6cb?q=80&w=1974&auto=format&fit=crop",
    backdropPath: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    releaseDate: "2023-07-21",
    voteAverage: 8.4,
    genres: ["Biography", "Drama", "History"],
    runtime: 180,
    trailerUrl: "https://www.youtube.com/embed/bK6ldnjE3Y0",
    screenshots: [
      "https://images.unsplash.com/photo-1602001373522-9fb6195d5a41?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?q=80&w=1915&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526285759704-3dce2b232c2f?q=80&w=1776&auto=format&fit=crop"
    ],
    cast: [
      {
        id: 11,
        name: "Cillian Murphy",
        character: "J. Robert Oppenheimer",
        profilePath: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop"
      },
      {
        id: 12,
        name: "Emily Blunt",
        character: "Katherine Oppenheimer",
        profilePath: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop"
      },
      {
        id: 13,
        name: "Matt Damon",
        character: "Leslie Groves",
        profilePath: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 5,
    title: "Top Gun: Maverick",
    overview: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot.",
    posterPath: "https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?q=80&w=1974&auto=format&fit=crop",
    backdropPath: "https://images.unsplash.com/photo-1567450125296-a0d6f732963d?q=80&w=2070&auto=format&fit=crop",
    releaseDate: "2022-05-27",
    voteAverage: 8.3,
    genres: ["Action", "Drama"],
    runtime: 130,
    trailerUrl: "https://www.youtube.com/embed/qSqVVswa420",
    screenshots: [
      "https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=2012&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop"
    ],
    cast: [
      {
        id: 14,
        name: "Tom Cruise",
        character: "Captain Pete 'Maverick' Mitchell",
        profilePath: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 15,
        name: "Jennifer Connelly",
        character: "Penny Benjamin",
        profilePath: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1889&auto=format&fit=crop"
      },
      {
        id: 16,
        name: "Miles Teller",
        character: "Lt. Bradley 'Rooster' Bradshaw",
        profilePath: "https://images.unsplash.com/photo-1557002665-c552e1901c7a?q=80&w=1974&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 6,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterPath: "https://images.unsplash.com/photo-1534251623184-22cb7e61c526?q=80&w=1887&auto=format&fit=crop",
    backdropPath: "https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=2066&auto=format&fit=crop",
    releaseDate: "2014-11-07",
    voteAverage: 8.6,
    genres: ["Adventure", "Drama", "Science Fiction"],
    runtime: 169,
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    screenshots: [
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2013&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1822&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    ],
    cast: [
      {
        id: 17,
        name: "Matthew McConaughey",
        character: "Cooper",
        profilePath: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=1836&auto=format&fit=crop"
      },
      {
        id: 18,
        name: "Anne Hathaway",
        character: "Brand",
        profilePath: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
      },
      {
        id: 19,
        name: "Jessica Chastain",
        character: "Murph (adult)",
        profilePath: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
      }
    ]
  }
];

export const genres = [
  "Action", 
  "Adventure", 
  "Animation", 
  "Biography", 
  "Comedy", 
  "Crime", 
  "Documentary", 
  "Drama", 
  "Family", 
  "Fantasy", 
  "History",
  "Horror", 
  "Music", 
  "Mystery", 
  "Romance", 
  "Science Fiction", 
  "Thriller", 
  "War", 
  "Western"
];

export const trending = [1, 4, 2];
