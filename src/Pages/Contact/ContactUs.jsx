import React from 'react'
import Styles from './contactUs.module.css';
import DemoForm from '../../Components/DermoRequest/DemoForm';
import Award from '../../Assets/trophy.png';
import handShake from '../../Assets/handshake.png';
import milestone from '../../Assets/milestone.png';
import workStone from '../../Assets/workplace.png';
import phone from '../../Assets/phone.png';
import mail from '../../Assets/mail.png';
import address from '../../Assets/location.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
const ContactUs = () => {
  return (  
<>
     <div>
     <Container className="bg-transparent">
     <Row>
     <Col className='col-md-7'><DemoForm headText="Reach out to us anytime - we're here to assist you."/></Col>
     <Col className='flex items-center w-full'>
     <ul class="w-full flex flex-col  divide-y divide-gray-200">
           <li class="inline-flex items-center py-3 text-sm font-medium text-gray-800">
                <span><Image src={Award} width={70}/></span>
                <span className='pl-2'>
                <p> Unveiling Excellence</p>
                <p> Over half a decade of expertise in delivering innovative solutions.</p>
                </span>
           </li>
           <li class="inline-flex items-center  py-3 text-sm font-medium text-gray-800">
           <span><Image src={workStone} width={70}/></span>
                <span className='pl-2'>
                <p> Dynamic Workforce</p>
                <p> Over half a decade of expertise in delivering innovative solutions.</p>
                </span>
            </li>
            <li class="inline-flex items-center  py-3 text-sm font-medium text-gray-800">
            <span><Image src={handShake} width={70}/></span>
                <span className='pl-2'>
                <p> Global Acclaim and Trust</p>
                <p> Over half a decade of expertise in delivering innovative solutions.</p>
                </span>
            </li>
            <li class="inline-flex items-center  py-3 text-sm font-medium text-gray-800">
            <span><Image src={milestone} width={70}/></span>
                <span className='pl-2'>
                <p> Milestones of Impact</p>
                <p> Over half a decade of expertise in delivering innovative solutions.</p>
                </span>
            </li>
     </ul>
     </Col>
     </Row>   
      </Container>
      <div className={Styles.ContactContainer}>
             <h2 className='pt-4 text-white text-center'>Anything unclear or<br/><i>need help?</i></h2>
             <p className='pt-1 text-white text-center'>Relax, we are ready to support 24/7 for you</p>
             <div className='flex justify-between'>
                <div className='flex-1 pl-12 w-full'>
                <div className='flex items-center'>
                <span><Image src={phone} width={70}/></span>
                <span className='pl-2 text-white text-2xl fw-bold'>
                Our Contact
                </span>
                </div>
                <div className='pl-12 ml-8 pr-10'>
                <h6 className='text-white'>+923056871204</h6>
                </div>  

                <div className='flex items-center'>
                <span><Image src={mail} width={70}/></span>
                <span className='pl-2 text-white text-2xl fw-bold'>
                Our Mail
                </span>
                </div>
                <div className='pl-12 ml-8 pr-10'>
                <h6 className='text-white'>info@gadilglobal.com</h6>
                </div>  
                </div>
                <div className='w-[1px] bg-slate-200 h-[230px]'></div>
                <div className='flex-1 pl-4'>
                <div className='flex items-center'>
                <span><Image src={address} width={70}/></span>
                <span className='pl-2 text-white text-2xl fw-bold'>
                Our Office
                </span>
                </div>
                <div className='pl-2 pr-10'>
                <h3 className='text-white'>Technology Center - India</h3>
                <p className='text-white fw-bold'>Elnet Software City, TS 140, blocks 2 & 9, G4 A, Rajiv Gandi Salai, Taramani, Chennai, Tamil Nadu, India - 600 113</p>
                </div>
                </div>
             </div>
      </div>
     </div>



{/* for background animation */}
<div className={Styles.body}>
  <div className={Styles.ball}></div>
  <div className={Styles.ball_2}></div>
  <div className={Styles.ball_3}></div>
  <div className={Styles.ball_4}></div>
    </div>
    </>
  )
}

export default ContactUs