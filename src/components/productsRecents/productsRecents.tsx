import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import imagenCamisetaPrueba from '../../assets/imgsProductsPrueba/sg-11134201-7rblo-lmubhr7c8hlvac_tn.webp';
import './productsRecents.css';
import Swal from 'sweetalert2';
import Grid from '@mui/material/Grid';
import { urlBase } from './../../defaultvalues';
import axios from 'axios';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

interface Product {
    id_producto: number;
    added_by: string;
    user_id: number;
    product_name: string;
    slug: string;
    unit: string;
    min_qty: number;
    description: string;
    unit_price: number;
    stock_qty: number;
}

const ProductsRecents = () => {
    const [products, setProducts] = React.useState([]);
    

    console.log(products)
    const getProductsRecents = () => {
        axios.get(`${urlBase}/products`)
            .then((response) => {
                console.table(response.data.data); // Accede a la propiedad 'data' que contiene la matriz de productos
                setProducts(response.data.data); // Almacena la matriz de productos en el estado 'products'
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",

                });
            })

    }

   

    React.useEffect(() => {
        getProductsRecents();
        
    }, []);

    const agregarProductoVisto = (product: Product) => {

        const productosGuardados = localStorage.getItem('recentlyViewed') ? JSON.parse(localStorage.getItem('recentlyViewed')!) : [];
        productosGuardados.push(product);

        localStorage.setItem('recentlyViewed', JSON.stringify(productosGuardados));
    }

    return (
        <>
            <Container style={{ height: 'auto', marginBottom: '120px' }} maxWidth="lg">
                <div className="cardsRecent">
                    <h2>Productos agregados recientemente</h2>
                    <span><a href="#">Ver todos</a></span>
                </div>

                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products && products.map((product:Product) => (
                        <Grid item xs={6} sm={4} md={3} key={product.id_producto}>
                            <Card sx={{ maxWidth: 345, height: 400 }}>
                                <Link to={`/detalleProducto/${product.slug}`} style={{ textDecoration: 'none' }} onClick={()=>agregarProductoVisto(product)}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                R
                                            </Avatar>
                                        }

                                        title={product.product_name}
                                        subheader={"$" + product.unit_price}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={imagenCamisetaPrueba}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                    </CardContent>
                                </Link>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </>
    )
}

export default ProductsRecents

