import { AppDataSource } from '../DataSource'
import { Product } from '../entity/Product'

const productRepository = AppDataSource.getRepository(Product)

export default productRepository
