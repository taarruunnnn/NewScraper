const NYT_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=8cbrJsMqn1Gx83nGwPVv2Vvviq1xvGHJ`;

const GUARDIAN_URL = `https://content.guardianapis.com/search?q=world&api-key=02ca7bf7-26a7-4e9d-b238-1172dead0938`;




new Vue({
  el: "#app",
  data: {
    drawer: null,
    theme:null,
    items: [
      { id: 0, name: `New York Times`, news: [], icon:'https://commons.wikimedia.org/wiki/File:NewYorkTimes.svg#/media/File:NewYorkTimes.svg' },
      { id: 1, name: `The Guardian`, news: [] }
    ],
   
    getNews: [],
    active: 0
  },

  methods: {
    selectNews(i) {
      this.active = i;
      this.getNews = this.items[i].news;
    },

    formatDate(date) {
      const buildDate = new Date(date);

      return buildDate.toLocaleString("en-US", {
        weekday: "short",
        month: "long",
        day: "2-digit",
        year: "numeric",
        hour: '2-digit',
        minute:'2-digit',
      });
    }
  },

  created() {
    fetch(NYT_URL)
      .then((res) => res.json())
      .then((res) => {
        this.items[0].news = res.results;
        this.getNews = this.items[0].news;
      })
      .catch((err) => console.log(err));

    fetch(GUARDIAN_URL)
      .then((res) => res.json())
      .then((res) => {
        this.items[1].news = res.response.results;
      })
      .catch((err) => console.log(err));
  }
});
