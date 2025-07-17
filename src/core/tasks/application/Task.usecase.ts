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
