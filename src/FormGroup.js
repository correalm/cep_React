import React from "react";

export function FormGroup({
  label,
  description,
  placeholder,
  func = null,
  value = undefined,
  readOnly = false,
}) {
  return (
    <div className="form-group">
      <label className="control-label" htmlFor={label}>
        {description.toUpperCase()}
      </label>
      <div className="controls">
        <input
          value={value === undefined ? undefined : value}
          onChange={typeof func === "function" ? func : null}
          className="form-control"
          type="text"
          id={label}
          placeholder={placeholder}
          readOnly={readOnly === false ? null : readOnly}
        />
      </div>
    </div>
  );
}
