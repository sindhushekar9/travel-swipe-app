import React, { useState } from "react";
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Stack,
} from "@mui/material";

interface Destination {
    id: number;
    name: string;
    description: string;
    image: string;
}

const destinationsData: Destination[] = [
    { id: 1, name: "Santorini, Greece", description: "Whitewashed houses and stunning sunsets.", image: "/images/santorini.jpg" },
    { id: 2, name: "Kyoto, Japan", description: "Ancient temples and cherry blossoms.", image: "/images/kyoto.jpg" },
    { id: 3, name: "Banff, Canada", description: "Mountains, lakes, and outdoor adventures.", image: "/images/banff.jpg" },
    { id: 4, name: "Bali, Indonesia", description: "Beaches, rice terraces, and culture.", image: "/images/bali.jpg" },
    // add more destinations if needed
];

const SWIPE_THRESHOLD = 100; // pixels to consider a swipe

interface DragState {
    startX: number;
    x: number;
    dragging: boolean;
}

export default function Swiper() {
    const [cards, setCards] = useState<Destination[]>(destinationsData);
    const [liked, setLiked] = useState<Destination[]>([]);
    const [disliked, setDisliked] = useState<Destination[]>([]);
    const [drag, setDrag] = useState<DragState>({ startX: 0, x: 0, dragging: false });

    // Mouse drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setDrag({ startX: e.clientX, x: e.clientX, dragging: true });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!drag.dragging) return;
        setDrag(prev => ({ ...prev, x: e.clientX }));
    };

    const handleMouseUp = () => {
        if (!drag.dragging) return;
        const dx = drag.x - drag.startX;

        const newCards = [...cards];
        const top = newCards.pop();
        if (!top) return;

        if (dx > SWIPE_THRESHOLD) {
            setLiked(prev => [...prev, top]); // swipe right → like
        } else if (dx < -SWIPE_THRESHOLD) {
            setDisliked(prev => [...prev, top]); // swipe left → dislike
        } else {
            // if swipe too small, keep card
            newCards.push(top);
        }

        setCards(newCards);
        setDrag({ startX: 0, x: 0, dragging: false });
    };

    // Programmatic buttons
    const swipe = (dir: "left" | "right") => {
        if (cards.length === 0) return;
        const newCards = [...cards];
        const top = newCards.pop();
        if (!top) return;

        if (dir === "right") setLiked(prev => [...prev, top]);
        if (dir === "left") setDisliked(prev => [...prev, top]);
        setCards(newCards);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: 4,
                px: 2,
                overflowY: "auto",
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={(e) =>
                handleMouseDown({
                    clientX: e.touches[0].clientX,
                } as any as React.MouseEvent)
            }
            onTouchMove={(e) =>
                handleMouseMove({
                    clientX: e.touches[0].clientX,
                } as any as React.MouseEvent)
            }
            onTouchEnd={handleMouseUp}
        >
            {/* Card Stack */}
            <Box
                sx={{
                    width: { xs: "100%", sm: "70%", md: "50%" },
                    height: { xs: "60vh", sm: "70vh" },
                    position: "relative",
                }}
            >
                {[...cards].map((dest, index) => {
                    const isTop = index === cards.length - 1;
                    return (
                        <Card
                            key={dest.id}
                            sx={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                cursor: isTop ? "grab" : "default",
                                transform: isTop && drag.dragging ? `translateX(${drag.x - drag.startX}px)` : "translateX(0px)",
                                transition: isTop && drag.dragging ? "none" : "transform 0.3s ease-out",
                                zIndex: index,
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                            onMouseDown={isTop ? handleMouseDown : undefined}
                        >
                            <CardMedia
                                component="img"
                                height="70%"
                                image={dest.image}
                                alt={dest.name}
                                sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">{dest.name}</Typography>
                                <Typography variant="body2">{dest.description}</Typography>
                            </CardContent>
                        </Card>
                    );
                })}
                {cards.length === 0 && (
                    <Typography
                        variant="h6"
                        sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}
                    >
                        No more cards!
                    </Typography>
                )}
            </Box>

            {/* Like / Dislike Buttons */}
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Button variant="contained" color="error" onClick={() => swipe("left")}>Dislike</Button>
                <Button variant="contained" color="success" onClick={() => swipe("right")}>Like</Button>
            </Stack>

            {/* Liked / Disliked Counts */}
            <Typography sx={{ mt: 2 }}>Liked: {liked.length}</Typography>
            <Typography>Disliked: {disliked.length}</Typography>

            {/* Reset Button */}
            {cards.length === 0 && (liked.length > 0 || disliked.length > 0) && (
                <Button sx={{ mt: 2 }} variant="outlined" onClick={() => {
                    setCards(destinationsData);
                    setLiked([]);
                    setDisliked([]);
                }}>
                    Reset
                </Button>
            )}
        </Box>
    );
}