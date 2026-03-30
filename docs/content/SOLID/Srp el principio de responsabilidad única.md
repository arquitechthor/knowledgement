# SRP: El principio de responsabilidad única

Un corolario activo de la ley de Conway: la mejor estructura para un sistema de software está fuertemente influenciada por la estructura social de la organización que lo utiliza, de modo que cada módulo de software tiene una, y sólo una, razón para cambiar.

De todos los principios SOLID, el Principio de Responsabilidad Única (SRP) podría ser el menos comprendido. Probablemente se deba a que tiene un nombre particularmente inapropiado. Es demasiado fácil para los programadores escuchar el nombre y luego asumir que significa que **cada módulo debe hacer solo una cosa**.

No se equivoque, existe un principio como ese. Una función debe hacer una y sólo una cosa. Usamos ese principio cuando refactorizamos funciones grandes en funciones más pequeñas; Lo usamos en los niveles más bajos. **Pero no es uno de los principios SOLID**, no es el SRP.

Históricamente, el SRP se ha descrito de esta manera:

> Un módulo debe tener una, y sólo una, razón para cambiar.
> 

Los sistemas de software se modifican para satisfacer a los usuarios y partes interesadas; esos usuarios y partes interesadas son la “razón para el cambio” de la que habla el principio.

De hecho, podemos reformular el principio para decir esto:

> Un módulo debe ser responsable ante un, y sólo uno, usuario o parte interesada.
> 

Desafortunadamente, las palabras "usuario" y "parte interesada" no son realmente las palabras correctas para usar aquí. Probablemente habrá más de un usuario o parte interesada que desee que el sistema cambie de la misma manera. Más bien, en realidad nos estamos refiriendo a un grupo: una o más personas que requieren ese cambio. Nos referiremos a ese grupo como actor.

Así, la versión final del SRP es:

> Un módulo debe ser responsable ante un, y sólo un, actor.
> 

Ahora bien, ¿qué queremos decir con la palabra “módulo”? La definición más simple es simplemente un archivo fuente. La mayoría de las veces esa definición funciona bien. Sin embargo, algunos lenguajes y entornos de desarrollo no utilizan archivos fuente para contener su código.

En esos casos, un módulo es simplemente un conjunto cohesivo de funciones y estructuras de datos.

Esa palabra "cohesivo" implica el SRP. La cohesión es la fuerza que une el código responsable de un único actor.
Quizás la mejor manera de entender este principio sea observando los síntomas de su violación.

**SÍNTOMA 1: DUPLICACIÓN ACCIDENTAL**

Mi ejemplo favorito es la clase Empleado de una aplicación de nómina. Tiene tres métodos: calculatePay(), reportHours() y save() (Figura 7.1).

![Untitled](SRP%20El%20principio%20de%20responsabilidad%20%C3%BAnica/Untitled.png)

Esta clase viola el SRP porque esos tres métodos son responsables ante tres actores muy diferentes.
• El método calculatePay() lo especifica el departamento de contabilidad, que depende del director financiero.
• El método reportHours() lo especifica y utiliza el departamento de recursos humanos, que depende del director de operaciones.
• El método save() lo especifican los administradores de bases de datos (DBA), que reportan al CTO.

Al colocar el código fuente de estos tres métodos en una única clase de Empleado, los desarrolladores han acoplado cada uno de estos actores a los demás. Este acoplamiento puede hacer que las acciones del equipo del CFO afecten algo de lo que depende el equipo del COO.
Por ejemplo, supongamos que la función calculatePay() y la función reportHours() comparten un algoritmo común para calcular las horas que no son horas extra. Supongamos también que los desarrolladores, que tienen cuidado de no duplicar el código, colocan ese algoritmo en una función denominada regularHours() (Figura 7.2).

![Untitled](SRP%20El%20principio%20de%20responsabilidad%20%C3%BAnica/Untitled%201.png)

