/* eslint-disable react/jsx-no-target-blank */
import Typewriter from 'typewriter-effect'
import ArrowSmDownIcon from '@heroicons/react/outline/ArrowSmDownIcon'
import portfolioImage from '../assets/AVATARZ 4.png'
import SocialLinks from './SocialLinks'

function Header () {
  return (
    <div className="w-screen h-screen blue-gradient-background gradient-background-animated text-white lg:pt-5">
      <div className="w-full h-4/6 lg:h-5/6 flex flex-col-reverse lg:flex-row justify-center">
        <div className="flex justify-around items-center lg:w-1/2 w-full lg:h-full">
          <div className="mx-auto w-max text-center lg:text-left pl-0 md:pl-2 xl:pl-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl">Shahed Nasser</h1>
            <Typewriter
              options={{
                strings: ['Front-end Developer', 'Back-end Developer', 'Full-stack Developer', 'Technical Writer',
                'Blogger', 'Software Developer'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'text-md md:text-2xl lg:text-3xl font-mono',
                cursorClassName: 'text-md md:text-2xl lg:text-3xl'
              }}
            />
            <SocialLinks />
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex justify-center items-center">
          <div className="w-60 h-60 md:w-80 md:h-80 lg:w-5/6 max-h-full max-w-full lg:h-auto overflow-hidden rounded-full bg-gray-300 flex justify-center animate__animated animate__flipInY animate__fast">
            <img src={portfolioImage} alt="Shahed Nasser" />
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center flex-col w-full lg:h-1/6 h-2/6">
        <ArrowSmDownIcon className="w-10 h-10 animate-bounce" />
      </div>
    </div>
  )
}

export default Header