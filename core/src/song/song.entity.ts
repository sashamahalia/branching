import {
  Collection,
  Entity,
  IntegerType,
  ManyToOne,
  OneToMany,
  Property,
} from "@mikro-orm/core";
import { BaseEntity } from "../base.entity.js";
import { User } from "../user/user.entity";
import { SongRepository } from "./song.repo.js";
import { Lyric } from "../lyric/lyric.entity.js";

@Entity({ repository: () => SongRepository })
export class Song extends BaseEntity {
  @Property()
  bpm: number;

  @Property()
  name: string;

  @ManyToOne({ entity: () => User, nullable: true })
  user: User;

  @OneToMany({ mappedBy: (lyric: Lyric) => lyric.song })
  lyrics = new Collection<Lyric>(this);

  constructor(bpm: number, name: string, user: User) {
    super();
    this.bpm = bpm;
    this.name = name;
    this.user = user;
  }
}
