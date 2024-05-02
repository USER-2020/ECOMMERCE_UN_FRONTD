import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function MediaControlCard() {
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then((response) => {
                console.table(response.data);
                setProduct(response.data);
            });
    }, []);
    
    return  (
        <Grid container >
            {/* <Grid item xs={12}>
                {product && product.map((product) => (
                    <Card key={product.id_producto}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.product_name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Box display="flex" justifyContent="flex-end">
                                <Typography variant="body2" color="text.secondary">
                                    {product.unit_price}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Grid> */}
        </Grid >
    ) ;
 }