import './index.css';
import { scrollToSection } from './utils/scroll';

function App() {  

  return (
    <>
    <header className="bg-primary p-2 flex justify-between items-center bg-primary">
      <div className="flex items-center">
        <img src="assets/logo.png" alt="Cég Logó" className="h-16 p-0 mr-4" />
        <span className="font-bold text-white text-xl">Cég Neve</span>
      </div>
      <nav>
        <ul className="flex space-x-4 mr-4">
          <li>
            <a href="#about" className="text-white hover:text-gray-900">Rólunk</a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-gray-900"
              >Szolgáltatások</a
            >
          </li>
          <li>
            <a href="#references" className="text-white hover:text-gray-900"
              >Referenciák</a
            >
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-900"
              >Kapcsolat</a
            >
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <section className="jumbotron">
        <h1 className="text-4xl text-white font-bold mb-4 ">
          Gyors és Megbízható Tetőfedés Veszprém megyében!
        </h1>
        <p className="mb-6 text-white">Kérjen ingyenes árajánlatot most!</p>
        <button
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary_lighter"
        >
          <i className="mr-4 fas fa-solid fa-envelope"></i>Árajánlat Kérés
        </button>
        <button
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary_lighter absolute bottom-4 right-4 md:bottom-8 md:right-8"
          onClick={() => scrollToSection('services')}
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </section>

      <section id="services" className="bg-gray-100 py-8">
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
                >További információ</a
              >
            </div>
          </div>

          <div className="flex flex-wrap items-center mb-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-3">Felújítás</h3>
              <p className="text-gray-600 mb-3">
                Teljes körű felújítási munkálatok, a tervezéstől a
                kivitelezésig. Profi csapatunk garantálja, hogy ingatlana
                megújuljon és értéke növekedjen.
              </p>
              <a
                href="#"
                className="text-primary hover:text-primary_lighter font-semibold"
                >További információ</a
              >
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
                >További információ</a
              >
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
                >További információ</a
              >
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

      <section id="testimonials" className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl font-semibold mb-6">
            Ügyfeleink mondták
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <div className="w-24 h-24 mx-auto mb-3">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src="/path/to/profile-1.jpg"
                  alt="Profilkép 1"
                />
              </div>
              <h3 className="text-lg font-semibold">János</h3>
              <div className="text-yellow-400 mb-2">
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star-half-alt"></span>
              </div>
              <blockquote className="text-gray-600">
                "Nagyon elégedett vagyok a szolgáltatással, a munka gyors és
                szakszerű volt. Mindenkinek ajánlom!"
              </blockquote>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <div className="w-24 h-24 mx-auto mb-3">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src="/path/to/profile-2.jpg"
                  alt="Profilkép 2"
                />
              </div>
              <h3 className="text-lg font-semibold">Erika</h3>
              <div className="text-yellow-400 mb-2">
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="far fa-star"></span>
              </div>
              <blockquote className="text-gray-600">
                "A tetőm újra tökéletes állapotban van, köszönöm a gyors és
                hatékony munkát."
              </blockquote>
            </div>

            <div className="bg-white rounded-lg shadow p-4 text-center">
              <div className="w-24 h-24 mx-auto mb-3">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src="/path/to/profile-3.jpg"
                  alt="Profilkép 3"
                />
              </div>
              <h3 className="text-lg font-semibold">Péter</h3>
              <div className="text-yellow-400 mb-2">
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star-half-alt"></span>
                <span className="far fa-star"></span>
              </div>
              <blockquote className="text-gray-600">
                "Megbízható csapat, kiváló anyagokkal dolgoznak. A végeredmény
                minden várakozásomat felülmúlta."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="my-10">
        <form action="#" method="post" className="max-w-xl mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
              >Név</label
            >
            <input
              type="text"
              id="name"
              name="name"
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
              >Telefonszám</label
            >
            <input
              type="tel"
              id="phone"
              name="phone"
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
              >Üzenet</label
            >
            <textarea
              id="message"
              name="message"
              rows={4}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary_lighter"
            >
              Küldés
            </button>
          </div>
        </form>
      </section>

      <section className="my-10 text-center">
        <div className="inline-block">
          <img
            src="/path/to/guarantee-icon.png"
            alt="Garancia Ikon"
            className="mb-2"
          />
          <p>Garancia</p>
        </div>
        <div className="inline-block">
          <img
            src="/path/to/certification-icon.png"
            alt="Minősítések Ikon"
            className="mb-2"
          />
          <p>Mesterminősítés</p>
        </div>
        <div className="inline-block">
          <p>Referenciák száma: 123</p>
        </div>
      </section>

      <section id="company-info" className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Céginformáció</h2>
            <p className="mt-4 text-gray-600">
              Ismerje meg jobban vállalatunkat, történetünket és amit
              képviselünk.
            </p>
          </div>

          <div className="md:flex md:justify-around text-center md:text-left">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-3">Rólunk</h3>
              <p className="text-gray-600">
                Cégünk több évtizedes szakmai tapasztalattal rendelkezik a
                tetőépítés és felújítás területén. Elkötelezettek vagyunk az
                innováció és a hagyományok ötvözése mellett.
              </p>
            </div>

            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-3">Küldetésünk</h3>
              <p className="text-gray-600">
                Célunk, hogy biztosítsuk ügyfeleink számára a legmagasabb
                minőségű szolgáltatást, miközben fenntartható megoldásokat
                kínálunk a tetők építésére és karbantartására.
              </p>
            </div>

            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-3">Értékeink</h3>
              <p className="text-gray-600">
                Szakértelem, megbízhatóság és ügyfélközpontúság jellemzi
                munkánkat. Büszkék vagyunk arra, hogy ügyfeleink bizalmát hosszú
                távon élvezzük.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-primary text-white p-5">
      <div className="flex justify-between items-center">
        <div>
          <p>Cég Neve</p>
          <p>+36 30 123 4567</p>
          <p>info@cegneve.hu</p>
        </div>
        <div>
          <a href="#" className="text-white hover:text-gray-900">Facebook</a>
          <a href="#" className="text-white hover:text-gray-900 ml-4">Instagram</a>
          <a href="#" className="text-white hover:text-gray-900 ml-4">LinkedIn</a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; Cég Neve 2024. Minden jog fenntartva.</p>
      </div>
    </footer>
    </>
  );
}

export default App;
