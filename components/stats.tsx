export function Stats() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <p className="text-4xl font-bold">350+</p>
            <p className="text-sm opacity-80">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">400+</p>
            <p className="text-sm opacity-80">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">25+</p>
            <p className="text-sm opacity-80">Team Members</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">5+</p>
            <p className="text-sm opacity-80">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
