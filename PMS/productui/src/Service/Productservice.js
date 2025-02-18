import axios from "axios";

const API_URL = "http://localhost:8080";

class ProductService {

    saveProduct(product) {
        return axios.post(`${API_URL}/saveprod`, product);
    }

    getAllProduct() {
        return axios.get(`${API_URL}/products`);
    }

    getProductById(id) { // Renamed for clarity
        return axios.get(`${API_URL}/products/${id}`);
    }

    deleteProduct(id) {
        return axios.delete(`${API_URL}/productdelete/${id}`); // Typically, DELETE method is used for deletions
    }

    editProduct(product) {
        return axios.post(`${API_URL}/editproduct/${product.id}`, product);
    }
}

export default new ProductService();
