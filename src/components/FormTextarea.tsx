interface Props {
  children?: React.ReactNode;
  extraTextareaClass?: string;
  extraContainerClass?: string;
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
}

const FormTextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props> = props => {
  const { children, textareaRef, extraTextareaClass, extraContainerClass, ...textareaProps } =
    props;

  return (
    <div className={`text-area-container ${extraContainerClass}`}>
      {children}
      <textarea ref={textareaRef} {...textareaProps} className={`h-full ${extraTextareaClass}`} />
    </div>
  );
};

export default FormTextArea;
