# OCP: Principio Abierto-Cerrado

Bertrand Meyer hizo famoso este principio en los años 1980. La esencia es que para que los sistemas de software sean fáciles de cambiar, deben diseñarse para permitir cambiar el comportamiento de esos sistemas agregando código nuevo, en lugar de cambiar el código existente.

El principio abierto-cerrado (OCP) fue acuñado en 1988 por Bertrand Meyer. Dice:

> Un artefacto de software debe estar abierto a la extensión pero cerrado a la modificación.
> 

En otras palabras, el comportamiento de un artefacto de software debería ser extensible, sin tener que modificar ese artefacto.
Esta, por supuesto, es la razón más fundamental por la que estudiamos la arquitectura de software. Claramente, si simples extensiones de los requisitos obligan a cambios masivos
cambios en el software, entonces los arquitectos de ese sistema de software han cometido un fracaso espectacular.

La mayoría de los estudiantes de diseño de software reconocen el OCP como un principio que los guía en el diseño de clases y módulos. Pero el principio adquiere una importancia aún mayor cuando consideramos el nivel de los componentes arquitectónicos.
Un experimento mental aclarará esto.

**UN EXPERIMENTO** 

Imaginemos, por un momento, que tenemos un sistema que muestra un resumen financiero en una página web. Los datos de la página se pueden desplazar y los números negativos se muestran en rojo.

Ahora imagine que las partes interesadas piden que esta misma información se convierta en un informe para imprimir en una impresora en blanco y negro. El informe debe estar paginado correctamente, con encabezados de página, pies de página y etiquetas de columna adecuados.
Los números negativos deben estar entre paréntesis.

Claramente, se debe escribir algún código nuevo. ¿Pero cuánto código antiguo habrá que cambiar?

Una buena arquitectura de software reduciría la cantidad de código modificado al mínimo. Lo ideal es cero.

¿Cómo? Separando adecuadamente las cosas que cambian por diferentes razones (el Principio de Responsabilidad Única) y luego organizando adecuadamente las dependencias entre esas cosas (el Principio de Inversión de Dependencia).

Al aplicar el SRP, podríamos obtener la vista del flujo de datos que se muestra en la Figura 8.1. Algún procedimiento de análisis inspecciona los datos financieros y produce datos reportables, que luego son formateados apropiadamente por los dos procesos de reporte.

![Untitled](OCP%20Principio%20Abierto-Cerrado/Untitled.png)

La idea esencial aquí es que generar el informe implica dos responsabilidades separadas: el cálculo de los datos reportados y la presentación de esos datos en un formato compatible con la web y para imprimir.
Una vez realizada esta separación, debemos organizar las dependencias del código fuente para garantizar que los cambios en una de esas responsabilidades no provoquen cambios en la otra. Además, la nueva organización debe garantizar que el comportamiento pueda ampliarse sin deshacer la modificación.
Logramos esto dividiendo los procesos en clases y separando esas clases en componentes, como se muestra en las líneas dobles en el diagrama de la Figura 8.2. En esta figura, el componente en la parte superior izquierda es el Controlador (Controller). En la parte superior derecha tenemos el Interactor. En la parte inferior derecha está la Base de Datos.
Finalmente, en la parte inferior izquierda, hay cuatro componentes que representan a los Presentadores (Presenters) y las Vistas (Views).

![Untitled](OCP%20Principio%20Abierto-Cerrado/Untitled%201.png)

Las clases marcadas con <I> son interfaces; los marcados con <DS> son estructuras de datos. Las puntas de flecha abiertas utilizan relaciones. Las puntas de flecha cerradas son instrumentos o relaciones de herencia.

Lo primero que hay que notar es que todas las dependencias son dependencias del código fuente. Una flecha que apunta de la clase A a la clase B significa que el código fuente de la clase A menciona el nombre de la clase B, pero la clase B no menciona nada sobre la clase A. Por lo tanto, en la Figura 8.2, FinancialDataMapper conoce FinancialDataGateway a través de una relación de implementación, pero FinancialGateway no sabe nada sobre FinancialDataMapper.

