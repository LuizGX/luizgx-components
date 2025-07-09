import "./DefaultSelect.scss";
import { useState, useEffect, useRef } from "react";

const Icon = ({ isOpen }) => {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? 'translate' : ''}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
};

export const DefaultSelect = ({ placeholder, options, isSearchable, onChange, align }) => {
  // State variables using React hooks
  const [showMenu, setShowMenu] = useState(false); // Controls the visibility of the dropdown menu
  const [selectedValue, setSelectedValue] = useState(null); // Stores the selected value(s)
  const [searchValue, setSearchValue] = useState(""); // Stores the value entered in the search input
  const searchRef = useRef(); // Reference to the search input element
  const inputRef = useRef(); // Reference to the custom select input element

  useEffect(() => {
      setSearchValue("");
      if (showMenu && searchRef.current) {
          searchRef.current.focus();
      }
  }, [showMenu]);

  useEffect(() => {
      const handler = (e) => {
          if (inputRef.current && !inputRef.current.contains(e.target)) {
              setShowMenu(false);
          }
      };

      window.addEventListener("click", handler);
      return () => {
          window.removeEventListener("click", handler);
      };
  });

  const handleInputClick = (e) => {
      setShowMenu(!showMenu);
  };

  const getDisplay = () => {
      if (!selectedValue || selectedValue.length === 0) {
          return placeholder;
      }

      return selectedValue.label;
  };

  const onItemClick = (option) => {
    let newValue;
    newValue = option;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const isSelected = (option) => {
      if (!selectedValue) {
          return false;
      }

      return selectedValue.value === option.value;
  };

  const onSearch = (e) => {
      setSearchValue(e.target.value);
  };

  const getOptions = () => {
      if (!searchValue) {
          return options;
      }

      return options.filter(
          (option) =>
              option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
      );
  };

  return (
    <div className="default-select">
      <div
        ref={inputRef}
        onClick={handleInputClick}
        className="default-select__dropdown-input">
        <div
          className={`default-select__dropdown-input__value ${
            !selectedValue || selectedValue.length === 0 ? "placeholder" : ""
          }`}>
          {getDisplay()}
        </div>
        <div className="default-select__dropdown-input__tools">
          <div className="default-select__dropdown-input__tools__tool">
            <Icon isOpen={showMenu} />
          </div>
        </div>
      </div>

      {showMenu && (
        <div
          className={`default-select__dropdown-menu alignment--${
            align || "auto"
          }`}>
          {isSearchable && (
            <div className="default-select__dropdown-menu__search-box">
              <input onChange={onSearch} value={searchValue} ref={searchRef} />
            </div>
          )}
          {getOptions().map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`default-select__dropdown-menu__item ${
                isSelected(option) ? "selected" : ""
              }`}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}