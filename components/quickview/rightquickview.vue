<template>
    <div class="quickviews">
        <div id="quickviewDefault" class="quickview">
            <header class="quickview-header">
              <p class="title">Quickview title</p>
              <span class="delete" data-dismiss="quickview"></span>
            </header>

            <div class="quickview-body">
              <div class="quickview-block">...</div>
            </div>

            <footer class="quickview-footer"></footer>
          </div>

          <button
            class="button is-primary"
            data-show="quickview"
            data-target="quickviewDefault"
          >Show quickview</button>
    </div>
</template>
<script>
import bulmaQuickview from "../node_modules/bulma-extensions/bulma-quickview/dist/js/bulma-quickview.min.js";


export default {
    mounted() {
        this.init()
    },
    methods: {
        init(){
            var quickviews = bulmaQuickview.attach();
        }
    },
}
</script>

