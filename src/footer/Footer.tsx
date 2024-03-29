function Footer() {
  return (
    <footer className="bg-primary text-white p-5">
      <div className="flex justify-between items-center">
        <div>
          <p>Cég Neve</p>
          <p>+36 30 123 4567</p>
          <p>info@cegneve.hu</p>
        </div>
        <div>
          <a href="#" className="text-white hover:text-gray-900">
            Facebook
          </a>
          <a href="#" className="text-white hover:text-gray-900 ml-4">
            Instagram
          </a>
          <a href="#" className="text-white hover:text-gray-900 ml-4">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; Cég Neve 2024. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
}

export default Footer;
