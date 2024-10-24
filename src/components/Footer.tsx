import { Link } from 'react-router-dom';

import { PATHS } from 'routes/PathConstants';

import youtubeIcon from 'assets/icons/youtube.svg';
import appleIcon from 'assets/icons/apple-ios.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import linkedinIcon from 'assets/icons/linkedin.svg';
import facebookIcon from 'assets/icons/facebook.svg';
import instagramIcon from 'assets/icons/instagram.svg';
import playstoreIcon from 'assets/icons/playstore.svg';

const Footer = () => {
  const { PRICING, CONTACT } = PATHS;

  const footerLinks = [
    {
      heading: 'Company',
      links: [
        { title: 'About', link: '/' },
        { title: 'Contact us', link: CONTACT },
        { title: 'FAQs', link: '/' },
      ],
    },
    {
      heading: 'Quick Links',
      links: [
        { title: 'Find services', link: '' },
        { title: 'Pricing & plans', link: PRICING },
        { title: 'List your business', link: '/' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { title: 'Blog', link: '' },
        { title: 'Affiliate program', link: '/' },
      ],
    },
    {
      heading: 'More from Dutiful',
      links: [{ title: 'Dutiful jobs', link: '/' }],
    },
  ];

  const socialLinks = [
    { title: 'Facebook', icon: facebookIcon, url: '/' },
    { title: 'Instagram', icon: instagramIcon, url: '/' },
    { title: 'Twitter', icon: twitterIcon, url: '/' },
    { title: 'Youtube', icon: youtubeIcon, url: '/' },
    { title: 'Linkedin', icon: linkedinIcon, url: '/' },
  ];

  const appLinks = [
    { title: 'Apple Store', icon: appleIcon, url: '/' },
    { title: 'Google PlayStore', icon: playstoreIcon, url: '/' },
  ];

  return (
    <footer>
      <div className='flex justify-between'>
        {footerLinks.map(({ links, heading }) => (
          <div key={heading} className='flex flex-col gap-6'>
            <p className='font-medium text-[22px] leading-7'>{heading}</p>
            <div className='flex flex-col gap-3'>
              {links.map(({ link, title }) => (
                <Link key={title} to={link} className='w-fit nav-link'>
                  {title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='mt-11 py-6 border-y border-affair flex justify-between'>
        <div className='flex items-center gap-5'>
          <p className='font-medium text-lg leading-6'>Follow us</p>
          {socialLinks.map(({ icon, title, url }) => (
            <Link key={title} to={url} className='w-9 h-9'>
              <img src={icon} alt={`Follow Dutiful on ${title}`} />
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-6'>
          <p className='font-medium text-lg leading-6'>Download the app</p>
          {appLinks.map(({ icon, title, url }) => (
            <Link key={title} to={url} className='w-9 h-9'>
              <img src={icon} alt={`Get out app on ${title}`} />
            </Link>
          ))}
        </div>
      </div>

      <div className='mt-2.5 flex items-center gap-[100px]'>
        <p className='font-medium text-lg leading-[23px]'>&copy; 2022 Dutiful®</p>
        <div className='flex gap-8'>
          <Link to='/' className='nav-link'>
            Terms of Service
          </Link>
          <Link to='/' className='nav-link'>
            Privacy policy
          </Link>
          <Link to='/' className='nav-link'>
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