Lo siguiente que hay que notar es que cada línea doble se cruza en una sola dirección.
Esto significa que todas las relaciones de los componentes son unidireccionales, como se muestra en el gráfico de componentes de la Figura 8.3. Estas flechas apuntan hacia los componentes que queremos proteger del cambio.

![Untitled](OCP%20Principio%20Abierto-Cerrado/Untitled%202.png)

Permítanme decirlo nuevamente: si el componente A debe protegerse de los cambios en el componente B, entonces el componente B debería depender del componente A.
Queremos proteger al Controlador de cambios en los Presentadores. Queremos proteger a los Presentadores de cambios en las Vistas. Queremos proteger al Interactor de cambios en... bueno, cualquier cosa.

El Interactor está en la posición que mejor se ajusta al OCP. Los cambios en la Base de Datos, el Controlador, los Presentadores o las Vistas no tendrán ningún impacto en el Interactor.

¿Por qué debería el Interactor ocupar una posición tan privilegiada? Porque contiene las reglas de negocio. El Interactor contiene las políticas de más alto nivel de la aplicación. Todos los demás componentes se ocupan de preocupaciones periféricas. El Interactor se ocupa de la preocupación central.

Aunque el Controlador es periférico al Interactor, es central para los Presentadores y las Vistas. Y si bien los Presentadores pueden ser periféricos al Controlador, son fundamentales para las Vistas.

Observe cómo esto crea una jerarquía de protección basada en la noción de "nivel".

Los interactianos son el concepto de más alto nivel, por lo que son los más protegidos. Las vistas se encuentran entre los conceptos de nivel más bajo, por lo que son los menos protegidos. Los presentadores tienen un nivel superior a las Vistas, pero un nivel inferior al del Controlador o al Interactor.

Así funciona el OCP a nivel arquitectónico. Los arquitectos separan la funcionalidad según cómo, por qué y cuándo cambia, y luego organizan esa funcionalidad separada en una jerarquía de componentes. Los componentes de nivel superior en esa jerarquía están protegidos de los cambios realizados en los componentes de nivel inferior.

**CONTROL DIRECCIONAL**

Si retrocedió horrorizado ante el diseño de clases mostrado anteriormente, mire de nuevo. Gran parte de la complejidad de ese diagrama tenía como objetivo garantizar que las dependencias entre los componentes apuntaran en la dirección correcta.

Por ejemplo, la interfaz FinancialDataGateway entre el FinancialReportGenerator y FinancialDataMapper existen para invertir la dependencia que de otro modo habría apuntado desde el componente Interactor al componente de base de datos. Lo mismo ocurre con la interfaz FinancialReportPresenter y las dos interfaces View.

**OCULTACIÓN DE INFORMACIÓN**

La interfaz FinancialReportRequester tiene un propósito diferente. Está ahí para proteger al FinancialReportController de saber demasiado sobre los aspectos internos del Interactor. Si esa interfaz no estuviera ahí, entonces el Controlador tendría dependencias transitivas de las Entidades Financieras.

Las dependencias transitivas son una violación del principio general de que las entidades de software no deben depender de cosas que no utilizan directamente. Volveremos a encontrar ese principio cuando hablemos del principio de segregación de interfaces y del principio de reutilización común.

Entonces, aunque nuestra primera prioridad es proteger el Interactor de cambios en el Controlador, también queremos proteger al Controlador de cambios en el Interactor ocultando las partes internas del Interactor.

**CONCLUSIÓN**

El OCP es una de las fuerzas impulsoras detrás de la arquitectura de los sistemas. El objetivo es hacer que el sistema sea fácil de ampliar sin incurrir en un gran impacto de cambio. Este objetivo se logra dividiendo el sistema en componentes y organizando esos componentes en una jerarquía de dependencia que protege los componentes de nivel superior de cambios en los componentes de nivel inferior.