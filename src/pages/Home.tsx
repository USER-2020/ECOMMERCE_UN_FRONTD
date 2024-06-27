import Header from '../components/header/header';
import ProductsRecents from '../components/productsRecents/productsRecents';
import ProductsViewRecents from '../components/productsViewRecents/ProductsViewRecents';


function Home() {
  return (
    <div >
      <Header />
      <ProductsViewRecents />
      <ProductsRecents />
    </div>
  );
}

export default Home;