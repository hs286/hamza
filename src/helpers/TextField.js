import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control rounded ${
          meta.touched && meta.error && "is-invalid"
        } ${meta.touched?null:"border"} ${meta.touched && meta.error && "is-invalid"?null :meta.touched?"border-success":"border-dark "}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error text-danger" />
    </div>
  );
};
