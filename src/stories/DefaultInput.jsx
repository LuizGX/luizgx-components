import './DefaultInput.scss'

export const DefaultInput = ({
  label,
  type,
  required,
  className,
  placeholder,
  maxLength,
}) => {
  return (
    <div className={`default-input ${className}`}>
      <label className="default-input__label">
        {label}
        {required && <span className="default-input__label__required">*</span>}
      </label>
      <input type={type} placeholder={placeholder} maxLength={maxLength} />
    </div>
  );
};