 import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    // console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="bg-[blue] mt-10 py-16">
      <div className="max-w-6xl mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Contact Us 📞
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Form */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Send Message</h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full mb-3 px-3 py-2 border rounded"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full mb-3 px-3 py-2 border rounded"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full mb-3 px-3 py-2 border rounded h-28"
            />

            <button
              onClick={handleSubmit}
              className="bg-yellow-400 px-5 py-2 rounded-lg hover:bg-yellow-500"
            >
              Send Message
            </button>
          </div>

          {/* Info */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold mb-4">Contact Info</h2>

            <p className="flex items-center gap-2">
              <FaEnvelope /> sheebbooali42@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <FaPhone /> +91 8081010679
            </p>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> India
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}