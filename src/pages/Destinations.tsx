import {
    Box,
    Card,
    CardMedia,
    Typography,
    IconButton,
    Stack,
    Button,
    FormControl,
    Select,
    MenuItem,
    Drawer,
} from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from '@mui/icons-material/Close';
import { destinations, FilterCategory } from "../constants/Destinations";
import { useState } from "react";

export default function Destinations() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [liked, setLiked] = useState<any[]>([]);
    const [disliked, setDisliked] = useState<any[]>([]);
    const [open, setOpen] = useState(false);

    // Handle rating
    const handleNext = (destination: any, isLiked: boolean) => {
        if (isLiked) {
            setLiked((prev) => [...prev, destination]);
        } else {
            setDisliked((prev) => [...prev, destination]);
        }
    };

    // Handle reset
    const handleReset = () => {
        setLiked([]);
        setDisliked([]);
        setSelectedCategory("All");
    };

    // Handle category change
    const handleCategoryChange = (event: any) => {
        setSelectedCategory(event.target.value);
    };

    // IDs of rated destinations
    const ratedIds = new Set([...liked.map((d) => d.id), ...disliked.map((d) => d.id)]);

    // Filter destinations based on category and unrated
    const filteredDestinations = destinations
        .filter((d) => (selectedCategory === "All" ? true : d.category === selectedCategory))
        .filter((d) => !ratedIds.has(d.id));

    const visibleCards = filteredDestinations.slice(0, 3); // Show top 3
    const isFinished = filteredDestinations.length === 0;

    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 152px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#f5f5f5",
                p: 3,
                mt: 8,
                gap: 3,
            }}
        >
            {/* Top bar with filter and summary button */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 450,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <FormControl variant="standard" size="small">
                    <Select value={selectedCategory} onChange={handleCategoryChange}>
                        <MenuItem value="All">All</MenuItem>
                        {FilterCategory.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <IconButton sx={{backgroundColor: '#eeeeee'}}
                    onClick={() => setOpen(true)}>
                    <MoreVertIcon sx={{fontSize: 25}}/>
                </IconButton>
            </Box>

            {/* Cards or finished state */}
            {isFinished ? (
                <Box textAlign="center" mt={4}>
                    <Typography variant="h6" gutterBottom>
                        No more destinations!
                    </Typography>

                    <Button variant="contained" onClick={handleReset}>
                        Reset
                    </Button>
                </Box>
            ) : (
                <Box
                    sx={{
                        position: "relative",
                        width: { xs: "100%", sm: "450px" },
                        height: "calc(100vh - 220px)",
                        textAlign: "center",
                        overflow: "auto"
                    }}
                >
                    {visibleCards.map((destination, index) => {
                        const isTopCard = index === 0;

                        return (
                            <Card
                                key={destination.id}
                                sx={{
                                    position: "absolute",
                                    width: "100%",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 4,
                                    transform: `scale(${1 - index * 0.05})`,
                                    top: `${index * 10}px`,
                                    zIndex: visibleCards.length - index,
                                    transition: "all 0.3s ease",
                                    bgcolor: "#fff",
                                }}
                            >
                                {/* Header */}
                                <Box sx={{ py: 1, px: 2 }}>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        {destination.title}
                                    </Typography>
                                </Box>

                                {/* Image */}
                                <Box sx={{ position: "relative" }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={destination.image}
                                        alt={destination.title}
                                        sx={{ objectFit: "cover", width: "100%" }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            bgcolor: "rgba(0,0,0,0.6)",
                                            color: "#fff",
                                            p: 2,
                                        }}
                                    >
                                        <Typography variant="body2">{destination.description}</Typography>
                                    </Box>
                                </Box>

                                {/* Footer */}
                                {isTopCard && (
                                    <Box sx={{ p: 1 }}>
                                        <Stack direction="row" justifyContent="center" spacing={3}>
                                            <IconButton
                                                onClick={() => handleNext(destination, false)}
                                                sx={{ bgcolor: "#99999939", "&:hover": { bgcolor: "#99999939" } }}
                                            >
                                                <ThumbDownIcon sx={{ color: "#828ff3b9", fontSize: 23 }} />
                                            </IconButton>

                                            <IconButton
                                                onClick={() => handleNext(destination, true)}
                                                sx={{ bgcolor: "#99999939", "&:hover": { bgcolor: "#99999939" } }}
                                            >
                                                <ThumbUpIcon sx={{ color: "#828ff3b9", fontSize: 23 }} />
                                            </IconButton>
                                        </Stack>
                                    </Box>
                                )}
                            </Card>
                        );
                    })}
                </Box>
            )}

            {/* Summary Drawer */}
            <Drawer
                anchor="bottom"
                open={open}
                onClose={() => setOpen(false)}
                slotProps={{
                    paper: {
                        sx: {
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            width: { xs: "100%", sm: "30%" },
                            margin: { xs: 0, sm: "0 auto" },
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxHeight: "80vh",
                        overflowY: "auto",
                        p: 3,
                        boxSizing: "border-box",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2,
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold">
                            Rating Summary
                        </Typography>
                        <IconButton onClick={() => setOpen(false)} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Box>


                    <Stack>
                        <Box>
                            <Typography>Liked ({liked.length})</Typography>
                            <ul>
                                {liked.map((item) => (
                                    <Typography key={item.id} variant="body2">
                                        <li>{item.title}</li>
                                    </Typography>
                                ))}
                            </ul>
                        </Box>

                        <Box>
                            <Typography>Disliked ({disliked.length})</Typography>
                            <ul>
                                {disliked.map((item) => (
                                    <Typography key={item.id} variant="body2">
                                        <li>{item.title}</li>
                                    </Typography>
                                ))}
                            </ul>
                        </Box>
                    </Stack>
                </Box>
            </Drawer>
        </Box>
    );
}