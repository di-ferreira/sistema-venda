import { DataSource } from 'typeorm'
import { Product } from './entity/Product'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './db/database.sqlite',
  synchronize: true,
  logging: false,
  entities: [Product],
  migrations: [],
  subscribers: []
})
