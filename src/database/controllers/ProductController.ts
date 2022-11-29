import Product, { iProduct, iProductCreate } from '../models/Product'

export const create = async (payload: iProductCreate): Promise<iProduct> => {
  const product = await Product.create(payload)
  return product
}

export const update = async (id: number, payload: Partial<iProductCreate>): Promise<iProduct> => {
  const product = await Product.findByPk(id)
  if (!product) {
    // @todo throw custom error
    throw new Error('not found')
  }
  const updatedIngredient = await (product as Product).update(payload)
  return updatedIngredient
}

export const getById = async (id: number): Promise<iProduct> => {
  const product = await Product.findByPk(id)
  if (!product) {
    // @todo throw custom error
    throw new Error('not found')
  }
  return product
}

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedIngredientCount = await Product.destroy({
    where: { id }
  })
  return !!deletedIngredientCount
}

export const getAll = async (): Promise<iProduct[]> => {
  return Product.findAll()
}
