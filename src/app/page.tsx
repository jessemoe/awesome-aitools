import Contact from '@/components/Contact';
import Icon from '@/components/Icon';
import { AiFillFileText } from 'react-icons/ai';
import { SiOpenai, SiNotion, SiWritedotas } from 'react-icons/si'

export default function About() {
  const TEXT_TOOLS = [{ icon: SiOpenai, href: 'https://openai.com', label: 'Chatgpt' },
  { icon: SiNotion, href: 'https://notion.ai', label: 'Notion' },
  { icon: '/img/sidekick.avif', href: 'https://notion.ai', label: 'Notion' },
  { icon: '/img/writesonic.jpeg', href: 'https://notion.ai', label: 'Notion' },
  { icon: '/img/copyai.jpeg', href: 'https://notion.ai', label: 'Notion' },


  ]
  return (
    <div className="flex flex-col justify-center px-8 pb-32 pt-20 md:pt-32 md:pb-36 lg:px-10 lg:py-36">
      <h1 className="text-6xl font-extrabold">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Awesome AI Tools</span>
      </h1>
      <div>
        <div className='flex'>
          <AiFillFileText size={30} />
          AI Text
        </div>
        <div className='border border-orange-500'>
          {TEXT_TOOLS.map((item, index) => (
            <Icon key={index} icon={item.icon} href={item.href} label={item.label}></Icon>
          ))}
        </div>
      </div>
      <hr className="my-12 h-px border-0 bg-black dark:bg-[#292C2D]" />
      <Contact />
    </div>
  );
}
