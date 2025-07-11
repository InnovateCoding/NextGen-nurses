

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
    throw new Error("AdminLTE requires jQuery");
  }
  
  'use strict';
  
  
  $.AdminLTE = {};
  
  $.AdminLTE.options = {
  
    navbarMenuSlimscroll: true,
    navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
    navbarMenuHeight: "200px", //The height of the inner menu
    //Sidebar push menu toggle button selector
    sidebarToggleSelector: "[data-toggle='offcanvas']",
    //Activate sidebar push menu
    sidebarPushMenu: true,
    //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
    sidebarSlimScroll: true,
    //BoxRefresh Plugin
    enableBoxRefresh: true,
    //Bootstrap.js tooltip
    enableBSToppltip: true,
    BSTooltipSelector: "[data-toggle='tooltip']",
    //Enable Fast Click. Fastclick.js creates a more
    //native touch ecperience with touch devices. If you
    //choose to enable the plugin, make sure you load the script 
    //before AdminLTE's app.js
    enableFastclick: true,
    //Box Widget Plugin. Enable this plugin
    //to allow boxes to be collapsed and/or removed
    enableBoxWidget: true,
    //Box Widget plugin options
    boxWidgetOptions: {
      boxWidgetIcons: {
        //The icon that triggers the collapse event
        collapse: 'fa fa-minus',
        //The icon that trigger the opening event
        open: 'fa fa-plus',
        //The icon that triggers the removing event
        remove: 'fa fa-times'
      },
      boxWidgetSelectors: {
        //Remove button selector
        remove: '[data-widget="remove"]',
        //Collapse button selector
        collapse: '[data-widget="collapse"]'
      }
    },
    //Define the set of colors to use globally around the website
    colors: {
      lightBlue: "#3c8dbc",
      red: "#f56954",
      green: "#00a65a",
      aqua: "#00c0ef",
      yellow: "#f39c12",
      blue: "#0073b7",
      navy: "#001F3F",
      teal: "#39CCCC",
      olive: "#3D9970",
      lime: "#01FF70",
      orange: "#FF851B",
      fuchsia: "#F012BE",
      purple: "#8E24AA",
      maroon: "#D81B60",
      black: "#222222",
      gray: "#d2d6de"
    }
  };
  
  
  $(function () {
    //Easy access to options
    var o = $.AdminLTE.options;
  
    //Activate the layout maker
    $.AdminLTE.layout.activate();
  
    //Enable sidebar tree view controls
    $.AdminLTE.tree('.sidebar');
  
    //Add slimscroll to navbar dropdown
    if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
      $(".navbar .menu").slimscroll({
        height: "200px",
        alwaysVisible: false,
        size: "3px"
      }).css("width", "100%");
    }
  
    //Activate sidebar push menu
    if (o.sidebarPushMenu) {
      $.AdminLTE.pushMenu(o.sidebarToggleSelector);
    }
  
    //Activate Bootstrap tooltip
    if (o.enableBSToppltip) {
      $(o.BSTooltipSelector).tooltip();
    }
  
    //Activate box widget
    if (o.enableBoxWidget) {
      $.AdminLTE.boxWidget.activate();
    }
    
    if(o.enableFastclick && typeof FastClick != 'undefined') {
      FastClick.attach(document.body);
    }
  
    /*
     * INITIALIZE BUTTON TOGGLE
     * ------------------------
     */
    $('.btn-group[data-toggle="btn-toggle"]').each(function () {
      var group = $(this);
      $(this).find(".btn").click(function (e) {
        group.find(".btn.active").removeClass("active");
        $(this).addClass("active");
        e.preventDefault();
      });
  
    });
  });
  
  
  $.AdminLTE.layout = {
    activate: function () {
      var _this = this;
      _this.fix();
      _this.fixSidebar();
      $(window, ".wrapper").resize(function () {
        _this.fix();
        _this.fixSidebar();
      });
    },
    fix: function () {
      //Get window height and the wrapper height
      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
      var window_height = $(window).height();
      var sidebar_height = $(".sidebar").height();
      //Set the min-height of the content and sidebar based on the
      //the height of the document.
      if ($("body").hasClass("fixed")) {
        $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
      } else {
        if (window_height >= sidebar_height) {
          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
        } else {
          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
        }
      }
    },
    fixSidebar: function () {
      //Make sure the body tag has the .fixed class
      if (!$("body").hasClass("fixed")) {
        if (typeof $.fn.slimScroll != 'undefined') {
          $(".sidebar").slimScroll({destroy: true}).height("auto");
        }
        return;
      } else if (typeof $.fn.slimScroll == 'undefined' && console) {
        console.error("Error: the fixed layout requires the slimscroll plugin!");
      }
      //Enable slimscroll for fixed layout
      if ($.AdminLTE.options.sidebarSlimScroll) {
        if (typeof $.fn.slimScroll != 'undefined') {
          //Distroy if it exists
          $(".sidebar").slimScroll({destroy: true}).height("auto");
          //Add slimscroll
          $(".sidebar").slimscroll({
            height: ($(window).height() - $(".main-header").height()) + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
          });
        }
      }
    }
  };
  
  
  $.AdminLTE.pushMenu = function (toggleBtn) {
    //Enable sidebar toggle
    $(toggleBtn).click(function (e) {
      e.preventDefault();
      //Enable sidebar push menu
      $("body").toggleClass('sidebar-collapse');
      $("body").toggleClass('sidebar-open');
    });
    $(".content-wrapper").click(function () {
      //Enable hide menu when clicking on the content-wrapper on small screens    
      if ($(window).width() <= 767 && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
      }
    });
  
  };
  
  
  $.AdminLTE.tree = function (menu) {
    $("li a", $(menu)).click(function (e) {
      //Get the clicked link and the next element
      var $this = $(this);
      var checkElement = $this.next();
  
      //Check if the next element is a menu and is visible
      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
        //Close the menu
        checkElement.slideUp('normal', function () {
          checkElement.removeClass('menu-open');
        });
        checkElement.parent("li").removeClass("active");
      }
      //If the menu is not visible
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
        //Get the parent menu
        var parent = $this.parents('ul').first();
        //Close all open menus within the parent
        var ul = parent.find('ul:visible').slideUp('normal');
        //Remove the menu-open class from the parent
        ul.removeClass('menu-open');
        //Get the parent li
        var parent_li = $this.parent("li");
  
        //Open the target menu and add the menu-open class
        checkElement.slideDown('normal', function () {
          //Add the class active to the parent li
          checkElement.addClass('menu-open');
          parent.find('li.active').removeClass('active');
          parent_li.addClass('active');
        });
      }
      //if this isn't a link, prevent the page from being redirected
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });
  };
  
  
  $.AdminLTE.boxWidget = {
    activate: function () {
      var o = $.AdminLTE.options;
      var _this = this;
      //Listen for collapse event triggers
      $(o.boxWidgetOptions.boxWidgetSelectors.collapse).click(function (e) {
        e.preventDefault();
        _this.collapse($(this));
      });
  
      //Listen for remove event triggers
      $(o.boxWidgetOptions.boxWidgetSelectors.remove).click(function (e) {
        e.preventDefault();
        _this.remove($(this));
      });
    },
    collapse: function (element) {
      //Find the box parent
      var box = element.parents(".box").first();
      //Find the body and the footer
      var bf = box.find(".box-body, .box-footer");
      if (!box.hasClass("collapsed-box")) {
        //Convert minus into plus
        element.children(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
        bf.slideUp(300, function () {
          box.addClass("collapsed-box");
        });
      } else {
        //Convert plus into minus
        element.children(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
        bf.slideDown(300, function () {
          box.removeClass("collapsed-box");
        });
      }
    },
    remove: function (element) {
      //Find the box parent
      var box = element.parents(".box").first();
      box.slideUp();
    },
    options: $.AdminLTE.options.boxWidgetOptions
  };
  
  
  (function ($) {
  
    $.fn.boxRefresh = function (options) {
  
      // Render options
      var settings = $.extend({
        //Refressh button selector
        trigger: ".refresh-btn",
        //File source to be loaded (e.g: ajax/src.php)
        source: "",
        //Callbacks
        onLoadStart: function (box) {
        }, //Right after the button has been clicked
        onLoadDone: function (box) {
        } //When the source has been loaded
  
      }, options);
  
      //The overlay
      var overlay = $('<div class="overlay"></div><div class="loading-img"></div>');
  
      return this.each(function () {
        //if a source is specified
        if (settings.source === "") {
          if (console) {
            console.log("Please specify a source first - boxRefresh()");
          }
          return;
        }
        //the box
        var box = $(this);
        //the button
        var rBtn = box.find(settings.trigger).first();
  
        //On trigger click
        rBtn.click(function (e) {
          e.preventDefault();
          //Add loading overlay
          start(box);
  
          //Perform ajax call
          box.find(".box-body").load(settings.source, function () {
            done(box);
          });
        });
      });
  
      function start(box) {
        //Add overlay and loading img
        box.append(overlay);
  
        settings.onLoadStart.call(box);
      }
  
      function done(box) {
        //Remove overlay and loading img
        box.find(overlay).remove();
  
        settings.onLoadDone.call(box);
      }
  
    };
  
  })(jQuery);
  
  (function ($) {
  
    $.fn.todolist = function (options) {
      // Render options
      var settings = $.extend({
        //When the user checks the input
        onCheck: function (ele) {
        },
        //When the user unchecks the input
        onUncheck: function (ele) {
        }
      }, options);
  
      return this.each(function () {
  
        if (typeof $.fn.iCheck != 'undefined') {
          $('input', this).on('ifChecked', function (event) {
            var ele = $(this).parents("li").first();
            ele.toggleClass("done");
            settings.onCheck.call(ele);
          });
  
          $('input', this).on('ifUnchecked', function (event) {
            var ele = $(this).parents("li").first();
            ele.toggleClass("done");
            settings.onUncheck.call(ele);
          });
        } else {
          $('input', this).on('change', function (event) {
            var ele = $(this).parents("li").first();
            ele.toggleClass("done");
            settings.onCheck.call(ele);
          });
        }
      });
    };
  }(jQuery));





 /*
         * DONUT CHART
         * -----------
         */

 var donutData = [
    {label: "Series2", data: 30, color: "#3c8dbc"},
    {label: "Series3", data: 20, color: "#0073b7"},
    {label: "Series4", data: 50, color: "#00c0ef"}
  ];
  $.plot("#donut-chart", donutData, {
    series: {
      pie: {
        show: true,
        radius: 1,
        innerRadius: 0.5,
        label: {
          show: true,
          radius: 2 / 3,
          formatter: labelFormatter,
          threshold: 0.1
        }

      }
    },
    legend: {
      show: false
    }
  });
  /*
   * END DONUT CHART
   */


