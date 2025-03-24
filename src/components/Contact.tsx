import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        setMessage("Message envoyé avec succès !");
        setIsSubmitting(false);
        form.current?.reset();
      })
      .catch(() => {
        setMessage("Une erreur est survenue, veuillez réessayer.");
        setIsSubmitting(false);
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom et prénom</label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Votre E-mail</label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Objet de la demande</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Votre message</label>
          <textarea
            id="message"
            name="message"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default Contact;
