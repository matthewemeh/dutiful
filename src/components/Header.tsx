import { Link } from 'react-router-dom';

import { PATHS } from 'routes/PathConstants';

import logo from 'assets/brand/logo.png';

const Header = () => {
  const {
    HOME,
    PRICING,
    AUTH: { LOGIN, REGISTER },
  } = PATHS;

  return (
    <header className='bg-white h-[90px] flex gap-[85px] items-center border pl-[4.44%] pr-[3.33%] sticky top-0 z-10'>
      <div className='flex-grow'>
        <Link to={HOME} className='block w-30 h-[54px]'>
          <img src={logo} loading='eager' alt='Dutiful Logo' />
        </Link>
      </div>

      <nav>
        <Link to='/' className='nav-link'>
          Business Directory
        </Link>
        <Link to='/' className='nav-link'>
          Features
        </Link>
        <Link to={PRICING} className='nav-link'>
          Pricing
        </Link>
        <Link to='/' className='nav-link'>
          Blog
        </Link>
      </nav>

      <div className='auth-cta'>
        <Link to={LOGIN} className='font-medium text-xl leading-6 text-port-gore'>
          Login
        </Link>
        <Link to={REGISTER} className='btn-secondary w-[174px] h-15'>
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
