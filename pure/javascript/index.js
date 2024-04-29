
/*

const { createApp, ref } = Vue;

createApp({
  setup() {
    return {
      count: ref(0),
    };
  },
}).mount("#app");

*/

Vue.createApp({
  
  computed: {
    randomThing() {
      return Math.random()
    },

  },

  methods: {
    upCount: function () {
      this.count2++
    },
  },

  data() {
    return {
      count: 0,
      count2: 0,
      test: "test",
      links: ["test2", "test3", "test4"],
      rawHTML:"<p>testhtml</p>"
    };
  }
}).mount('body')