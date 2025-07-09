import "./DefaultCheckbox.scss";

export const DefaultCheckbox = ({ label, checked, onChange, className }) => {
  return (
    <div className={`default-checkbox ${className}`}>
      {label ? (
        <label className="default-checkbox__label">
          <input className="default-checkbox__checkbox" type="checkbox" />{" "}
          {label}
        </label>
      ) : (
        <input
          value={checked}
          onChange={onChange}
          className="default-checkbox__checkbox"
          type="checkbox"
        />
      )}
    </div>
  );
}
