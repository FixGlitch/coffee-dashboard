import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name: string;

  @Column("decimal")
  price: number;

  @Column({ nullable: true })
  description?: string;

  @Column({ default: true })
  isAvailable: boolean;

  constructor(
    name: string,
    price: number,
    description?: string,
    isAvailable: boolean = true
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.isAvailable = isAvailable;
  }
}
