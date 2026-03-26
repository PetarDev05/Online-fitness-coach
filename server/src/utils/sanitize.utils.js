import validator from "validator";

export const sanitizeString = (str) => {
  return validator.escape(str.trim());
};
