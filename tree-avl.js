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

        let balancing = this.balance(node);
        
        console.log("Equi = " + balancing);
        
        if (balancing < -1  && this.balance(node.left) < 0) {
            console.log(" rotação a direita")
            return this.rotateRight(node);
        }
        if (balancing > 1 && this.balance(node.right) > 0) {
            console.log(" rotação a esquerda")
            return this.rotateLeft(node);
        }
        if (balancing < -1  && this.balance(node.left) >  0) { 
            console.log(" rotação dupla a direita")
            node.left = this.rotateLeft(node.left); 
            node = this.rotateRight(node);
        }
        if (balancing > 1 && this.balance(node.right) < 0) {
            console.log(" rotação dupla a esquerda")
            node.right = this.rotateRight(node.right);
            node = this.rotateLeft(node);
        }
        
        return node;
    }

    rotateLeft(node) {
       let x = node.right;
       node.right = x.left;
       x.left = node;
       return x;
       
    }

    rotateRight(node) {
        let x = node.left;
        node.left = x.right;
        x.right = node;
        return x;
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

//rotação a esquerda simples
// tree.insert(30);
// tree.insert(5);
// tree.insert(35);
// tree.insert(32);
// tree.insert(40);
// tree.insert(45);

// tree.insert(32);
// tree.insert(31);
// tree.insert(35);
// tree.insert(33);
// tree.insert(36);
// tree.insert(38);


//rotação a direita simples
tree.insert(11);
tree.insert(8);
tree.insert(5);

// tree.insert(50);
// tree.insert(70);
// tree.insert(20);
// tree.insert(10);
// tree.insert(30);
// tree.insert(5);

//rotação dupla a esquerda

// tree.insert(50);
// tree.insert(80);
// tree.insert(70);
// tree.insert(60);
// tree.insert(90);
// tree.insert(20);

//rotação dupla a direita inserindo o 7 entre o 6 
// tree.insert(13);
// tree.insert(10);
// tree.insert(15);
// tree.insert(16);
// tree.insert(11);
//  tree.insert(5);
//  tree.insert(6);
//  tree.insert(4);
//  tree.insert(7);
//  tree.insert(11);

// tree.insert(50);
// tree.insert(90);
//  tree.insert(20);
//  tree.insert(10);
//  tree.insert(40);
//  tree.insert(30);
console.log("Pre order " )
tree.preOrder(tree.root)

console.log("In order " )
tree.inOrder(tree.root)

console.log("Pos order " )
tree.posOrder(tree.root)

console.log(tree);

