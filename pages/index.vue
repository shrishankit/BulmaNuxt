<template>
  <section>
    <div id="contentarea" :class="[{'collapsed' : this.$store.getters['isCollapsed']}]">
      <!-- {{ this.$store.getters['main/isCollapsed'] }} -->

      <div class="maincontent">
        <mainheader>
          <!-- <div  slot="slider">
            <bigslider></bigslider> 
          </div>-->
        </mainheader>
        <section class="componentcontainer">
          <cardscolumns></cardscolumns>
          <div class="columns">
            <div class="column">
              <tablelist></tablelist>
            </div>
            <div class="column">
              <linechart></linechart>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <expandabletable></expandabletable>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
// window.onbeforeunload = function() {
//   return "Data will be lost if you leave the page, are you sure?";
// };
import linechart from '../components/charts/linearea'
import mainheader from "../components/header";
import bigslider from "../components/carousel/bigslider";
import cardscolumns from "../components/topcards/cardscolumns";
import tablelist from "../components/tablelist/tablelist";
import expandabletable from '../components/table/expandabletable'

export default {
  components: {
    mainheader,
    bigslider,
    cardscolumns,
    tablelist,
    linechart,
    expandabletable
  },

  data() {
    return {
      isSwitched: false,
      onBackgroundColor: true,
    };
  },
  mounted() {
    this.init();
  },

  methods: {
    init() {}
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
