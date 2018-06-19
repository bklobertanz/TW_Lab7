
$(document).ready(()=>{

	const url_base = "http://localhost:8080/";
	const rut = 0; 
	const nombre = 1; 
	const apellido = 2; 
	const correo = 3;
	
	$.ajax({
		url: url_base + "api/Cliente.php?peticion=obtenerLista",
		success:(res)=>{
			

			let datos = $.parseJSON(res);
			let tabla = $("#tabla-ver");
			let select = $("#select-rut-clientes");

			for(let i=0 ; i<datos.length ; i++){

				tabla.append("<tr><td>"  + datos[i][rut] + "</td><td>" 
									    + datos[i][nombre] + "</td><td>"
									   	+ datos[i][apellido] + "</td><td>"
									   	+ datos[i][correo] + "</td></tr>");
				select.append("<option>" + datos[i][rut] +  "</option>");
			}
		}
	});
	$("#btn-consultar-pedidos").click(()=>{

		let inputRut = $("#input-rut").val();
		console.log(inputRut);
		$.ajax({

			url: url_base + "api/Cliente.php?peticion=ver&rut=" + inputRut,
			success :(res)=>{

				let datos = $.parseJSON(res);
				console.log(datos);
				let tabla = $("#tabla-pedidos");

				for(let i=0 ; i<datos.length ; i++){

				tabla.append("<tr><td>"  + datos[i][rut] + "</td><td>" 
									    + datos[i][nombre] + "</td><td>"
									   	+ datos[i][apellido] + "</td><td>"
									   	+ datos[i][correo] + "</td></tr>");
				}
			}, 
			 error: function(jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connect.n Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found. [404]');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.n' + jqXHR.responseText);
            }
        }
		});
	});

	$("#btn-crear-cliente").click(()=>{

		let rut = $("#input-crear-rut").val();
		let nombre = $("#input-crear-nombre").val();
		let apellido = $("#input-crear-apellido").val();
		let correo = $("#input-crear-correo").val();
		let url = url_base + "api/Cliente.php?peticion=crear&rut=" + rut 
						   + "&nombre=" + nombre + "&apellido=" + apellido 
						   + "&correo=" + correo;
		console.log(url);
		$.ajax({

			url: url,
			type : 'GET',
			success :(res)=>{

				alert('Usuario Creado!');
			}, 
			 error: function(jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connect.n Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found. [404]');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.n' + jqXHR.responseText);
            }
        }
		});
	});

	$("#btn-eliminar-clientes").click(()=>{

		let rutEliminar = $("#select-rut-clientes").val();
		$.ajax({

			url : url_base + "api/Cliente.php?peticion=eliminar&rut=" + rutEliminar,
			success:(res)=>{

				alert("Eliminado cliente " + rutEliminar);
			}
		});
	});
});
