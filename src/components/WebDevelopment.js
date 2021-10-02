import { useRef } from 'react'
import webDevImage from '../assets/webdev.png'
import htmlImage from '../assets/html.svg'
import cssImage from '../assets/css.svg'
import javascriptImage from '../assets/javascript.svg'
import jqueryImage from '../assets/jquery.svg'
import nodejsImage from '../assets/nodejs.svg'
import laravelImage from '../assets/laravel.svg'
import lessImage from '../assets/less.svg'
import mongodbImage from '../assets/mongodb.svg'
import mysqlImage from '../assets/mysql.svg'
import nextjsImage from '../assets/nextjs.svg'
import npmImage from '../assets/npm.svg'
import phpImage from '../assets/php.svg'
import reactImage from '../assets/react.svg'
import sassImage from '../assets/sass.svg'
import tailwindcssImage from '../assets/tailwindcss.svg'
import webpackImage from '../assets/webpack.svg'
import useOnScreen from '../hooks/useOnScreen'
import SkillImage from './SkillImage'

function WebDevelopment () {
  const ref = useRef(null)
  const inView = useOnScreen(ref)

  return (
    <div className="bg-white p-10" ref={ref}>
      <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold lg:font-normal text-center mb-5 lg:mb-0">Web Development</h2>
      <div className="flex flex-col lg:flex-row mt-3">
        <div className={`rounded-full indigo-gradient-background overflow-hidden lg:w-96 lg:h-96 animate__animated animate__fast animate__${inView ? 'flipInY' : 'flipOutY'}`}>
          <img src={webDevImage} alt="Web Development" />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-10 mt-5 lg:mt-0 mb-5 lg:mb-0">
          <p className="text-xl md:text-2xl text-center lg:text-left">
            With +5 years of experience as a freelancer and full-time employee, I have worked with a lot of clients and businesses
            to develop high quality websites and web systems. Projects ranged from finance auditing systems, reservation and booking systems,
            to portfolio websites.
          </p>
        </div>
      </div>
      <h3 className="text-4xl lg:text-3xl text-center font-medium my-5 lg:my-3">Skills</h3>
      <div className="grid grid-cols-2 lg:grid-cols-8 justify-items-center">
        <SkillImage image={htmlImage} alt="HTML5" inView={inView} />
        <SkillImage image={cssImage} alt="CSS3" inView={inView} />
        <SkillImage image={javascriptImage} alt="JavaScript" inView={inView} />
        <SkillImage image={phpImage} alt="PHP" inView={inView} />
        <SkillImage image={jqueryImage} alt="jQuery" inView={inView} />
        <SkillImage image={nodejsImage} alt="Node.js" inView={inView} />
        <SkillImage image={laravelImage} alt="Laravel" inView={inView} />
        <SkillImage image={lessImage} alt="Less" inView={inView} />
        <SkillImage image={sassImage} alt="Sass" inView={inView} />
        <SkillImage image={mongodbImage} alt="MongoDB" inView={inView} />
        <SkillImage image={mysqlImage} alt="MySQL" inView={inView} />
        <SkillImage image={nextjsImage} alt="Next.js" inView={inView} />
        <SkillImage image={reactImage} alt="React" inView={inView} />
        <SkillImage image={tailwindcssImage} alt="Tailwind CSS" inView={inView} />
        <SkillImage image={npmImage} alt="NPM" inView={inView} />
        <SkillImage image={webpackImage} alt="Webpack" inView={inView} />
      </div>
    </div>
  )
}

export default WebDevelopment