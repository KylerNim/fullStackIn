CREATE TABLE myRC(
    id serial PRIMARY KEY,
    firstName varchar(50),
    lastName varchar(50),
    hasCollection boolean
);

CREATE TABLE rocksRC (
    id serial,
    firstName varchar(50),
    lastName varchar(50),
    owner_id integer,
    FOREIGN KEY (owner_id) REFERENCES myRC(id)
        ON DELETE CASCADE
);