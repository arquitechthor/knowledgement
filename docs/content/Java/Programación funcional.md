# Programación Funcional

[https://www.youtube.com/watch?v=80a0TRSZDEQ](https://www.youtube.com/watch?v=80a0TRSZDEQ)

La programación funcional se enfoca en **qué** resolver, no se da importancia al **cómo**.

**Beneficios**:

- Testing.
- Legibilidad.
- Concurrencia.
- Menos manejo de estados.
- Comportamientos más definidos.
- No hay que instalar nada adicional.

Una función es una serie de **pasos parametrizados**. Puede o no devolver un resultado. Se puede definir, almacenar o declarar bajo demanda.

Una función en programación es un **tipo de datos**.

Las funciones son “**ciudadanos de primera clase**”: Se pueden recibir como variable, declararlas como variables, retornarlas, etc. Es decir, son tipos de datos primitivos.

**Función pura**: Siempre genera el mismo resultado para el mismo parámetro.

Una **Función de Orden Mayor** es una función que cumple con al menos una de estas características.

- Toma otra función como parámetro
- Retorna una función como resultado

**Ventajas**:

- Pasar comportamiento.
- Compartir lógica o reglas.
- Compartir un medio de comunicación.

**Funciones Lambda**

- Parte de un concepto matemático de los años 30 (Alonso Church).
- Son funciones anónimas.

**Datos inmutables**

- Una vez creados ya no se pueden arterar. 👍🏻
- Facilita crear funciones puras. 👍🏻
- Facilita usar Threads. Concurrencia. 👍🏻
- Nueva instancia por cada set de modificaciones. 👎🏻
- Requiere especial atención al diseño. 👎🏻
- Objetos mutables fuera de nuestro alcance. 👎🏻

Repositorio del curso: https://github.com/sierisimo/JavaSE-Functional-platzi

Ahora se pueden declarar Funciones (reciben y devuelven tipos de datos),

**Predicados** (reciben tipos de datos y devuelven valores Boolean) se usa para validar.

**Consumer**. Consumidor. Una intefaz para crear objetos que reciben datos.

**Supplier**. Proveedor. Una intefaz para crear objetos que suministran datos.

Referencias a métodos

![image.png](Programaci%C3%B3n%20Funcional/image.png)