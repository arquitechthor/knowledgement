# ¿Por qué Docker?

En desarrollo tenemos algunos problemas

**Al contruir**. Al momento de desarrollar ¿Qué versiones usas, por ejemplo de Java? ¿Qué herramientas? ¿Qué versiones de librerías?

- Entorno de desarrollo.
- Dependencias.
- Entorno de ejecución
- Equivalencia con entorno productivo
- Servicios externos

**Al distribuir**. No solo al publicar, sino desde donde me traigo código.

- Divergencia de repositorios.
- Divergencia de artefactos.
- Versionado.

**Al ejecutar**. La máquina donde se va ejecutar el código siempre es distinta que la máquina donde se desarrolla. Por lo tanto ¿Cómo hago para que las diferencias de esas computadoras no ocasionen fallas?

- Compatibilidad con el entorno productivo.
- Dependencias.
- Disponibilidad de servicios externos.
- Recursos de harware.

¿Por que Docker?

“Docker te permite construir, distribuir y ejecutar cualquier aplicación en cualquier lado.”

Desventajas de las Máquinas Virtuales

- Peso.
- Costo de adiministración.
- Multiples formatos.