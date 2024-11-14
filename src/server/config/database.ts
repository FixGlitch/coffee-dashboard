import { ProductEntity } from "@/server/schema/ProductEntity";
import { UserEntity } from "@/server/schema/UserEntity";
import { DataSource } from "typeorm";

export const database = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [UserEntity, ProductEntity],
  synchronize: true,
});

database
  .initialize()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection failed:", err));
