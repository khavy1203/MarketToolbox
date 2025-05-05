// Sample utility functions
import { UseFormSetError } from "react-hook-form";
import { EntityError } from "./http";

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


export const normalizePath = (path: string) => {
    return path.startsWith('/') ? path.slice(1) : path
}

export const handleErrorApi = ({
    error,
    setError,
    duration
  }: {
    error: any
    setError?: UseFormSetError<any>
    duration?: number
  }) => {
    if (error instanceof EntityError && setError) {
      error.payload.errors.forEach((item) => {
        setError(item.field, {
          type: 'server',
          message: item.message
        })
      })
    } else {
      console.error({
        title: 'Lỗi',
        description: error?.payload?.message ?? 'Lỗi không xác định',
        variant: 'destructive',
        duration: duration ?? 5000
      })
    }
  }