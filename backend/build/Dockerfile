FROM python:latest
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN bash py_setup.sh
EXPOSE 8000
ENTRYPOINT bash -c "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"
