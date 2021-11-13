import ProductListTag from './ProductListTag'
import { useParams } from 'react-router'
import '../Styles/ProductDetails.scss'
import '../Styles/ProductList.scss'
import '../Styles/ProductListTag.scss'
import { FaRegHeart } from 'react-icons/fa'
import ProductCard from './ProductCard'
import ProductListTitle from './ProductListTitle'
import CAT_PRODUCT from '../product-local-json/cat-product.json'
import '../Styles/ProductCard.scss'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { useState } from 'react'
import styled from 'styled-components'
import relatedProduct from '../product-local-json/you-may-also-like.json'

const StyledImg = styled.img`
  border: ${(props) => props.border};
`;

const DisplayHeartItem=styled.div`
position:absolute;
top:10%;
right:10px;
margin-right:20px;
background-color:#fff;
width:200px;
height:200px;
box-shadow:0px 4px 10px rgba(0, 0, 0, 0.45);
z-index:1031;
`
const HoverImg = styled.img`
width:100px;
`

const HeartWrap=styled.div`
padding:10px;
display:flex;
flex-direction:column;
align-items: center;
justify-content: space-between;
`

const HeartTitle=styled.div`
  font-size:14px;
  margin:10px auto 5px auto;
`

const HeartPrice=styled.div`
  font-size:10px;
  margin-top:5px;
  color:#646464;
`

const HeartBtn=styled.a`
  font-size:10px;
  margin-bottom:-5px;
  padding:3px;
  border-radius:50%;
  margin-right:5px;
  margin-left:auto;
  text-decoration:none;
`

const catRelatedData = relatedProduct['Cat-Related']