Ahora supongamos que el equipo del director financiero decide que es necesario modificar la forma en que se calculan las horas no extras. Por el contrario, el equipo del director de operaciones de recursos humanos no quiere ese ajuste en particular porque utilizan las horas no extras para un propósito diferente.
Un desarrollador tiene la tarea de realizar el cambio y ve la conveniente función regularHours() llamada por el método calcularPay(). Desafortunadamente, ese desarrollador no se da cuenta de que la función reportHours() también llama a la función.
El desarrollador realiza el cambio requerido y lo prueba cuidadosamente. El equipo del director financiero valida que la nueva función funcione según lo deseado y se implementa el sistema.
Por supuesto, el equipo del director de operaciones no sabe que esto está sucediendo. El personal de RR.HH. continúa utilizando los informes generados por la función reportHours(), pero ahora contienen números incorrectos. Finalmente se descubre el problema y el director de operaciones está furioso porque los datos incorrectos le han costado a su presupuesto millones de dólares.
Todos hemos visto suceder cosas como esta. Estos problemas ocurren porque ponemos el código del que dependen diferentes actores muy cerca. El SRP dice que se separe el código del que dependen los diferentes actores.

**SÍNTOMA 2: MERGES**

No es difícil imaginar que las fusiones serán comunes en archivos fuente que contienen muchos métodos diferentes. Esta situación es especialmente probable si esos métodos son responsables ante diferentes actores.
Por ejemplo, supongamos que el equipo de DBA del CTO decide que debería haber un cambio de esquema simple en la tabla Empleado de la base de datos. Supongamos también que el equipo de empleados de recursos humanos del director de operaciones decide que necesita un cambio en el formato del informe de horas.
Dos desarrolladores diferentes, posiblemente de dos equipos diferentes, revisan la clase Empleado y comienzan a realizar cambios. Desafortunadamente sus cambios chocan.

El resultado es un merge.

Probablemente no sea necesario decirles que las fusiones son asuntos arriesgados. Nuestras herramientas son bastante buenas hoy en día, pero ninguna herramienta puede abordar todos los casos de fusión. Al final siempre existe el riesgo.

En nuestro ejemplo, la fusión pone en riesgo tanto al CTO como al COO. No es inconcebible que el director financiero también pueda verse afectado.
Hay muchos otros síntomas que podríamos investigar, pero todos implican que varias personas cambian el mismo archivo fuente por diferentes motivos.

Una vez más, la forma de evitar este problema es separar el código que admita diferentes actores.

**SOLUCIONES**

Hay muchas soluciones diferentes a este problema. Cada uno mueve las funciones a diferentes clases.
Quizás la forma más obvia de resolver el problema sea separar los datos de las funciones. Las tres clases comparten acceso a EmployeeData, que es una estructura de datos simple sin métodos (Figura 7.3). Cada clase contiene sólo el código fuente necesario para su función particular. Las tres clases no pueden conocerse entre sí. De este modo se evita cualquier duplicación accidental.

![Untitled](SRP%20El%20principio%20de%20responsabilidad%20%C3%BAnica/Untitled%202.png)

La desventaja de esta solución es que los desarrolladores ahora tienen tres clases de las que deben crear instancias y realizar un seguimiento. Una solución común a este dilema es utilizar el patrón Fachada (Figura 7.4).

![Untitled](SRP%20El%20principio%20de%20responsabilidad%20%C3%BAnica/Untitled%203.png)

EmployeeFacade contiene muy poco código. Se encarga de instanciar y delegar a las clases las funciones.
Algunos desarrolladores prefieren mantener las reglas comerciales más importantes más cerca de los datos. Esto se puede hacer manteniendo el método más importante en la clase Empleado original y luego usando esa clase como Fachada para las funciones menores (Figura 7.5).

![Untitled](SRP%20El%20principio%20de%20responsabilidad%20%C3%BAnica/Untitled%204.png)

Podría objetar estas soluciones basándose en que cada clase contendría solo una función. Este no es el caso. Es probable que la cantidad de funciones necesarias para calcular el salario, generar un informe o guardar los datos sea grande en cada caso. Cada una de esas clases tendría muchos métodos privados.
Cada una de las clases que contienen dicha familia de métodos es un alcance. Fuera de ese ámbito, nadie sabe que los miembros privados de la familia existen.

**CONCLUSIÓN**

El principio de responsabilidad única se refiere a funciones y clases, pero reaparece en una forma diferente en dos niveles más. A nivel de componentes, se convierte en el Principio de Cierre Común (Common Closure Principle). A nivel arquitectónico, se convierte en el Eje de Cambio responsable de la creación de Límites Arquitectónicos.
Estudiaremos todas estas ideas en los próximos capítulos.