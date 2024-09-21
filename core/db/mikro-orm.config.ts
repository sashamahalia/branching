import { defineConfig } from "@mikro-orm/postgresql";
import { db } from "./db";
import { ExtendedEntityRepository } from "../src/base.repo";
import { Migrator } from "@mikro-orm/migrations";

export const orm = defineConfig({
  entities: ["./dist/core/**/*.entity.js"],
  entitiesTs: ["./src/core/**/*.entity.ts"],
  dbName: db.connectionString,
  entityRepository: ExtendedEntityRepository,
  extensions: [Migrator],
});
