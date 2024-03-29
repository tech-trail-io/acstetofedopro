import { CompanyInfo } from '../../company.interface';

function Footer({
  companyName,
  phone,
  email,
  socialMedia,
}: Readonly<Partial<CompanyInfo>>) {
  return (
    <footer className="bg-primary text-white p-5">
      <div className="flex justify-between items-center">
        <div>
          <p>{companyName}</p>
          <p><a href={`tel:${phone}`}>{phone}</a></p>
          <p><a href={`mailto:${email}`}>{email}</a></p>
        </div>
        <div>
          {socialMedia?.map(({ link, title }) => (
            <a key={link} href={link} className="text-white p-4 hover:text-gray-900">
              {title}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {companyName} {new Date().getFullYear()}. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
}

export default Footer;
