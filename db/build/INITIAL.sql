
USE cars;

DROP TABLE IF EXISTS cars;

CREATE TABLE cars (
car_id INT PRIMARY KEY AUTO_INCREMENT,
model VARCHAR(45),
year INT,
brand VARCHAR(45),
type VARCHAR(45)
);


# Create dummy data
INSERT INTO cars VALUES
(DEFAULT,"GC8 Impreza WRX STI","2000","Subaru","Sedan"),
(DEFAULT,"BNR32 Skyline GT-R","1994","Nissan","Coupe"),
(DEFAULT,"A80 Supra MK-IV","1997","Toyota","Coupe"),
(DEFAULT,"CP9A Lancer Evo V","1999","Mitsubishi","Sedan"),
(DEFAULT,"FD3S efini RX7","1997","Mazda","Coupe")
;





