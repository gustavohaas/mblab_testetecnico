import 'reflect-metadata';
import { DataSource } from 'typeorm';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URI_DEV,
  logging: false,
  entities: [path.join(__dirname, './entities/**/*.{js,ts}')],
  migrations: [path.join(__dirname, './migrations/**/*.{js,ts}')],
});