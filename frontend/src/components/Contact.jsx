import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate sending message
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto-hide success message after 6 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden w-full">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-4 sm:left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm">
          <HiOutlineChatAlt2 className="text-purple-400 text-sm" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-200">Connect</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-400">
          Have an opening, collaboration idea, freelance project, or simply want to chat about tech? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info Cards & Social Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0e071c]/90 rounded-2xl border border-purple-500/20 p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.5)] space-y-6">
            <h3 className="text-xl font-bold text-white">
              Contact Information
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              I am actively looking for full-stack and frontend development opportunities and am available to collaborate immediately.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <a
                href="mailto:maruf04ahmed12rohan04@gmail.com"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-[#140a28] hover:bg-[#1b0d36] border border-purple-500/20 hover:border-purple-400 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0e071c] text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-zinc-400 font-semibold block">
                    Email Address
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors break-all">
                    maruf04ahmed12rohan04@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="https://wa.me/8801773532098?text=Hi%2C%20I%20saw%20your%20portfolio!"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-[#140a28] hover:bg-[#1b0d36] border border-purple-500/20 hover:border-purple-400 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0e071c] text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-zinc-400 font-semibold block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    +880 1773-532098
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#140a28] border border-purple-500/20">
                <div className="w-10 h-10 rounded-lg bg-[#0e071c] text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-2xs">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-zinc-400 font-semibold block">
                    Location
                  </span>
                  <span className="text-sm font-bold text-white">
                    Khulna, Bangladesh (Remote / On-site)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 border-t border-purple-500/20">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-3">
                Social Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Maruf-Ahmed-11"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-xl bg-[#140a28] border border-purple-500/20 hover:bg-purple-600 hover:text-white hover:border-purple-400 flex items-center justify-center text-zinc-300 transition shadow-2xs"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/maruf-ahmed-rohan/?isSelfProfile=true"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-xl bg-[#140a28] border border-purple-500/20 hover:bg-purple-600 hover:text-white hover:border-purple-400 flex items-center justify-center text-zinc-300 transition shadow-2xs"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://wa.me/8801773532098?text=Hi%2C%20I%20saw%20your%20portfolio!"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-[#140a28] border border-purple-500/20 hover:bg-purple-600 hover:text-white hover:border-purple-400 flex items-center justify-center text-zinc-300 transition shadow-2xs"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-[#0e071c]/90 rounded-2xl border border-purple-500/20 p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-zinc-400 mb-6">
              Fill out the form below and I'll respond as soon as possible.
            </p>

            {/* Success Toast */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-200 flex items-center gap-3 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <HiOutlineCheckCircle className="text-2xl text-purple-400 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white">Message sent successfully!</p>
                  <p className="text-xs text-zinc-300">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className="mb-6 p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-300 text-sm">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-300 uppercase mb-1.5">
                    Your Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-purple-500/25 bg-[#140a28] text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-zinc-300 uppercase mb-1.5">
                    Email Address <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-purple-500/25 bg-[#140a28] text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-zinc-300 uppercase mb-1.5">
                  Subject / Role
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-purple-500/25 bg-[#140a28] text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-zinc-300 uppercase mb-1.5">
                  Your Message <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Maruf! We'd love to connect with you regarding an opportunity..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-purple-500/25 bg-[#140a28] text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#a855f7] hover:from-[#a855f7] hover:to-[#c026d3] text-white font-bold px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(192,38,211,0.6)] border border-purple-400/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
