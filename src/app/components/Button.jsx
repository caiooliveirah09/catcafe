export default function Button({ children, disabled, className = "" }) {
  return (
    <button
      className={`btn rounded-5 font-weight-600 w-100 ${className}`}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
