import React from 'react'
import Hero from '../hero/hero'
import './home.css'
import illustration1 from '../../assets/male-delivery-guy-riding-scooter.svg'
import illustration2 from '../../assets/delivery-location.svg'
import illustration3 from '../../assets/deliveryman-with-pizza.svg'
import Foods from '../foods/foods'
import NewsLetter from '../newsLetter/newsLetter'
import burger1 from '../../assets/burger1.jpg'
import gyros1 from '../../assets/gyros1.jpg'
import pizza1 from '../../assets/pizza1.jpg'
import pasta1 from '../../assets/pasta1.jpg'

export const foodTypes = [
  {
      name: 'burger',
      img: burger1,
      id: crypto.randomUUID()
  },
  {
      name: 'gyros',
      img: gyros1,
      id: crypto.randomUUID()
  },
  {
      name: 'pizza',
      img: pizza1,
      id: crypto.randomUUID()
  },
  {
      name: 'pasta',
      img: pasta1,
      id: crypto.randomUUID()
  },
]


const home = () => {
  return (
    <div >
      <div className="wrapper">
        <Hero />
        <div className="delivery">
          <div className="titles">
            <span className="deliverySubtitle">Delivery</span>
            <h2 className="deliveryTitle">Always on time for you</h2>
          </div>
          <div className="deliveryInfos">
            <div className="deliveryInfo">
              <img src={illustration1} alt="" className="firstImg"/>
              <h3>Our delivery guy is always on time</h3>
            </div>
            <div className="deliveryInfo">
              <img src={illustration2} alt="" className="secondImg"/>
              <h3>He works very hard</h3>
            </div>
            <div className="deliveryInfo">
              <img src={illustration3} alt="" className="thirdImg"/>
              <h3>He is friendly and social</h3>
            </div>
          </div>
        </div>
        <Foods foodTypes ={foodTypes} />
     <NewsLetter />
      </div>
    </div>
  )
}

export default home
