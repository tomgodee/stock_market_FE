export const sum = (a: number, b: number) => {
  return a + b;
};

export const shuffle = (text: string) => {
  const a = text.split('');
  const n = a.length;

  for (let i = n - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join('');
};

export const capitalize = (text: string) => {
  const a = text.split(' ').map((entry, index) => {
    if (index === 0) return entry.toUpperCase();
    return entry;
  }).join(' ');
  return a;
};

export default {
  sum,
  shuffle,
  capitalize,
};
