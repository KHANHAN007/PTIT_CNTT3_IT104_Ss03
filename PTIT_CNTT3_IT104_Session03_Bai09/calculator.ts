export function toNumber(value: string | number): number | string {
    if (typeof value === "string") {
        const num = parseFloat(value);
        return isNaN(num) ? "Invalid input" : num;
    }
    return value;
}
export function add(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === "Invalid input" || numB === "Invalid input") return "Invalid input";
    return (numA as number) + (numB as number);
}

export function subtract(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === "Invalid input" || numB === "Invalid input") return "Invalid input";
    return (numA as number) - (numB as number);
}
export function multiply(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === "Invalid input" || numB === "Invalid input") return "Invalid input";
    return (numA as number) * (numB as number);
}
export function divide(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === "Invalid input" || numB === "Invalid input") return "Invalid input";
    if ((numB as number) === 0) return "Cannot divide by zero";
    return (numA as number) / (numB as number);
}
export function power(base: number | string, exponent: number | string): number | string {
    const numBase = toNumber(base);
    const numExp = toNumber(exponent);
    if (numBase === "Invalid input" || numExp === "Invalid input") return "Invalid input";
    return Math.pow(numBase as number, numExp as number);
}
export function sqrt(base: number | string, root: number | string): number | string {
    const numBase = toNumber(base);
    const numRoot = toNumber(root);
    if (numBase === "Invalid input" || numRoot === "Invalid input") return "Invalid input";
    if ((numBase as number) < 0) return "Cannot calculate square root of negative number";
    return Math.pow(numBase as number, 1 / (numRoot as number));
}
export function factorial(n: number | string): number | string {
    const num = toNumber(n);
    if (num === "Invalid input") return "Invalid input";
    if ((num as number) < 0) return "Factorial of negative number is not defined";
    if (!Number.isInteger(num as number)) return "Factorial requires an integer";
    let result = 1;
    for (let i = 2; i <= (num as number); i++) {
        result *= i;
    }
    return result;
}