class LocalStorage {
  constructor() {
    this.lS = window.localStorage;
  }

  get(key) {
    try {
      return JSON.parse(this.lS.getItem(key));
    } catch (e) {
      return this.lS.getItem(key);
    }
  }

  set(key, val) {
    this.lS.setItem(key, JSON.stringify(val));
  }

  key(index) {
    if (typeof index === 'number') {
      return this.lS.key(index);
    }
  }

  data() {
    let i = 0;
    const data = [];

    while (this.lS.key(i)) {
      data[i] = [this.lS.key(i), this.get(this.lS.key(i))];
      i++;
    }

    return data.length ? data : null;
  }

  remove(keyOrIndex) {
    let result = false;
    const key =
      typeof keyOrIndex === 'number' ? this.key(keyOrIndex) : keyOrIndex;

    if (key in this.lS) {
      result = true;
      this.lS.removeItem(key);
    }

    return result;
  }

  clear() {
    const len = this.lS.length;
    this.lS.clear();
    return len;
  }
}

export default new LocalStorage();
