import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { BaseEntity } from "../base.entity.js";
import { User } from "../user/user.entity";
import { FileRepository } from "./file.repo.js";
import { Song } from "../song/song.entity.js";
import { Lyric } from "../lyric/lyric.entity.js";

@Entity({ repository: () => FileRepository })
export class File extends BaseEntity {
  @Property()
  name: string;

  @Property()
  data: Buffer;

  @ManyToOne({ entity: () => User, nullable: true })
  user: User;

  @ManyToOne({ entity: () => Song, nullable: true })
  song: Song;

  @ManyToOne({ entity: () => Lyric, nullable: true })
  lyric: Lyric;

  constructor(
    name: string,
    data: Buffer,
    user: User,
    song: Song,
    lyric: Lyric
  ) {
    super();
    this.name = name;
    this.data = data;
    this.user = user;
    this.song = song;
    this.lyric = lyric;
  }
}
