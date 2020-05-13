const API_KEY = "&apiKey=a38d9a5560114809bad1ba8be8df849c";
const TOP_HEADLINES =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=a38d9a5560114809bad1ba8be8df849c";
const Business = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a38d9a5560114809bad1ba8be8df849c`;
const Entertainment =
  "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a38d9a5560114809bad1ba8be8df849c";
const Health =
  "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=a38d9a5560114809bad1ba8be8df849c";

const Science =
  "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=a38d9a5560114809bad1ba8be8df849c";
const Sports =
  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a38d9a5560114809bad1ba8be8df849c";
const Technology =
  "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a38d9a5560114809bad1ba8be8df849c";

const EVERYTHING = "https://newsapi.org/v2/everything?q=";


new Vue({
  el: "#app",
  data: {
    drawer: null,
    searchterm: "bitcoin",
    items: [
      { id: 0, name: `Top Headlines`, news: [] },
      { id: 1, name: `Business`, news: [] },
      { id: 2, name: `Entertainment`, news: [] },
      { id: 3, name: `Health`, news: [] },
      { id: 4, name: `Science`, news: [] },
      { id: 5, name: `Sports`, news: [] },
      { id: 6, name: `Technology`, news: [] }
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

    fetch(Business)
      .then((res) => res.json())
      .then((res) => {
        this.items[1].news = res.articles;
      })
      .catch((err) => console.log(err));

    fetch(Entertainment)
      .then((res) => res.json())
      .then((res) => {
        this.items[2].news = res.articles;
      })
      .catch((err) => console.log(err));

    fetch(Health)
      .then((res) => res.json())
      .then((res) => {
        this.items[3].news = res.articles;
      })
      .catch((err) => console.log(err));
    fetch(Science)
      .then((res) => res.json())
      .then((res) => {
        this.items[4].news = res.articles;
      })
      .catch((err) => console.log(err));
    fetch(Sports)
      .then((res) => res.json())
      .then((res) => {
        this.items[5].news = res.articles;
      })
      .catch((err) => console.log(err));
    fetch(Technology)
      .then((res) => res.json())
      .then((res) => {
        this.items[6].news = res.articles;
      })
      .catch((err) => console.log(err));
  },
});
