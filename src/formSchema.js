import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required()
    .min(2, "Needs to be more than 2 characters")
    .matches(/^[aA-zZ\s]+$/, 'Must be use ONLY the alphabet'),
  city: yup
    .string()
    .trim()
    .required("City is required silly")
    .min(3, "Needs to be more than 3 characters"),
//   terms: yup.required("MUST accept terms and conditions before submitting"),
  
gender: yup.string(),
  elk: yup.boolean(),
  deer: yup.boolean(),
  pheasant: yup.boolean(),
  hunterEducation: yup.boolean(),
  resident: yup.boolean()
});

export default formSchema;
