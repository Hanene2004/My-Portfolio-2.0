import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import useMagnetic from "../reactbits/hooks/useMagnetic";
import useSoundCue from "../reactbits/hooks/useSoundCue";
import { styles } from "../styles";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import Toast from "./ui/toast";
import { supabase } from "../lib/supabaseClient";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [contactMethod, setContactMethod] = useState("email"); // email, linkedin, calendly
  const [toast, setToast] = useState({
    open: false,
    message: "",
    type: "success",
  });
  const { play } = useSoundCue("notification");
  const { ref: submitButtonRef, style: magneticStyle } = useMagnetic({
    radius: 90,
    strength: 0.35,
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      play("notification");
      setToast({
        open: true,
        message: "Please fill in all fields before submitting.",
        type: "error",
      });
      return;
    }
    setLoading(true);

    // Save to Supabase database first
    if (supabase) {
      try {
        const { error: dbError } = await supabase
          .from('contact_submissions')
          .insert([
            {
              name: form.name,
              email: form.email,
              message: form.message,
              contact_method: contactMethod
            }
          ]);

        if (dbError) {
          console.error('Error saving to database:', dbError);
          // Continue with EmailJS even if database save fails
        }
      } catch (error) {
        console.error('Unexpected database error:', error);
      }
    } else {
      console.warn('Supabase is not configured. Submission not saved to database.');
    }

    // Check if EmailJS environment variables are configured
    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      play("error");
      setToast({
        open: true,
        message:
          "EmailJS configuration is missing. Please check your environment variables.",
        type: "error",
      });
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          my_name: form.name,
          my_email: form.email,
          user_message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          play("success");
          setToast({
            open: true,
            message: "Thank you. I will get back to you as soon as possible.",
            type: "success",
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          play("error");
          setToast({
            open: true,
            message: "Ahh, something went wrong. Please try again.",
            type: "error",
          });
        }
      );
  };

  return (
    <>
      {toast.open && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, open: false })}
        />
      )}
      <div className="w-full min-h-screen">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            Get in touch
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Let's Work Together.
          </h2>
        </motion.div>

        {/* Response Time & Contact Methods */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-4"
        >
          {/* Response Time Indicator */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white/80 text-sm font-medium">Usually responds within 24 hours</span>
          </div>


        </motion.div>
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 lg:gap-10 overflow-hidden text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] w-full xl:w-[40rem] bg-[#111522] p-4 sm:p-6 lg:p-8 rounded-2xl"
          >
            {/* Contact Method Selector */}
            <div className="flex gap-2 mb-6 p-1 bg-[#07080d] rounded-lg">
              <button
                onClick={() => setContactMethod("email")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${contactMethod === "email"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg"
                  : "text-white/60 hover:text-white/80"
                  }`}
              >
                📧 Email
              </button>
              <button
                onClick={() => setContactMethod("linkedin")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${contactMethod === "linkedin"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg"
                  : "text-white/60 hover:text-white/80"
                  }`}
              >
                💼 LinkedIn
              </button>

            </div>

            {/* Conditional Content Based on Method */}
            {contactMethod === "email" && (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-6 sm:gap-8"
                id="contact"
              >
                <label className="flex flex-col">
                  <span className="font-medium text-[#8ec5ff] mb-2 sm:mb-4 text-sm sm:text-base">
                    Full name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-[#07080d] py-3 sm:py-4 px-4 sm:px-6 placeholder:text-[#fafafa8a] rounded-lg outline-none border-none font-medium text-sm sm:text-base w-full"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="font-medium text-[#8ec5ff] mb-2 sm:mb-4 text-sm sm:text-base">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="bg-[#07080d] py-3 sm:py-4 px-4 sm:px-6 placeholder:text-[#fafafa8a] rounded-lg outline-none border-none font-medium text-sm sm:text-base w-full"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="font-medium text-[#8ec5ff] mb-2 sm:mb-4 text-sm sm:text-base">
                    Your Message
                  </span>
                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project,"
                    className="bg-[#07080d] py-3 sm:py-4 px-4 sm:px-6 placeholder:text-[#fafafa8a] rounded-lg outline-none border-none font-medium text-sm sm:text-base w-full resize-none"
                  />
                </label>

                <button
                  ref={submitButtonRef}
                  type="submit"
                  style={magneticStyle}
                  className="bg-[#07080d] py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-sm sm:text-base hover:bg-[#0a0b12] transition-colors duration-200"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            )}

            {/* LinkedIn Method */}
            {contactMethod === "linkedin" && (
              <div className="mt-6 text-center">
                <p className="text-white/80 mb-6">
                  Let's connect on LinkedIn! I'm always open to professional networking and opportunities.
                </p>
                <a
                  href="https://www.linkedin.com/in/hanane-ghabbara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0077B5] hover:bg-[#006399] rounded-lg transition-colors duration-200 text-white font-semibold"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            )}


          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 my-auto h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-full"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
