import { daysWeek } from "@config/payrollAgreement/payrollAgreementTab/generic/daysWeek";

const getDaysInNumber = (paydays: string[]): number[] => {
  return paydays
    .filter(
      (payday) => !daysWeek.includes(payday) && payday !== "Ultimo día del mes",
    )
    .map((day) => Number(day));
};

export { getDaysInNumber };
