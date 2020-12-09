class Node {
    constructor(value) {
        this.value = value;
        this.color ;
        this.left;
        this.right;
    }
}

class Tree {
        
    constructor() {
        this.root = null ;
        
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

    insertNode(node, num) {
        let child = {value:null , color:"black",left:null,right :null}
        let newNode = {value:this.value , color:"red",left:child ,right :child}
        
        if(node.value === null) {
            return newNode;
        } else if (value > node.value) {
            node.right = this.insertNode(node.right,value);
            if(node.color === "red") return node;
            else if(node.right.color === "red") {
                if(hasRed(node.right)){
                return correctedColor(node,num)
                } else return node;
            }
            else return node;
        }
         
    }

}
const tree = new Tree();
tree.insert(12);
tree.insert(13);
tree.insert(12);

console.log(tree)