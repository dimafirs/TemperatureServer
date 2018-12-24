-- DROP SCHEMA IF EXISTS weather_observer;
-- DROP TABLE IF EXISTS weather_observer.measurement;

CREATE SCHEMA IF NOT EXISTS weather_observer;

CREATE TABLE IF NOT EXISTS weather_observer.measurement (
   measurement_id INT NOT NULL AUTO_INCREMENT,
   temperature INT NOT NULL,
   humidity INT NOT NULL,
   measurement_time TIMESTAMP NOT NULL,
   PRIMARY KEY(measurement_id)
);

