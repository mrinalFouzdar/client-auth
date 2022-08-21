import { useState } from "react";
export const FormHook = (initalstate="") => {
  const [formData, setFormData] = useState(initalstate);

  const handleInputChange = (e) => {
    // console.log(formData)

    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return {formData,handleInputChange}
};
