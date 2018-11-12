DROP SCHEMA IF EXISTS weather_observer;
DROP TABLE IF EXISTS weather_observer.measurement;

CREATE SCHEMA IF NOT EXISTS weather_observer;

CREATE TABLE IF NOT EXISTS weather_observer.measurement (
   id INT NOT NULL,
   temperature INT NOT NULL,
   pressure INT NOT NULL,
   submission_date TIMESTAMP NOT NULL,
   PRIMARY KEY(id)
);

