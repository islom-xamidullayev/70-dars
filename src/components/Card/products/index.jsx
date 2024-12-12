import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) {
      console.error("ID aniqlanmadi");
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/products/${id}`);
        const result = await res.json();
        setProduct(result.data || result);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const generateStars = (rating = 0) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <span className="text-yellow-500 text-2xl">
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };

  if (!product) return <p className="text-center text-lg text-gray-500">Yuklanmoqda...</p>;

  return (
    <main className="bg-gray-50 py-10">
      <section className="max-w-7xl mx-auto p-5">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">{product.name}</h1>
        <div className="flex flex-col lg:flex-row items-center gap-10 bg-white rounded-lg shadow-lg p-6">
          {/* Product Image */}
          <div className="flex-1">
            <img
              className="w-full h-auto max-w-md lg:max-w-lg mx-auto rounded-lg object-cover shadow-md"
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 text-gray-700 space-y-6">
            <h4 className="text-3xl font-semibold text-red-600">${product.price}</h4>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">Reyting:</span>
              {generateStars(product.rating)}
            </div>
            <p className="text-lg leading-relaxed">{product.description}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
