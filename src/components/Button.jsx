export const Button = ({ isLink, href, text, size: sz }) => {
  let size = sz;
  const baseStyle =
    "bg-blue-500 hover:bg-blue-100 border border-blue-500/35 hover:text-blue-500 text-white rounded-md font-semibold transition-all";

  const small = 0;
  const regular = 1;

  const regularClass = "py-1.75 px-3.5 text-sm";
  const smallClass = "px-3 py-0.75 text-xs";

  switch (size) {
    case small:
      size = smallClass;
      break
    case regular:
      size = regularClass;
      break
  }

  switch (isLink) {
    case true:
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyle} ${size}`}>
          {text}
        </a>
      );
    case false:
      return <button className={`${baseStyle} ${size}`}>{text}</button>;
  }

  return;
};

export const Link = ({ regular, text, href }) => {
  let style = ""
  const primaryStyle =
    "text-black font-semibold px-2.5 w-fit py-0.5 transition-all hover:text-neutral-800 underline decoration-dashed underline-offset-4 decoration-transparent hover:decoration-neutral-800";
  const regularStyle = "text-neutral-600 w-fit hover:text-neutral-900 transition-all hover:text-neutral-600 underline decoration-dashed underline-offset-4 decoration-transparent hover:decoration-neutral-600"
  
  switch (regular) {
    case true:
      style = regularStyle
      break
    case false: 
      style = primaryStyle
      break
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={style}>
      {text}
    </a>
  );
};
