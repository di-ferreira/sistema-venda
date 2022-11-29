import { DataTypes, Model, Optional } from 'sequelize'
import { AppDataSource } from '../DataSource'

export type iProduct = {
  id: number
  name: string
  description?: string
  price: number
  inventory: number
  createdAt?: Date
  updatedAt?: Date
}

export type iProductCreate = Optional<iProduct, 'id'>

class Product extends Model<iProduct, iProductCreate> implements iProduct {
  public id!: number
  public name!: string
  public description!: string
  public price!: number
  public inventory!: number
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Product.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0.0 },
    inventory: { type: DataTypes.INTEGER, defaultValue: 0 }
  },
  {
    timestamps: true,
    sequelize: AppDataSource
  }
)

export default Product
