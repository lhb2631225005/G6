import { Graph } from '@/src';
import { idOf } from '@/src/utils/id';

export const elementNodeDiamond: TestCase = async (context) => {
  const data = {
    nodes: [
      { id: 'diamond' },
      { id: 'diamond-halo' },
      { id: 'diamond-badges' },
      { id: 'diamond-ports' },
      { id: 'diamond-active' },
      { id: 'diamond-selected' },
      { id: 'diamond-highlight' },
      { id: 'diamond-inactive' },
      { id: 'diamond-disabled' },
    ],
  };

  const graph = new Graph({
    ...context,
    data,
    node: {
      style: {
        type: 'diamond', // 👈🏻 Node shape type.
        size: 40,
        labelText: (d) => d.id!,
        iconWidth: 20,
        iconHeight: 20,
        iconSrc: 'https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg',
        halo: (d) => idOf(d).toString().includes('halo'),
        portR: 3,
        ports: (d) =>
          idOf(d).toString().includes('ports')
            ? [{ placement: 'left' }, { placement: 'right' }, { placement: 'top' }, { placement: 'bottom' }]
            : [],
        badges: (d) =>
          idOf(d).toString().includes('badges')
            ? [
                { text: 'A', placement: 'right-top' },
                { text: 'Important', placement: 'right' },
                { text: 'Notice', placement: 'right-bottom' },
              ]
            : [],
        badgeFontSize: 8,
        badgePadding: [1, 4],
      },
    },
    layout: {
      type: 'grid',
    },
  });
  await graph.render();

  graph.setElementState({
    'diamond-active': 'active',
    'diamond-selected': 'selected',
    'diamond-highlight': 'highlight',
    'diamond-inactive': 'inactive',
    'diamond-disabled': 'disabled',
  });

  return graph;
};
