

export function alpha(color: string, alpha: number): string {
  return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
}

export function dictionary(array: any[], key: string) {
  return array.reduce((a, v) => {
    a[v[key]] = v;
    return a;
  }, {})
}

export function convertRemToPixels(rem) {  
  return parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function random(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}