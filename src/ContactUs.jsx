import React, { useState } from "react";
import Footer from "./Components/Footer";

const Cookies = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emptyField, setEmptyField] = useState(false);

  const handleClick = () => {
    setEmptyField(false);
    if (
      name.length == 0 ||
      number.length == 0 ||
      email.length == 0 ||
      message.length == 0
    ) {
      setEmptyField(true);
      return;
    }
  };

  return (
    <div className="w-full h-auto ">
      <div className="flex flex-col items-center md:justify-around md:items-center w-full min-h-[60%] py-16 bg-[#11120F]">
        <div className="w-full p-5 px-20">
          <div className="flex flex-col space-y-3 w-full justify-start items-center">
            <p className="text-[#FBB034] text-lg font-normal font-be-jost-pro w-full text-center md:text-left">
              Contact Us
            </p>
            <p className="text-white text-3xl font-medium font-be-jost-pro w-full text-center md:text-left">
              Get In Touch
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around w-full">
          <div className="flex flex-col justify-center items-center w-full md:w-[40%] p-4 space-y-10">
            <input
              type="text"
              placeholder="Name*"
              className={`${
                emptyField ? "placeholder-[#B24738]" : null
              } bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile No.*"
              className={`${
                emptyField ? "placeholder-[#B24738]" : null
              } bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full`}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Id*"
              className={`${
                emptyField ? "placeholder-[#B24738]" : null
              } bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows="4"
              cols="50"
              placeholder="Message*"
              className={`${
                emptyField ? "placeholder-[#B24738]" : null
              } bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full resize-none`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="w-full flex justify-center md:justify-start">
              <button
                className="bg-[#FBB034] rounded-md py-3 px-3 w-40 font-bold text-base text-[#202125]"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 md:mt-0 w-full md:w-[40%]">
            {/* <img src="/Assets/Maps.png" className="rounded-md w-9/12" /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14231.702376990514!2d75.7907431!3d26.9058564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c178663641%3A0x782b649b2fe391d!2sBarbera%2C%20Salon%20At%20Home%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1684731210406!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-md w-9/12"
            ></iframe>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Cookies;
