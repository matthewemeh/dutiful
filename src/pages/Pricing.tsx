import { Link } from 'react-router-dom';
import { PATHS } from 'routes/PathConstants';

type Package = {
  price: number;
  features: string[];
  type: 'basic' | 'standard' | 'premium';
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
    <main className='bg-white-lilac px-[4.44%] pb-[100px]'>
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

      <section className='pt-11'>
        <h2 className='font-medium text-[32px] leading-[46px] text-black'>Features Overview</h2>

        <table id='feature-overview' className='border w-full'>
          <thead>
            <tr className='pb-9'>
              <th className='font-450 text-2xl leading-[34px] text-storm-dust self-end text-left'>
                Features & Services
              </th>
              {packages.map(({ type }) => (
                <th key={type} className='package-heading'>
                  <p className='package-heading-text'>{type}</p>
                  <Link to={REGISTER} className='btn-primary w-full h-[51px]'>
                    Get started
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Access to dashboard</td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>No. of business listings</td>
              <td>2 businesses</td>
              <td>6 businesses</td>
              <td>10 businesses</td>
            </tr>
            <tr>
              <td>No. of products/services</td>
              <td>2</td>
              <td>6</td>
              <td>10</td>
            </tr>
            <tr>
              <td>No. of Images</td>
              <td>2</td>
              <td>4</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Keywords</td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Display service hours & prices</td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Display address, email & contact</td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Instant chat</td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Reviews & ratings</td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Profile visibility</td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Instant notifications</td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Display website & social network</td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Quotes</td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Bookmarks</td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Profile views</td>
              <td>
                <span className='is-failed' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Verified badge</td>
              <td>
                <span className='is-failed' />
              </td>
              <td>Purple</td>
              <td>Gold</td>
            </tr>
            <tr>
              <td>Latest offers</td>
              <td>
                <span className='is-failed' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>Accept & sell appointment</td>
              <td>
                <span className='is-failed' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
            <tr>
              <td>24/7 support</td>
              <td>
                <span className='is-failed' />
              </td>
              <td>
                <span className='is-failed' />
              </td>
              <td>
                <span className='is-checked' />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Pricing;
