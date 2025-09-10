import React, { useState } from "react";
import InputField from "./inputfield";
import SelectField from "./selectfield";
import TextAreaField from "./textareafield";

const AddPatientForm= () => {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    gender: "",
    contact: "",
    symptoms: "",
    temperature: "",
    language: "",
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Record Submitted:", form);
    // TODO: connect with backend API
  };

  const formFields = [
    {
      type: "input",
      label: "Full Name",
      field: "fullName",
      placeholder: "Enter patient's full name",
    },
    {
      type: "row",
      fields: [
        {
          type: "input",
          label: "Age",
          field: "age",
          inputType: "number",
          placeholder: "Enter age",
        },
        {
          type: "select",
          label: "Gender",
          field: "gender",
          options: ["Male", "Female", "Other"],
        },
      ],
    },
    {
      type: "input",
      label: "Contact Number",
      field: "contact",
      inputType: "tel",
      placeholder: "Enter contact number",
    },
    {
      type: "textarea",
      label: "Initial Symptoms",
      field: "symptoms",
      placeholder: "Describe initial symptoms",
    },
    {
      type: "row",
      fields: [
        {
          type: "input",
          label: "Temperature (°C)",
          field: "temperature",
          inputType: "number",
          placeholder: "e.g., 37.5",
        },
        {
          type: "select",
          label: "Native Language",
          field: "language",
          options: ["English", "Hindi", "Tamil", "Telugu", "Other"],
        },
      ],
    },
  ];

  const renderField = (field) => {
    if (field.type === "input") {
      return (
        <InputField
          key={field.field}
          label={field.label}
          type={field.inputType || "text"}
          placeholder={field.placeholder}
          value={form[field.field]}
          onChange={handleChange(field.field)}
        />
      );
    }

    if (field.type === "select") {
      return (
        <SelectField
          key={field.field}
          label={field.label}
          options={field.options}
          value={form[field.field]}
          onChange={handleChange(field.field)}
        />
      );
    }

    if (field.type === "textarea") {
      return (
        <TextAreaField
          key={field.field}
          label={field.label}
          placeholder={field.placeholder}
          value={form[field.field]}
          onChange={handleChange(field.field)}
        />
      );
    }

    if (field.type === "row") {
      return (
        <div className="form-row" key={field.fields.map((f) => f.field).join("-")}>
          {field.fields.map((nestedField) => renderField(nestedField))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Patient</h2>
      <p className="form-subtitle">
        Fill in the details below to add a new patient record.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        {formFields.map((field) => renderField(field))}

        <button type="submit" className="form-button">
          Add Patient Record
        </button>
      </form>
    </div>
  );
};

export default AddPatientForm;
