import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import api_base from "../../../api/api_base";
import { URL_BACK_GET_ALL_APOLOGY_TAGS } from "../../../constants/urlsBack";
import FormikSelectInput from "../../generic/formik/FormikSelectInput";
import * as yup from "yup";

const ApologyForm = () => {
  const [apologyTags, setApologyTags] = useState(false);

  const validationSchema = yup.object().shape({
    message: yup
      .string()
      .required("Message is required")
      .min(5, "5 characters min.")
      .max(255, "255 characters max.")
      .trim(),
    apologyTag: yup.object().shape({
      // label: yup.string().required("Is required"),
    }),
  });

  const getAllApologyTags = () => {
    api_base.get(URL_BACK_GET_ALL_APOLOGY_TAGS).then((response) => {
      if (response.status === 200) {
        setApologyTags(response.data);
      }
    });
  };

  const onSubmit = (values) => {
    const apologiesSchema = {
      id: values?.id,
      message: values?.message,
      apologyTag: values?.apologyTag,
    };

    api_base.post(`/public/apologies`, apologiesSchema).then((response) => {
      if (response.status === 201) {
      }
    });
  };

  useEffect(() => {
    getAllApologyTags();
  }, []);

  const initialValues = {
    id: null,
    message: "",
    apologyTag: { label: "" },
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
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
              dataArray={apologyTags}
              component={FormikSelectInput}
            />
            <div className="text-red-800">
              <ErrorMessage name="apologyTag" className="bg-red-200" />
            </div>
          </div>
          <label className="mt-2 font-medium text-black">Message: *</label>
          <Field
            placeholder="Write a message.."
            className="mt-2 p-2 bg-gray-100 text-black rounded"
            type="text"
            name="message"
          />
          <div className="text-red-800">
            <ErrorMessage name="message" className="bg-red-200" />
          </div>
        </div>
        <button className="bg-blue-300 p-2 rounded mt-3">Submit</button>
      </Form>
    </Formik>
  );
};

export default ApologyForm;
