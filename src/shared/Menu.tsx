import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <Box position="fixed" width="100%" left="0" bottom="0">
            <BottomNavigation showLabels>
                <BottomNavigationAction label="Home" value="/" component={NavLink} to="/" icon={<HomeIcon />} />
                <BottomNavigationAction label="Favorites" value="/liked" component={NavLink} to="/liked" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Profile" value="/profile" component={NavLink} to="/profile" icon={<PersonIcon />} />
            </BottomNavigation>
        </Box>
    );
}