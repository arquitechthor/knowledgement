# Comandos

Podemos usar un terminal con Docker Desktop o Play with docker.

Con la terminal veamos algunos comandos.

| Comando | Descripción |
| --- | --- |
| docker --version | versión |
| docker info | muestra información básica de configuración. |
| docker run hello-world | Ejecuta un docker básico de **Docker Hub**. |
| docker ps | Muestra los dockers en ejecución |
| docker ps -a | Muestra todos los dockers independientemente de su estado. |
| docker inspect <*CONTAINER ID*> | Muestra información detallada de un conteiner n formato Json. |
| docker inspect <*NAME*> | Lo mismo de lo anterior |
| docker run --name <*Nuevo nombre*> <*Nombre Docker*> | Corre un docker bajo el nombre <Nuevo nombre>. Docker no permite tener dos docker con el mismo nombre. |
| docker rename <*Nombre viejo*> <*Nombre nuevo*> | Renombra un docker. |
| docker rm <*CONTAINER ID*> | Elimina un docker. También se puede usar <*NAME*> |
| docker container prune | Elimina todos los dokers corriendo o detenidos. |
| docker run ubuntu | Corre un sistema operativo Ubuntu. No hace nada peculiar, arranca y finaliza porque no se le enviaron parámetros al **/bin/bash** |
| docker run -it ubuntu | Corre Ubuntu pero de modo interactivo. Verás la cónsola de Ubuntu. |
| docker run --name <nombre> -d ubuntu tail -f /dev/null | corre Ubuntu siempre activo (alwaysup), desvinculado (-d) y con algún proceso que no sea /bin/bash (tail -f /dev/null) |
| docker exec -it <nombre>  bash | Ejecuta el proceso bash en modo interactivo (-it) en el contenedor <nombre> que en el paso anterior, de ser ubuntu es un comando válido en el sistema. |
| docker stop <nombre> | Mata el docker <nombre>. |
| docker network ls | Lista las redes disponibles para el docker. |

Nota: para docker es indiferente si se usa <*CONTAINER ID*>o <*NAME*>