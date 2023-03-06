import React from "react";

const FormikSelectInput = ({
  dataArray,
  form: { setFieldValue },
  field: { name, value },
}) => {
  return (
    <div className="mt-2">
      <select
        className="text-black p-2 bg-gray-100 rounded"
        id="input-form"
        value={value?.label}
        onChange={(e) => {
          setFieldValue(name, { label: e.target.value });
        }}
      >
        <option value="">--- Chose a type of apology ---</option>
        {dataArray &&
          dataArray.map((op, index) => (
            <option key={index} value={op.label}>
              {op.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FormikSelectInput;
