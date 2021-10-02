/* eslint-disable react/jsx-no-target-blank */
import PencilIcon from '@heroicons/react/outline/PencilIcon'
import instagramIcon from '../assets/instagram.svg'
import twitterIcon from '../assets/twitter.svg'
import githubIcon from '../assets/github.svg'
import facebookIcon from '../assets/facebook.svg'
import mediumIcon from '../assets/medium.svg'
import devIcon from '../assets/devto.svg'

function SocialLinks ({alignment = 'start'}) {
  return (
    <div className={`flex mt-3 justify-center lg:justify-${alignment}`}>
      <a href="https://www.instagram.com/shahednasser95/" target="_blank" className="mr-3">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="https://twitter.com/shahednasserr" target="_blank" className="mr-3">
        <img src={twitterIcon} alt="Twitter" />
      </a>
      <a href="https://github.com/shahednasser" target="_blank" className="mr-3">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="https://www.facebook.com/shahednasser95" target="_blank" className="mr-3">
        <img src={facebookIcon} alt="Facebook" />
      </a>
      <a href="https://shahednasser.medium.com" target="_blank" className="mr-4">
        <img src={mediumIcon} alt="Medium" />
      </a>
      <a href="https://dev.to/shahednasser" target="_blank" className="mr-3">
        <img src={devIcon} alt="DEV.to" className="w-6 h-6" />
      </a>
      <a href="https://blog.shahednasser.com" target="_blank">
        <PencilIcon className="w-6 h-6" style={{color: '#e8e8e8'}} />
      </a>
    </div>
  )
}

export default SocialLinks