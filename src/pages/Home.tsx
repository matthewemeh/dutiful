import heroImage from 'assets/hero-img.png';
import reviewImage from 'assets/reviews.png';
import aboutImage from 'assets/about-product.png';
import appointmentsImage from 'assets/appointements.png';

const Home = () => {
  return (
    <main className='px-[4.44%] pb-[116px]'>
      <section className='flex justify-between'>
        <div className='main info-container mt-48 max-w-[560px]'>
          <h1 className='heading'>
            List and grow your business
            <br />
            with just few clicks
          </h1>
          <p className='sub-heading'>
            Eliminate manual work and save time by listing your business or service on the best
            business directory in Nigeria.
          </p>
        </div>
        <div className='mt-14'>
          <img src={heroImage} loading='eager' alt='' className='w-[674px] h-[563px]' />
        </div>
      </section>

      <section className='flex justify-between'>
        <div className='mt-18'>
          <img src={reviewImage} alt='' className='w-[593px] h-[580px]' />
        </div>
        <div className='info-container mt-60 max-w-[557px]'>
          <h2 className='heading'>
            Collect reviews and ratings
            <br />
            from customers
          </h2>
          <p className='sub-heading'>
            Accelerate your business reputation by 90% and gain social proof through reviews and
            ratings requested from customers.
          </p>
        </div>
      </section>

      <section className='flex justify-center'>
        <img src={aboutImage} loading='lazy' alt='' className='max-w-[1312px] w-full h-[866px]' />
      </section>

      <section className='flex justify-between gap-10 pl-[8.89%] pr-[5.56%]'>
        <div className='mt-32'>
          <img src={appointmentsImage} alt='' className='w-[521px] h-[477px]' />
        </div>
        <div className='info-container mt-44 max-w-[557px]'>
          <h3 className='heading'>Accept and sell appointments</h3>
          <p className='sub-heading'>
            Let customers book their own appointment or consultation. Start accepting payments for
            appointments through your booking page.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
