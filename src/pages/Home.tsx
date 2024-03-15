import NavBar from "../components/navbar/NavBar";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';

function Home() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <Container>
            <h1>Home develop!!</h1>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;