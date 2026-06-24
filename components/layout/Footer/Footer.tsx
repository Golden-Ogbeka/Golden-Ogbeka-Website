import Email from '../../../public/icons/email.png';
import Github from '../../../public/icons/github.png';
import Linkedin from '../../../public/icons/linkedin-white.png';
import Whatsapp from '../../../public/icons/whatsapp-white.png';
import { useTranslation } from 'next-i18next';
import SectionDivider from '../SectionDivider';
import ContactCard from './ContactCard';

function Footer() {
  const { t } = useTranslation(['common']);
  return (
    <>
      <SectionDivider />
      <footer id='contact'>
        <div className='flex flex-col max-w-screen-2xl mx-auto pb-20 px-4 sm:px-6 lg:px-8 justify-items-stretch gap-10 items-center'>
          <h2 className='uppercase font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 text-xl'>
            {t('footer.title')}
          </h2>
          <div className='grid md:grid-flow-col gap-3 lg:col-span-6 w-full'>
            <ContactCard
              text={t('footer.sendMessage')}
              icon={Whatsapp}
              href='https://wa.me/2348169200454'
            />
            <ContactCard
              text={t('footer.linkedin')}
              icon={Linkedin}
              href='https://www.linkedin.com/in/goldenogbeka/'
            />
            <ContactCard
              text={t('footer.sendEmail')}
              icon={Email}
              href='mailto:ogbekagolden@gmail.com'
            />
            <ContactCard
              text={t('footer.github')}
              icon={Github}
              href='https://github.com/Golden-Ogbeka'
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
