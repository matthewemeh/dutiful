interface Props {
  extraInputClass?: string;
  extraContainerClass?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const Checkbox: React.FC<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & Props
> = props => {
  const { inputRef, extraInputClass, extraContainerClass, ...inputProps } = props;

  return (
    <label className={`checkbox-container ${extraContainerClass}`}>
      <input ref={inputRef} {...inputProps} type='checkbox' className={extraInputClass} />
      <div className='checkmark' />
    </label>
  );
};

export default Checkbox;
