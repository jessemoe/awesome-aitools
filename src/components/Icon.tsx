import { IconType } from 'react-icons';
import Image from 'next/image';

interface IconProps {
    icon: IconType | string;
    href: string;
    label: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, href, label }) => (
    <div className='my-2 flex'>
        {typeof IconComponent === 'string' ? <Image src={IconComponent} alt={label} width="30" height="30"></Image>: <IconComponent size='30'/>}
       
        <a
            href={href}
            className="ml-2 decoration-neutral-500 decoration-1 underline-offset-4 duration-500 ease-in-out hover:text-gray-500"
            target="_blank"
            rel="noreferrer"
        >
            {label}
        </a>
    </div>
);

export default Icon;