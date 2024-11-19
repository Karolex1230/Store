export default function ProductList({ products }) {
    if (products.length === 0) {
        return <p className="text-white text-lg">No products available. Be the first to create a listing!</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {products.map((product) => (
                <div key={product.id} className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-2xl transition">
                    <h2 className="text-xl font-bold text-white">{product.name}</h2>
                    <p className="text-gray-200">Price: ${product.price}</p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}




