function Services() {
    return <section id="services" className="bg-gray-100 py-8">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-center text-3xl font-semibold mb-6">
        Szolgáltatásaink
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <img
            className="w-16 h-16 mx-auto mb-3"
            src="assets/services/roof-construction-icon.png"
            alt="Tetők"
          />

          <h3 className="text-lg font-semibold mb-2">Tetők</h3>
          <p className="text-gray-600">
            Minőségi tetőfedés és javítás, modern és hagyományos anyagokkal
            egyaránt.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 text-center">
          <img
            className="w-16 h-16 mx-auto mb-3"
            src="assets/services/renovation-icon.png"
            alt="Felújítás"
          />
          <h3 className="text-lg font-semibold mb-2">Felújítás</h3>
          <p className="text-gray-600">
            Teljes körű felújítási munkálatok, a tervezéstől a
            kivitelezésig.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 text-center">
          <img
            className="w-16 h-16 mx-auto mb-3"
            src="assets/services/general-execution-icon.png"
            alt="Generálkivitelezés"
          />
          <h3 className="text-lg font-semibold mb-2">Generálkivitelezés</h3>
          <p className="text-gray-600">
            A projekt kezdetétől a kulcsrakész átadásig, minden építési
            szakaszban.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 text-center">
          <img
            className="w-16 h-16 mx-auto mb-3"
            src="assets/services/hangar-construction-icon.png"
            alt="Csarnoképítés"
          />
          <h3 className="text-lg font-semibold mb-2">Csarnoképítés</h3>
          <p className="text-gray-600">
            Ipari és mezőgazdasági csarnokok tervezése és építése, magas
            szakmai színvonalon.
          </p>
        </div>
      </div>
    </div>
  </section>
}

export default Services;
