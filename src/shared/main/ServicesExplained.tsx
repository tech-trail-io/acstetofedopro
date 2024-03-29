import { ServiceExplain } from '../../company.interface';

function ServicesExplained({
  servicesExplained,
}: {
  servicesExplained: ServiceExplain[];
}) {
  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto px-4">
        {servicesExplained.map(({ image, title, text, moreInfo }, index) => (
          <div className={`flex flex-wrap items-center mb-8`}>
            {index % 2 === 0 ? (
              <>
                <div className="md:w-1/2">
                  <img className="w-full rounded-lg" src={image} alt={title} />
                </div>
                <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                  <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-600 mb-3">{text}</p>
                  <a
                    href="#"
                    className="text-primary hover:text-primary_lighter font-semibold"
                    title={moreInfo}
                  >
                    További információ
                  </a>
                </div>
              </>
            ) : (
              <div className="flex flex-wrap items-center mb-8">
                <div className="md:w-1/2 order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-600 mb-3">{text}</p>
                  <a
                    href="#"
                    className="text-primary hover:text-primary_lighter font-semibold"
                    title={moreInfo}
                  >
                    További információ
                  </a>
                </div>
                <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0 order-1 md:order-2">
                  <img
                    className="w-full rounded-lg"
                    src={image}
                    alt="Felújítás"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default ServicesExplained;
