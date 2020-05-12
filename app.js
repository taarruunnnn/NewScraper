const API_KEY='&apiKey=a38d9a5560114809bad1ba8be8df849c'
const TOP_HEADLINES =
  "http://newsapi.org/v2/top-headlines?country=in&apiKey=a38d9a5560114809bad1ba8be8df849c";
const GOOGLE_NEWS = `http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=a38d9a5560114809bad1ba8be8df849c`;
const THE_HINDU =
  "http://newsapi.org/v2/top-headlines?sources=the-hindu&apiKey=a38d9a5560114809bad1ba8be8df849c";
const TOI =
  "http://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=a38d9a5560114809bad1ba8be8df849c";

const EVERYTHING ='https://newsapi.org/v2/everything?q=';

new Vue({
  el: "#app",
  data: {
    drawer: null,
    searchterm:'bitcoin',
    items: [
      { id: 0, name: `Top Headlines`, news: [] },
      { id: 1, name: `Google News`, news: [] },
      { id: 2, name: `The Hindu`, news: [] },
      { id: 3, name: `Times Of India`, news: [] },
    ],

    getNews: [],
    active: 0,
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
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },

  created() {
    fetch(TOP_HEADLINES)
      .then((res) => res.json())
      .then((res) => {
        this.items[0].news = res.articles;
        this.getNews = this.items[0].news;
      })
      .catch((err) => console.log(err));

    fetch(GOOGLE_NEWS)
      .then((res) => res.json())
      .then((res) => {
        this.items[1].news = res.articles;
      })
      .catch((err) => console.log(err));

    fetch(THE_HINDU)
      .then((res) => res.json())
      .then((res) => {
        this.items[2].news = res.articles;
      })
      .catch((err) => console.log(err));

    fetch(TOI)
      .then((res) => res.json())
      .then((res) => {
        this.items[3].news = res.articles;
      })
      .catch((err) => console.log(err));
  },
});
