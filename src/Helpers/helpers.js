const convertTo12HourFormat = (time24) => {
  const [hours, minutes] = time24.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  const time12 = `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;

  return time12;
};

export const dateTimeString = (
  timestamp,
  timeFlag = true,
  onlyTime = false
) => {
  const datetimeString = timestamp;
  const date = new Date(datetimeString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  let formattedDate;

  if (timeFlag) {
    formattedDate = `${year}-${month}-${day} at ${hours}:${minutes} `;
  } else if (onlyTime) {
    formattedDate = convertTo12HourFormat(`${hours}:${minutes} `);
  } else {
    formattedDate = `${year}-${month}-${day}  `;
  }

  return formattedDate;
};
