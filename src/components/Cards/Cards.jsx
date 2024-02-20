import React from "react";
import data from "../../assets/json/eshopy.json";

export default function Cards(props) {
  const imagePath = new URL(
    `../../assets/image/${props.images}`,
    import.meta.url
  ).href;

  const stock = parseInt(props.stock, 10);

  return (
    <div className="card bg-[#A9BCD0] w-[21rem] h-[22rem] p-7 text-black flex flex-col gap-2 justify-end mb-4 shadow-cardshadow transition-transform duration-500">
      <div className=" w-[100%] flex justify-center items-center p-4">
        <img
          className=" w-[60%] hover:scale-150 transition-transform duration-700"
          src={imagePath}
          alt=""
        />
      </div>

      <div className=" flex justify-between">
        <h2 className=" text-[0.9rem] font-[garuteBold] w-[70%] text-[#373F51]">
          {props.name}
        </h2>
        <p className=" text-[0.8rem] text-[#1e4e55] font-[garuteSemiBold]">
          {props.price}
        </p>
      </div>

      <div className=" flex justify-between items-center">
        <p
          className={`text-[1rem] font-[garuteSemiBold] ${
            stock === 0
              ? "text-red-500"
              : stock === 1
              ? "text-orange-500 animate-blink"
              : "text-[#58A4B0]"
          }`}
        >
          {props.stock > 0 ? `Stock : ${props.stock}` : "Épuisé"}
        </p>

        {stock > 0 && (
          <button  onClick={() => props.onBuy({
                  name: props.name,
                  price: props.price,
                  stock: props.stock,
                  images: props.images
                })}
           className="w-[110px] bg-black h-[40px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#58A4B0] before:to-[#58A4B0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 font-[garuteRegular] text-[#fff]">
            Buy
          </button>
        )}
      </div>
    </div>
  );
}
