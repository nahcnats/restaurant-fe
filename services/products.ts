const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/api";

export async function getProducts() {
    const data = await fetch(`${BASE_URL}/products`);
    return data.json();
}

export async function getProductById(id: string) {
    const data = await fetch(`${BASE_URL}/products/${id}`);
    return data.json();
}
