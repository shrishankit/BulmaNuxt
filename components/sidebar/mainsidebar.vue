<template>
  <div class="sidebar">
    <sidebar-menu :menu="menu" width="265px" theme="white-theme" :collapsed="collapsed" @collapse="onCollapse"/>
    <!-- Other Attributes
            :show-one-child="true"
            @itemClick="onItemClick"
    -->
  </div>
</template>
<script>
import Vue from "vue";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
Vue.use(VueSidebarMenu);

export default {
  props: {
    width: {
        type: String,
        default: '350px'
    },
    widthCollapsed: {
        type: String,
        default: '50px'
    },
    showChild: {
        type: Boolean,
        default: false
    },
    showOneChild: {
      type: Boolean,
      default: false
    },
    rtl: {
      type: Boolean,
      default: false
    }
},

  data() {
    
    return {
      collapsed: false,
      menu: [
        {
          header: true,
          title: "Main Navigation"
          // component: componentName
          // visibleOnCollapse: true
          // class:''
          // attributes: {}
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
          // disabled: true
          // class:''
          // attributes: {}
          /*
                        badge: {
                            text: 'new',
                            // class:''
                            // attributes: {}
                        }
                        */
        },
        {
          title: "Charts",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/charts/sublink",
              title: "Sub Link"
            }
          ]
        }
      ]
    };
  },
  methods: {
    onCollapse(collapsed) {
      this.collapsed = collapsed;
      console.log("from sidebar-menu", collapsed);
      this.$store.dispatch("SCREEN_RATIO", collapsed);
    }
  }
};
</script>
