CREATE TABLE user (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	name TEXT NOT NULL
  email TEXT
);
CREATE TABLE song (
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	name TEXT NOT NULL
  bpm: INTEGER NOT NULL
  user_id UUID NOT NULL
);
CREATE TABLE lyric (
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	verse INTEGER NOT NULL
  song_id: UUID
  user_id: UUID
  parent_lyric_id: UUID
  parent_lyric_text: TEXT
);
CREATE TABLE files (
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	name TEXT NOT NULL,
  data BYTEA NOT NULL
  song_id: UUID
  user_id: UUID
);

ALTER TABLE song 
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) 
REFERENCES user(id);
ON DELETE CASCADE

ALTER TABLE lyric 
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) 
REFERENCES user(id);
ON DELETE CASCADE

ALTER TABLE lyric 
ADD CONSTRAINT fk_song
FOREIGN KEY (song_id) 
REFERENCES song(id);
ON DELETE CASCADE

ALTER TABLE files 
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) 
REFERENCES user(id);
ON DELETE CASCADE

ALTER TABLE files 
ADD CONSTRAINT fk_song
FOREIGN KEY (song_id) 
REFERENCES song(id);
ON DELETE CASCADE

CREATE INDEX idx_song_user_id ON song(user_id);
CREATE INDEX idx_lyric_user_id ON lyric(user_id);
CREATE INDEX idx_lyric_song_id ON lyric(song_id);
CREATE INDEX idx_lyric_parent_id ON lyric(parent_lyric_id);
CREATE INDEX idx_file_user_id ON file(user_id);
CREATE INDEX idx_file_song_id ON file(song_id);