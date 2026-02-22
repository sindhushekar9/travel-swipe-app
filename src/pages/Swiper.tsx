import {
    Box,
    Card,
    CardMedia,
    Typography,
    IconButton,
    Stack,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { destinations, FilterCategory } from "../constants/Destinations";
import { useState } from "react";

export default function SwiperPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleNext = () => setCurrentIndex((prev) => prev + 1);
    const handleReset = () => setCurrentIndex(0);

    const handleCategoryChange = (event: any) => {
        setSelectedCategory(event.target.value);
        setCurrentIndex(0); // reset index when category changes
    };

    const filteredDestinations =
        selectedCategory === "All"
            ? destinations
            : destinations.filter((d) => d.category === selectedCategory);

    if (currentIndex >= filteredDestinations.length) {
        return (
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#f5f5f5",
                    gap: 2,
                }}
            >
                <Typography variant="h6">No more destinations!</Typography>

                <Button variant="contained" onClick={handleReset}>
                    Reset
                </Button>
            </Box>
        );
    }

    const visibleCards = filteredDestinations.slice(currentIndex, currentIndex + 3);

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
            {/* MUI Dropdown Filter aligned to right */}
            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end"}}>
                <FormControl variant="standard" sx={{ minWidth: 120 }} size="small">
                    <Select value={selectedCategory} label="Category" onChange={handleCategoryChange}>
                        <MenuItem value="All">All</MenuItem>
                        {FilterCategory.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            {/* Cards */}
            <Box
                sx={{
                    position: "relative",
                    width: {xs: '100%', sm: '450px'},
                    height: "calc(100vh - 220px)",
                    textAlign: "center",
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
                                    height="350"
                                    image={destination.image}
                                    alt={destination.title}
                                    sx={{ objectFit: "cover", width: "100%" }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
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
                                            onClick={handleNext}
                                            sx={{ bgcolor: "#99999939", "&:hover": { bgcolor: "#99999939" } }}
                                        >
                                            <ThumbDownIcon sx={{ color: "#999999", fontSize: 28 }} />
                                        </IconButton>

                                        <IconButton
                                            onClick={handleNext}
                                            sx={{ bgcolor: "#828ff347", "&:hover": { bgcolor: "#828ff347" } }}
                                        >
                                            <ThumbUpIcon sx={{ color: "#8290f3", fontSize: 28 }} />
                                        </IconButton>
                                    </Stack>
                                </Box>
                            )}
                        </Card>
                    );
                })}
            </Box>
        </Box>
    );
}