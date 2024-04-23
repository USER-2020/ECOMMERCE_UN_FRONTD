import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaControlCard() {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card variant="outlined" sx={{ display: 'flex', mx: 10, mt: 9, width: '100%', border: 0 }}>
                    <CardMedia
                        component="img" sx={{ width: 500 }} image="https://www.ceupe.com/images/easyblog_articles/3461/b2ap3_amp_productos-en-carrito-de-compra.jpg"
                        alt="Live from space album cover"/>                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Nombre del producto
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                             magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </Typography>

                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
}