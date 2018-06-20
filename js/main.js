
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
			let selectMod = $("#select-rut-modificar-clientes");
			let selectElim = $("#select-rut-eliminar-clientes")
			let selectPedi = $("#select-rut-pedido");


			for(let i=0 ; i<datos.length ; i++){

				tabla.append("<tr><td>"  + datos[i][rut] + "</td><td>" 
									    + datos[i][nombre] + "</td><td>"
									   	+ datos[i][apellido] + "</td><td>"
									   	+ datos[i][correo] + "</td></tr>");
				selectMod.append("<option>" + datos[i][rut] +  "</option>");
				selectElim.append("<option>" + datos[i][rut] +  "</option>");
				selectPedi.append("<option>" + datos[i][rut] +  "</option>");
			}
		}
	});

	$("#btn-pedido-crear").click(()=>{

		let rutP = $("#select-rut-pedido").val();
		let fechaP = $("#input-pedido-fecha").val();
		let totalP = $("#input-pedido-total").val();

		$.ajax({

			url: url_base + "api/Pedidos.php?peticion=crear&rut=" + rutP 
						  + "&fecha=" + fechaP + "&total=" + totalP,
			success: (res)=>{

				alert("El Pedido ha sido añadido");
			}

		});

	});

	$("#btn-modificar").click(()=>{

		let rutS = $("#select-rut-modificar-clientes").val();
		let nombreS = $("#input-modificar-nombre").val();
		let apellidoS = $("#input-modificar-apellido").val();
		let correoS = $("#input-modificar-correo").val();

		$.ajax({


			url: url_base + "api/Cliente.php?peticion=modificar&rut="+ rutS +"&nombre="
						  + nombreS + "&apellido=" + apellidoS + "&correo=" + correoS,

			success: (res)=>{

				alert("Cliente modificado");
			}
		});
	});
	$("#btn-modificar-clientes").click(()=>{

		let rutS = $("#select-rut-modificar-clientes").val();
		$.ajax({

			url: url_base + "api/Cliente.php?peticion=ver&rut=" + rutS,
			type: 'GET',
			dataType: 'json',
			success:(res)=>{

					//res[0-1], 0:[0-3], 1: [0-1] pedidos del cliente.

					let rutM = res[0][rut];
					let nombreM = res[0][nombre];
					let apellidoM = res[0][apellido];
					let correoM = res[0][correo];

					let inputNombre = $("#input-modificar-nombre");
					let inputApellido = $("#input-modificar-apellido");
					let inputCorreo = $("#input-modificar-correo");
					
					inputNombre.val(nombreM);
					inputApellido.val(apellidoM);
					inputCorreo.val(correoM);
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

		let rutEliminar = $("#select-rut-eliminar-clientes").val();
		$.ajax({

			url : url_base + "api/Cliente.php?peticion=eliminar&rut=" + rutEliminar,
			success:(res)=>{

				alert("Eliminado cliente " + rutEliminar);
			}
		});
	});
});
