import imgBannerPrueba from '../assets/imgsPrueba/21Dic_Banner_Tienda_Motorysa_AlianzaBanco-2.webp'
import ProductsRecents from '../components/productsRecents/productsRecents';
import ProductsViewRecents from '../components/productsViewRecents/ProductsViewRecents';

function Home() {
  return (
    <div >
      <img src={imgBannerPrueba} alt="banner prueba" style={{ width: '100%' }} />
      <ProductsViewRecents/>
      <ProductsRecents />
    </div>
  );
}

export default Home;