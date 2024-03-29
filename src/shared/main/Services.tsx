function Services() {
  const services = [
    {
      icon: 'assets/services/roof-construction-icon.png',
      title: 'Tetők',
      text: 'Minőségi tetőfedés és javítás, modern és hagyományos anyagokkal egyaránt.',
    },
    {
      icon: 'assets/services/renovation-icon.png',
      title: 'Felújítás',
      text: 'Teljes körű felújítási munkálatok, a tervezéstől a kivitelezésig.',
    },
    {
      icon: 'assets/services/general-execution-icon.png',
      title: 'Generálkivitelezés',
      text: 'A projekt kezdetétől a kulcsrakész átadásig, minden építési szakaszban.',
    },
    {
      icon: 'assets/services/hangar-construction-icon.png',
      title: 'Csarnoképítés',
      text: 'Ipari és mezőgazdasági csarnokok tervezése és építése, magas szakmai színvonalon.',
    },
  ];
  return (
    <section id="services" className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-6">
          Szolgáltatásaink
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map(({ icon, title, text }) => (
            <div key="title" className="bg-white rounded-lg shadow p-4 text-center">
              <img
                className="w-16 h-16 mx-auto mb-3"
                src={icon}
                alt={title}
              />

              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
