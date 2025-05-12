export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700" translate="no">NursingCos</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600">Inicio</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Servicios</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Contacto</a>
      </nav>
    </header>
  );
}
