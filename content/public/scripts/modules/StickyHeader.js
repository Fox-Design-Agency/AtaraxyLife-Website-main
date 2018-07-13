import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
  constructor() {
    //lazy load fix
    this.lazyImages = $(".lazyload");

    //sticky header stuffs
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();

    //anchor highlighting
    this.headerLinks = $(".primary-nav a");
    this.pageSections = $(".page-section");
    this.createPageSectionWaypoints();

    //smooth scroll stuff
    this.addSmoothScrolling();

    //lazy load call
    this.refreshWaypoints();
  }

  refreshWaypoints(){
    this.lazyImages.on("load", function(){
      Waypoint.refreshAll();
    })
  }// end of refresh waypoints method

  addSmoothScrolling() {
      this.headerLinks.smoothScroll();
  } //end of smooth scroll function

  createHeaderWaypoint() {
    const that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  } // end of create header waypoint function

  createPageSectionWaypoints() {
    let that = this;
    this.pageSections.each(function() {
      const currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            let matchingHeaderLink = currentPageSection.getAttribute(
              "data-matching-link"
            );
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            let matchingHeaderLink = currentPageSection.getAttribute(
              "data-matching-link"
            );
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%%"
      });
    });
  } //end of create page section waypoints
} // end of sticky header class

export default StickyHeader;
