import { Link } from 'react-router-dom';
import { PATHS } from 'routes/PathConstants';

type Package = {
  price: number;
  type: 'basic' | 'standard' | 'premium';
  features: string[];
};

const Pricing = () => {
  const {
    AUTH: { REGISTER },
  } = PATHS;

  const packages: Package[] = [
    {
      price: 0,
      type: 'basic',
      features: [
        'Access to dashboard',
        'Add up to 2 businesses',
        'Add up to 2 products/services',
        'Add up to 2 Images',
        'Unlimited keywords',
        'Display service hours and prices',
        'Display address, contact and email',
        'Instant chat',
        'Reviews and ratings',
        'Profile visibility',
        'Instant notifications',
        'Display website and social network',
        'Quotes',
        'Bookmarks',
      ],
    },
    {
      price: 20_000,
      type: 'standard',
      features: [
        'Access to dashboard',
        'Add up to 6 businesses',
        'Add up to 6 products/services',
        'Add up to 4 Images',
        'Unlimited keywords',
        'Display service hours and prices',
        'Display address, contact and email',
        'Instant chat',
        'Reviews and ratings',
        'Profile visibility',
        'Instant notifications',
        'Display website and social network',
        'Quotes',
        'Bookmarks',
        'Number of  profile views',
        'Verified badge (purple)',
        'Accept & Sell appointment',
        'Latest offers',
      ],
    },
    {
      price: 30_000,
      type: 'premium',
      features: [
        'Access to dashboard',
        'Add up to 10 businesses',
        'Add up to 10 products/services',
        'Add up to 6 Images',
        'Unlimited keywords',
        'Display service hours and prices',
        'Display address, contact and email',
        'Instant chat',
        'Reviews and ratings',
        'Profile visibility',
        'Instant notifications',
        'Display website and social network',
        'Quotes',
        'Bookmarks',
        'Number of  profile views',
        'Verified badge (Gold)',
        'Accept & Sell appointment',
        'Latest offers',
        '24/7 service and support',
      ],
    },
  ];

  return (
    <main className='bg-white-lilac px-[4.44%]'>
      <div className='info-container bg-white -mx-[4.44%] pt-[69px] pb-14 text-center'>
        <h1 className='heading'>Plans to Suit Your Business Budget</h1>
        <p className='sub-heading max-w-[888px] mx-auto'>
          Our fully organized plans deliver valuable content that showcases your services and
          skills, drives Lead, covers all features, and gives customers a clear idea to be able to
          choose your services.
        </p>
      </div>

      <section className='mt-[95px] pb-5 flex items-stretch justify-between gap-8'>
        {packages.map(({ features, price, type }) => (
          <div key={type} className='package-card'>
            <p className='package-type'>{type}</p>
            <p className='package-price'>
              {price === 0 ? (
                'Free'
              ) : (
                <>
                  <sup>NGN</sup>
                  <span>{price.toLocaleString()}</span>
                  <sub>/year</sub>
                </>
              )}
            </p>
            <Link to={REGISTER} className='btn-primary w-full'>
              Get started
            </Link>
            <ul className='package-features'>
              {features.map(feature => (
                <li key={feature} className='package-feature'>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2></h2>
      </section>
    </main>
  );
};

export default Pricing;
