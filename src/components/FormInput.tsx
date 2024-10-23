interface Props {
  extraInputClass?: string;
  children?: React.ReactNode;
  extraContainerClass?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const FormInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & Props
> = (props) => {
  const {
    children,
    inputRef,
    extraInputClass,
    extraContainerClass,
    ...inputProps
  } = props;

  return (
    <div
      className={`overflow-clip relative rounded-xl flex items-center gap-1 border border-brand-silver ${extraContainerClass}`}
    >
      {children}
      <input
        ref={inputRef}
        {...inputProps}
        className={`py-4 px-5 bg-[#FAFAFA] w-full outline-0 placeholder:text-[#B0B0B0] placeholder:font-light duration-300 focus:bg-transparent ${extraInputClass}`}
      />
    </div>
  );
};

export default FormInput;
