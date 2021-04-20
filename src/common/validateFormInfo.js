function validateFormInfo(name, value, setErrors) {
  const message = `${name} required`;
  if (!value) {
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: message
    }));
  } else if (name === 'email') {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(value)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Must be valid email address'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: ''
      }));
    }
  } else {
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  }
  return undefined;
}

export default validateFormInfo;
