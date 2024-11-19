let products = []; // Temporary in-memory storage

export async function GET(req) {
    return new Response(JSON.stringify(products), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(req) {
    const newProduct = await req.json();
    newProduct.id = Date.now(); // Generate unique ID
    products.push(newProduct);

    return new Response(JSON.stringify({ message: 'Product added!', newProduct }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
}

