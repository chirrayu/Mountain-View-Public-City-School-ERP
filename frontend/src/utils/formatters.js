export function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function classLabel(className, section, rollNumber) {
  return `${className}-${section} | Roll No: ${rollNumber}`;
}
