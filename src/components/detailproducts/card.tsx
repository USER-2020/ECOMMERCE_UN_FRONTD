import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress } from '@mui/material';

export default function MediaControlCard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then((response) => {
                console.table(response.data.data); // Accede a la propiedad 'data' que contiene la matriz de productos
                setProducts(response.data.data); // Almacena la matriz de productos en el estado 'products'
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // @ts-ignore
                setError('Error fetching data. Please try again later.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography variant="body1">{error}</Typography>;
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                {products.map(({ id_producto, product_name, description, unit_price }) => (
                    <Card key={id_producto}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product_name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                            <Box display="flex" justifyContent="flex-end">
                                <Typography variant="body2" color="text.secondary">
                                    {unit_price}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Grid>
        </Grid>
    );
}
