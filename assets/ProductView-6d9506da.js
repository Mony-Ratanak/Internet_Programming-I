import {
  _ as u,
  b,
  r as c,
  o as h,
  g as I,
  w as p,
  h as e,
  i,
  l as x,
  j as V,
  F as k,
  e as C,
  f as _,
  S as H,
  R as B,
  m as w,
  k as l,
  u as y,
  p as S,
  n as A,
} from "./index-6f1be3de.js";
const R = {
    name: "MenuItemAll",
    components: { MenuItems: b },
    props: ["Itemname"],
    data() {
      return { ItemName: "Hot Deals" };
    },
    props: [
      "first_bg",
      "first_icon",
      "first_text",
      "first_color",
      "second_bg",
      "second_icon",
      "second_text",
      "second_color",
      "text_color",
      "link",
    ],
  },
  Z = { class: "list_menuitem" };
function $(s, n, t, v, r, m) {
  const a = c("MenuItems"),
    f = c("RouterLink");
  return (
    h(),
    I(
      f,
      { to: `/category/${r.ItemName}` },
      {
        default: p(() => [
          e("div", Z, [
            i(
              a,
              {
                class: "list",
                link: t.link,
                first_bg: t.first_bg,
                first_icon: t.first_icon,
                first_color: t.first_color,
                first_text: t.first_text,
                text_color: t.text_color,
                second_bg: t.second_bg,
                second_icon: t.second_icon,
                second_color: t.second_color,
                second_text: t.second_text,
              },
              null,
              8,
              [
                "link",
                "first_bg",
                "first_icon",
                "first_color",
                "first_text",
                "text_color",
                "second_bg",
                "second_icon",
                "second_color",
                "second_text",
              ]
            ),
          ]),
        ]),
        _: 1,
      },
      8,
      ["to"]
    )
  );
}
const M = u(R, [
  ["render", $],
  ["__scopeId", "data-v-c999cf80"],
]);
x.add(V);
const L = {
    name: "MenuItemBig",
    components: { FontAwesomeIcon: k, MenuItemAll: M, MenuItems: b },
  },
  N = { class: "container_item" },
  q = { class: "item_left" },
  z = { class: "browser_cate" },
  D = _(
    '<svg width="17" height="17" viewBox="0 0 17 17" fill="none"><g clip-path="url(#clip0_1579_709)"><path d="M8.02297 7.85042H0.689636V2.51709C0.689636 1.98666 0.90035 1.47795 1.27542 1.10288C1.6505 0.727804 2.1592 0.51709 2.68964 0.51709L8.02297 0.51709V7.85042ZM2.02297 6.51709H6.68964V1.85042H2.68964C2.51283 1.85042 2.34326 1.92066 2.21823 2.04569C2.09321 2.17071 2.02297 2.34028 2.02297 2.51709V6.51709Z" fill="white"></path><path d="M16.6897 7.85042H9.35632V0.51709H14.6897C15.2201 0.51709 15.7288 0.727804 16.1039 1.10288C16.4789 1.47795 16.6897 1.98666 16.6897 2.51709V7.85042ZM10.6897 6.51709H15.3563V2.51709C15.3563 2.34028 15.2861 2.17071 15.1611 2.04569C15.036 1.92066 14.8665 1.85042 14.6897 1.85042H10.6897V6.51709Z" fill="white"></path><path d="M8.02297 16.517H2.68964C2.1592 16.517 1.6505 16.3063 1.27542 15.9313C0.90035 15.5562 0.689636 15.0475 0.689636 14.517L0.689636 9.18372H8.02297V16.517ZM2.02297 10.517V14.517C2.02297 14.6939 2.09321 14.8634 2.21823 14.9885C2.34326 15.1135 2.51283 15.1837 2.68964 15.1837H6.68964V10.517H2.02297Z" fill="white"></path><path d="M14.6897 16.517H9.35632V9.18372H16.6897V14.517C16.6897 15.0475 16.4789 15.5562 16.1039 15.9313C15.7288 16.3063 15.2201 16.517 14.6897 16.517ZM10.6897 15.1837H14.6897C14.8665 15.1837 15.036 15.1135 15.1611 14.9885C15.2861 14.8634 15.3563 14.6939 15.3563 14.517V10.517H10.6897V15.1837Z" fill="white"></path></g></svg><span>Browser All Category</span>',
    2
  ),
  F = _(
    '<div class="item_right"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" viewBox="0 0 36 30" fill="none"><path d="M31.5 15.636V13.5C31.5 9.91958 30.0777 6.4858 27.5459 3.95406C25.0142 1.42232 21.5804 0 18 0C14.4196 0 10.9858 1.42232 8.45404 3.95406C5.9223 6.4858 4.49999 9.91958 4.49999 13.5V15.636C2.92673 16.3287 1.63919 17.5409 0.852919 19.0696C0.0666509 20.5983 -0.170622 22.3506 0.180823 24.0334C0.532268 25.7161 1.4511 27.227 2.78349 28.3132C4.11589 29.3994 5.78097 29.9949 7.49999 30H10.5V15H7.49999V13.5C7.49999 10.7152 8.60623 8.04451 10.5754 6.07538C12.5445 4.10625 15.2152 3 18 3C20.7848 3 23.4555 4.10625 25.4246 6.07538C27.3937 8.04451 28.5 10.7152 28.5 13.5V15H25.5V27H19.5V30H28.5C30.219 29.9949 31.8841 29.3994 33.2165 28.3132C34.5489 27.227 35.4677 25.7161 35.8191 24.0334C36.1706 22.3506 35.9333 20.5983 35.1471 19.0696C34.3608 17.5409 33.0732 16.3287 31.5 15.636ZM7.49999 27C6.30651 27 5.16192 26.5259 4.31801 25.682C3.47409 24.8381 2.99999 23.6935 2.99999 22.5C2.99999 21.3065 3.47409 20.1619 4.31801 19.318C5.16192 18.4741 6.30651 18 7.49999 18V27ZM28.5 27V18C29.6935 18 30.8381 18.4741 31.682 19.318C32.5259 20.1619 33 21.3065 33 22.5C33 23.6935 32.5259 24.8381 31.682 25.682C30.8381 26.5259 29.6935 27 28.5 27Z" fill="#253D4E"></path></svg><div class="time"><div class="lg_time">1900 - 8888</div><div class="sm_day">24/7 Support Center</div></div></div>',
    1
  );
