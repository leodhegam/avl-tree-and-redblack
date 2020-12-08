// https://github.com/justinethier/AVL-Tree/blob/master/src/main/java/justinethier/AvlTree.java
// https://www.youtube.com/watch?v=vRwi_UcZGjU


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
        this.root = new Node();
    }
    max(x,y) { 
        return (x > y) ? x : y; 
    } 
     height(node) {
         if(node ==null) {
             return 0;
         }
        return node.height  
     }
      getBalance(node) { 
        if (node == null) 
            return 0; 
  
        return height(node.left) - height(node.right); 
    } 
      rotateRight(node) { 
        // struct Node *x = y->left; 
        // struct Node *T2 = x->right; 
      
        // // Perform rotation 
        // x->right = y; 
        // y->left = T2; 
        let auxNode = node.left;
        let aux = auxNode.right;
        auxNode.right = node;
        node.left = aux;
        node.height = max(height(node.left), height(node.right)) + 1; 
        auxNode.height = max(height(auxNode.left), height(auxNode.right)) + 1; 
        return auxNode; 
    } 
    rotateLeft(node){
        let auxNode = node.right;
        let aux = auxNode.left;
        auxNode.left = node;
        node.right = aux;
        node.height = max(height(node.left), height(node.right)) + 1; 
        auxNode.height = max(height(auxNode.left), height(auxNode.right)) + 1; 
    }
    insert(node,value) {
        if(node === null) {
            return (new Node(value));
        }
        if(value < node.value) {
            node.left = insert(node.left,value);
        }else if (value > node.value){
            node.right = insert(node.right,value);
        }else {
            return node;
        }
        node.height = 1 + this.max(height(node.left),height(node.right));
    let balance = getBalance(node);
    if(balance > 1 && value < node.left.value) {
        return rotateRight(node);
    }
    if(balance < -1 && value > node.right.value){
        return rotateLeft(node);
    }
    if (balance > 1 && value > node.left.value) { 
        node.left = rotateLeft(node.left); 
        return rotateRight(node); 
    } 

    // Right Left Case 
    if (balance < -1 && value < node.right.value) { 
        node.right = rotateRight(node.right); 
        return rotateLeft(node); 
    } 
    return node; 
  
}

/**
 *
public int height (AvlNode<T> t){
   return t == null ? -1 : t.height;
}


 * 
 * /


// threshold padrao = 1
// altura:
// vazio altura = -1
// 1 elemento altura = 0
// se left e right sao nulos altura = 0
// se left ou right sao nao nulos altura = 1
// altura total = altura da esquerda - altura da direita
// se altura positiva = left heavy
// se altura negativa = right heavy rotaciona pra 
*/
}
