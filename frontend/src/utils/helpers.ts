// Sample utility functions

/**
 * Adds two numbers and returns the result.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
export function add(a: number, b: number): number {
    return a + b;
}

/**
 * Checks if a number is even.
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
export function isEven(num: number): boolean {
    return num % 2 === 0;
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalizeFirstLetter(str: string): string {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
