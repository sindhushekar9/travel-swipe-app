import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { NavLink } from "react-router-dom";
import './Pages.scss';

export default function Home() {
    return (
        <div className="container-home">
            <Card className='app-intro'>
                <CardMedia
                    component="img"
                    image="/AppLogo.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontWeight="bold" lineHeight="0">
                        GoWander
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" fontWeight="bold" lineHeight="3">
                        Explore. Save. Go
                    </Typography>
                </CardContent>
            </Card>
            <Card className='app-bg'>
                <CardMedia
                    component="img"
                    image="/HomeBg.svg"
                    alt="green iguana"
                />
            </Card>
            <Card className='app-detail'>
                <CardContent>
                    <Typography variant="subtitle1">
                        Explore stunning destinations through real travel photos.
                        Swipe to like the places that inspire your next adventure.
                        Build your travel wishlist in seconds.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button component={NavLink} to="/swiper" variant="contained">
                        Get Started
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}