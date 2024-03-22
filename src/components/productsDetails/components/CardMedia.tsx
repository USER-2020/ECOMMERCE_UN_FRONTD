import CardMedia from '@mui/material/CardMedia';

export default function CardImage() {

    return (
        <CardMedia
            component="img"
            sx={{ width: 300 }}
            image="https://www.ceupe.com/images/easyblog_articles/3461/b2ap3_amp_productos-en-carrito-de-compra.jpg"
            alt="Live from space album cover"
        />);
}