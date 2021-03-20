export const formatDateToDayMonthYearTime = (date) => {
  const fullDate = new Date(date);
  const options = {
    year: "numeric", month: "numeric", day: "numeric",
    hour: "numeric", minute: "numeric",
    hour12: false,
    timeZone: "Europe/Warsaw"
  }
  const formattedDate = new Intl.DateTimeFormat("nso-ZA", options).format(fullDate);

  return formattedDate;
}

export const shortenDisplayedText = (text, length) => {
  if (text.length <= length) return text;
  if (text.length > length) return `${text.toString().substr(0, length)}...`;
}