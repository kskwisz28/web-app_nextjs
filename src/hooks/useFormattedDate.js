import {useState, useEffect} from "react";

const useFormattedDate = (date, locale) => {
  const [formattedDate, setFormattedDate] = useState(date ? new Date(date).toLocaleDateString("en-US") : null);

  useEffect(
    () => setFormattedDate(date ? new Date(date).toLocaleDateString(locale) : null),
    [date, locale]
  );

  return formattedDate;
};

export default useFormattedDate;