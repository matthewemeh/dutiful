export const toggleClass = (element?: HTMLElement | null, ...classes: string[]) => {
  if (element) classes.forEach(className => element.classList.toggle(className));
};

export const addClass = (element?: HTMLElement | null, ...classes: string[]) => {
  if (element) classes.forEach(className => element.classList.add(className));
};

export const removeClass = (element?: HTMLElement | null, ...classes: string[]) => {
  if (element) classes.forEach(className => element.classList.remove(className));
};

export const formatInputText = ({
  text,
  regex,
  allowedChars,
  disallowedChars,
}: FormatInputTextProps): string => {
  let newValue: string = text;
  const characters: string[] = text.split('');

  if (allowedChars) {
    newValue = characters.map(char => (allowedChars.includes(char) ? char : '')).join('');
  } else if (disallowedChars) {
    newValue = characters.map(char => (disallowedChars.includes(char) ? '' : char)).join('');
  } else if (regex) {
    // this tests each individual character and not the string as a whole
    newValue = characters.map(char => (regex.test(char) ? char : '')).join('');
  }

  return newValue;
};
