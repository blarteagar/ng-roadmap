# ng-roadmap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.
Node version 16.15.0
npm v8.11.0

Some of the topics covered here were:

-One way data binding
-Two way data binding
-Events binding
-Pipes
-Template-driven forms
-Reactive forms
-Routing
-Lazy Loading
-Guards
-Observers
-HTTP requests

Angular learning roadmap followed by Blanca Arteaga

ng-roadmap

cities.app

La app tiene varias vistas:
    • Home
    • Reactive form
    • Template-driven form
    • Users

La navegación entre ellas se realiza a través de una Barra de Navegación, que aloja los enlaces de las rutas que componen la aplicación.

En Home se muestra un listado de ciudades, recuperado de una API, provista de su propio código Backend, que realiza automáticamente operaciones CRUD (Create, Read, Update y Delete). La aplicación realiza peticiones HTTP a la API, y esta realiza las operaciones CRUD que la aplicación solicite. Tales solicitudes provienen de la interacción del usuario con el listado de ciudades, a saber:
Selección de una ciudad, o bien, limpiar la selección.
Actualización del nombre de una ciudad, siempre y cuando esté seleccionada.
Adición de una nueva ciudad al listado.
Los datos permanecerán almacenados en la API.

Durante la ejecución de las peticiones HTTP, podrá verse un spinner que aparecerá al inicio de la petición, y desaparecerá una vez que la misma haya sido completada. Este comportamiento es controlado por el servicio spinner.service.ts. El spinner actúa como HTTP interceptor, que centraliza todas las modificaciones que requieren las peticiones HTTP.

El Reactive Form es un formulario reactivo. Cuando se intenta salir de este formulario, una función de rutas (o un Observer) detecta que no se han guardado los cambios, y realiza la advertencia correspondiente. Si se hace click en “Cancelar”, el usuario permanece en el Reactive Form. Si se hace click en “Aceptar”, el usuario 

El Template-driven Form es un formulario construido con directivas ngModel, para enlazar el valor de cada input, al valor que se va a enviar a la consola para ser mostrado.

Users es un componente que se creó para probar la reacción de los Guards cuando se intenta acceder a un recurso para el cual no se cuenta con los permisos necesarios. Por esta razón, muestra un alert por defecto indicando que el usuario no cuenta con los permisos necesarios.

Si el usuario intenta acceder a un recurso que no existe, entonces se muestra una página 404.

archivos en src/app

1. App.component:
Contiene un archivo src/app/app.component.ts, que contiene un decorador @Component.
Un decorador que es una declaración que modifica el comportamiento de una clase.
El decorador @Component se importa a este componente desde ‘@angular/core’.
El decorador @Component se declara en un archivo typescript (*.ts), e indica las rutas donde se pueden encontrar los archivos de estilo (*.scss) y de lenguaje de marcado (*.html) enlazados al componente.
Luego se declara la exportación de la clase.
El componente no implementa métodos de ningún tipo.

El archivo src/app/app.component.html contiene el llamado a otros componentes:
1.1. app-spinner

Spinner.interceptor.ts: Contiene la lógica del HTTP interceptor, que se encarga de detectar el momento en que dichas peticiones se activan o desactivan.

Spinner.service.ts: Se usa para alojar los métodos de mostrar y ocultar del spinner, que dependen del Observable isLoading$.

Spinner.component.ts: En la parte superior contiene las importaciones necesarias.

En el decorador @Component, en el apartado template, se ha incorporado directamente la plantilla HTML del spinner. El Pipe (isLoading$ | async) permite suscribirse al Observer isLoading$, y completar la suscripción cuando sea necesario.

El servicio spinnerSvc se inyecta en el constructor de la clase. El servicio es privado y de sólo lectura.

Spinner.component.scss: Contiene los estilos del spinner.

1.2. app-navbar: Es la barra de navegación, que nos permite movernos entre las tres vistas de la aplicación.
Navbar.component.scss: Contiene algunos estilos de la barra de navegación. Otros estilos son aplicados con classes de Bootstrap.
Navbar.component.html: Contiene la plantilla HTML de la barra de navegación.

1.3. router-outlet: Es el componente que renderiza cada vista en la aplicación principal, en un elemento tipo root ubicado en app.component.html. Renderiza el componente que coincide con el array de rutas declarado en app.routing.module.ts.
