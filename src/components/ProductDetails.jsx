import { useParams } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-12 text-gray-600 dark:text-gray-400">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-w-1 aspect-h-1 w-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.title}
            </h1>
            <p className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 uppercase">
              {product.category}
            </p>
          </div>

          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            ${product.price}
          </p>

          <div className="prose prose-sm text-gray-600 dark:text-gray-300">
            <p>{product.description}</p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <button className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-indigo-600 dark:hover:border-indigo-400">
              <Heart className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
