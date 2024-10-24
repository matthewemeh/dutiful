interface Props {
  extraInputClass?: string;
  children?: React.ReactNode;
  extraContainerClass?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & Props> = props => {
  const { children, inputRef, extraInputClass, extraContainerClass, ...inputProps } = props;

  return (
    <div className={`input-container ${extraContainerClass}`}>
      {children}
      <input ref={inputRef} {...inputProps} className={extraInputClass} />
    </div>
  );
};

export default FormInput;
