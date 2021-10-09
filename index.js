


function registro(){

	let datos={
	nam:"",
	correo:"",
	pho:"",
	insti:""
	
	};


		datos.nam=document.getElementById("nombres").value;
		datos.correo=document.getElementById("mail").value;
		datos.pho=document.getElementById("phone").value;
		datos.insti=document.getElementById("instituto").value;

	
		if(datos.nam==""){

			alert("Falta nombre");
		}
		if(datos.correo==""){

			alert("Falta correo");
		}
		if(datos.pho==""){

			alert("Falta telefono");
		}
		if(datos.insti==""){

			alert("Falta instituto");
		}

		else{


		console.log("Nombre: "+datos.nam+" "+"Correo: "+datos.correo+" "+"Telefono: "+datos.pho+" "+"Instituto: "+datos.insti  );
			}






}




