class Node {
    constructor(value) {
        this.value = value;
        this.right = null; // direita
        this.left  = null;
        this.height = 1;
    }
}



class Tree {
        
    constructor() {
        this.root = null;
    }
    
    height(node) {
        if(node === null) {
            return -1;
        }
       return this.heightNode(root);
    }
    heightNode(root) {
        if(root ===null) {
            return -1;
        } else {
          let height_left = this.heightNode(root.left);
          let height_right = this.heightNode(root.right);
            if(height_left < height_right){
                return height_right + 1;
            }else {
                return height_left + 1;
            }
        }
    }
    balance(node){
        return this.heightNode(node.right) - this.heightNode(node.left);
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {

        if (node === null) {
            node = new Node(value);
        } else if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        }

        let equilibrio = this.balance(node);
        
        console.log("Equi = " + equilibrio);
        
        if (equilibrio < -1  && this.balance(node.left) < 0) {
            console.log("realizando rotação a direita")
            return this.rotateRight(node);
        }
        if (equilibrio > 1 && this.balance(node.right) > 0) {
            console.log("realizando rotação a esquerda")
            return this.rotateLeft(node);
        }
        if (equilibrio < -1  && this.balance(node.left) >  0) { 
            console.log("realizando rotação dupla a direita")
            // node.left = this.rotateLeft(node.left); 
            // node = this.rotateRight(node);
        if (equilibrio > 1 && this.balance(node.right) < 0) {
            console.log("realizando rotação dupla a esquerda")
            // node.right = this.rotateRight(node.right);
            // node = this.rotateLeft(node);
            }
            
        }
        return node;
    }

    rotateLeft(node) {
       let x = node.right;
       node.right = x.left;
       x.left = node;
       return x;
        // // right child becomes his parent
        // // his right child's child becomes his child
        // console.log("left");
        // let auxNode = node.right;
        // node.right = auxNode.left;
        
        // if (auxNode.left !== null) {
        //     auxNode.left.parent = node;
        // }

        // auxNode.parent = node.parent;

        // if (node.parent === null) {
        //     this.root = auxNode;
        // } else if (node.parent.left == node) {
        //     node.parent.left = auxNode;
        // } else {
        //     node.parent.right = auxNode;
        // }

        // auxNode.left = node;
        // node.parent = auxNode;
    }

    rotateRight(node) {
        let x = node.left;
        node.left = x.right;
        x.right = node;
        return x;

        // console.log("right");

        // let auxNode = node.left;
        // node.left = auxNode.right;
        
        // if(auxNode.right !== null) {
        //     auxNode.right.parent = node;
        // }

        // auxNode.parent = node.parent;

        // if(node.parent === null) {
        //     this.root = auxNode;
        // } else if (node.parent.right == node) {
        //     node.parent.right = auxNode;
        // } else {
        //     node.parent.left = auxNode;
        // }
    
        // node.right = auxNode;
        // auxNode.parent = node;

        // auxNode.right = node;
        // node.parent = auxNode;
    } 

    preOrder(node) {
        if(node) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    
    inOrder(node) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    posOrder(node) {
        if (node) {
            this.posOrder(node.left)
            this.posOrder(node.right)
            console.log(node.value);
        }
    }



}
const tree = new Tree();

tree.insert(12);
tree.insert(8);
tree.insert(10);

// tree.rotateLeft(tree.right);

console.log(tree);



