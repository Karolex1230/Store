"use client";

import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import CreateListingForm from './components/CreateListingForm';
import Link from 'next/link';
import { useCart } from './context/CartContext'; // Import the cart context

export default function Home() {
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const { cart } = useCart(); // Access cart from context

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    const addProduct = async (product) => {
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });
            if (response.ok) {
                fetchProducts();
                setShowForm(false); // Hide form after submission
            }
        } catch (error) {
            console.error('Failed to add product:', error);
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center p-6 relative">
            <h1 className="text-4xl font-bold mb-6">Welcome to My E-Commerce Store</h1>
            <ProductList products={products} />
            
            {/* Floating Buttons */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {/* Home Button */}
                <Link href="/">
                    <button className="bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-500">
                        🏠
                    </button>
                </Link>

                {/* Plus Button */}
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-500"
                >
                    +
                </button>

                {/* Cart Button */}
                <Link href="/cart">
                    <button className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 relative">
                        🛒
                        {/* Cart Item Count */}
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </button>
                </Link>
            </div>

            {showForm && (
                <div className="absolute top-20 w-full max-w-md bg-white shadow-lg rounded-lg p-6 z-10">
                    <CreateListingForm onAddProduct={addProduct} />
                </div>
            )}
        </main>
    );
}







