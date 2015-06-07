define('final/templates/segue/dashboard', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1,"class","navbar-form navbar-left");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("header");
        dom.setAttribute(el1,"class","tabs-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("View-1");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","home-base");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","left-content-wrapper");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("hello hello hello ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Lorem ipsum dolor sit amet, cons");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","right-content-wrapper");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","accordian");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","tabs");
        dom.setAttribute(el4,"id","tab-1");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","accordian-control");
        var el6 = dom.createTextNode("EXECUTE");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","tab-items");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","tabs");
        dom.setAttribute(el4,"id","tab-2");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","accordian-control");
        var el6 = dom.createTextNode("EXECUTE");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","tab-items");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","tabs");
        dom.setAttribute(el4,"id","tab-3");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","accordian-control");
        var el6 = dom.createTextNode("EXECUTE");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","tab-items");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n              ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n              ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3,"id","title");
        var el4 = dom.createTextNode("My Map Component");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n              ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt sed, ipsa excepturi totam ex. Incidunt aut totam culpa a, ipsam, dolorum quas non veniam expedita, pariatur cum modi nihil?");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","tab-foot");
        var el3 = dom.createTextNode("\n          ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","foot-list");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","footer-item");
        dom.setAttribute(el4,"id","sv1");
        var el5 = dom.createTextNode("segue-view");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","footer-item");
        dom.setAttribute(el4,"id","sv2");
        var el5 = dom.createTextNode("segue-view");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","footer-item");
        dom.setAttribute(el4,"id","sv3");
        var el5 = dom.createTextNode("segue-view");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1,"class","footer2");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, element = hooks.element, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(fragment, [6]);
        var element2 = dom.childAt(element1, [5, 1]);
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(element0,0,1);
        var morph2 = dom.createMorphAt(dom.childAt(element1, [3]),4,5);
        var morph3 = dom.createMorphAt(element2,2,3);
        var morph4 = dom.createMorphAt(element2,3,4);
        var morph5 = dom.createMorphAt(element2,4,5);
        content(env, morph0, context, "outlet");
        element(env, element0, context, "action", ["search"], {"on": "submit"});
        inline(env, morph1, context, "input", [], {"type": "text", "class": "form-control col-lg-8", "placeholder": "Search", "value": get(env, context, "searchTerm")});
        inline(env, morph2, context, "input", [], {"type": "datetime-local", "value": "2015-01-01T12:00"});
        inline(env, morph3, context, "fa-icon", ["life-ring"], {});
        inline(env, morph4, context, "fa-icon", ["fa-signal"], {});
        inline(env, morph5, context, "fa-icon", ["fa-moon-o"], {});
        return fragment;
      }
    };
  }()));

});