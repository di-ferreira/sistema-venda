import Product from './models/Product'

const isDev = process.env.NODE_ENV === 'development'

const dbInit = (): void => {
  Product.sync({ alter: isDev })
}
export default dbInit
