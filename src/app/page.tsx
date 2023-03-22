import Contact from '@/components/Contact';
import Icon from '@/components/Icon';
import { AiFillFileText, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { SiOpenai, SiNotion, SiAirplayaudio } from 'react-icons/si'
import {GiLargePaintBrush} from 'react-icons/gi'

export default function About() {
  const TEXT_TOOLS = [{ icon: SiOpenai, href: 'https://chat.openai.com/chat', label: 'Chatgpt' },
  { icon: SiNotion, href: 'https://notion.ai', label: 'Notion' },
  { icon: '/img/sidekick.jpeg', href: 'https://www.airops.com/', label: 'AI Data sidekick' },
  { icon: '/img/writesonic.jpeg', href: 'https://writesonic.com', label: 'Writesonic' },
  { icon: '/img/copyai.jpeg', href: 'https://www.copy.ai', label: 'Copy.ai' },
  ]
  const PAINT_TOOLS = [{ icon: '/img/midjourney.jpeg', href: 'https://www.midjourney.com', label: 'Midjourney' },
  { icon: '/img/photorroom.jpeg', href: 'https://www.photoroom.com', label: 'PhotorRoom' },
  { icon: '/img/printid.png', href: 'https://www.printidea.art/', label: '造梦师' },
  { icon: '/img/arc.jpeg', href: 'https://arc.tencent.com', label: 'ARC Lab' },
  { icon: '/img/artbreed.jpeg', href: 'artbreeder.com/', label: 'Artbreeder' },
  ]
  const AUDIO_TOOLS = [{ icon: '/img/brainfm.jpeg', href: 'https://www.brain.fm', label: 'Brain.fm' },
  { icon: '/img/soundraw.jpeg', href: 'https://soundraw.io', label: 'Soundraw' },
  { icon: '/img/endel.jpeg', href: 'https://endel.io', label: 'Endel' },
  { icon: '/img/riffusion.ico', href: 'https://www.riffusion.com/', label: 'Riffusion' },
  { icon: '/img/papercup.jpeg', href: 'https://www.papercup.com', label: 'Papercup' },
  ]
  const VIDEO_TOOLS = [{ icon: '/img/runway.jpeg', href: 'https://runwayml.com/', label: 'Runway' },
  { icon: '/img/cascadeur.jpg', href: 'https://cascadeur.com/', label: 'Cascadur' },
  { icon: '/img/synthesia-logo.jpeg', href: 'https://www.synthesia.io', label: 'Synthesia' },
  { icon: '/img/pollinations.jpeg', href: 'https://pollinations.ai', label: 'Pollinations' },
  { icon: '/img/zubtitl.jpeg', href: 'https://zubtitle.com', label: 'ZUBTITL' },
  ]

  return (
    <div className="flex flex-col justify-center px-8 pb-32 md:pb-36 lg:px-10 ">
      <h1 className="mb-10 text-6xl font-extrabold">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Awesome AI Tools</span>
      </h1>
      <div>
        <div className='flex gap-2'>
          <AiFillFileText size={30} />
          AI Text
        </div>
        <div className='my-4 grid grid-cols-4  border border-orange-500 p-2'>
          {TEXT_TOOLS.map((item, index) => (
            <Icon key={index} icon={item.icon} href={item.href} label={item.label}></Icon>
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
