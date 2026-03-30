# LSP: El principio de sustitución de Liskov

La famosa definición de subtipos de **Barbara Liskov**, de 1988. En resumen, este principio dice que para construir sistemas de software a partir de partes intercambiables, esas partes deben adherirse a un contrato que permita sustituirlas una por otra.

En 1988, Barbara Liskov escribió lo siguiente como una forma de definir los subtipos.

> Lo que se busca aquí es algo como la siguiente propiedad de sustitución: si para cada objeto o1 de tipo S hay un objeto o2 de tipo T tal que para todos los programas P definidos en términos de T, el comportamiento de P no cambia cuando se sustituye o1 para o2 entonces S es un subtipo de T.
> 

Para entender esta idea, conocida como Principio de Sustitución de Liskov (LSP), veamos algunos ejemplos.

**ORIENTAR EL USO DE LA HERENCIA**
Imagine que tenemos una clase llamada Licencia, como se muestra en la Figura 9.1. Esta clase tiene un método llamado calcFee(), al que llama la aplicación de facturación.
Hay dos “subtipos” de Licencia: PersonalLicense y BusinessLicense.
Utilizan diferentes algoritmos para calcular la tarifa de la licencia.

![Untitled](LSP%20El%20principio%20de%20sustituci%C3%B3n%20de%20Liskov/Untitled.png)

Este diseño se ajusta al LSP porque el comportamiento de la aplicación Facturación no depende, en modo alguno, de cuál de los dos subtipos utiliza.
Ambos subtipos son sustituibles por el tipo de licencia.
**EL PROBLEMA DEL CUADRADO/RECTÁNGULO**
El ejemplo canónico de una violación del LSP es el famoso (o infame, según la perspectiva) problema del cuadrado/rectángulo (Figura 9.2).

**CONCLUSIÓN**

El LSP puede y debe ampliarse al nivel de la arquitectura. Una simple violación de la sustituibilidad puede causar que la arquitectura de un sistema se contamine con una cantidad significativa de mecanismos adicionales.