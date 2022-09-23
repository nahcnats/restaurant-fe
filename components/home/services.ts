const NEXT_PUBLIC_CROSS_ORIGIN = process.env.NEXT_PUBLIC_CROSS_ORIGIN;

export async function findAll() {
    const data = await fetch(`${NEXT_PUBLIC_CROSS_ORIGIN}/api/products`);
    return data.json();
}
