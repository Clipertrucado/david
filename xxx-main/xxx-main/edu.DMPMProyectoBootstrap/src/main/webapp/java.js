var listaActual = JSON.parse(localStorage.getItem("miLista")) || [];
var x = "";
	for (var i = 0; i < listaActual.length; i++) {
		var articulo = listaActual[i];
		x = x + "\n" + articulo.toString();
	}

function validar() {

	if (document.getElementById("uno").value != document.getElementById("dos").value) {
		alert("no coinciden las contraseñas")
		document.getElementById("dos").focus() /*en esto conseguimos que el cursor esté sobre el campo */
		return false
	}
	else
		alert("Se ha registrado correctamente")
	return true

}
// Objeto para almacenar precios y cantidades
const productos = {
	prod1: { precio: 90, cantidad: 0 },
	prod2: { precio: 200, cantidad: 0 },
	prod3: { precio: 120, cantidad: 0 },
	prod4: { precio: 200, cantidad: 0 },
};

// Cargar datos desde localStorage
function cargarDatos() {
	const datosGuardados = localStorage.getItem("carrito");
	if (datosGuardados) {
		const carrito = JSON.parse(datosGuardados);
		for (const key in productos) {
			if (carrito[key] !== undefined) {
				productos[key].cantidad = carrito[key]; // Restaura la cantidad desde localStorage
			}
		}
	}
}

// Guardar datos en localStorage
function guardarDatos() {
	const datosParaGuardar = {};
	for (const key in productos) {
		datosParaGuardar[key] = productos[key].cantidad;
	}
	localStorage.setItem("carrito", JSON.stringify(datosParaGuardar)); // Guarda datos como JSON
}

// Inicializa el total
let total = 0;

// Función para actualizar el total y el recuento
function actualizarTotalYRecuento() {
	total = Object.values(productos).reduce((suma, prod) => suma + (prod.precio * prod.cantidad), 0);

	const recuentoTotal = Object.values(productos).reduce((suma, prod) => suma + prod.cantidad, 0);

	document.getElementById("total").textContent = `Total: ${total}`;
	document.getElementById("recuento").textContent = `Cantidad total de productos: ${recuentoTotal}`;

	// Actualiza la cantidad visualmente para cada producto
	document.getElementById("cantidadProd1").textContent = ` ${productos.prod1.cantidad}`;
	document.getElementById("cantidadProd2").textContent = ` ${productos.prod2.cantidad}`;
	document.getElementById("cantidadProd3").textContent = ` ${productos.prod3.cantidad}`;
	document.getElementById("cantidadProd4").textContent = ` ${productos.prod4.cantidad}`;
}

// Función para sumar productos
function sumar(productoId) {
	productos[productoId].cantidad++; // Incrementar cantidad
	guardarDatos(); // Guardar datos en localStorage
	actualizarTotalYRecuento(); // Actualizar total y recuento
}

// Función para restar productos
function restar(productoId) {
	if (productos[productoId].cantidad > 0) {
		productos[productoId].cantidad--; // Decrementar cantidad solo si es mayor que cero
		guardarDatos(); // Guardar datos en localStorage
		actualizarTotalYRecuento(); // Actualizar total y recuento
	}
}

// Configurar event listeners para botones
document.getElementById("btnAdd89").addEventListener("click", () => {
	sumar("prod1");
});

document.getElementById("btnAdd120").addEventListener("click", () => {
	sumar("prod2");
});

document.getElementById("btnAdd88").addEventListener("click", () => {
	sumar("prod3");
});

document.getElementById("btnAdd75").addEventListener("click", () => {
	sumar("prod4");
});

document.getElementById("btnSubtract89").addEventListener("click", () => {
	restar("prod1");
});

document.getElementById("btnSubtract120").addEventListener("click", () => {
	restar("prod2");
});

document.getElementById("btnSubtract88").addEventListener("click", () => {
	restar("prod3");
});

document.getElementById("btnSubtract75").addEventListener("click", () => {
	restar("prod4");
});

// Cargar datos desde localStorage al inicio
cargarDatos(); // Recuperar datos de localStorage

// Actualizar el total y el recuento al inicio
actualizarTotalYRecuento();

function anyadirCarrito(x) {

	switch (x) {
		case 1:
			var producto = ["Mechero Zenith Flame", "10"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 2:
			var producto = ["Mechero Sparkle Blaze", "16"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 3:
			var producto = ["Mechero Vintage Glow", "11"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 4:
			var producto = ["Mechero Eco-Fire", "18"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 5:
			var producto = ["Mechero Adventure Torch", "14"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 6:
			var producto = ["Mechero Glamour Flare", "15"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 7:
			var producto = ["MMechero Bohemian Blaze", "9"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 8:
			var producto = ["Mechero Tech Spark", "112"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;
		case 9:
			var producto = ["Mechero Clásico Elegance", "13"];
			listaActual.push(producto);
			localStorage.setItem("miLista", JSON.stringify(listaActual));
			break;

	}

}



function carrito() {
	var listaActual = JSON.parse(localStorage.getItem("miLista")) || [];
	var codigo = "";
	for (var i = 0; i < listaActual.length; i++) {

		var mostrar = `<div class="row border-top border-bottom">
					<div class="row main align-items-center">
						
						<div class="col">
							<div class="row">${articulo[0]}</div>
						</div>
							<div class="col">&euro; ${articulo[1]} 
							<button type="button" class="btn btn-sm btn-outline-secondary" onclick="eliminarCarro(${i})">Eliminar</button>
						</div>
					</div>
				</div>`
		codigo = codigo + " " + mostrar
	}

	document.getElementById("carrito").innerHTML = codigo;

/*
	var coste = 0;
	for (var i = 0; i < listaActual.length; i++) {
		var articulo = listaActual[i];
		coste = coste + parseInt(articulo[1]);
	}


	document.getElementById("coste").innerHTML = coste.toString().concat("€");

	document.getElementById("item").innerHTML = "Elementos ".concat(listaActual.length);

	document.getElementById("Item").innerHTML = "Elementos ".concat(listaActual.length);
*/
}

function eliminarCarro(i) {

	var listaActual = JSON.parse(localStorage.getItem("miLista")) || [];

	listaActual.splice(i, 1);

	localStorage.setItem("miLista", JSON.stringify(listaActual));
	location.reload();
}
