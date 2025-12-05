import React from "react";

const Contact = () => {
  return (
    <section className="font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-300 min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4">
        <main className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-12 py-16">
          <header className="text-center">
            <h1 className="text-4xl font-bold tracking-wider text-gray-900 dark:text-white uppercase mb-4">
              CONTACT
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">
              I'd love to hear from you—reach out for any opportunities or
              questions!
            </p>
          </header>
          <div className="w-full max-w-md bg-white/5 dark:bg-gray-500/5 border border-white/10 dark:border-gray-700/50 rounded-lg p-8 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              Connect With Me
              <span className="ml-2 text-lg">🚀</span>
            </h2>
            <form action="#" className="space-y-6" method="POST">
              <div>
                <label className="sr-only" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="w-full bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-md py-3 px-4 focus:ring-primary focus:border-primary transition duration-200"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-md py-3 px-4 focus:ring-primary focus:border-primary transition duration-200"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-md py-3 px-4 focus:ring-primary focus:border-primary transition duration-200"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-md py-3 px-4 focus:ring-primary focus:border-primary transition duration-200 resize-none"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-pink-500 transition-opacity duration-300"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Contact;
