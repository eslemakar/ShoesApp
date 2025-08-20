import type { FC } from "react";
import { Field } from "formik";
import { ErrorMessage } from "formik";

interface Props {
  label: string;
  name: string;
  type: string;
}
const Input: FC<Props> = ({ label, name, type }) => {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block text-sm/6 font-medium text-gray-800"
      >
        {label}
      </label>
      <div className="mt-2">
        <Field
          id={name}
          name={name}
          type={type}
          required
          autoComplete={name}
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        />
        <ErrorMessage
          name={name}
          component="div"
          className="text-sm text-red-500 absolute bottom-[-22px]"
        />
      </div>
    </div>
  );
};

export default Input;
