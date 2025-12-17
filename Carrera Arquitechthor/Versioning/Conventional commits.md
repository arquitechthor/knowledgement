# Conventional Commits

Un buen mensaje de commit debe seguir esta estructura:

```markup
<tipo>(<área opcional>): <breve descripción en presente>
<Cuerpo opcional: Explicación detallada si es necesario>
<Footer opcional: información adicional como referencias a issues o breaking changes>
```

```jsx

```

```jsx

```

1. Tipo de commit: El tipo indica qué tipo de cambio estás introduciendo. Algunos ejemplos comunes son:

- **feat**: Nueva funcionalidad.
- **fix**: Corrección de errores.
- **chore**: Cambios de mantenimiento (sin impacto en el código, como cambios en configuración o scripts).
- **refactor**: Refactorización del código sin cambiar funcionalidad.
- **test**: Adición o modificación de pruebas.
- **docs**: Cambios en documentación.
- **style**: Cambios de formato (espaciado, indentación, sin modificar el código).
- **perf**: Mejoras de rendimiento.
- **ci**: Cambios en la integración continua.
- **build**: Cambios en la configuración de build.
- **revert**: Reversión de un commit anterior.

1. Área o módulo (opcional)
El área indica qué parte del código afecta el cambio. Puede ser el nombre de un módulo, un paquete o un componente.

Ejemplo:

scss
Copy
Edit
feat(auth): agregar validación en el registro
3. Breve descripción
Debe ser clara, en presente y sin exceder 50 caracteres.

Ejemplo:

scss
Copy
Edit
fix(database): corregir error en la conexión a PostgreSQL
4. Cuerpo del commit (opcional)
Si el cambio es complejo, puedes agregar una descripción más detallada en el cuerpo del commit, separada por una línea en blanco.

Ejemplo:

scss
Copy
Edit
fix(seat-reservation): solucionar error de concurrencia

Se detectó un problema al asignar asientos en concurrencia alta. Se implementó
un mecanismo de bloqueo optimista para evitar sobreasignación.
5. Footer (opcional)
Si el cambio introduce una incompatibilidad o cierra un issue, se puede incluir en el footer.

Ejemplo:

yaml
Copy
Edit
BREAKING CHANGE: Se cambió la estructura de la tabla de reservas

Closes #45
Ejemplos completos de commits
Commit con descripción corta

scss
Copy
Edit
feat(user): agregar endpoint de registro de usuarios
Commit con descripción detallada

r
Copy
Edit
fix(payment): corregir error en cálculo de impuestos

Se corrigió el cálculo de impuestos en compras internacionales,
asegurando la conversión correcta de divisas.
Commit con un breaking change

less
Copy
Edit
refactor(auth): cambiar estrategia de tokens

Se cambió el método de autenticación de JWT a OAuth2.
Esto requiere cambios en la configuración del cliente.

BREAKING CHANGE: Se eliminaron los endpoints antiguos de login.
Commit que cierra un issue

scss
Copy
Edit
fix(api): solucionar error 500 en la consulta de pedidos

Se corrigió una consulta SQL mal formada que causaba errores intermitentes.

Beneficios de usar este formato

✅ Historial de commits claro y estructurado

✅ Fácil generación de changelogs automáticamente

✅ Facilita la revisión de código en equipos grandes

✅ Compatible con herramientas como semantic-release para versionado automático

Si quieres automatizar la validación de estos formatos en tu proyecto, puedes usar herramientas como [commitlint](https://commitlint.js.org/).