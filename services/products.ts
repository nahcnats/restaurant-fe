import apiClient from "../utils/server";

export async function getProducts() {
    const response = await apiClient.get("/products");
    return response.data;
}

export async function getProductById(id: string) {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
}
