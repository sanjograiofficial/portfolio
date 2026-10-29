import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputStyle =
    "w-full rounded-lg border border-black bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-white/40";

  return (
    <section className="min-h-screen p-6 w-screen bg-gray-400/50">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-center">
            Get in touch
          </p>

          <h1 className="text-5xl font-bold md:text-7xl text-center">
            Contact me
          </h1>

          <p className="mt-5 text-center">
            Have a project in mind, a question, or just want to connect? I'd
            love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact information */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="mb-3 text-2xl font-semibold">Let's talk.</h2>
              <p className="leading-7 ">
                I'm always interested in learning, building projects, and
                connecting with other developers.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl transition group-hover:bg-white/10">
                  @
                </span>
                <div>
                  <p className="text-sm">Email</p>
                  <p className="transition group-hover:">
                    raisanjog9840@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/sanjograiofficial/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl transition group-hover:bg-white/10">
                  GH
                </span>
                <div>
                  <p className="text-sm ">GitHub</p>
                  <p className="transition group-hover:">
                    Check out my projects
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sanjog-rai-b75285242/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold transition group-hover:bg-white/10">
                  in
                </span>
                <div>
                  <p className="text-sm text-zinc-500">LinkedIn</p>
                  <p className="transition group-hover:">
                    Let's connect professionally
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/2 p-6 md:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm ">
                Your name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={inputStyle}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm ">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={inputStyle}
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm ">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Let's work together"
                className={inputStyle}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className={`${inputStyle} resize-y`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send message ↗"}
            </button>

            <p className="text-center text-xs" role="status">
              {status || "I'll get back to you as soon as possible."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
