export default function ContactSection() {
    return (
      <section id="contact" className="py-16 px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Contact</h2>
        <p className="text-secondary dark:text-gray-300 mb-6">
          Interested in collaboration or leadership opportunities? Let’s connect.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg px-5 py-3"
        >
          Email Me
        </a>
      </section>
    )
  }
  