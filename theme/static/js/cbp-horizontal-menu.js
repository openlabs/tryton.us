var cbpHorizontalMenu = (function () {
  var b = $("#cbp-hrmenu > ul > li"),
    g = b.children("a"),
    c = $("body"),
    d = -1;

  function f() {
    g.on("click", a);
    b.on("click", function (h) {
      h.stopPropagation()
    })
  }

  function a(j) {
    if (d !== -1) {
      b.eq(d).removeClass("cbp-hropen")
    }
    var i = $(j.currentTarget).parent("li"),
      h = i.index();
    if (d === h) {
      i.removeClass("cbp-hropen");
      d = -1
    } else {
      i.addClass("cbp-hropen");
      d = h;
      c.off("click").on("click", e)
    }
    return false
  }

  function e(h) {
    b.eq(d).removeClass("cbp-hropen");
    d = -1
  }
  return {
    init: f
  }
})();