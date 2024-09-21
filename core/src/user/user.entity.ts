import { Collection, Entity, OneToMany, Property } from "@mikro-orm/core";
import { UserRepository } from "./user.repo";
import { BaseEntity } from "../base.entity.js";
import { Song } from "../song/song.entity";

@Entity({ repository: () => UserRepository })
export class User extends BaseEntity {
  @Property()
  fullName!: string;

  @Property()
  email!: string;

  @Property({ type: "text" })
  bio = "";

  @OneToMany({ mappedBy: (song: Song) => song.user })
  songs = new Collection<Song>(this);
}
