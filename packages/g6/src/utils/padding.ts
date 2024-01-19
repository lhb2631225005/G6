import type { Padding, STDPadding } from '../types/common';

/**
 * <zh> 解析 padding
 *
 * <en> parse padding
 * @param padding - <zh> padding | <en> padding
 * @returns <zh> 标准 padding | <en> standard padding
 */
export function parsePadding(padding: Padding = 0): STDPadding {
  if (Array.isArray(padding)) {
    const [top, right = top, bottom = top, left = right] = padding;
    return [top, right, bottom, left];
  }
  return [padding, padding, padding, padding];
}
