<template>
  <div class>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img
            src="http://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          >
        </a>
        <a
          class="navbar-item is-hidden-desktop"
          href="https://github.com/shrishankit"
          target="_blank"
        >
          <span class="icon" style="color: #333;">
            <i class="fa fa-github"></i>
          </span>
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://twitter.com/ShrishAnkit101" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-twitter"></i>
          </span>
        </a>

        <div class="navbar-burger burger" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenubd-example" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-active" href="/documentation/overview/start/">Docs</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="/documentation/overview/start/">Overview</a>
              <a
                class="navbar-item"
                href="http://bulma.io/documentation/modifiers/syntax/"
              >Modifiers</a>
              <a class="navbar-item" href="http://bulma.io/documentation/columns/basics/">Columns</a>
              <a class="navbar-item" href="http://bulma.io/documentation/layout/container/">Layout</a>
              <a class="navbar-item" href="http://bulma.io/documentation/form/general/">Form</a>
              <a class="navbar-item" href="http://bulma.io/documentation/elements/box/">Elements</a>

              <a
                class="navbar-item is-active"
                href="http://bulma.io/documentation/components/breadcrumb/"
              >Components</a>

              <hr class="navbar-divider">
              <div class="navbar-item">
                <div>
                  <p class="is-size-6-desktop">
                    <strong class="has-text-info">0.5.1</strong>
                  </p>

                  <small>
                    <a class="bd-view-all-versions" href="/versions">View all versions</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable is-mega">
            <div class="navbar-link">Blog</div>
            <div id="blogDropdown" class="navbar-dropdown" data-style="width: 18rem;">
              <div class="is-fluid">
                <div class="columns">
                  <div class="column">
                    <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                    <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                      <div class="navbar-content">
                        <p>
                          <small class="has-text-info">03 Aug 2017</small>
                        </p>
                        <p>New feature: list of tags</p>
                      </div>
                    </a>
                    <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                      <div class="navbar-content">
                        <p>
                          <small class="has-text-info">03 Aug 2017</small>
                        </p>
                        <p>New feature: list of tags</p>
                      </div>
                    </a>
                    <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                      <div class="navbar-content">
                        <p>
                          <small class="has-text-info">03 Aug 2017</small>
                        </p>
                        <p>New feature: list of tags</p>
                      </div>
                    </a>
                  </div>
                  <div class="column">
                    <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                    <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                      <div class="navbar-content">
                        <p>
                          <small class="has-text-info">03 Aug 2017</small>
                        </p>
                        <p>New feature: list of tags</p>
                      </div>
                    </a>
                    <a class="navbar-item" href="/documentation/overview/start/">Overview</a>
                    <a
                      class="navbar-item"
                      href="http://bulma.io/documentation/modifiers/syntax/"
                    >Modifiers</a>
                    <a
                      class="navbar-item"
                      href="http://bulma.io/documentation/columns/basics/"
                    >Columns</a>
                  </div>
                  <div class="column">
                    <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                    <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                      <div class="navbar-content">
                        <p>
                          <small class="has-text-info">03 Aug 2017</small>
                        </p>
                        <p>New feature: list of tags</p>
                      </div>
                    </a>
                    <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                      <div class="navbar-content">
                        <p>
                          <small class="has-text-info">03 Aug 2017</small>
                        </p>
                        <p>New feature: list of tags</p>
                      </div>
                    </a>
                    <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                      <div class="navbar-content">
                        <p>
                          <small class="has-text-info">03 Aug 2017</small>
                        </p>
                        <p>New feature: list of tags</p>
                      </div>
                    </a>
                  </div>
                  <div class="column">
                    <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                    <a class="navbar-item" href="/documentation/overview/start/">Overview</a>
                    <a
                      class="navbar-item"
                      href="http://bulma.io/documentation/modifiers/syntax/"
                    >Modifiers</a>
                    <a
                      class="navbar-item"
                      href="http://bulma.io/documentation/columns/basics/"
                    >Columns</a>
                    <a
                      class="navbar-item"
                      href="http://bulma.io/documentation/layout/container/"
                    >Layout</a>
                  </div>
                </div>
              </div>

              <hr class="navbar-divider">
              <div class="navbar-item">
                <div class="navbar-content">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div class="level-right">
                      <div class="level-item">
                        <a class="button bd-is-rss is-small" href="http://bulma.io/atom.xml">
                          <span class="icon is-small">
                            <i class="fa fa-rss"></i>
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">More</div>
            <div id="moreDropdown" class="navbar-dropdown">
              <a class="navbar-item" href="http://bulma.io/extensions/">
                <div class="level is-mobile">
                  <div class="level-left">
                    <div class="level-item">
                      <p>
                        <strong>Extensions</strong>
                        <br>
                        <small>Side projects to enhance Bulma</small>
                      </p>
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <span class="icon has-text-info">
                        <i class="fa fa-plug"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <a class="navbar-item" href="http://bulma.io/expo/">
            <span class="bd-emoji">🎨</span> &nbsp;Expo
          </a>
          <a class="navbar-item" href="http://bulma.io/love/">
            <span class="bd-emoji">❤️</span> &nbsp;Love
          </a>
        </div>

        <div class="navbar-end">
          <a
            class="navbar-item is-hidden-desktop-only"
            href="https://github.com/shrishankit"
            target="_blank"
          >
            <span class="icon" style="color: #333;">
              <i class="fab fa-github"></i>
            </span>
          </a>
          <a
            class="navbar-item is-hidden-desktop-only"
            href="https://twitter.com/ShrishAnkit101"
            target="_blank"
          >
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter"></i>
            </span>
          </a>
          <div class="navbar-item">
            <div class="field is-grouped">
              
              <p class="control">
                <a
                  class="button is-primary"
                  href="https://github.com/jgthms/bulma/archive/0.5.1.zip"
                >
                  <span class="icon">
                    <i class="fa fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <slot name="slider"></slot>
  </div>
</template>
<script>
 document.addEventListener('load', function() {
        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(
          document.querySelectorAll(".navbar-burger"),
          0
        );
        console.log("Thios", $navbarBurgers);

        // Check if there are any nav burgers
        if ($navbarBurgers.length > 0) {
          // Add a click event on each of them
          $navbarBurgers.forEach(function($el) {
            $el.addEventListener("click", function() {
              console.log("this is", $el);

              // Get the target from the "data-target" attribute
              var target = $el.dataset.target;
              var $target = document.getElementById(target);

              // Toggle the class on both the "navbar-burger" and the "navbar-menu"
              $el.classList.toggle("is-active");
              $target.classList.toggle("is-active");
            });
          });
        }
      });
export default {
  data() {
    return {
      
    }
  },
  created() {
    this.init()
  },
  mounted() {
    
  },
  methods: {
    init() {
      window.addEventListener("DOMContentLoaded", function() {
        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(
          window.querySelectorAll(".navbar-burger"),
          0
        );
        console.log("Thios", $navbarBurgers);

        // Check if there are any nav burgers
        if ($navbarBurgers.length > 0) {
          // Add a click event on each of them
          $navbarBurgers.forEach(function($el) {
            $el.addEventListener("click", function() {
              console.log("this is", $el);

              // Get the target from the "data-target" attribute
              var target = $el.dataset.target;
              var $target = document.getElementById(target);

              // Toggle the class on both the "navbar-burger" and the "navbar-menu"
              $el.classList.toggle("is-active");
              $target.classList.toggle("is-active");
            });
          });
        }
      });
    }
  }
};
</script>

