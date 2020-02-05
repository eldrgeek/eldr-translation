import page from 'page';
// console.log('loading effects!');
export const storage = {
  saveFragments(fragments) {
    // console.log('saving effect', Object.keys(todos).length);
    localStorage.setItem('fragments', JSON.stringify(fragments));
  },
  getFragments() {
    // console.log('gotten');
    let saved = localStorage.getItem('fragments');
    try {
      return JSON.parse(saved || []);
    } catch (e) {
      console.log(saved);
      console.log(e);
      return [];
    }
  },
};

export const router = {
  initialize(routes) {
    Object.keys(routes).forEach(url => {
      page(url, ({ params }) => routes[url](params));
    });
    page.start();
  },
  goTo(url) {
    page.show(url);
  },
};

export const ids = {
  create() {
    return Date.now().toString();
  },
};
