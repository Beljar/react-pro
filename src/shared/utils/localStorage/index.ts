export const lsActions: {
  get: (key: string) => any;
  put: (key: string, data: object) => void;
  post: (key: string, data: object) => void;
  delete: (key: string) => void;
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

  post: function (key: string, data: object) {
    try {
      const dataString = JSON.stringify(data);
      localStorage.setItem(key, dataString);
    } catch (e) {
      console.log(e);
      return;
    }
  },

  delete: function (key: string) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.log(e);
      return;
    }
  },
};
