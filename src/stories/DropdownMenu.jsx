import "./DropdownMenu.scss";
import { useState } from "react";

export const DropdownMenu = ({ icon, options, className }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button className="dropdown-menu" onClick={toggleDropdownMenu}>
        <span className="dropdown-menu__icon-button">{icon}</span>
        {isDropdownMenuOpen && (
          <div className={`dropdown-menu__dropdown-container ${className}`}>
            <ul>
              {options.map((option, i) => (
                <li key={i} onClick={() => option.onClick(option.id)}>
                  <span className="dropdown-menu__dropdown-container__option-icon">
                    {option.icon}
                  </span>
                  <span>{option.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
    </div>
  );
}
