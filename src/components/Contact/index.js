import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik, Formik} from "formik";
import { signupValidation } from "../../signupValidation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(355, 82%, 41%, 1);
  background: linear-gradient(
    225deg,
    hsla(355, 82%, 41%, 1) 0%,
    hsla(26, 86%, 66%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(355, 82%, 41%, 1) 0%,
    hsla(26, 86%, 66%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(355, 82%, 41%, 1) 0%,
    hsla(26, 86%, 66%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const initialValues = {
  from_email: "",
  from_name: "",
  subject: "",
  message: "",
};

const Contact = () => {

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signupValidation,
    onSubmit: (values,action) => {
      console.log(values);
      toast.success(" Thank You for Contacting Me!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      action.resetForm();
    },
  });

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <Formik
          initialValues={initialValues}
          validationSchema={signupValidation}
        >
          <ContactForm onSubmit={handleSubmit} >
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput
              placeholder="Your Email"
              name="from_email"
              value={values.from_email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <small className="errors">{errors.from_email}</small>
            <ContactInput
              placeholder="Your Name"
              name="from_name"
              value={values.from_name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <small className="errors">{errors.from_name}</small>
            <ContactInput
              placeholder="Subject"
              name="subject"
              value={values.subject}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <ContactInputMessage
              placeholder="Message"
              rows="4"
              name="message"
              value={values.message}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <ContactButton type="submit" value="Send" />
            <ToastContainer />
          </ContactForm>
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default Contact;
