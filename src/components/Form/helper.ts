import dayjs from "dayjs";
import { FieldValues } from "react-hook-form";


export const isValidCardNumber = (value: string): boolean => {
  let evenSum = 0;
  let oddSum = 0;

  for (var i = 0; i < value.length; i++) {
    const integerValue = parseInt(value[i])
    if (i % 2 === 0) {
      if (integerValue * 2 >= 10) {
        evenSum += ((integerValue * 2) - 9);
      } else {
        evenSum += integerValue * 2;
      }
    } else {
      oddSum += parseInt(value[i]);
    }
  }
  return (oddSum + evenSum) % 10 === 0;
}

export const validateExpiryMonth = (value: string): boolean => {
  return parseInt(value) <= 12;
}

export const validateExpiryYear = (value: string): boolean => {
  const year = dayjs().format("YY")

  return parseInt(value) >= parseInt(year);
}

export const validateMonthYear = (expiryMonth: string, expiryYear: string): boolean => {
  const expiryDate = dayjs(`${expiryMonth} ${expiryYear}`, "MM YY")
  const currentDate = dayjs()

  return currentDate.isBefore(expiryDate);
}
