CREATE TABLE tableware (id SERIAL PRIMARY KEY,  
name VARCHAR(255) NOT NULL, 
qty int NOT NULL)

CREATE TABLE office (id SERIAL PRIMARY KEY,  
name VARCHAR(255) NOT NULL, 
location VARCHAR(255) NOT NULL,
starting_year INT NOT Null
)

ALTER TABLE tableware
ADD office_id INT;

ALTER TABLE tableware 
ADD FOREIGN KEY (office_id) REFERENCES office(id);