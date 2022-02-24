import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("Your Name is required silly")
    .min(2, "Needs to be more than 2 characters")
    .matches(/^[aA-zZ\s]+$/, "Must be use ONLY the alphabet"),
  city: yup
    .string()
    .trim()
    .required("City is required silly")
    .min(3, "Needs to be more than 3 characters")
    .matches(/^[aA-zZ\s]+$/, "Must be use ONLY the alphabet"),
  height: yup
    .number()
    .typeError("Must select an approximate Height")
    .min(0)
    .max(30),
  gender: yup.string(),
  elk: yup.boolean(),
  deer: yup.boolean(),
  pheasant: yup.boolean(),
  grouse: yup.boolean(),
  hunterEducation: yup.boolean(),
  resident: yup.boolean(),
  terms: yup.boolean().required("you MUST accept!"),
});

export default formSchema;
