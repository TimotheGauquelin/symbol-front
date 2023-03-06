import { Field, Form, Formik } from "formik";
import React from "react";
import FormikSelectInput from "../../generic/formik/FormikSelectInput";

const ApologyForm = () => {
  return (
    <Formik
      initialValues={{
        id: null,
        message: "",
        apologyTag: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form id="form" className="">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="mt-2 font-medium text-black">
              Type of Apology:{" "}
            </label>
            <Field
              type="number"
              name="apologyTag"
              dataArray={[{ label: "ABC" }, { label: "DEF" }]}
              component={FormikSelectInput}
            />
          </div>
          <label className="mt-2 font-medium text-black">Message: </label>
          <Field
            placeholder="Write a message.."
            className="mt-2 p-2 bg-gray-100 text-black rounded"
            type="text"
            name="message"
          />
        </div>
        <button className="bg-blue-300 p-2 rounded mt-3">Submit</button>
      </Form>
    </Formik>
  );
};

export default ApologyForm;
