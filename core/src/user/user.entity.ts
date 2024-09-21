import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";
import { UserRepository } from "./user.repo";
import { BaseEntity } from "../base.entity.js";

@Entity({ repository: () => UserRepository })
export class User extends BaseEntity {
  @Property()
  fullName!: string;

  @Property()
  email!: string;

  @Property({ type: "text" })
  bio = "";
}
