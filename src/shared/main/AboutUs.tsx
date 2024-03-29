import { AboutUsItem } from '../../company.interface';

function AboutUs({
  aboutUs,
  ourStory,
}: {
  aboutUs: AboutUsItem[];
  ourStory: string;
}) {
  return (
    <section id="company-info" className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Rólunk</h2>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-${aboutUs.length} gap-6 mb-8`}
        >
          {aboutUs.map(({ title, text, icon }) => (
            <div
              key="title"
              className="bg-white rounded-lg shadow p-4 text-center"
            >
              <img className="w-16 h-16 mx-auto mb-3" src={icon} alt={title} />

              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="text-justify mb-8">
          <p className="mt-4 text-gray-600">{ourStory}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
