export default function ExpertiseSection() {
    const items = [
      "Derivatives and Fixed Income Modeling",
      "Systematic and Algorithmic Strategies",
      "Risk Management and Pricing Analytics",
      "Blockchain Applications in Finance"
    ]
  
    return (
      <section id="expertise" className="py-16 px-6 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Expertise</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-accent">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    )
  }
  