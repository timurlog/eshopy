import React from "react";


export default function Cards(props) {

  //construction of imgCard for path(located in the json)
  const imagePath = new URL(
    `../../assets/image/${props.images}`,
    import.meta.url
  ).href;

  
  // converting the stock and price as numbers for calculations
  const stock = parseInt(props.stock, 10);
  const priceAsNumber = parseFloat(props.price.replace("US$", ""));

  return (
    <div className="card bg-[#A9BCD0] w-[21rem] h-[22rem] p-7 text-black flex flex-col gap-2 justify-end mb-4 shadow-cardshadow transition-transform duration-500">
      <div className=" w-[100%] flex justify-center items-center p-4">
       {/* Displaying the image of the product */}
        <img
          className=" w-[60%] hover:scale-150 transition-transform duration-700"
          src={imagePath}
          alt=""
        />
      </div>
         {/* Displaying the name of the product */}
      <div className=" flex justify-between">
        <h2 className=" text-[0.9rem] font-[garuteBold] w-[70%] text-[#373F51]">
          {props.name}
        </h2>
         {/* Displaying the price of the product */}
        <p className=" text-[0.8rem] text-[#1e4e55] font-[garuteSemiBold]">
          {props.price}
        </p>
      </div>

      <div className=" flex justify-between items-center">
       {/* Displaying the stock status of the product */}
        <p
          className={`text-[1rem] font-[garuteSemiBold] ${
            stock === 0
              ? "text-red-500"
              : stock === 1
              ? "text-orange-500 animate-blink"
              : "text-[#58A4B0]"
          }`}
        >  {/* condition to display the stock quantity  */}
          {props.stock > 0 ? `Stock : ${props.stock}` : "Épuisé"}
        </p>

           {/* Buy button that appears if the product is in stock and the user has enough balance */}
        {stock > 0 && props.solde >= priceAsNumber ? (
          <button
            onClick={() =>
              props.onBuy({
                name: props.name,
                price: props.price,
                stock: props.stock,
                images: props.images,
              })
            }
            className="w-[110px] bg-black h-[40px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#58A4B0] before:to-[#58A4B0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 font-[garuteRegular] text-[#fff]"
          >
            Buy
          </button>
        ) : null}
      </div>
    </div>
  );
}
