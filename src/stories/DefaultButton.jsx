import "./DefaultButton.scss";

export const DefaultButton = ({ icon, children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`default-button ${className}`}>
      {icon && <span className="default-button__icon">{icon}</span>}
      {icon && children && <div className="default-button__spacer"></div>}
      {children && <span className="default-button__children">{children}</span>}
    </button>
  );
}
