import { getDiamondPoints } from '@/src/utils/element';
import {
  findNearestPoints,
  getEllipseIntersectPoint,
  getLinesIntersection,
  getPolygonIntersectPoint,
  getRectIntersectPoint,
  isCollinear,
  isHorizontal,
  isLinesParallel,
  isOrthogonal,
  isVertical,
  moveTo,
  parsePoint,
  round,
  toPointObject,
} from '@/src/utils/point';
import { Circle, Rect } from '@antv/g';

describe('Point Functions', () => {
  it('parsePoint', () => {
    expect(parsePoint({ x: 100, y: 100 })).toEqual([100, 100]);
  });

  it('toPointObject', () => {
    expect(toPointObject([100, 100])).toEqual({ x: 100, y: 100 });
  });

  it('round', () => {
    expect(round([100.123, 100.123], 2)).toEqual([100.12, 100.12]);
  });

  it('moveTo', () => {
    expect(moveTo([100, 100], [50, 100], 10)).toEqual([90, 100]);
    expect(moveTo([50, 100], [100, 100], 10)).toEqual([60, 100]);
  });

  it('isHorizontal', () => {
    expect(isHorizontal([100, 100], [50, 100])).toEqual(true);
    expect(isHorizontal([100, 100], [50, 150])).toEqual(false);
  });

  it('isVertical', () => {
    expect(isVertical([100, 100], [100, 50])).toEqual(true);
    expect(isVertical([100, 100], [50, 150])).toEqual(false);
  });

  it('isOrthogonal', () => {
    expect(isOrthogonal([100, 100], [100, 50])).toEqual(true);
    expect(isOrthogonal([100, 100], [50, 100])).toEqual(true);
  });

  it('isCollinear', () => {
    expect(isCollinear([100, 100], [100, 50], [100, 150])).toEqual(true);
    expect(isCollinear([100, 100], [50, 100], [150, 100])).toEqual(true);
    expect(isCollinear([100, 100], [50, 50], [150, 100])).toEqual(false);
  });

  it('isLinesParallel', () => {
    expect(
      isLinesParallel(
        [
          [100, 100],
          [100, 50],
        ],
        [
          [100, 150],
          [100, 200],
        ],
      ),
    ).toEqual(true);
    expect(
      isLinesParallel(
        [
          [100, 100],
          [100, 50],
        ],
        [
          [100, 150],
          [150, 200],
        ],
      ),
    ).toEqual(false);
  });

  it('getLinesIntersection', () => {
    expect(
      getLinesIntersection(
        [
          [100, 0],
          [100, 200],
        ],
        [
          [0, 100],
          [200, 100],
        ],
      ),
    ).toEqual([100, 100]);
    expect(
      getLinesIntersection(
        [
          [100, 0],
          [100, 200],
        ],
        [
          [0, 100],
          [50, 300],
        ],
      ),
    ).toEqual(undefined);
  });

  it('getRectIntersectPoint', () => {
    const rect = new Rect({
      style: {
        x: 100,
        y: 100,
        width: 2,
        height: 2,
      },
    });
    expect(getRectIntersectPoint([110, 110], rect.getBounds())).toEqual([102, 102]);
  });

  it('getEllipseIntersectPoint', () => {
    const circle = new Circle({
      style: {
        cx: 100,
        cy: 100,
        r: 1,
      },
    });
    expect(getEllipseIntersectPoint([110, 100], circle.getBounds())).toEqual([101, 100]);

    const circle2 = new Circle({
      style: {
        r: 20,
      },
    });
    expect(getEllipseIntersectPoint([0, 0], circle2.getBounds())).toEqual([20, 0]);

    const circle3 = new Circle({
      style: {
        cx: 100,
        cy: 100,
        r: 20,
      },
    });
    expect(getEllipseIntersectPoint([100, 100], circle3.getBounds())).toEqual([120, 100]);
  });

  it('getDiamondIntersectPoint', () => {
    expect(getPolygonIntersectPoint([100, 100], [0, 0], getDiamondPoints(100, 100))).toEqual([25, 25]);
    expect(getDiamondPoints(0, 0)).toEqual([
      [0, -0],
      [0, 0],
      [0, 0],
      [-0, 0],
    ]);
    const height = 10;
    const width = 10;
    expect(getDiamondPoints(width, height)).toEqual([
      [0, -height / 2],
      [width / 2, 0],
      [0, height / 2],
      [-width / 2, 0],
    ]);
  });

  it('findNearestPoints', () => {
    expect(
      findNearestPoints(
        [
          [0, 0],
          [100, 110],
        ],
        [
          [1, 1],
          [100, 100],
        ],
      ),
    ).toEqual([
      [0, 0],
      [1, 1],
    ]);
  });
});
