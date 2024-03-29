import { AboutUsItem } from '../../company.interface';

function AboutUs({ aboutUs }: { aboutUs: AboutUsItem[] }) {
  return (
    <section id="company-info" className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Rólunk</h2>
          <p className="mt-4 text-gray-600">
            Ismerje meg jobban vállalatunkat, történetünket és amit képviselünk.
          </p>
        </div>
        <div className="md:flex md:justify-around text-center md:text-left">
          {aboutUs.map(({ title, text }) => (
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
