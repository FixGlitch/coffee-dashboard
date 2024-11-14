
import { database } from '../config/database';
import { ProductEntity } from '../schema/ProductEntity';

export const productController = {
  async getProductById(id: string) {
    const productRepository = database.getRepository(ProductEntity);
    const product = await productRepository.findOne({ where: { id } });
    if (!product) throw new Error('Product not found');
    return product;
  },

  async createProduct(name: string, price: number) {
    const productRepository = database.getRepository(ProductEntity);
    const newProduct = productRepository.create({ name, price });
    await productRepository.save(newProduct);
    return newProduct;
  },
};
