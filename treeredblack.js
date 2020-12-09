class Node {
    constructor() {
    
    }
}

class Tree {
        
    constructor() {
        this.root = null;
    }
  correctedColor(node,value) {
      let parent = node.right;
      let uncle = node.left
      // case 1 
      if(uncle.left.color === "red") {
          node.color = "red";
          uncle.color="black"
          parent.color = "black"
          return node;
      } // case 2
      else {
          if(value>child.value) {
              node.right = parent.left;
              parent.left = node;
              parent.color = "black";
              node.color = "red"
              return parent;
          }
      } // case 3
      if(value < child.value) {
          let addedNode = parent.left;
          parent.left= addedNode.right;
          addedNode.right = parent;
          addedNode.left = node;
          addedNode.color = "black"
          node.color = "red"
          return addedNode;
      }
  }
  insert(value) {
    this.root = this.insertNode(this.root, value);
}
  insertTreeWrapper(tree, value) {
      tree = this.insertNode(tree,value)
      tree.color = "black"
      return tree;
  }

    insertNode(node, value) {
        let child = {value:null , color:"black",left:null,right :null}
        let newNode = {value:value , color:"red",left:child ,right :child}
        
        if(node.value === null) {
            return newNode
        } else if (value > node.value) {
            node.right = this.insertNode(node.right,value);
            if(node.color === "red") return node;
            else if(node.right.color === "red") {
                if(hasRed(node.right)){
                return correctedColor(node,value)
                } else return node;
            }
            else return node;
        }
         
    }

}
tree.insert(11);
tree.insert(8);
tree.insert(5);