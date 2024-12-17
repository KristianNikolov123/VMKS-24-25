import React, { useState } from 'react';

const Products = () => {
  // Initial product list with sample data
  const [products, setProducts] = useState([
    { id: 1, name: 'Product1', expiry: '2024-07-01' },
    { id: 2, name: 'Product2', expiry: '2024-06-30' },
    { id: 3, name: 'Product3', expiry: '2024-08-15' },
    { id: 4, name: 'Product4', expiry: '2024-07-10' },
    { id: 5, name: 'Product5', expiry: '2024-07-25' },
    { id: 6, name: 'Product6', expiry: '2024-06-28' },
    { id: 7, name: 'Product7', expiry: '2024-06-25' },
    { id: 8, name: 'Product8', expiry: '2024-06-20' },
    { id: 9, name: 'Product9', expiry: '2024-08-05' },
    { id: 10, name: 'Product10', expiry: '2024-08-10' },
  ]);

  // Function to delete a product
  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Product List
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4 text-left">Product Name</th>
              <th className="p-4 text-left">Expiry Date</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t border-gray-300 hover:bg-gray-100"
              >
                <td className="p-4 text-gray-800">{product.name}</td>
                <td className="p-4 text-gray-600">{product.expiry}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
