import type { VTable } from './utils.ts';

type Node = [key: string, value: any, prev: Node | null, next: Node | null];

type LRU = [
  capacity: number,
  nodes: Map<string, Node>,
  firstNode: Node | null,
  lastNode: Node | null,
];

const swapToLast = (lru: LRU, node: Node) => {
  let lastNode = lru[3],
    prevNode = node[2],
    nextNode = node[3];

  node[2] = lastNode;
  node[3] = null;

  // If this node is the firstNode
  // change the first node to nextNode
  lru[2] === node && (lru[2] = nextNode);

  // Make this node next of lastNode
  lastNode !== null && (lastNode[3] = node);

  // Connect prevNode and nextNode of this node
  prevNode !== null && (prevNode[3] = nextNode);
  nextNode !== null && (nextNode[2] = prevNode);

  lru[3] = node;
};

const vtable: VTable<LRU> = {
  // Capacity >= 2
  init: (capacity) => [capacity, new Map(), null, null],
  get: (lru, key) => {
    let node = lru[1].get(key);
    if (node != null) {
      lru[3] !== node && swapToLast(lru, node);
      return node[1];
    }
  },
  set: (lru, key, value) => {
    let node = lru[1].get(key);
    if (node != null) {
      node[1] = value;
      lru[3] !== node && swapToLast(lru, node);
    } else {
      let map = lru[1],
        lastNode = lru[3],
        node: Node = [key, value, lastNode, null];

      map.set(key, node);

      // Set first node if not set
      if (map.size === 1) {
        lru[2] = node;

        // Set as last node
        lru[3] = node;
      } else {
        // Set this node as child of last node
        lastNode !== null && (lastNode[3] = node);

        // Set as last node
        lru[3] = node;

        if (map.size > lru[0]) {
          let nodeToRemove = lru[2]!,
            nextNode = nodeToRemove[3];

          // Remove node key from map
          map.delete(nodeToRemove[0]);

          // Change firstNode to nextNode
          lru[2] = nextNode;

          // Connect nextNode and prevNode
          nextNode !== null && (nextNode[2] = nodeToRemove[2]);
        }
      }
    }
  },
};

export default vtable;
