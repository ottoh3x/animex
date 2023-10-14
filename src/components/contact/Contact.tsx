"use client"
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useContact } from "../../../store/store";
import { toast } from "react-toastify";


const Msg = ({ title, message }: MsgProps) => {
  return (
    <div className="flex flex-col">
      <span>
        <span className="font-bold text-gray-200">{title}</span> {message}
      </span>

      <span className="text-blue-800 text-xl "></span>
    </div>
  );
};

function Contact() {
  const { isContact, disableIsContact } = useContact();

  const form = useRef<any>();

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_27otgd3",
        "template_nu3nlna",
        form.current,
        "wRGAYlk4r9LSqyEFS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      toast.success(
        <Msg
          title={"Message"}
          message="Your Message Has Been Sent."
        />,
        { theme: "dark" }
      );
    form.current.reset();
  };

  return (
    <>
      {isContact && (
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed  h-screen p-4 overflow-y-auto  z-50 w-80  bg-neutral-800/90 text-gray-200 transition-all right-0 top-0 `}
        >
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            Contact us
          </h5>
          <button
            type="button"
            onClick={disableIsContact}
            className="text-gray-400 bg-transparent  hover:bg-black rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center "
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <form ref={form} onSubmit={sendEmail} className="mb-6">
            <div className="mb-3">
              <label
                htmlFor="name"
                className={`block mb-2 text-sm font-bold  `}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-neutral-900 border border-gray-800 outline-none p-3 w-full text-gray-200 text-sm rounded-sm "
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className={`block mb-2 text-sm font-bold  `}
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-neutral-900 border border-gray-800 outline-none p-3 w-full text-gray-200 text-sm rounded-sm "
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="subject"
                className={`block mb-2 text-sm font-bold `}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="bg-neutral-900 border border-gray-800 outline-none p-3 w-full text-gray-200 text-sm rounded-sm "
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="message"
                className={`block mb-2 text-sm font-bold `}
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                className="block p-2.5 w-full bg-neutral-900 text-sm text-white bg-gray-150 rounded-lg border border-gray-800 "
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-red-600  w-full focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 hover:bg-red-700 block"
            >
              Send
            </button>
          </form>
          <p className="mb-2 text-sm text-gray-500 ">
            <span className="hover:underline">ottoprogrammer@gmail.com</span>
          </p>
          <p className="text-sm text-gray-500 ">
            <span className="hover:underline">Animex Stream</span>
          </p>
        </div>
      )}
    </>
  );
}

export default Contact;
