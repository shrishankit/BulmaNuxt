<template>
    <section class="hero is-medium has-carousel">
          <div class="hero-head">
            
          </div>
          <div class="hero-body">
            <div id="carousel-demo" class="hero-carousel">
              <div class="item-1">
                <img src="../../assect/images/av2.jpg">
              </div>
              <div class="item-3">
                <img src="../../assect/images/av3.jpg">
              </div>
              <div class="item-4">
                <img src="../../assect/images/Avengers-Minimal-Art-Wallpaper.jpg">
              </div>
            </div>
          </div>
          <div class="hero-foot"></div>
        </section>
</template>
<script>
import bulmaCarousel from "bulma-carousel";

export default {
  data() {
    return {
      isSwitched: false,
      onBackgroundColor: true
    };
  },
  mounted() {
    this.carole();
  },
  components: {
  
  },
  methods: {
    carole() {
      var carousels = bulmaCarousel.attach("#carousel-demo", {
        slidesToScroll: 1,
        slidesToShow: 1
      });

      // // Loop on each carousel initialized
      // for(var i = 0; i < carousels.length; i++) {
      // 	// Add listener to  event
      // 	carousels[i].on('before:show', state => {
      // 		console.log(state);
      // 	});
      // }

      // // Access to bulmaCarousel instance of an element
      // var element = document.querySelector('#my-element');
      // if (element && element.bulmaCarousel) {
      // 	// bulmaCarousel instance is available as element.bulmaCarousel
      // 	element.bulmaCarousel.on('before-show', function(state) {
      // 		console.log(state);
      // 	});
      // }
    }
  }
};
</script>
