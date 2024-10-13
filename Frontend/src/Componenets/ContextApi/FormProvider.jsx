import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleAnalyzeClick = () => {
    setShow(true);
  };

  return (
    <FormContext.Provider value={{ show, handleAnalyzeClick }}>
      {children}
    </FormContext.Provider>
  );
};