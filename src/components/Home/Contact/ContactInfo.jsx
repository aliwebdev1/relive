import React from "react";
import locationIcon from "../../../assets/images/icons/famicons_location.png";
import mailIcon from "../../../assets/images/icons/ci_mail.png";
import phoneIcon from "../../../assets/images/icons/mingcute_phone-fill.png";

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 md:p-12 w-full md:w-1/2 rounded-lg shadow-sm">
      <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>

      {/* Location */}
      <div className="flex items-start mb-6">
        <img src={locationIcon} alt="Location Icon" className="w-6 h-6 mt-1" />
        <div className="ml-4">
          <p className="text-xl font-semibold">Our Location</p>
          <p className="text-gray-600 mt-2">
            123 Wellness Avenue, Suite 200
            <br />
            Dubai, UAE
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start mb-6">
        <img src={phoneIcon} alt="Phone Icon" className="w-6 h-6 mt-1" />
        <div className="ml-4">
          <p className="text-xl font-semibold">Phone</p>
          <p className="text-gray-600 mt-2">(555) 123-4567</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start mb-6">
        <img src={mailIcon} alt="Email Icon" className="w-6 h-6 mt-1" />
        <div className="ml-4">
          <p className="text-xl font-semibold">Email</p>
          <p className="text-gray-600 mt-2">info@relive-clinic.com</p>
        </div>
      </div>

      {/* Hours */}
      <div className="mt-6 space-y-3">
        <h4 className="text-xl font-semibold mb-2">Business Hours</h4>
        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactInfo;
