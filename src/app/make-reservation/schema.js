import * as yup from "yup";
import { parse, isValid, isDate, format } from "date-fns";

const isValidDate = (value) => {
  if (!value) {
    return false;
  }
  const [day, month, year] = value.split("/").map(Number);
  const parsedDate = parse(`${year}-${month}-${day}`, "yyyy-MM-dd", new Date());
  const today = parse(
    format(new Date(), "yyyy-MM-dd"),
    "yyyy-MM-dd",
    new Date()
  );
  return isValid(parsedDate) && parsedDate >= today;
};

const isValidTime = (date, value) => {
  if (!date || !value) {
    return false;
  }
  const [hour, minute] = value.split(":").map(Number);
  const [day, month, year] = date.split("/").map(Number);

  const parsedDate = parse(`${year}-${month}-${day}`, "yyyy-MM-dd", new Date());
  const today = parse(
    format(new Date(), "yyyy-MM-dd"),
    "yyyy-MM-dd",
    new Date()
  );

  if (parsedDate > today) {
    return true;
  }

  const now = new Date();
  const enteredTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute
  );
  return enteredTime > now;
};

export default yup.object().shape({
  name: yup.string().required(),
  whatsapp: yup
    .string()
    .transform((value) => value.replace(/\s+/g, ""))
    .matches(/^\d{2}9\d{8}$/)
    .required(),
  email: yup.string().email().required(),
  people: yup.number().max(12).required(),
  date: yup
    .string()
    .transform((value) => value.replace(/[_\s]/g, ""))
    .matches(/^\d{2}\/\d{2}\/\d{4}$/)
    .test("date", (value) => {
      return isValidDate(value);
    })
    .required(),
  time: yup
    .string()
    .transform((value) => value.replace(/[_\s]/g, ""))
    .matches(/^\d{2}:\d{2}$/)
    .test("time", (value, context) => {
      const { date } = context.parent;
      return isValidTime(date, value);
    })
    .required(),
});
