import { FcGoogle } from "react-icons/fc"
import { SiMicrosoftbing, SiNotion, SiOpenai } from "react-icons/si"

export const TEXT_TOOLS = [
    { icon: SiOpenai, href: 'https://chat.openai.com/chat', label: 'Chatgpt' },
    { icon: SiMicrosoftbing, href: 'https://bing.com/new', label: 'New Bing', color: '#008CE2' },
    { icon: SiNotion, href: 'https://notion.ai', label: 'Notion' },
    { icon: '/img/loop.png', href: 'https://loop.microsoft.com/', label: 'Loop' },
    { icon: FcGoogle, href: 'https://bard.google.com/', label: 'Bard' },
    { icon: '/img/writesonic.jpeg', href: 'https://writesonic.com', label: 'Writesonic' },
    { icon: '/img/copyai.jpeg', href: 'https://www.copy.ai', label: 'Copy.ai' },
    { icon: '/img/sidekick.jpeg', href: 'https://www.airops.com/', label: 'AI Data sidekick' },
  ]
  export const PAINT_TOOLS = [
    { icon: '/img/paint.png', href: 'https://stablediffusionweb.com/', label: 'Stable Diffusion' },
    { icon: '/img/paint.png', href: 'https://github.com/cloneofsimo/lora', label: 'LoRA' },
    { icon: '/img/midjourney.jpeg', href: 'https://www.midjourney.com', label: 'Midjourney' },
    { icon: '/img/photorroom.jpeg', href: 'https://www.photoroom.com', label: 'PhotorRoom' },
    { icon: '/img/novelai.jpeg', href: 'https://novelai.net/', label: 'NovelAI' },
    { icon: '/img/printid.png', href: 'https://www.printidea.art/', label: '造梦师' },
    { icon: '/img/arc.jpeg', href: 'https://arc.tencent.com', label: 'ARC Lab' },
    { icon: '/img/artbreed.jpeg', href: 'artbreeder.com/', label: 'Artbreeder' },
  ]
  export const AUDIO_TOOLS = [
    { icon: '/img/brainfm.jpeg', href: 'https://www.brain.fm', label: 'Brain.fm' },
    { icon: '/img/soundraw.jpeg', href: 'https://soundraw.io', label: 'Soundraw' },
    { icon: '/img/endel.jpeg', href: 'https://endel.io', label: 'Endel' },
    { icon: '/img/riffusion.ico', href: 'https://www.riffusion.com/', label: 'Riffusion' },
    { icon: '/img/papercup.jpeg', href: 'https://www.papercup.com', label: 'Papercup' },
  ]
  export const VIDEO_TOOLS = [
    { icon: '/img/runway.jpeg', href: 'https://runwayml.com/', label: 'Runway' },
    { icon: '/img/cascadeur.jpg', href: 'https://cascadeur.com/', label: 'Cascadur' },
    { icon: '/img/synthesia-logo.jpeg', href: 'https://www.synthesia.io', label: 'Synthesia' },
    { icon: '/img/pollinations.jpeg', href: 'https://pollinations.ai', label: 'Pollinations' },
    { icon: '/img/zubtitl.jpeg', href: 'https://zubtitle.com', label: 'ZUBTITL' },
  ]