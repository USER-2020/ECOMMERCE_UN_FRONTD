import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardImage from './components/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaControlCard() {

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Card sx={{ display: 'flex' }}>
                    <CardImage/>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Typography component="div" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller Caracterisitcas del producto 
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
}