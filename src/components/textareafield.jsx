import React from "react";

const TextAreaField = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={3}
        className="form-input"
      />
    </div>
  );
};

export default TextAreaField;
