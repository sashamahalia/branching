import { Entity, IntegerType, ManyToOne, Property } from "@mikro-orm/core";
import { BaseEntity } from "../base.entity.js";
import { User } from "../user/user.entity";
import { SongRepository } from "./song.repo.js";

@Entity({ repository: () => SongRepository })
export class Song extends BaseEntity {
  @Property()
  bpm: number;

  @Property()
  name: string;

  @ManyToOne({ entity: () => User, nullable: true })
  user: User;

  constructor(bpm: number, name: string, user: User) {
    super();
    this.bpm = bpm;
    this.name = name;
    this.user = user;
  }
}
