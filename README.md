# TW_Lab7

Laboratorio N�7: "PHP", correpondiente a la asignatura de Tecnolog�as Web, impartida por el Profesor Patricio Collao.
Ingenier�a Civil en Computaci�n e Inform�tica, Universidad de Tarapac�, Arica - Chile. 

Se desarroll� un CRUD, utilizando PHP como lenguaje de programaci�n para el controlador y para el modelo, se utiliz� una base de datos relacional, m�s espec�ficamente MySql. 
Para las vistas, se utiliz� una libreria de js, jquery y bootstrap. 

Descripci�n del controlador o API
----------------------------------

Para poder interactuar con nuestra API, se deber� tener en cuenta lo siguiente: 

Existen dos clases: Cliente y Pedidos. Pedidos depende de Cliente.  

Cada una de �stas clases tiene sus respectivas funciones. 

Para Cliente: 

* obtenerLista: retorna a todos los clientes registrados. 
* ver: recibe como par�metro "rut" y retorna todos los pedidos realizados por el cliente asociado al rut. 
* crear: necesita como par�metro a "rut", "nombre", "apellido" y "correo". Registra un nuevo cliente. 
* eliminar: requiere como par�metro a "rut". Elimina al cliente asociado al rut entregado. 
* modificar: necesita como par�metro a "rut", "nombre", "apellido" y "correo". Modifica uno o varios de los atributos de un cliente. 

Para Pedidos: 

* obtenerLista: necesita a "rut" como par�metro. Devuelve una lista con todos los pedidos del cliente asociado al rut proporcionado. 
* crear: requiere de "rut", "total" y "fecha" como par�metros. Con lo proporcionado, crea un nuevo pedido relacion�ndolo al Cliente que est� asociado al rut dado. 

Listado de Cumplimiento de la tareas requeridas
------------------------------------------------

1) archivo layout.html
2) Se adjunta el script *.sql
3.a) Funci�n obtenerLista de Cliente y vista ver.html
3.b) Funci�n crear de Cliente y vista crear.html
3.c) Funci�n modificar de Cliente y vista modificar.html 
3.d) Funci�n eliminar de Cliente y vista modificar.html 
3.e) Funci�n ver de Cliente y vista ver.html
3.f) Funci�n crear de Pedidos y vista formulario.html

Para ingresar a la aplicaci�n la ruta es localhost:8080/html







