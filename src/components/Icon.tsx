import { IconType } from 'react-icons';
import Image from 'next/image';

interface IconProps {
    icon: IconType | string;
    href: string;
    label: string;
    color?: string;
}

const Icon: React.FC<IconProps> = (props) => (
    <a
        href={props.href}
        className=" decoration-neutral-500 decoration-1 duration-500 ease-in-out "
        target="_blank"
        rel="noreferrer"
    >
        <div className='my-2 flex'>
            {typeof props.icon === 'string'
                ? <Image src={props.icon} alt={props.label} width="30" height="30"></Image> : <props.icon size='30' color={props.color} />}
            <span className='ml-2 text-blue-500 '>
                {props.label}
            </span>
        </div>
    </a>
);

export default Icon;