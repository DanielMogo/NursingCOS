export default function Services() {
  return (
    <section className="py-12 px-6 bg-gray-100 text-center">
      <h3 className="text-3xl font-semibold mb-6 text-blue-700">Nuestros Servicios</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
          <h4 className="text-xl font-bold mb-2 text-blue-600">Cosmetología</h4>
          <p className="text-blue-600">Cuidado facial y corporal con técnicas avanzadas.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
          <h4 className="text-xl font-bold mb-2 text-blue-600">Enfermería Estética</h4>
          <p className="text-blue-600">Servicios seguros aplicados por profesionales certificados.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
          <h4 className="text-xl font-bold mb-2 text-blue-600">Bienestar Integral</h4>
          <p className="text-blue-600">Atención holística para cuerpo, mente y espíritu.</p>
        </div>
      </div>
    </section>
  );
}
