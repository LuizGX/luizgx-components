import "./SearchInput.scss";
import { DefaultButton } from "./DefaultButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const SearchInput = ({ placeholder, setSearchInputValue, className }) => {
  const [inputValue, setInputValue] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setSearchInputValue(inputValue);
    }
  }

  return (
    <div className={`search-input ${className}`}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder={placeholder}
        type="text"
      />
      <DefaultButton
        className="secondary-button"
        onClick={() => setSearchInputValue(inputValue)}
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
      />
    </div>
  );
}

export default SearchInput;
