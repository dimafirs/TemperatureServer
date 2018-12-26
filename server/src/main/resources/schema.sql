CREATE SCHEMA IF NOT EXISTS weather_observer;

CREATE TABLE IF NOT EXISTS weather_observer.measurement (
   measurement_id serial PRIMARY KEY,
   temperature SMALLINT NOT NULL,
   humidity SMALLINT NOT NULL,
   measurement_time TIMESTAMP NOT NULL
);

