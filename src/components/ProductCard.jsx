import { Link } from "react-router-dom";

export default function ProductCard({ id, title, price, image, category }) {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
          <img
            src={image}
            alt={title}
            className="h-64 w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="p-4">
          <span className="text-sm text-indigo-600 dark:text-indigo-400 uppercase">
            {category}
          </span>
          <h3 className="mt-1 text-lg font-medium text-gray-900 dark:text-white truncate">
            {title}
          </h3>
          <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
}
