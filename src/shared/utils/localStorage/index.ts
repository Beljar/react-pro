export const lsActions: {
  get: (key: string) => any;
  put: (key: string, data: object) => void;
} = {
  get: function (key: string) {
    const data = localStorage.getItem(key);
    if (!data) {
      return;
    }
    try {
      const result = JSON.parse(data);
      return result;
    } catch (e) {
      console.log(e);
      return;
    }
  },

  put: function (key: string, data: object) {
    const prevData = this.get(key) || {};
    try {
      const dataString = JSON.stringify({ ...prevData, ...data });
      localStorage.setItem(key, dataString);
    } catch (e) {
      console.log(e);
      return;
    }
  },
};
