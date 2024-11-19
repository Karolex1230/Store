"use client";

import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function CartPage() {
    const { cart, removeFromCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="p-6">
                <p>Your cart is empty!</p>
                <Link href="/">
                    <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
                        Back to Store
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <ul>
                {cart.map((product) => (
                    <li key={product.id} className="border-b py-4 flex justify-between">
                        <div>
                            <h2 className="text-xl">{product.name}</h2>
                            <p>${product.price}</p>
                        </div>
                        <button
                            onClick={() => removeFromCart(product.id)}
                            className="text-red-600"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-6">
                <button className="px-4 py-2 bg-green-600 text-white rounded">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}


