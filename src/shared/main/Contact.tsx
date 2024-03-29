function Contact() {
  return (
    <section id="contact" className="my-10">
        <h2 className="text-center text-3xl font-semibold mb-6">
          Kérje ajánlatunkat
        </h2>
      <form action="#" method="post" className="max-w-xl mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Név
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
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
          >
            Telefonszám
          </label>
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
          >
            Üzenet
          </label>
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
  );
}

export default Contact;
