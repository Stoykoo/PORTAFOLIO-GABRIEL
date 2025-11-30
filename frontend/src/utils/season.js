// SEASON

export function isChristmasSeason() {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  const day = now.getDate();

  // 15 noviembre – 26 diciembre
  const inNovember = month === 11 && day >= 15;
  const inDecember = month === 12 && day <= 26;

  return inNovember || inDecember;
}
