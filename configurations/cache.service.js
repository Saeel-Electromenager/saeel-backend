const NodeCache = require("node-cache");

class Cache {
  constructor(ttlSeconds) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: ttlSeconds * 0.2,
      useClones: false,
    });
  }

  get(key) {
    const value = this.cache.get(key);
    console.log("value :");
    console.log(value);

    const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
    const obj = { my: "Special1", variable: 422 };

    const success = myCache.set("myKey", obj);
    console.log(success);
    const success1 = myCache.get("myKey");
    console.log(success1);
    if (value) {
      console.log("is in cache");
      return Promise.resolve(value);
    } else return false;

    // return storeFunction().then((result) => {
    //   console.log(result);
    //   this.cache.set(key, result);
    //   return result;
    // });
  }

  set(key, value) {
    this.cache.set(key, value);
  }

  del(keys) {
    this.cache.del(keys);
  }

  delStartWith(startStr = "") {
    if (!startStr) {
      return;
    }

    const keys = this.cache.keys();
    for (const key of keys) {
      if (key.indexOf(startStr) === 0) {
        this.del(key);
      }
    }
  }

  flush() {
    this.cache.flushAll();
  }
}

module.exports = Cache;
