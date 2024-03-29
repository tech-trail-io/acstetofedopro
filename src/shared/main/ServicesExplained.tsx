function ServicesExplained() {
  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap items-center mb-8">
          <div className="md:w-1/2">
            <img
              className="w-full rounded-lg"
              src="assets/services/roof-construction.jpg"
              alt="Tetők"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
            <h3 className="text-2xl font-semibold mb-3">Tetők</h3>
            <p className="text-gray-600 mb-3">
              Minőségi tetőfedés és javítás, modern és hagyományos anyagokkal
              egyaránt. Gondoskodunk arról, hogy otthona vagy vállalkozása
              tetője időjárás álló és esztétikus legyen.
            </p>
            <a
              href="#"
              className="text-primary hover:text-primary_lighter font-semibold"
            >
              További információ
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center mb-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-3">Felújítás</h3>
            <p className="text-gray-600 mb-3">
              Teljes körű felújítási munkálatok, a tervezéstől a kivitelezésig.
              Profi csapatunk garantálja, hogy ingatlana megújuljon és értéke
              növekedjen.
            </p>
            <a
              href="#"
              className="text-primary hover:text-primary_lighter font-semibold"
            >
              További információ
            </a>
          </div>
          <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0 order-1 md:order-2">
            <img
              className="w-full rounded-lg"
              src="assets/services/renovation.jpg"
              alt="Felújítás"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center mb-8">
          <div className="md:w-1/2">
            <img
              className="w-full rounded-lg"
              src="assets/services/general-execution.jpeg"
              alt="Generálkivitelezés"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
            <h3 className="text-2xl font-semibold mb-3">Generálkivitelezés</h3>
            <p className="text-gray-600 mb-3">
              A projekt kezdetétől a kulcsrakész átadásig, minden építési
              szakaszban. Szakértelmünkkel és tapasztalatunkkal biztosítjuk
              projektje sikerét.
            </p>
            <a
              href="#"
              className="text-primary hover:text-primary_lighter font-semibold"
            >
              További információ
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center mb-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-3">Csarnoképítés</h3>
            <p className="text-gray-600 mb-3">
              Ipari és mezőgazdasági csarnokok tervezése és építése, magas
              szakmai színvonalon. Megbízható kivitelezés, tervezéstől a
              megvalósulásig.
            </p>
            <a
              href="#"
              className="text-primary hover:text-primary_lighter font-semibold"
            >
              További információ
            </a>
          </div>
          <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0 order-1 md:order-2">
            <img
              className="w-full rounded-lg"
              src="assets/services/hangar-construction.png"
              alt="Csarnoképítés"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServicesExplained;
