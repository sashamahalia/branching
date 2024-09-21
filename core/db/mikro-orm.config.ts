import { defineConfig } from "@mikro-orm/core";
import { Migrator } from "@mikro-orm/migrations";

export default defineConfig({
  extensions: [Migrator],
});
