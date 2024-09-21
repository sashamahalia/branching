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
import { LyricRepository } from "./lyric.repo.js";
import { Song } from "../song/song.entity.js";

@Entity({ repository: () => LyricRepository })
export class Lyric extends BaseEntity {
  @Property()
  verse: number;

  @Property()
  name: string;

  @Property({ nullable: true })
  parent_lyric_text?: string;

  @ManyToOne({ entity: () => User, nullable: true })
  user: User;

  @ManyToOne({ entity: () => Song, nullable: true })
  song: Song;

  @ManyToOne({
    entity: () => Lyric,
    nullable: true,
  })
  parentLyric?: Lyric;

  @OneToMany({ mappedBy: "lyric" })
  childLyrics = new Collection<Lyric>(this);

  constructor(verse: number, name: string, user: User, song: Song) {
    super();
    this.verse = verse;
    this.name = name;
    this.user = user;
    this.song = song;
  }
}
