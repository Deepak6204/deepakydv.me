const Contact = () => {
  return (
    <section className="py-24 px-8 bg-surface-container" id="contact">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="font-headline text-5xl font-extrabold tracking-tight text-on-surface">
            Let's build <br /> something real.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm">
            Available for software engineering roles, high-impact contract work,
            and collaboration on innovative projects.
          </p>
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-lg">
                  mail
                </span>
              </div>
              <span className="text-on-surface font-medium">
                deepaksyadav04@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-lg">
                  location_on
                </span>
              </div>
              <span className="text-on-surface font-medium">NIT Srinagar</span>
            </div>
          </div>
        </div>
        <div className="bg-surface p-10 rounded-[40px] shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">
                Full Name
              </label>
              <input
                className="w-full bg-surface-container-highest/30 border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary px-1 py-4 text-on-surface transition-all placeholder:text-outline/40"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">
                Email Address
              </label>
              <input
                className="w-full bg-surface-container-highest/30 border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary px-1 py-4 text-on-surface transition-all placeholder:text-outline/40"
                placeholder="john@example.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">
                Message
              </label>
              <textarea
                className="w-full bg-surface-container-highest/30 border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary px-1 py-4 text-on-surface transition-all placeholder:text-outline/40 resize-none"
                placeholder="Briefly describe your project..."
                rows={4}
              ></textarea>
            </div>
            <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-2xl mt-4 shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
