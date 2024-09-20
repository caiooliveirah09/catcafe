import InputMask from "react-input-mask";

export default function Input({
  type,
  label,
  placeholder,
  id,
  mask,
  maskChar,
  error,
  getFieldProps,
}) {
  const inputClassName = error ? "form-control input-error" : "form-control";
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      {mask ? (
        <InputMask
          mask={mask}
          replacement={"_"}
          maskChar={maskChar ? maskChar : " "}
          type={type}
          className={inputClassName}
          id={id}
          placeholder={placeholder}
          {...getFieldProps}
        />
      ) : (
        <input
          type={type}
          className={inputClassName}
          id={id}
          placeholder={placeholder}
          {...getFieldProps}
        />
      )}
    </>
  );
}
