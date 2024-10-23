interface Props {
  otp: string;
  numberOfDigits?: number;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}

const OtpInput: React.FC<Props> = ({ otp, setOtp, numberOfDigits = 5 }) => {
  const updateOtp = (e: React.ChangeEvent<HTMLInputElement>) => {
    let formatedOtp: string;
    const typedCharacter = e.target.value;
    const pressedBackspace = typedCharacter.length === 0;

    if (pressedBackspace) {
      // remove last typed character from otp
      formatedOtp = otp.slice(0, otp.length - 1);
    } else {
      // append typed character to otp
      formatedOtp = otp.concat(typedCharacter);
    }

    setOtp(formatedOtp);
  };

  const updateFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputTag = e.currentTarget;
    type InputElement = HTMLInputElement | null;

    if (inputTag.value.length === 1) {
      const nextSibling = inputTag.nextElementSibling as InputElement;
      nextSibling?.focus();
    } else if (e.key === "Backspace") {
      const previousSibling = inputTag.previousElementSibling as InputElement;
      previousSibling?.focus();
    }
  };

  const otpInputs = Array.from({ length: numberOfDigits }, (_, index) => {
    const isFirstInput = index === 0;
    const value = otp.charAt(index);

    return (
      <input
        type="text"
        key={index}
        value={value}
        maxLength={1}
        placeholder="-"
        autoComplete="off"
        inputMode="numeric"
        onChange={updateOtp}
        onKeyUp={updateFocus}
        autoFocus={isFirstInput}
        className={`w-full aspect-square flex text-center rounded-lg border border-brand-silver duration-300 focus:bg-transparent lg:w-20 lg:h-20 ${
          value ? "bg-transparent" : "bg-brand-lightgray"
        }`}
      />
    );
  });

  return (
    <div className="flex items-center justify-center gap-x-2">{otpInputs}</div>
  );
};
export default OtpInput;
