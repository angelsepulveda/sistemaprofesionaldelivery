import * as dotenv from 'dotenv'

dotenv.config()

const database = process.env.DATABASE_NAME
const username = process.env.DATABASE_USERNAME
const password = process.env.DATABASE_PASSWORD
const host = process.env.DATABASE_HOST
const port = process.env.DATABASE_PORT
export const portHost = process.env.PORT
export const databaseEnv = {
  database,
  username,
  password,
  port,
  host
}

