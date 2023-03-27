import Contact from '@/components/Contact';
import Icon from '@/components/Icon';
import { AiFillFileText, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { SiAirplayaudio } from 'react-icons/si'
import { GiLargePaintBrush } from 'react-icons/gi'
import { AUDIO_TOOLS, PAINT_TOOLS, TEXT_TOOLS, VIDEO_TOOLS } from '@/lib/tools';

export default function Main() {

  return (
    <div className="flex flex-col justify-center px-8 pb-32 md:pb-36 lg:px-10 ">
      <h1 className="mb-10 text-center text-4xl font-extrabold">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent md:text-6xl lg:text-6xl">
          Awesome AI Tools</span>
      </h1>
      <div>
        <div className='flex gap-2'>
          <AiFillFileText size={30} />
          AI Text
        </div>
        <div className='my-4 grid grid-cols-4  border border-orange-500 p-2'>
          {TEXT_TOOLS.map((item, index) => (
            <Icon key={index} icon={item.icon} href={item.href} label={item.label} color={item.color}></Icon>
          ))}
        </div>
      </div>

      <div>
        <div className='flex gap-2'>
          <GiLargePaintBrush size={30} />
          AI Painting
        </div>
        <div className='my-4 grid grid-cols-4  border border-orange-500 p-2'>
          {PAINT_TOOLS.map((item, index) => (
            <Icon key={index} icon={item.icon} href={item.href} label={item.label}></Icon>
          ))}
        </div>
      </div>

      <div>
        <div className='flex gap-2'>
          <SiAirplayaudio size={30} />
          AI Audio
        </div>
        <div className='my-4 grid grid-cols-4  border border-orange-500 p-2'>
          {AUDIO_TOOLS.map((item, index) => (
            <Icon key={index} icon={item.icon} href={item.href} label={item.label}></Icon>
          ))}
        </div>
      </div>

      <div>
        <div className='flex gap-2'>
          <AiOutlineVideoCameraAdd size={30} />
          AI Video
        </div>
        <div className='my-4 grid grid-cols-4  border border-orange-500 p-2'>
          {VIDEO_TOOLS.map((item, index) => (
            <Icon key={index} icon={item.icon} href={item.href} label={item.label}></Icon>
          ))}
        </div>
      </div>
      <hr className="my-12 h-px border-0 bg-black dark:bg-[#292C2D]" />
      <Contact />
    </div>
  );
}
