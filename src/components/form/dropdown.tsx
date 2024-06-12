import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  className: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, className }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
   const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
      <select className={className} value={selectedOption} onChange={handleChange}>
        <option value='' disabled>
          {t('select-option')}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
  );
};

export default Dropdown;