function j(s, n, t, v, r, m) {
  const a = c("font-awesome-icon");
  return (
    h(),
    C("div", N, [
      e("div", q, [
        e("div", z, [
          D,
          i(a, {
            icon: ["fas", "chevron-down"],
            style: { "font-size": "15px" },
          }),
        ]),
      ]),
      F,
    ])
  );
}
const E = u(L, [["render", j]]);
const K = {
    name: "MenuBarAll",
    components: { MenuItems: b },
    props: [
      "first_bg",
      "first_icon",
      "first_text",
      "first_color",
      "second_bg",
      "second_icon",
      "second_text",
      "second_color",
      "text_color",
      "link",
    ],
  },
  O = { class: "list_menubar" };
function P(s, n, t, v, r, m) {
  const a = c("MenuItems");
  return (
    h(),
    C("div", O, [
      i(
        a,
        {
          class: "list",
          link: t.link,
          first_bg: t.first_bg,
          first_icon: t.first_icon,
          first_color: t.first_color,
          first_text: t.first_text,
          text_color: t.text_color,
          second_bg: t.second_bg,
          second_icon: t.second_icon,
          second_color: t.second_color,
          second_text: t.second_text,
        },
        null,
        8,
        [
          "link",
          "first_bg",
          "first_icon",
          "first_color",
          "first_text",
          "text_color",
          "second_bg",
          "second_icon",
          "second_color",
          "second_text",
        ]
      ),
    ])
  );
}
const Q = u(K, [
    ["render", P],
    ["__scopeId", "data-v-f16dda29"],
  ]),
  T = "../assets/1-Seeds-b42c51ef.png",
  U = "../assets/2-Corn-3bc82486.png",
  G = "../assets/10-Haagen-6f5f115c.png";
