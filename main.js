// Datos base
const categorias = ["Salud", "Educación", "Vivienda", "Infraestructura"];
let fondoDAO = 10000; // Fondo común del DAO en euros

// Función 1: Elegir categoría de gasto
function elegirCategoria() {
  let mensaje = "¿A qué área deseas asignar tu presupuesto?\n";
  categorias.forEach((cat, index) => {
    mensaje += `${index + 1}. ${cat}\n`;
  });
  let eleccion = parseInt(prompt(mensaje)) - 1;

  if (eleccion >= 0 && eleccion < categorias.length) {
    return eleccion;
  } else {
    alert("Selección inválida. Se asignará por defecto a Salud.");
    return 0;
  }
}

// Función 2: Ingresar monto de aporte
function ingresarMonto() {
  let monto = parseFloat(prompt("¿Cuánto deseas asignar en euros al área elegida?"));
  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido. Se asignará 100€ por defecto.");
    return 100;
  }
  return monto;
}

// Función 3: Mostrar resultado e impacto
function mostrarResumen(categoriaIndex, monto) {
  fondoDAO += monto;
  alert(
    `✅ Asignación completada\n` +
    `Área: ${categorias[categoriaIndex]}\n` +
    `Monto asignado: €${monto}\n\n` +
    `Nuevo fondo total del CivicDAO: €${fondoDAO}`
  );

  console.log("👥 Participación cívica simulada:");
  console.log(`Área elegida: ${categorias[categoriaIndex]}`);
  console.log(`Monto asignado: €${monto}`);
  console.log(`Fondo total actualizado: €${fondoDAO}`);
}

// Función principal
function simularParticipacionDAO() {
  console.clear();
  console.log("🚀 Bienvenido/a al simulador CivicDAO");
  let categoriaElegida = elegirCategoria();
  let montoIngresado = ingresarMonto();
  mostrarResumen(categoriaElegida, montoIngresado);
}

// Invocar simulador
simularParticipacionDAO();
