import { Sequelize } from 'sequelize'

// export const AppDataSource = new Sequelize('sqlite::memory:')

export const AppDataSource = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
})
