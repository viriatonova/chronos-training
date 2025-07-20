import Task from '../entities/Task.entitie.ts';

/**
 * Given a cycle number, returns the next cycle number.
 * @example
 * getNextCycle(8) // 1
 * getNextCycle(7) // 8
 * @param {number} cycle - The cycle number.
 * @returns {number} The next cycle number.
 */
export function getNextCycle(cycle: number): number {
  return cycle >= 8 ? 1 : cycle + 1;
}

/**
 * Determines the type of task cycle based on the given cycle number.
 * @param {number} cycle - The cycle number.
 * @returns {Task['type']} The type of task cycle: 'workTime', 'shortBreakTime', or 'longBreakTime'.
 */

export function getCycleType(cycle: number): Task['type'] {
  if (cycle === 8) return 'longBreakTime';
  return cycle % 2 === 0 ? 'shortBreakTime' : 'workTime';
}

/**
 * Format a number of seconds into a string of the form 'mm:ss'.
 * @example
 * formatSecondsToMinutes(123) // '02:03'
 * @param {number} seconds - The number of seconds to format.
 * @returns {string} A string of the form 'mm:ss' representing the given number of seconds.
 */
export function formatSecondsToMinutes(seconds: number) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsMod = String(Math.floor(seconds % 60)).padStart(2, '0');
  return `${minutes}:${secondsMod}`;
}
