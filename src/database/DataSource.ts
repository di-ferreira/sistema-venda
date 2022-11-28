import { Sequelize } from 'sequelize'

// export const AppDataSource = new Sequelize({
//   dialect: 'sqlite',
//   database: './db/database.sqlite'
// })

export const AppDataSource = new Sequelize('sqlite::memory:')
