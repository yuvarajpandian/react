import React from 'react'

import {Link} from 'react-router-dom'
import  './foods.css'

const foods = (props) => {
  return (
    <section id="foods" className="container">
    <div className="wrapper">
      <h4 className="subtitle">What we offer</h4>
      <h2 className="title">Best meals in the city</h2>
      <div className="foods">
        {props.foodTypes.map((foodType) => (
          <Link to={`/foods/${foodType.name}`} key={foodType.id} className="food">
            <h4>{foodType.name}</h4>
            <div className="imgContainer">
              <img src={foodType.img} alt={foodType.name}/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  )
}

export default foods
