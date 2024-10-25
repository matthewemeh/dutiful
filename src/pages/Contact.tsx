import FormInput from 'components/FormInput';
import FormTextArea from 'components/FormTextarea';

const Contact = () => {
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className='relative w-full h-[268px] bg-center bg-cover bg-no-repeat bg-[url(./assets/get-in-touch.png)]'>
        <div className='absolute left-1/2 -translate-x-1/2 -bottom-30 w-[calc(100%-128px)] flex justify-between gap-8'>
          <div className='contact-info'>
            <div className='heading'>
              <span className='w-12 h-12 bg-center bg-no-repeat bg-[url(./assets/icons/sms-tracking.svg)]' />
              <p>Customer support</p>
            </div>
            <p className='content'>Please fill out the form below</p>
          </div>

          <div className='contact-info'>
            <div className='heading'>
              <span className='w-12 h-12 bg-center bg-no-repeat bg-[url(./assets/icons/map.svg)]' />
              <p>Business address</p>
            </div>
            <p className='content'>
              Suites (C113 & C114) Akord Shopping Mall,
              <br />
              Bogije, Elemoro, 101001,
              <br />
              Lagos, Nigeria
            </p>
          </div>

          <div className='contact-info'>
            <div className='heading'>
              <span className='w-12 h-12 bg-center bg-no-repeat bg-[url(./assets/icons/call.svg)]' />
              <p>Phone number</p>
            </div>
            <p className='content'>+234 903 921 6724</p>
          </div>
        </div>
      </div>

      <form
        className='flex flex-col mt-44 pb-14 max-w-[600px] mx-auto'
        onSubmit={handleSendMessage}>
        <div className='form-field'>
          <label htmlFor='fullName'>Full name</label>
          <FormInput required id='fullName' name='fullName' autoComplete='name' type='text' />
        </div>

        <div className='form-field mt-6'>
          <label htmlFor='email'>Email</label>
          <FormInput
            required
            id='email'
            name='email'
            type='email'
            inputMode='email'
            autoComplete='email'
          />
        </div>

        <div className='form-field mt-6'>
          <label htmlFor='businessType'>Business type (Optional)</label>
          <FormInput type='text' id='businessType' name='businessType' />
        </div>

        <div className='form-field mt-6'>
          <label htmlFor='subject'>Subject</label>
          <FormInput type='text' id='subject' name='subject'>
            <button className='w-6 h-6 absolute top-1/2 -translate-y-1/2 right-7 bg-center bg-no-repeat bg-[url(./assets/icons/chevron-down.svg)]' />
          </FormInput>
        </div>

        <div className='form-field mt-6'>
          <label htmlFor='message'>Write your message</label>
          <FormTextArea
            id='message'
            name='message'
            extraContainerClass='!h-unset'
            extraTextareaClass='min-h-[131px]'
          />
        </div>

        <button className='btn-primary mt-13'>Send message</button>
      </form>
    </main>
  );
};

export default Contact;
