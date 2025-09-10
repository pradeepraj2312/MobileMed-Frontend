import React from "react";

const SelectField = ({ label, options, value, onChange }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <select value={value} onChange={onChange} className="form-input">
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

