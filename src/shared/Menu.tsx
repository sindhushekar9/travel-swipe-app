import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <Box position="fixed" width="100%" left="0" bottom="0" zIndex="3">
            <BottomNavigation showLabels>
                <BottomNavigationAction label="Home" value="/" component={NavLink} to="/" icon={<HomeIcon />} />
                <BottomNavigationAction label="Destinations" value="/destinations" component={NavLink} to="/destinations" icon={<ViewCarouselIcon />} />
                <BottomNavigationAction label="Profile" value="/profile" component={NavLink} to="/profile" icon={<PersonIcon />} />
            </BottomNavigation>
        </Box>
    );
}