type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

function Button({ text, className, ...props }: Props) {
  return (
    <button
      className={`py-2 cursor-pointer rounded-md ${
        className || 'px-4 border border-neutral-100 text-neutral bg-base '
      }`}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
