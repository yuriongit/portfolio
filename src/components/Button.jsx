export const Button = ({ isLink, secondary, href, onClick, text, size: sz }) => {
  let size = sz;
  const baseStyle =
    "border hover:cursor-pointer border-blue-500/35 rounded-md font-semibold transition-all";

  const small = 0;
  const regular = 1;

  const regularClass = "py-1.75 px-3.5 text-sm";
  const smallClass = "px-3 py-0.75 text-xs";

  switch (size) {
    case small:
      size = smallClass;
      break;
    case regular:
      size = regularClass;
      break;
  }

  const primaryStyle = "bg-blue-500 hover:bg-blue-500/85 text-white";
  const secondaryStyle = "bg-white text-blue-500 hover:bg-blue-500/6"

  const styleClass = secondary ? secondaryStyle : primaryStyle;

  const buttonClass = `${baseStyle} ${styleClass} ${size}`;

  if (isLink) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={() => onClick()} type="button" className={buttonClass}>
      {text}
    </button>
  );
};

export const Link = ({ regular, text, href }) => {
  let style = ""
  const primaryStyle =
    "text-black font-semibold px-2.5 w-fit py-0.5 transition-all hover:text-neutral-800 decoration-1 underline decoration-dashed underline-offset-4 decoration-transparent hover:decoration-neutral-800";
  const regularStyle = "text-neutral-600 w-fit decoration-1 hover:text-neutral-900 transition-all hover:text-neutral-600 underline decoration-dashed underline-offset-4 decoration-transparent hover:decoration-neutral-600"
  
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
