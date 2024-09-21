import { MikroORM } from "@mikro-orm/postgresql";
import { db } from "./db";
import { ExtendedEntityRepository } from "../src/base.repo";

export const orm = await MikroORM.init({
  entities: ["./dist/core/**/*.entity.js"],
  entitiesTs: ["./src/core/**/*.entity.ts"],
  dbName: db.connectionString,
  entityRepository: ExtendedEntityRepository,
});
