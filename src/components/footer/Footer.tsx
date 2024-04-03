import Typography from '@mui/material/Typography';

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <div className="footer-column">
        <div className="footer-section">
          <Typography variant="h6">Estudiantes UN</Typography>
          <Typography variant="body2">Contenido</Typography>
        </div>
        <div className="footer-section">
          <Typography variant="h6">Empresas TI</Typography>
          <Typography variant="body2">Contenido</Typography>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-section">
          <Typography variant="h6">Retencion de Talento</Typography>
          <Typography variant="body2">Ofertas</Typography>
        </div>
        <div className="footer-section">
          <Typography variant="h6">Emprendimientos</Typography>
          <Typography variant="body2">Ver tiendas 2</Typography>
        </div>
      </div>
      <Typography variant="body2" color="inherit" className="footer-copyright">
        &copy; GAIA Web DevOps, {currentYear} All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