const ProductDetailsCP18 = ({ ID, ProductImg, ProductTitle, ProductPrice }) => {
  const [{ basket }, dispatch] = useStateValue()
  const cp18Data = CAT_PRODUCT['Cat-Play-2'][1]
  const [bigPic, setBigPic] = useState(`${cp18Data.pics[0]}`)
  // console.log(cp18Data)
  const [border, setBorder] = useState('AG-pic1')
  const [isDisplay,setIsDisplay]= useState(false)

  const handleImgClick = (e) => {
    setBorder(e.target.id)
    setBigPic(e.target.src)
  }

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: cp18Data.ID,
        image: cp18Data.URL,
        title: cp18Data.title,
        price: cp18Data.price,
      }
    })
    setIsDisplay(true)
  }

  const addToHeart = () => {
    dispatch({
      type: 'ADD_TO_HEART',
      item: {
        id: cp18Data.ID,
        image: cp18Data.URL,
        title: cp18Data.title,
        price: cp18Data.price,
      },
    })
  }

  return (
    <>
    { isDisplay &&
    <DisplayHeartItem>
    <HeartWrap>
    <HeartBtn onClick={()=>setIsDisplay(false)}>X</HeartBtn>
      <HoverImg src={cp18Data.URL}/>
      <HeartTitle>{cp18Data.title}</HeartTitle>
      <HeartPrice>1 x ${cp18Data.price}</HeartPrice>
    </HeartWrap>
    </DisplayHeartItem>}

      <div className="AG-productList-container">
        <div className="AG-productTags">
        <Link to="/productlist/cat/food"><ProductListTag >貓貓美食</ProductListTag></Link>
        <Link to="/productlist/cat"><ProductListTag >貓貓玩具</ProductListTag></Link>
        <Link to="/productlist/cat/toilet"><ProductListTag >貓貓廁所</ProductListTag></Link>
        <Link to="/productlist/cat/health"><ProductListTag >貓貓保健</ProductListTag></Link>
        <Link to="/productlist/cat/outdoor"><ProductListTag >貓貓出遊</ProductListTag></Link>
        </div>
        <div className="AG-addToCartContainer">
          <div className="AG-fourPics">
            <StyledImg
              id="AG-pic1"
              src={`${cp18Data.pics[0]}`}
              border={border === 'AG-pic1' ? '#939597 solid 3px' : 'none'}
              onClick={handleImgClick}
            ></StyledImg>
            <StyledImg
              id="AG-pic2"
              src={`${cp18Data.pics[1]}`}
              border={border === 'AG-pic2' ? '#939597 solid 3px' : 'none'}
              onClick={handleImgClick}
            ></StyledImg>
            <StyledImg
              id="AG-pic3"
              src={`${cp18Data.pics[2]}`}
              border={border === 'AG-pic3' ? '#939597 solid 3px' : 'none'}
              onClick={handleImgClick}
            ></StyledImg>
            <StyledImg
              id="AG-pic4"
              src={`${cp18Data.pics[3]}`}
              border={border === 'AG-pic4' ? '#939597 solid 3px' : 'none'}
              onClick={handleImgClick}
            ></StyledImg>
          </div>
          <div className="AG-bigPic">
            <img src={bigPic}></img>
          </div>
          <div className="AG-textAndBtnArea">
            <div className="AG-productTitle">{cp18Data.title}</div>
            <div className="AG-promo">
              <p>
                至09/10 00:00截止 全店，奴你99！全館滿額現折 全店，訂單滿NT$
                999免運費
              </p>
            </div>
            <div className="AG-productTitle">NT$ {cp18Data.price}</div>
            <label>數量</label>
            <div className="AG-numberSelect">
              <a>-</a>
              <a className="AG-selectedNumber">1</a>
              <a>+</a>
            </div>
            <a className="AG-toCart" onClick={addToBasket}>
              加入購物車
            </a>
            <a className="AG-toList" onClick={addToHeart}>
              <FaRegHeart /> 加入追蹤清單
            </a>
          </div>
        </div>
        <div className="AG-toggleTitleContainer">
          <a className="AG-toggleTitle">商品描述</a>
          <a className="AG-toggleTitle">送貨及付款方式</a>
        </div>
        <div className="AG-detailsTextContainer">
          <div className="AG-descriptionWrap">
            <div>
              <div className="AG-des-pay-bigTitle">{cp18Data.details[0]}</div>
              <div className="AG-des-pay-bigText">{cp18Data.details[1]}</div>
            </div>
            <div>
              <div className="AG-des-pay-title">尺寸</div>
              <div className="AG-des-pay-text">{cp18Data.details[2]}</div>
              <div className="AG-des-pay-title">重量</div>
              <div className="AG-des-pay-text">{cp18Data.details[3]}</div>
              <div className="AG-des-pay-title">材質</div>
              <div className="AG-des-pay-text">{cp18Data.details[4]}</div>
            </div>
          </div>
          <div className="AG-payAndShipWrap">
            <div>
              <div className="AG-des-pay-bigTitle">送貨方式</div>
              <div className="AG-des-pay-bigText">
                宅配<br></br>
                門市取貨 ( 取貨點 : 台中水湳店)<br></br>
                即時付款 ( 僅提供現場客人使用)
              </div>
            </div>

            <div>
              <div className="AG-des-pay-bigTitle">付款方式</div>
              <div className="AG-des-pay-bigText">
                信用卡<br></br>
                LINE Pay<br></br>
                ATM<br></br>
                即時付款
              </div>
            </div>
          </div>
        </div>

        <div className="AG-productBigPics">
          <div id="AG-bigPic1" className="AG-bigPic">
            <img src={`${cp18Data.bigPics[0]}`} />
          </div>
          <div id="AG-bigPic2" className="AG-bigPic">
            <img src={`${cp18Data.bigPics[1]}`} />
          </div>
          <div id="AG-bigPic3" className="AG-bigPic">
            <img src={`${cp18Data.bigPics[2]}`} />
          </div>
          <div id="AG-bigPic4" className="AG-bigPic">
            <img src={`${cp18Data.bigPics[3]}`} />
          </div>
          <div id="AG-bigPic5" className="AG-bigPic">
            <img src={`${cp18Data.bigPics[4]}`} />
          </div>
        </div>
      </div>
      <ProductListTitle subTitle={'相關商品'} engTitle={'You may also like'} />
      <div className="AG-productCards">
        {catRelatedData.map((item) => {
          return (
            <>
              <ProductCard
                ID={item.ID}
                ProductImg={item.URL}
                ProductTitle={item.title}
                ProductPrice={item.price}
              />
            </>
          )
        })}
      </div>
    </>
  )
}

export default ProductDetailsCP18
