const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.core = null;
  }

  root() {
    return this.core;
  }

  add(data) {
    const node = this.core;
    if (node === null) return (this.core = new Node(data));
    else {
      const findPlace = node => {
        if (data < node.data) {
          if (node.left === null) return (node.left = new Node(data));
          else return findPlace(node.left);
        } else if (data > node.data) {
          if (node.right === null) return (node.right = new Node(data));
          else return findPlace(node.right);
        } else return null;
      };
      return findPlace(node);
    }
  }

  has(data) {
    let current = this.core;
    while (current) {
      if (data === current.data) return true;
      if (data < current.data) current = current.left;
      else current = current.right;
    }
    return false;
  }

  find(data) {
    let current = this.core;
    while (data !== current.data) {
      if (data < current.data) current = current.left;
      else current = current.right;
      if (current === null) return null;
    }
    return current;
  }

  remove(data) {
    const remover = (node, data) => {
      if (node === null) return null;
      if (data === node.data) {
        if (node.left === null && node.right === null) return null;
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        let tempNode = node.right;
        while (tempNode.left !== null) tempNode = tempNode.left;
        node.data = tempNode.data;
        node.right = remover(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = remover(node.left, data);
        return node;
      } else {
        node.right = remover(node.right, data);
        return node;
      }
    };
    this.core = remover(this.core, data);
  }

  min() {
    let min = this.core;
    while (min.left !== null) min = min.left;

    return min.data;
  }

  max() {
    let max = this.core;
    while (max.right !== null) max = max.right;

    return max.data;
  }

}