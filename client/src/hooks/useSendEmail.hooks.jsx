import { useState } from "react";

const useSendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = async (input) => {
    try {
      setIsLoading(true);
      const url = "http://localhost:8000/email";
      const options = {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      const response = await fetch(url, options);
      const parsedResponse = await response.json();

      if (!response.ok) {
        return parsedResponse.message;
      }
      
      return parsedResponse.message;
    } catch (error) {
      return error.message;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, sendEmail };
};

export default useSendEmail;
