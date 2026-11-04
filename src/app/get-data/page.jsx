import { headers } from "next/headers";
import { auth } from "../lib/auth";

const GettingData = async () => {
  const { token } = await auth.api.getToken({ headers: await headers() });

  console.log("Token in get-data:", token);

  const res = await fetch("http://localhost:8000/products", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const products = await res.json();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.productName}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{product.productName}</h2>

              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center text-gray-500">No products found!</p>
      )}
    </div>
  );
};

export default GettingData;
