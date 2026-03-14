<<<<<<< HEAD
FROM nginx:latest

COPY . /usr/share/nginx/html

=======
FROM nginx:alpine
COPY . /usr/share/nginx/html
>>>>>>> f5ed5bb3735e23b28639c435942b50f99ac806ae
EXPOSE 80