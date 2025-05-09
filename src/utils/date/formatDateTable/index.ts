import { capitalizeText } from "@utils/capitalizeText";

const formatDateTable = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  };
  const dateString = date.toLocaleDateString("es-ES", options);
  const [day, month, year] = dateString.split(" ");

  return `${day}/${capitalizeText(month)}/${year}`;
};

export { formatDateTable };
