import { CompanyInfo } from "../company.interface";

function Header({ companyName, logo }: Readonly<Partial<CompanyInfo>>) {
    const menu = [
        { link: '#about', title: 'Rólunk' },
        { link: '#services', title: 'Szolgáltatások' },
        { link: '#references', title: 'Referenciák' },
        { link: '#contact', title: 'Kapcsolat' },
    ];

    return <header className="bg-primary p-2 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt={companyName} className="h-16 p-0 mr-4" />
        <span className="font-bold text-white text-xl">{companyName}</span>
      </div>
      <nav>
        <ul className="flex space-x-4 mr-4">
            {menu.map(({ link, title }) => 
                <li key={link}>
                    <a href={link} className="text-white hover:text-gray-900">{title}</a>
                </li>
            )}
        </ul>
      </nav>
    </header>
}

export default Header;
