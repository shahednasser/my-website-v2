import { useRef } from 'react'
import SkillImage from './SkillImage'
import technicalWritingImage from '../assets/technical_writing.png'
import useOnScreen from '../hooks/useOnScreen'
import draftImage from '../assets/draft.webp'
import fingerprintjsImage from '../assets/fingerprintjs.png'
import logrocketImage from '../assets/logrocket.png'
import sajariImage from '../assets/sajari.png'
import sitepointImage from '../assets/sitepoint.png'
import Link from './Link'

function TechnicalWriting () {
  const ref = useRef(null)
  const inView = useOnScreen(ref)


  return (
    <div className="p-10 bg-white" ref={ref}>
      <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold lg:font-normal text-center mb-5 lg:mb-0">Technical Writing</h2>
      <div className="flex flex-col lg:flex-row mt-3">
        <div className={`rounded-full orange-gradient-background overflow-hidden lg:w-96 lg:h-96 animate__animated animate__fast animate__${inView ? 'flipInY' : 'flipOutY'}`}>
          <img src={technicalWritingImage} alt="Technical Writing" />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-10 mt-5 lg:mt-0 mb-5 lg:mb-0">
          <p className="text-xl md:text-2xl text-center lg:text-left">
            I write for <Link href="https://blog.shahednasser.com" label="my own blog" /> tutorials on web development, cross-platform app development, e-commerce development,
            browser extensions and more. I also write for a lot of online websites, content-writing agencies, and software
            companies.
          </p>
          <p className="text-blue-500 hidden" />
        </div>
      </div>
      <h3 className="text-4xl lg:text-3xl text-center font-medium my-5 lg:my-3">Wrote For</h3>
      <div className="grid grid-cols-2 lg:grid-cols-5 justify-items-center items-center">
        <SkillImage image={sitepointImage} alt="SitePoint" />
        <SkillImage image={draftImage} alt="Draft.dev" additionalClasses="rounded-full" />
        <SkillImage image={fingerprintjsImage} alt="FingerprintJS" />
        <SkillImage image={sajariImage} alt="Sajari" />
        <SkillImage image={logrocketImage} alt="LogRocket" />
      </div>
    </div>
  )
}

export default TechnicalWriting;