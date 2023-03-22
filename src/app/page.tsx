import Contact from '@/components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
  return (
    <div className="flex flex-col justify-center px-8 pb-32 pt-20 md:pt-32 md:pb-36 lg:px-10 lg:py-36">
      <h1 className="text-6xl font-extrabold">
      <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Awesome AI Tools</span>
      </h1>
      <div>
        <FontAwesomeIcon icon={["fal", "coffee"]} />
          AI Text

        </div>
      <hr className="my-12 h-px border-0 bg-black dark:bg-[#292C2D]" />
      <Contact />
    </div>
  );
}
