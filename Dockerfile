FROM nginx:alpine
COPY . /usr/share/nginx/html
<<<<<<< HEAD
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
=======

EXPOSE 80
>>>>>>> 7cb6e6908d64497b7d5397a2195b4cc9974ad2d9
