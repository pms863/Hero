import "reflect-metadata";
import { DataSource } from "typeorm";
import { Hero } from "./entity/Hero";
import { Superpower } from "./entity/Superpower";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "heroes.db",
  synchronize: true,
  logging: false,
  entities: [Hero, Superpower],
  migrations: [],
  subscribers: [],
});
