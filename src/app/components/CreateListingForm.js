"use client";

import { useState } from 'react';

export default function CreateListingForm({ onAddProduct }) {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productName && productPrice) {
            onAddProduct({
                name: productName,
                price: parseFloat(productPrice),
            });
            setProductName('');
            setProductPrice('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
                <label className="block text-gray-700">Product Name</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="border rounded w-full py-2 px-3"
                    placeholder="Enter product name"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Product Price</label>
                <input
                    type="number"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="border rounded w-full py-2 px-3"
                    placeholder="Enter product price"
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded"
            >
                Add Product
            </button>
        </form>
    );
}


