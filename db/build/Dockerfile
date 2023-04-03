FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=cars
ADD INITIAL.sql /docker-entrypoint-initdb.d
EXPOSE 3306
