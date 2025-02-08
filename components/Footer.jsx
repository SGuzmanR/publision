import Image from 'next/image';
import Link from 'next/link';

import { SocialLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className='h-screen bg-red'>
      <div className='flex flex-col justify-end items-center w-full h-full pb-6'>
        {/* Footer Contact */}
        <div className='w-full'>
          <div className='flex flex-row justify-between items-center w-full paddingX'>
            <h2 className='font-mulish text-8xl font-extrabold text-white'>CONTACTO</h2>

            <div className='font-mulish text-white flex flex-col justify-center items-end gap-1'>
              <p className='font-bold text-2xl'>Carrera 11 No. 10-39 | Zipaquirá, Colombia</p>
              <div className='flex flex-row gap-7 text-xl'>
                <p>+57 314 478 6497</p>
                <p>+57 321 326 7827</p>
              </div>
              <Link href="mailto:publision12@gmail.com" className='text-xl'>publision12@gmail.com</Link>
            </div>
          </div>

          {/* Google Maps */}
          <div className='w-full'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4889031666135!2d-74.00263752490606!3d5.0241551387684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4070274816a9c7%3A0x4605ad6f14022029!2sCra.%2011%20%237-7%2C%20Zipaquir%C3%A1%2C%20Cundinamarca!5e0!3m2!1sen!2sco!4v1739034955797!5m2!1sen!2sco" 
              width="100%" 
              height="400" 
              className="border-0" 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer Data */}
        <div className='flex flex-col w-full justify-center items-center paddingX'>
          <div className='flex flex-col items-center justify-center'>
            <Image src="/logo.svg" alt='logo' width={150} height={74} />
            <p className="font-caveat text-white text-2xl text-nowrap">Damos imagen a tus ideas</p>
            <div>
              {SocialLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <Image src={link.src} alt={link.name} width={25} height={25} />
                </Link>
              ))}
            </div>
          </div>

          <div className='flex w-full flex-row justify-between items-center text-white text-xs font-mulish'>
            <p>&copy; 2025 Publision. Todos los derechos reservados.</p>

            <p>Diseñador por <Link href="https://www.linkedin.com/in/sguzmanr/" target='_blank' className='hover:underline'>SGuzmanR</Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer