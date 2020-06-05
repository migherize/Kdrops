contador = false;
valido = ["17039595","05202945","63232524","03768900","56790237","84623478"];
pagina = 0
paginas = ["paginas/kdrops1.html","paginas/kdrops2.html","paginas/kdrops3.html","paginas/kdrops4.html","paginas/kdrops5.html","paginas/kdrops6.html"]

    function Valido(){
		elemento = document.createElement("p"); // crea un elemento html
		elemento.setAttribute("id","texto");
		contenido = document.createTextNode("Codigo Valido, El producto es seguro y eficaz suplemento elaborado por la empresa KDROPSPROORGINAL)"); // crea un texto para un elemento.
		elemento.appendChild(contenido); // agrega un texto en un elemento.
		elemento.setAttribute("class","help is-success")
		
		lugar = document.getElementById("mensaje"); // para agarrar un elemento del documento html
		caja = document.createElement("div"); // crea un elemento html
		caja.setAttribute("id","consulta");
		caja.appendChild(elemento);

		boton = document.createElement("a"); // crea un elemento html
		contenido = document.createTextNode("Ir a su producto"); // crea un texto para un elemento.
		
		boton.appendChild(contenido); // agrega un texto en un elemento.
		boton.setAttribute("class","button is-link is-medium")
		boton.setAttribute("style","color:white;");

		boton.setAttribute("href",paginas[pagina]);

		caja.appendChild(boton);
		lugar.appendChild(caja);


		
	};

	function Invalido(){
 		elemento = document.createElement("p"); // crea un elemento html
		contenido = document.createTextNode("Codigo no existe. Consulte a su asesor de ventas."); // crea un texto para un elemento.
		elemento.appendChild(contenido); // agrega un texto en un elemento.
		elemento.setAttribute("class","help is-danger")
		lugar = document.getElementById("mensaje"); // para agarrar un elemento del documento html
		caja = document.createElement("div"); // crea un elemento html
		caja.setAttribute("id","consulta");
		lugar.appendChild(caja);

		caja.appendChild(elemento);
	};


	function obtenerCodigo(){

 		
 		var codigo_valido = false;

 		console.log("contador",contador);

 		const codigo = document.getElementById('codigo').value;
 		console.log("codigo", codigo);

 		for (var i = 0; i <= valido.length-1; i++) {
 			if (valido[i] == codigo){
 				pagina = i;
 		  		codigo_valido = true;
 		 	}
 		}

 	if (contador == true){
 		texto = document.getElementById("consulta");
 		texto.remove();
	 	
 	}
 	if (codigo_valido == true){
	   		contador = true;
	   		Valido();
	 	}
	else{
	   		contador = true;
	   		Invalido();
	  	}
	};
