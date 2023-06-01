/* 
Create a data structure that implements the requirements of a Least Recently Used (LRU) cache with O(1) average time complexity.
 - Initialize an object with a maxium capacity of elements.
 - `getItem` Return the value of the key. Update cache with the most recently used key.
 - `putItem` Create or update a key value pair in the cache. Evict the least recently used key if the size of keys exceeds the max capacity.
*/

export class LeastRecentlyUsed {
      constructor(capacity){
            this.capacity = capacity;
            this.cache = new Map();
      }

      // Map keeps track of insertion order, this will refresh the item
      getItem(key){
            const item = this.cache.get(key);

            if(item) {
                  this.cache.delete(key);
                  this.cache.set(key, item)
            }

            return item;
      }

      putItem(key,val){
           // delete to refresh the insertion order
           if(this.cache.has(key)) this.cache.delete(key);
           
           // evict the oldest item in the cache if its full
           if(this.cache.size == this.capacity) this.cache.delete(this.oldestItem);

           // add item to the cache
           this.cache.set(key,val);
      }

      get oldestItem() {
           this.cache.keys.next().value;
      } 
}

// const cache = new LeastRecentlyUsed(5);
// cache.putItem('a', 1);
// console.log(cache);
// console.log(cache.getItem('a'));