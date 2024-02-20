import React from 'react'
import Cards from '../Cards/Cards'
import data from '../../assets/json/eshopy.json'


export default function ShopCards() {
    
  return (
    <div className='CardsContainer flex flex-wrap w-[85%] gap-16 justify-center p-10'>
    {data.articles.map((element,index) => (
      <Cards key={index}
            name={element.name}
            price={element.price}
            stock={element.stock}
            images={element.img}
      />
    ))}

</div>
)
}
