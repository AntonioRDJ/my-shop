import { Config } from "@/config";
import { GetAllProductsResponse, Product } from "./types";

class ProductService {

  public async getAllProducts() {
    try {
      const response: GetAllProductsResponse = await fetch(`${Config.DUMMYJSON_URL}/products`).then(res => res.json());
      return response; 
    } catch (error) {
      console.log("error ", error);
      return null;
    }
  }

  public async getProductById(id: number) {
    try {
      const response: Product = await fetch(`${Config.DUMMYJSON_URL}/products/${id}`).then(res => res.json());
      return response; 
    } catch (error) {
      console.log("error ", error);
      return null;
    }
  }
}

export default new ProductService();
