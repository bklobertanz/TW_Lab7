# TW_Lab7

Laboratorio N°7: "PHP", correpondiente a la asignatura de Tecnologías Web, impartida por el Profesor Patricio Collao.
Ingeniería Civil en Computación e Informática, Universidad de Tarapacá, Arica - Chile. 

Se desarrolló un CRUD, utilizando PHP como lenguaje de programación para el controlador y para el modelo, se utilizó una base de datos relacional, más específicamente MySql. 
Para las vistas, se utilizó una libreria de js, jquery y bootstrap. 

Descripción del controlador o API
----------------------------------

Para poder interactuar con nuestra API, se deberá tener en cuenta lo siguiente: 

Existen dos clases: Cliente y Pedidos. Pedidos depende de Cliente.  

Cada una de éstas clases tiene sus respectivas funciones. 

Para Cliente: 

* obtenerLista: retorna a todos los clientes registrados. 
* ver: recibe como parámetro "rut" y retorna todos los pedidos realizados por el cliente asociado al rut. 
* crear: necesita como parámetro a "rut", "nombre", "apellido" y "correo". Registra un nuevo cliente. 
* eliminar: requiere como parámetro a "rut". Elimina al cliente asociado al rut entregado. 
* modificar: necesita como parámetro a "rut", "nombre", "apellido" y "correo". Modifica uno o varios de los atributos de un cliente. 

Para Pedidos: 

* obtenerLista: necesita a "rut" como parámetro. Devuelve una lista con todos los pedidos del cliente asociado al rut proporcionado. 
* crear: requiere de "rut", "total" y "fecha" como parámetros. Con lo proporcionado, crea un nuevo pedido relacionándolo al Cliente que está asociado al rut dado. 

Listado de Cumplimiento de la tareas requeridas
------------------------------------------------

1) archivo layout.html
2) Se adjunta el script *.sql
3.a) Función obtenerLista de Cliente y vista ver.html
3.b) Función crear de Cliente y vista crear.html
3.c) Función modificar de Cliente y vista modificar.html 
3.d) Función eliminar de Cliente y vista modificar.html 
3.e) Función ver de Cliente y vista ver.html
3.f) Función crear de Pedidos y vista formulario.html

Para ingresar a la aplicación la ruta es localhost:8080/html







