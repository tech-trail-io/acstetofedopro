function Testimonials() {
  return (
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
  );
}
export default Testimonials;