x.add(V);
const W = {
    name: "CategoryView",
    components: {
      MenuItemAll: M,
      MenuItemBig: E,
      SearchBox: H,
      MenuBarAll: Q,
      RouterLink: B,
      FontAwesomeIcon: k,
    },
    computed: { ...w(y, ["MenuItemAll"]), ...w(y, ["MenuBarAll"]) },
  },
  o = (s) => (S("data-v-049eb251"), (s = s()), A(), s),
  J = { class: "container" },
  X = { class: "navbar" },
  Y = o(() => e("span", { class: "home" }, "Home", -1)),
  ee = o(() => e("i", { class: "uil uil-angle-right" }, null, -1)),
  te = o(() => e("i", { class: "uil uil-angle-right" }, null, -1)),
  se = o(() =>
    e(
      "div",
      { class: "text_color" },
      [e("p", null, "Seeds of Change Organic Quinoa, Brown, & Red Rice")],
      -1
    )
  ),
  oe = { class: "wrapper" },
  ie = { class: "image-container" },
  ne = _(
    '<div class="image" data-v-049eb251><div class="search-bar" data-v-049eb251><i class="pi pi-search" data-v-049eb251></i></div><div class="main-image" data-v-049eb251><img src="' +
      T +
      '" style="width:95%;height:55%;margin-right:220px;" data-v-049eb251></div></div>',
    1
  ),
  ae = { class: "sub-image" },
  ce = o(() => e("i", { class: "uil uil-arrow-left" }, null, -1)),
  de = [ce],
  le = o(() =>
    e(
      "div",
      { class: "images" },
      [
        e("div", { class: "image" }, [
          e("img", {
            src: U,
            style: { width: "100px", height: "80px", "margin-left": "30px" },
          }),
          e("img", { src: G, style: { width: "100px", height: "80px" } }),
        ]),
      ],
      -1
    )
  ),
  _e = o(() => e("i", { class: "uil uil-arrow-right" }, null, -1)),
  re = [_e],
  ue = { class: "content" },
  he = o(() =>
    e("div", { class: "status" }, [e("span", null, "In Stock")], -1)
  ),
  ve = { class: "title" },
  me = { class: "Star" },
  fe = o(() =>
    e(
      "div",
      { class: "price" },
      [
        e("div", { class: "discount-pirce" }, "$2.00"),
        e("div", { class: "main-pirce" }, "$3.00"),
      ],
      -1
    )
  ),
  ge = o(() =>
    e(
      "div",
      { class: "info" },
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus omnis inventore deleniti modi officiis facilis unde a quod nont molestiae, cumque, dicta tempora sunt. ",
      -1
    )
  ),
  pe = { class: "action" },
  be = { class: "qty" },
  Ce = ["value"],
  we = _(
    '<div class="add" data-v-049eb251><i class="uil uil-shopping-cart" data-v-049eb251></i>Add to cart </div><div class="wishlist" data-v-049eb251><i class="uil uil-heart" data-v-049eb251></i></div><div class="chnage" data-v-049eb251><i class="uil uil-link" data-v-049eb251></i></div>',
    3
  ),
  ye = o(() =>
    e(
      "div",
      { class: "vender" },
      [l("Vender: "), e("span", null, "NestMart")],
      -1
    )
  ),
  xe = o(() =>
    e("div", { class: "sku" }, [l("SKU: "), e("span", null, "FWM15VKD")], -1)
  ),
  Ve = _(
    '<div class="more" data-v-049eb251><div class="more-wrapper" data-v-049eb251><div class="more-navbar" data-v-049eb251><div class="more-button more-active" data-v-049eb251>Description</div><div class="more-button" data-v-049eb251>Additional info</div><div class="more-button" data-v-049eb251>Reviews (3)</div></div><div class="more-content" data-v-049eb251><div class="more-content1" data-v-049eb251> Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. </div><div class="more-content2" data-v-049eb251> Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. </div></div></div></div>',
    1
  );
function ke(s, n, t, v, r, m) {
  const a = c("RouterLink"),
    f = c("h"),
    d = c("font-awesome-icon");
  return (
    h(),
    C("div", J, [
      e("div", X, [
        i(a, { to: "/" }, { default: p(() => [Y]), _: 1 }),
        ee,
        l(" Vegetables & tubers "),
        te,
        se,
      ]),
      e("div", oe, [
        e("div", ie, [
          ne,
          e("div", ae, [
            e(
              "div",
              {
                onClick:
                  n[0] ||
                  (n[0] = (...g) =>
                    s.handleChangeImageBack && s.handleChangeImageBack(...g)),
                class: "arrow",
              },
              de
            ),
            le,
            e(
              "div",
              {
                onClick:
                  n[1] ||
                  (n[1] = (...g) =>
                    s.handleChangeImage && s.handleChangeImage(...g)),
                class: "arrow",
              },
              re
            ),
          ]),
        ]),
        e("div", ue, [
          he,
          e("div", ve, [
            i(
              f,
              {
                style: {
                  "font-family":
                    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                  "font-size": "large",
                },
              },
              {
                default: p(() => [
                  l("Seeds of Change Organic Quinoa, Brown, & Red Rice"),
                ]),
                _: 1,
              }
            ),
          ]),
          e("div", me, [
            i(d, { icon: ["fas", "star"], style: { color: "#fdc040" } }),
            i(d, { icon: ["fas", "star"], style: { color: "#fdc040" } }),
            i(d, { icon: ["fas", "star"], style: { color: "#fdc040" } }),
            i(d, { icon: ["fas", "star"], style: { color: "#fdc040" } }),
            i(d, { icon: ["fas", "star"], style: { color: "#cdcdcd" } }),
            l(" (4.0) "),
          ]),
          fe,
          ge,
          e("div", pe, [
            e("div", be, [
              e("input", { type: "number", value: s.value }, null, 8, Ce),
            ]),
            we,
          ]),
          ye,
          xe,
        ]),
      ]),
      Ve,
    ])
  );
}
const Ie = u(W, [
  ["render", ke],
  ["__scopeId", "data-v-049eb251"],
]);
export { Ie as default };
