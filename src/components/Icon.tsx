import { IconType } from 'react-icons';
import Image from 'next/image';

interface IconProps {
    icon: IconType | string;
    href: string;
    label: string;
    color?: string;
}

const Icon: React.FC<IconProps> = (props) => (
    <div className='my-2 flex'>
        {typeof props.icon === 'string' ? <Image src={props.icon} alt={props.label} width="30" height="30"></Image>: <props.icon size='30' color={props.color}/>}
       
        <a
            href={props.href}
            className="ml-2 decoration-neutral-500 decoration-1 underline-offset-4 duration-500 ease-in-out hover:text-gray-500"
            target="_blank"
            rel="noreferrer"
        >
            {props.label}
        </a>
    </div>
);

export default Icon;