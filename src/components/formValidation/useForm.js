// Får den inte funka exakt som jag vill, så får kolla på den senare...  
//import { useState, useEffect,  } from "react";

// function useForm(callback, validate) {
//   const [values, setValues] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     setErrors(validate(values));
//     setIsSubmitting(true);
//   }

//    useEffect(() => {
//      if (Object.keys(errors).length === 0 && isSubmitting) {
//        callback();
//      }
//    }, [errors]);

//    return {
//      handleChange,
//      handleSubmit,
//      values,
//      errors,
//    };
// }

// export default useForm;
