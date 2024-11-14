import { DataSource } from 'typeorm';
import { UserEntity } from '@/server/schema/UserEntity';
import { ProductEntity } from '@/server/schema/ProductEntity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'username',
  password: 'password',
  database: 'database',
  entities: [UserEntity, ProductEntity],
  synchronize: true,
});
