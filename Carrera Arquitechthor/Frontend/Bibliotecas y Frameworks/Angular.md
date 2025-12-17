# Angular

instalar node posterior a la versión 20 para ver si tienes eso instalado:

```bash
node --version
```

Para instalar Angular

```bash
npm install -g @angular/cli
```

Para saber si funciona

```bash
ng version
```

Asegurar que Angular sea al menos la 17.

Para crear un nuevo proyecto ej: **grow**.

```bash
ng new grow
```

Para arrancar la aplicación y que se abra en un navegador

```bash
ng serve --open
```

Para crear un nuevo componente user

opcionalmente se pueden usar, aunque no me gusta ninguno:

 --inline-style: estilos dentro del mismo archivo.

 --inline-template: código dentro del mismo archivo.

 --skip-tests: ¿Por qué d*** querrías no generar tests? 🤔

```bash
ng generate component user
```

Generar estilos y componentes bonitos con Angular Material: