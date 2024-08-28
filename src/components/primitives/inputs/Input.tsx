interface Props {
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
}

export const Input = ({ type, label, placeholder }: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        {label ?? (
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
        )}
      </div>
      <div className="mt-2">
        <input
          placeholder={placeholder}
          type={type ?? "text"}
          required
          autoComplete="current-password"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-martian-400 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-martian-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};
