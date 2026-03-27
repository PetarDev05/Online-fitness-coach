import { useState } from "react";

const useSendEmail = () => {
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = async (input) => {
    try {
      setIsLoading(true);
      const url = `${VITE_BACKEND_URL}/email`;
      const options = {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      const response = await fetch(url, options);
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      
      return parsedResponse;
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, sendEmail };
};

export default useSendEmail;
