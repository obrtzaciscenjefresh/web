const ZAGREB = "Europe/Zagreb";

const euro = new Intl.NumberFormat("hr-HR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatEuro(amount: number) {
  return euro.format(amount);
}

export function formatDateHr(isoDate: string) {
  const [year, month, day] = isoDate.slice(0, 10).split("-").map(Number);
  return `${day}. ${month}. ${year}.`;
}

export function zagrebParts(isoDateTime: string) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: ZAGREB,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(isoDateTime));
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  return {
    day: get("day"),
    month: get("month"),
    year: get("year"),
    hour: get("hour"),
    minute: get("minute"),
  };
}

export function formatDateTimeHr(isoDateTime: string) {
  const { day, month, year, hour, minute } = zagrebParts(isoDateTime);
  return `${Number(day)}. ${Number(month)}. ${year}. u ${hour}:${minute}`;
}
