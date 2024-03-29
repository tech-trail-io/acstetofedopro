function CompanyInfo() {
  return (
    <section id="company-info" className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Céginformáció</h2>
          <p className="mt-4 text-gray-600">
            Ismerje meg jobban vállalatunkat, történetünket és amit képviselünk.
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
              Célunk, hogy biztosítsuk ügyfeleink számára a legmagasabb minőségű
              szolgáltatást, miközben fenntartható megoldásokat kínálunk a tetők
              építésére és karbantartására.
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
  );
}

export default CompanyInfo;
