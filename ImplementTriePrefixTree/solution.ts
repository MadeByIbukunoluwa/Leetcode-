// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True
 

// Constraints:

// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 104 calls in total will be made to insert, search, and startsWith.


class TrieNode {
  children: {};
  endOfWord: boolean;
  constructor() {
    (this.children = {}), (this.endOfWord = false);
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let curr = this.root;
    for (let c of word) {
      if (!Object.keys(curr.children).includes(c)) {
        curr.children[c] = new TrieNode();
      }
      curr = curr.children[c];
    }
    curr.endOfWord = true;
  }

  search(word: string): boolean {
    let curr = this.root;
    for (let c of word) {
      if (!Object.keys(curr.children).includes(c)) {
        return false;
      }
      curr = curr.children[c];
    }
    return curr.endOfWord;
  }

  startsWith(prefix: string): boolean {
    let curr = this.root;

    for (let c of prefix) {
      if (!Object.keys(curr.children).includes(c)) {
        return false;
      }
      curr = curr.children[c];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
