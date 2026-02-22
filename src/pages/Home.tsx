import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <Grid
            container
            sx={{ minHeight: '100vh', p: 3, backgroundColor: '#8290f3' }}
        >
            {/* LEFT COLUMN: first 2 cards stacked */}
            <Grid
                container
                size={{ xs: 12, md: 6 }}
                sx={{
                    flexDirection: 'column',
                    justifyContent: { xs: 'flex-end', md: 'center' },
                    alignItems: 'center',
                    minHeight: 'auto',
                }}
            >
                <Stack spacing={3} sx={{ width: '100%', alignItems: 'center' }}>
                    <Card
                        sx={{
                            backgroundColor: 'transparent',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: '#fff',
                            fontWeight: 'bold',
                            boxShadow: 'none',
                            outline: 0,
                            '& .MuiCardMedia-root': {
                                width: 85, // fixed small logo
                                height: 'auto',
                            },
                        }}
                    >
                        <CardMedia component="img" image="/AppLogo.png" alt="logo" />
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" lineHeight={0}>
                                GoWander
                            </Typography>
                            <Typography variant="h6" fontWeight="bold" lineHeight={3}>
                                Explore. Save. Go
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card
                        sx={{
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            outline: 0,
                            p: 0,
                            maxWidth: 400,
                            width: '100%',
                            '& .MuiCardMedia-root': {
                                width: '100%',
                                height: 'auto',
                            },
                        }}
                    >
                        <CardMedia component="img" image="/HomeBg.svg" alt="background" />
                    </Card>
                </Stack>
            </Grid>

            {/* RIGHT COLUMN: app detail */}
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                    display: 'flex',
                    justifyContent: { xs: 'flex-start', md: 'center' }
                }}
            >
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        p: 2,
                        boxShadow: '2px 2px 15px 2px rgba(0,0,0,0.36)',
                        borderRadius: 2,
                    }}
                >
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
            </Grid>
        </Grid>
    );
}