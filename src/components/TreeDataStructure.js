import React from "react";
import { v4 as uuid } from "uuid";
let root = {
  children: [],
  [Symbol.iterator]() {
    let keys = Object.keys(this);
    let index = 0;
    return {
      next: function () {
        return index < keys.length
          ? { value: this[keys[index++]], done: false }
          : { done: true };
      },
    };
  },
};

const insertNewChildren = (root, parentKey, childrenKey, childrenValue) => {
  let newChildren = {
    key: childrenKey,
    value: childrenValue,
  };
  if (root.children) {
    if (root.children.length > 0) {
      for (let i of root.children) {
        if (i.key === parentKey) {
          if (i.children) {
            i.children.push(newChildren);
          } else {
            i.children = [];
            i.children.push(newChildren);
          }
        } else {
          // Recursive //
          insertNewChildren(i, parentKey, childrenKey, childrenValue);
        }
      }
    } else {
      root.children.push(newChildren);
    }
  }
};

const parentId = uuid().slice(0, 3);
const childId = uuid().slice(0, 3);
const grandChildId_1 = uuid().slice(0, 3);
const grandChildId_2 = uuid().slice(0, 3);
const grandChildId_3 = uuid().slice(0, 3);
const grandChildId_4 = uuid().slice(0, 3);
const grandChildId_5 = uuid().slice(0, 3);
const grand_grand_child_1 = uuid().slice(0, 3);
const grand_grand_child_2 = uuid().slice(0, 3);
const grand_grand_child_3 = uuid().slice(0, 3);
const grand_grand_child_4 = uuid().slice(0, 3);
const grand_grand_child_5 = uuid().slice(0, 3);
const the_last_child = uuid().slice(0, 3);

// console.log("unq111", uuid().slice(0, 3));
// console.log("unq222", uuid().slice(0, 3));
// console.log("unq333", uuid().slice(0, 3));

insertNewChildren(root, parentId, childId, "child");

insertNewChildren(root, childId, grandChildId_1, "grand-child-1");
insertNewChildren(
  root,
  grandChildId_1,
  grand_grand_child_1,
  "grand_grand_child_1"
);

insertNewChildren(root, childId, grandChildId_2, "grand-child-2");
insertNewChildren(
  root,
  grandChildId_2,
  grand_grand_child_2,
  "grand_grand_child_2"
);

insertNewChildren(root, childId, grandChildId_3, "grand-child-3");
insertNewChildren(
  root,
  grandChildId_3,
  grand_grand_child_3,
  "grand_grand_child_3"
);
insertNewChildren(
  root,
  grandChildId_3,
  grand_grand_child_4,
  "grand_grand_child_4"
);
insertNewChildren(root, grand_grand_child_4, the_last_child, "LAST_CHILD");
insertNewChildren(root, childId, grandChildId_4, "grand-child-4");
insertNewChildren(root, childId, grandChildId_5, "grand-child-5");
insertNewChildren(root, grandChildId_5, grand_grand_child_5, "g-g-child-5");

console.log(root);
const TreeDataStructure = () => {
  return <div>TreeDataStructure</div>;
};
export default TreeDataStructure;

// const insertNewParent = (parentKey, parentValue) => {
//   let newParent = { key: parentKey, value: parentValue, children: [] };
//   root.children.push(newParent);
// };
// const parentId = uuid().slice(0, 3);
// insertNewParent(parentId, "parent");
