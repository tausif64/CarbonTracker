import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = async (e) => {
   e.preventDefault();
   setStatus("Sending...");

   try {
     const response = await fetch("https://formspree.io/f/xgvkwkpb", {
       method: "POST",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
       body: JSON.stringify(formData),
     });

     if (response.ok) {
       setStatus("Thanks for reaching out! We'll be in touch soon.");
       setFormData({ name: "", email: "", message: "" }); // Reset form
     } else {
       setStatus("There was a problem with your submission. Please try again.");
     }
   // eslint-disable-next-line no-unused-vars
   } catch (error) {
     setStatus("There was a problem with your submission. Please try again.");
   }
 };

  return (
    <div className="max-w-3xl mx-auto my-16 bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
      <p className="text-gray-600">
        We’d love to hear from you! Fill out the form below and we'll get back
        to you soon.
      </p>

      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block mt-4 font-semibold" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
        />

        <label className="block mt-4 font-semibold" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
        />

        <label className="block mt-4 font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
        ></textarea>

        <button
          type="submit"
          className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>

      {status && (
        <div className="mt-4 font-semibold text-gray-700">{status}</div>
      )}
    </div>
  );
};

export default ContactUs;
