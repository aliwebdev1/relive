import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 md:p-12 w-full md:w-1/2 rounded-lg shadow-sm">
      <h3 className="mb-6 text-2xl font-semibold">Send Message</h3>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Type message here"
          className="w-full mb-4 p-3 h-32 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition"
        >
          Send Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
