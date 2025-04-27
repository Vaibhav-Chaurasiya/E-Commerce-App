import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="border p-2 w-full" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default Contact;
