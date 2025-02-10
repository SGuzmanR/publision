import Image from 'next/image';
import Link from 'next/link';

import { FooterSocialLinks } from '@/constants';

const Footer = () => {
  return (
    <footer id='contact' className='h-screen bg-red'>
      <div className='flex flex-col justify-between items-center w-full h-full pb-6'>
        {/* Footer Contact */}
        <div className='w-full flex flex-col pt-11'>
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
        </div>

        {/* Google Maps */}
        <div className='w-full'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7948.967992776947!2d-74.00232223900888!3d5.024959678596044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406fdb41414df7%3A0x9fa54805d302fcf5!2sAVISOS%20PUBLICIDAD%20PUBLISION!5e0!3m2!1sen!2sco!4v1739154935938!5m2!1sen!2sco"
            width="100%" 
            height="350" 
            className="border-0" 
            allowFullScreen
            loading="eager" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>

        {/* Footer Data */}
        <div className='flex flex-col w-full justify-center items-center paddingX gap-3'>
          <div className='flex flex-col items-center justify-center gap-7'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image src="/logo_W.svg" alt='logo' width={150} height={74} />
              <p className="font-caveat text-white text-2xl text-nowrap">Damos imagen a tus ideas</p>
            </div>

            <div className='flex flex-row items-center justify-center gap-3'>
              {FooterSocialLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <Image src={link.src} alt={link.name} width={25} height={25} className="hover:scale-105 transition-transform duration-300 will-change-transform" />
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