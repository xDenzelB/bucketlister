import { useState } from 'react'

export default function useForm({ inputs = {} }) {

  const [formState, setFormState] = useState(inputs);

  function handleChange(e) {
    const { name, value, type, checked } = event.target;

    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  };

  return {
    formState, handleChange
  };
}
