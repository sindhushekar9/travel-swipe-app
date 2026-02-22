// src/config/destinations.ts

export interface Destination {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
}

export const FilterCategory = ["Beach", "Mountain", "Adventure", "Heritage", "City"];

export const destinations: Destination[] = [
    {
        id: 1,
        title: "Grand Bend, Canada",
        description: "Grand Bend is a beach town on Lake Huron, famous for its sandy shores, crystal-clear waters, and breathtaking sunsets.",
        image: "/Grandbend1.JPG",
        category: 'Beach'
    },
    {
        id: 2,
        title: "Uttarakhand, India",
        description: "Uttarakhand is a Himalayan paradise, famed for its towering peaks, serene valleys, and challenging trekking routes.",
        image: "/India.JPG",
        category: 'Mountain'
    },
    {
        id: 3,
        title: "Goa, India",
        description: "Goa is a coastal gem, celebrated for its golden beaches, vibrant nightlife, and Portuguese-influenced architecture.",
        image: "/Goa.JPG",
        category: 'Beach'
    },
    {
        id: 4,
        title: "Karnataka, India",
        description: "Karnataka is a green paradise, renowned for its dense forests, abundant wildlife sanctuaries, and rich biodiversity.",
        image: "/Karnataka.jpeg",
        category: 'Adventure'
    },
    {
        id: 5,
        title: "Pushkar, India",
        description: "Pushkar is a vibrant town in Rajasthan, known for its spiritual heritage, colorful festivities, and desert charm.",
        image: "/Pushkar.jpeg",
        category: 'Heritage'
    },
    {
        id: 6,
        title: "Blue Mountain, Canada",
        description: "Blue Mountain is a popular resort town, famed for its ski slopes, hiking trails, and scenic mountain views.",
        image: "/Canada.JPG",
        category: 'Adventure'
    },
    {
        id: 7,
        title: "Kashmir, India",
        description: "Kashmir is a breathtaking region, renowned for its snow-capped mountains, lush valleys, and pristine lakes.",
        image: "/Kashmir4.JPG",
        category: 'Mountain'
    },
    {
        id: 8,
        title: "Bangkok, Thailand",
        description: "Bangkok blends modern skyscrapers with rich heritage, offering riverside cruises, delicious food, and energetic nightlife.",
        image: "/Bangkok.png",
        category: 'Heritage'
    },
    {
        id: 9,
        title: "Toronto, Canada",
        description: "Toronto is Canada's largest city, known for its diverse culture, iconic skyline, and the CN Tower.",
        image: "/City.png",
        category: 'City'
    },
    {
        id: 10,
        title: "Mississauga, Canada",
        description: "Mississauga is a dynamic city, known for its multicultural communities, waterfront parks, and thriving business districts.",
        image: "/City2.JPG",
        category: 'City'
    },
];