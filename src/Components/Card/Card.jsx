import { FaShoppingCart } from "react-icons/fa";

const Card = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-gray-100 relative">
      {product.aksiya && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
          -{product.aksiya}
        </span>
      )}

      <img src={product.img} alt={product.name} className="w-full h-52 object-contain bg-white rounded-md" />

      <button className="w-full bg-black text-white py-2 mt-2 flex justify-center items-center gap-2 rounded-md">
        <FaShoppingCart /> Add To Cart
      </button>

      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>

      <p className="text-red-500 text-xl font-bold">${product.price}</p>
    </div>
  );
};

export default Card;
