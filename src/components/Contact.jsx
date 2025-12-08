import { FaCheck, FaPaperPlane } from "react-icons/fa";
import useContact from "../hooks/useContact.js";
import { contactInfo } from "../data/contactData.js";
// import { contactInfo } from "react-icons/gr";

const Contact = () => {
  const {
    formData,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    error,
  } = useContact();

  return (
    <section className="section-padding">
      <div className="max-w-[1536px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto animate-fade-in-up delay-100">
            Interested in working together or have questions? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-6 card animate-fade-in-left">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="eg. Elon Musk"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="elon@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-transparent focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Hello Vasu, I'd like to recruit you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  isSubmitting
                    ? "bg-secondary text-white"
                    : isSubmitted
                    ? "bg-green-500 text-white"
                    : "btn-primary"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <FaCheck className="w-5 h-5" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <FaPaperPlane className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </button>
              {error && (
                <p className="text-red-500 text-sm text-center bg-primary/10">
                  Failed to send message. Try again later.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Wrapper = info.link === "#" ? "div" : "a";
                return (
                  <Wrapper
                    key={info.title}
                    href={info.link !== "#" ? info.link : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 card card-hover animate-fade-in-up"
                    style={{ animationDelay: `${100 + index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-text-muted">
                          {info.title}
                        </div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <div className="p-5 card animate-fade-in-up a-delay-400">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold mb-2">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-sm text-text-muted">
                I'm currently seeking frontend developer roles and freelance
                projects. Whether it's a full-time position or a project
                collaboration, I'd love to hear from you.
              </p>
            </div>

            <div className="p-5 card animate-fade-in-up a-delay-500">
              <h4 className="font-semibold mb-2">Quick Response</h4>
              <p className="text-sm text-text-muted">
                I typically respond to emails within 24 hours. For urgent
                matters, please include "URGENT" in the subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
