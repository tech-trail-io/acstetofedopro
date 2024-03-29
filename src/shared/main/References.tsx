import { Reference } from '../../company.interface';
import ReferenceItem from './ReferenceItem';

function References({ references }: Readonly<{ references: Reference[] }>) {
  return (
    <section className="my-10 text-center">
      <div className="max-w-5xl mx-auto px-4">
        {references.map(({ description, images }, index) => (
          <div key={index} className="flex flex-wrap items-center mb-8">
            <div className="md:w-1/2">
              <ReferenceItem images={images}></ReferenceItem>
            </div>
            <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">{description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default References;
