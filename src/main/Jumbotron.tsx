import { scrollToSection } from '../utils/scroll';

function Jumbotron() {
    return <section className="jumbotron">
            <h1 className="text-4xl text-white font-bold mb-4 ">
            Gyors és Megbízható Tetőfedés Veszprém megyében!
            </h1>
            <p className="mb-6 text-white">Kérjen ingyenes árajánlatot most!</p>
            <button
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary_lighter">
                <i className="mr-4 fas fa-solid fa-envelope"></i>Árajánlat Kérés
            </button>
            <button
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary_lighter absolute bottom-4 right-4 md:bottom-8 md:right-8"
                onClick={() => scrollToSection('services')}>
            <i className="fas fa-chevron-down"></i>
            </button>
        </section>
}

export default Jumbotron;
