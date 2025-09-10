import React from "react";

const InputField = ({ label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-input"
      />
    </div>
  );
};

export default InputField;
