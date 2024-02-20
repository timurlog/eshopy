import React from "react";
import Cards from "../Cards/Cards";
import data from "../../assets/json/eshopy.json";

export default function ShopCards() {
  return (
    <section className="flex flex-col items-center">
      <div className="w-[85%] flex justify-between items-center p-10 pb-5">
        <p className="font-[garuteBold] text-[#1B1B1E] text-4xl">Articles</p>
        <p className="font-[garuteRegular] text-[#A9BCD0] text-base">Solde : 444343$</p>
      </div>
      <div className="CardsContainer flex flex-wrap w-[85%] gap-16 justify-center p-10">
        {data.articles.map((element, index) => (
          <Cards
            key={index}
            name={element.name}
            price={element.price}
            stock={element.stock}
            images={element.img}
          />
        ))}
      </div>
    </section>
  );
}
