# Arquitectura Docker

Sí, parece raro, pero para comunicarse con el núcleo de Docker (docker daemon) se usa API REST.

Cuando “usamos” **docker**, en realidad estamos usando el **CLI**, la interfaz de docker para el humano. Mientras que el **docker daemon** es la interfaz hacia el sistema operativo. Y si, con código se puede escribir una aplicación que se comunique con el **docker daemon**. Para eso está el API REST.

![Untitled](Arquitectura%20Docker/Untitled.png)