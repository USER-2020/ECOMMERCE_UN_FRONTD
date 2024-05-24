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
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';


const ProductsViewRecents = () => {
  const [productsViewedResent, setProductsViewedResent] = React.useState([]);

  const getProductsViewedResent = () => {
    const productosGuardados = localStorage.getItem('recentlyViewed') ? JSON.parse(localStorage.getItem('recentlyViewed')!) : [];
    setProductsViewedResent(productosGuardados);
    console.log(productosGuardados);
  }

  React.useEffect(() => {
    getProductsViewedResent();
  }, []);


  /* TODO: cambios en estructura */
  return (

    <>
      {productsViewedResent.length > 0 ? (
        <Container style={{ height: 'auto', marginBottom: '120px' }} maxWidth="lg">
          <div className="cardsRecent">
            <h2>Productos vistos recientemente</h2>
            <span><a href="#">Ver todos</a></span>
          </div>

          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {productsViewedResent && productsViewedResent.map(({ id_producto, name, description, unit_price, slug }) => (
              <Grid item xs={6} sm={4} md={3} key={id_producto}>
                <Card sx={{ maxWidth: 345, height: 400 }}>
                  <Link to={`/detalleProducto/${slug}`} style={{ textDecoration: 'none' }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }

                      title={name}
                      subheader={"$" + unit_price}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={imagenCamisetaPrueba}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {description}
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
      ) : null}
    </>

  )
}


export default ProductsViewRecents
