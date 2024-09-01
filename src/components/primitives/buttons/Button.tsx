interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ text, disabled, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      disabled={disabled}
      className="text-white flex w-full justify-center rounded-md bg-martian-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-martian-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-martian-600"
    >
      {text}
    </button>
  );
};
