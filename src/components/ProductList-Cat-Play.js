import ProductListTag from './ProductListTag'
import ProductListSubHero from './ProductListSubHero'
import ProductListTitle from './ProductListTitle'
import ProductCard from './ProductCard'
import '../Styles/ProductList.scss'
import ProductDetails from './ProductDetails'

import CAT_PRODUCT from '../product-local-json/cat-product.json'
import { NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductListCatPlay = (tag)=>{
    const catPlay = CAT_PRODUCT["Cat-Play"];
    console.log(catPlay)

    return(
    <>
    <div className="AG-productList-container">
        <div className="AG-productTags">
        <Link to="/productlist/cat/food"><ProductListTag >貓貓美食</ProductListTag></Link>
        <Link to="/productlist/cat"><ProductListTag >貓貓玩具</ProductListTag></Link>
        <Link to="/productlist/cat/toilet"><ProductListTag >貓貓廁所</ProductListTag></Link>
        <Link to="/productlist/cat/health"><ProductListTag >貓貓保健</ProductListTag></Link>
        <Link to="/productlist/cat/outdoor"><ProductListTag >貓貓出遊</ProductListTag></Link>
        </div>
            <ProductListSubHero />
            <ProductListTitle />
        <div className='AG-productCards'>
        {catPlay.map((item) => {
            return (
                <>
                <ProductCard ProductImg={item.URL} ProductTitle={item.title} ProductPrice={item.price} />
                </>
        )})}
        </div>
    </div>
    </>
    )
}

        
        

export default ProductListCatPlay;