import React from 'react'
import ServiceBox from './ServiceBox'
import SectionTitle from './generics/SectionTitle'
import Button from './generics/Button'



const OurServices = () => {
  return (
    <section className="our-services">
    <img className="background-lines" src="images/whitelines3.png" alt="" />
    <div className="container">
        <SectionTitle title ="Our Services" description="We Provide The Best Consulting Services" />
        <div className="examples">
            <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice" />
            <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startup" />
            <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financialadvice" />
            <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement" />
        </div>
        <Button title="Browse Services" url="/services" />
        
    </div>
</section>
  )
}

export default OurServices