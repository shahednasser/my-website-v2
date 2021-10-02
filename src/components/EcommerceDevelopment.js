import { useRef } from 'react'
import ecommerceImage from '../assets/ecommerce.png'
import useOnScreen from '../hooks/useOnScreen'
import aramexImage from '../assets/aramex.svg'
import magentoImage from '../assets/magento.svg'
import payfortImage from '../assets/payfort.png'
import prestashopImage from '../assets/prestashop.svg'
import stripeImage from '../assets/stripe.png'
import woocommerceImage from '../assets/woocommerce.svg'
import SkillImage from './SkillImage'

function EcommerceDevelopment () {
  const ref = useRef(null)
  const inView = useOnScreen(ref)


  return (
    <div className="bg-gray-200 p-10" ref={ref}>
      <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold lg:font-normal text-center mb-5 lg:mb-0">E-Commerce Development</h2>
      <div className="flex flex-col-reverse lg:flex-row mt-3">
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-10 mt-5 lg:mt-0 mb-5 lg:mb-0">
          <p className="text-xl md:text-2xl text-center lg:text-left">
            Developed big scale e-commerce stores, including payment gateways integrations, shipping method integrations,
            developing APIs for apps, custom module development in respective frameworks, and more. I have especially
            extensive experience in working with Magento 2.
          </p>
        </div>
        <div className={`rounded-full green-gradient-background overflow-hidden lg:w-96 lg:h-96 mx-auto animate__animated animate__fast animate__${inView ? 'flipInY' : 'flipOutY'}`}>
          <img src={ecommerceImage} alt="E-Commerce Development" />
        </div>
      </div>
      <h3 className="text-4xl lg:text-3xl text-center font-medium my-5 lg:my-3">Skills</h3>
      <div className="grid grid-cols-2 lg:grid-cols-6 justify-items-center items-center">
        <SkillImage image={magentoImage} alt="Magento 2" />
        <SkillImage image={prestashopImage} alt="Prestashop" />
        <SkillImage image={woocommerceImage} alt="Woocommerce" />
        <SkillImage image={stripeImage} alt="Stripe" />
        <SkillImage image={payfortImage} alt="Payfort" />
        <SkillImage image={aramexImage} alt="Aramex" />
      </div>
    </div>
  )
}

export default EcommerceDevelopment;