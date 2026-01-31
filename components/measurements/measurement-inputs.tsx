import React from "react";

type FormInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
};

const MeasurmentFormInput = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
  name,
}: FormInputProps) => {
  return (
    <div>
      <label className="block text-[13px] font-medium text-black mb-2">
        {label}
        {required && (
          <span className="text-red-500">
            * <span className="text-xs italic">(required)</span>
          </span>
        )}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm text-sm placeholder-gray-400 placeholder:text-xs
                   focus:outline-none focus:ring-2 focus:ring-yellow-500/80 focus:border-transparent"
      />
    </div>
  );
}

export default MeasurmentFormInput
