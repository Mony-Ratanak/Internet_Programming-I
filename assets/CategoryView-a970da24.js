import {
  _ as a,
  C as t,
  P as o,
  a as i,
  M as c,
  b as r,
  S as n,
  H as _,
  c as d,
  d as l,
  u,
  o as g,
  e as m,
  f as p,
} from "./index-6f1be3de.js";
const e = "category_image1-86a88730.png";
const v = {
    name: "HomeView",
    components: {
      Categories: t,
      Promotions: o,
      Product: i,
      Menu: c,
      Menuitem: r,
      Searchbox: n,
      Header: _,
      SubHeader: d,
      Subscribe: l,
    },
    setup() {
      return { todo: u() };
    },
  },
  b = { class: "overall_container" },
  h = p(
    '<div class="productview_container"><div class="letter_container"><div class="title">Cake &amp; Milk</div><div class="desc">Home <i class="uil uil-angle-right-b"></i> Categories <i class="uil uil-angle-right-b"></i> Cake &amp; Milk</div></div><img src="' +
      e +
      '" class="img_background_left"><img src="' +
      e +
      '" class="img_background_right"></div>',
    1
  ),
  f = [h];
function k(s, C, S, x, M, y) {
  return g(), m("div", b, f);
}
const w = a(v, [["render", k]]);
export { w as default };
