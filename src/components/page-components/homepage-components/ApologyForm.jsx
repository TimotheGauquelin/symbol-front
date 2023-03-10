import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import api_base from "../../../api/api_base";
import { apologyInitialValues } from "../../../constants/formikInitialValues";
import { URL_BACK_GET_ALL_APOLOGY_TAGS } from "../../../constants/urlsBack";
import { URL_FRONT_APOLOGY_PAGE } from "../../../constants/urlsFront";
import { apologyValidationSchema } from "../../../constants/yupSchema";
import Button from "../../generic/Button";
import FormikSelectInput from "../../generic/formik/FormikSelectInput";

const ApologyForm = ({ cancelModal }) => {
  const [apologyTags, setApologyTags] = useState(false);

  const navigate = useNavigate();

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

    api_base
      .post(`/public/apologies`, apologiesSchema)
      .then((response) => {
        if (response.status === 201) {
          navigate(URL_FRONT_APOLOGY_PAGE(response?.data?.httpCode));
        }
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  useEffect(() => {
    getAllApologyTags();
  }, []);

  return (
    <div>
      <Formik
        initialValues={apologyInitialValues}
        validationSchema={apologyValidationSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        <Form id="form" className="">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="mt-2 font-medium text-black">
                Type of Apology: *
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
          <Button type="submit" color="green" textButton="Submit" />
          <Button
            color="red"
            textButton="Cancel"
            action={() => {
              cancelModal();
            }}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default ApologyForm;
