import React from "react";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="px-5 md:px-20 py-10 bg-[#F9FAFB]">
      <div className="text-center md:w-1/2 mx-auto mb-12">
        <h2 className="text-2xl md:text-5xl font-semibold">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-gray-600 mt-3">
          We're here to help you start your wellness journey.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Contact Form */}
        <ContactForm></ContactForm>

        {/* Contact Info */}
        <ContactInfo></ContactInfo>
      </div>
    </div>
  );
};

export default Contact;
