import Catagories from './HomeComponents/Categories'
import HeroComponent from './HomeComponents/HeroComponent'
import TrendyProducts from './HomeComponents/TrendyProducts.jsx'
import ComponentFour from './HomeComponents/ComponentFour.jsx'
import BestSellers from './HomeComponents/BestSellers.jsx'
import TopSale from './HomeComponents/TopSale.jsx'
import Feedback from './HomeComponents/Feedback.jsx'
import FinalComponent from './HomeComponents/FinalComponent.jsx'

function Home() {
  return <>
    <HeroComponent />
    <Catagories />
    <TrendyProducts />
    <ComponentFour />
    <BestSellers />
    <TopSale />
    <Feedback />
    <FinalComponent />
  </>
}

export default Home
