import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ firstname: "", secondName: "", lastName: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado (simulado)");
    setFormData({ firstname: "", secondName: "", lastName: "", email: "", message: "" });
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    <div className="max-w-lg mx-auto my-12 p-0 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div>
          <label className="block mb-1 font-medium text-black">Nombres</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-black">Apellido paterno</label>
          <input
            type="text"
            name="secondName"
            value={formData.secondName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-black">Apellido materno</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>
        </div>
        <div>
          <label className="block mb-1 font-medium text-black">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-black">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
    </header>
  );
};

export default ContactForm;
