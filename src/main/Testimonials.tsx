import { Testimonial } from "../company.interface";

function Testimonials({ testimonials }: { testimonials: Testimonial[] } ) {
  return (
    <section id="testimonials" className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-6">
          Ügyfeleink mondták
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { testimonials?.map(({ name, picture, review }) => <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="w-24 h-24 mx-auto mb-3">
              <img
                className="w-full h-full rounded-full object-cover"
                src={picture}
                alt={name}
              />
            </div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <div className="text-yellow-400 mb-2">
              <span className="fas fa-star"></span>
              <span className="fas fa-star"></span>
              <span className="fas fa-star"></span>
              <span className="fas fa-star"></span>
              <span className="fas fa-star-half-alt"></span>
            </div>
            <blockquote className="text-gray-600">
              "{review}"
            </blockquote>
          </div>) }
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
