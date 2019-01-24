CREATE DATABASE koala_holla;

CREATE TABLE koalas (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(60) NOT NULL,
	"gender" VARCHAR(2) NOT NULL,
	"age" INTEGER NOT NULL,
	"ready_to_transfer" BOOLEAN DEFAULT FALSE,
	"notes" VARCHAR(255)
);

