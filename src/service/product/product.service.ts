import { Config } from "@/config";

class ProductService {

  public async getAllProducts() {
    try {
      const products: Product[] = await fetch(`${Config.API_URL}/api/products`).then(res => res.json());
      return products; 
    } catch (error) {
      console.log("error ", error);
      return null;
    }
  }

  public async getProductById(id: string) {
    try {
      const product: Product = await fetch(`${Config.API_URL}/api/product/${id}`).then(res => res.json());
      return product; 
    } catch (error) {
      console.log("error ", error);
      return null;
    }
  }
}

export default new ProductService();
