import { useState } from 'react'
import validateFormInfo from './validateFormInfo';

function useForm(formValues) {
  const [ values, setValues ] = useState(formValues);
  const [ errors, setErrors ] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setValues(prevVals => {
      const newVals = {
        ...prevVals,
        [name]: value
      }
      validateFormInfo(name, value, setErrors);
      return newVals;
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    for (let key of Object.keys(values)) {
      validateFormInfo(key, values[key], setErrors);
      if (!values[key]) return;
    }
    
    if (errors.email || errors.password) return;
    alert(JSON.stringify(values));
  };

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;
