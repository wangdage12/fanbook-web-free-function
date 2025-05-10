// [WDG] 解锁服务器自定义背景图设置中的等级限制
// https://github.com/wangdage12/fanbook-web-free-function

!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      a = new Error().stack;
    a &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[a] = "c2c4c796-fdac-419c-954e-58f2c8363226"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c2c4c796-fdac-419c-954e-58f2c8363226"));
  } catch (n) {}
})();
import { j as e } from "./index-BqQCRxQS.js";
import {
  ax as a,
  aW as n,
  B as s,
  F as t,
  I as l,
  av as i,
  D as d,
  a as r,
  at as c,
  T as o,
} from "./library-C_xBo1Ac.js";
import {
  a4 as u,
  a5 as m,
  a6 as f,
  a7 as g,
  a8 as x,
  a9 as h,
  G as b,
  a0 as p,
  a1 as j,
  X as v,
  aa as _,
  Y as y,
  ab as k,
  ac as w,
  ad as I,
  ae as C,
  af as N,
  ag as F,
  ah as V,
  ai as D,
} from "./Index-y9exz2Qn.js";
import { r as S } from "./react-vendor-0oQ6VE-n.js";
import { b as G } from "./lodash-ByAddTSU.js";
import "./web-component-B1GRHp9g.js";
import "./pinyin-pro-BlFF5yCo.js";
function E({ onClose: t, defaultTags: l }) {
  const [i, d] = S.useState(),
    [r, c] = S.useState(!0),
    [o, u] = S.useState(() =>
      l && 0 != l.length ? [l[0], l[0].item[0]] : [void 0, void 0]
    );
  S.useEffect(() => {
    m.getGuildTags()
      .then((e) => {
        d(e);
      })
      .finally(() => {
        c(!1);
      });
  }, []);
  const h = "h-[440px]";
  return r
    ? e.jsx("div", { className: `flex-center ${h}`, children: e.jsx(f, {}) })
    : i
    ? e.jsxs(e.Fragment, {
        children: [
          e.jsx(x, { content: "仅可选择唯一分类,每3个月只能修改1次。" }),
          e.jsx("div", {
            className: `overflow-auto ${h}`,
            children:
              null == i
                ? void 0
                : i.map((s) =>
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("div", {
                          className:
                            "py-2 text-sm font-medium text-[var(--fg-b100)]",
                          children: s.name,
                        }),
                        e.jsx("div", {
                          children: e.jsx(a, {
                            size: [0, 8],
                            wrap: !0,
                            className:
                              "[&_.ant-tag-checkable-checked]:bg-[var(--fg-blue-3)] [&_.ant-tag-checkable-checked]:font-medium [&_.ant-tag-checkable-checked]:!text-[var(--fg-blue-1)] [&_.ant-tag-checkable:not(.ant-tag-checkable-checked)]:bg-[var(--fg-b5)] [&_.ant-tag-checkable]:text-[var(--fg-b60)] hover:[&_.ant-tag-checkable]:text-[var(--fg-b100)] ",
                            children: s.item.map((a) => {
                              var t;
                              return e.jsx(
                                n,
                                {
                                  checked:
                                    (null == (t = o[1]) ? void 0 : t.id) ==
                                    a.id,
                                  className:
                                    "rounded-full border-0 pe-4 ps-4 text-sm leading-[32px]",
                                  onChange: () => u([s, a]),
                                  children: a.name,
                                },
                                a.id
                              );
                            }),
                          }),
                        }),
                        e.jsx("div", { className: "h-4" }),
                      ],
                    })
                  ),
          }),
          e.jsxs("div", {
            className: "flex flex-row justify-end gap-4 py-4",
            children: [
              e.jsx(s, {
                className: "btn-middle",
                onClick: () => t(),
                children: "取消",
              }),
              e.jsx(s, {
                type: "primary",
                className: "btn-middle",
                disabled: !o[0] || !o[1],
                onClick: () => t([{ ...o[0], item: [o[1]] }]),
                children: "保存",
              }),
            ],
          }),
        ],
      })
    : e.jsx(g, {});
}
function z() {
  const a = h(),
    [n, o] = S.useState(b.getCurrentGuild()),
    f = S.useRef(null),
    [g, x] = S.useState();
  S.useEffect(() => {
    V();
  }, []);
  const V = () => {
      m.getSelectedTag(n.guild_id).then(x);
    },
    D = S.useMemo(() => {
      var e, a, s, t;
      return {
        name: n.name,
        icon: n.icon,
        description: n.description,
        banner_use:
          (null == (e = n.banner_config) ? void 0 : e.banner_use) ?? 2,
        banner_default:
          (null == (a = n.banner_config) ? void 0 : a.banner_default) ??
          (null == n ? void 0 : n.banner),
        banner_dynamic:
          null == (s = n.banner_config) ? void 0 : s.banner_dynamic,
        banner_static:
          (null == (t = n.banner_config) ? void 0 : t.banner_static) ??
          (null == n ? void 0 : n.banner),
        assist_display: n.assist_display,
        tags: n.tags ?? [],
      };
    }, [n]),
    z = S.useCallback(
      async (e) => {
        const {
            name: s,
            description: t,
            icon: l,
            banner_use: i,
            banner_static: d,
            banner_default: r,
            banner_dynamic: c,
            assist_display: u,
            tags: f,
          } = e,
          g = { guild_id: n.guild_id };
        if (
          (D.name != s && (g.name = s.trim()),
          D.description != t &&
            (g.description = (null == t ? void 0 : t.trim()) ?? ""),
          D.assist_display != u && (g.assist_display = u),
          !G(D.tags, f) && f.length > 0 && (g.tags = f[0].item),
          D.icon != l &&
            (g.icon = await p
              .getInstance()
              .uploadFile({ type: j.image, file: l })),
          D.banner_use != i ||
            D.banner_dynamic != c ||
            D.banner_static != d ||
            D.banner_default != r)
        ) {
          const e = {
            banner_use: i,
            banner_default: r,
            banner_static: d,
            banner_dynamic: c,
          };
          d &&
            (e.banner_static =
              "string" == typeof d
                ? d
                : await p.getInstance().uploadFile({ type: j.image, file: d })),
            c &&
              (e.banner_dynamic =
                "string" == typeof c
                  ? c
                  : await p
                      .getInstance()
                      .uploadFile({ type: j.image, file: c })),
            (g.banner_config = e);
        }
        await m.updateGuild(n.guild_id, g),
          a(v.mergeGuild(g)),
          o(b.getCurrentGuild());
      },
      [D]
    );
  if (!n) return null;
  const U = (null == g ? void 0 : g.can_edit) == _.Yes;
  return e.jsx(y, {
    initialValue: D,
    name: "control-hooks",
    layout: "vertical",
    submit: z,
    className: "flex h-full flex-col item-mb24",
    children: (a) => {
      var o, m;
      return (
        console.log(a.getFieldValue("tags")),
        e.jsxs("div", {
          className: "px-6 py-4",
          children: [
            e.jsx(k, {
              title: "社区名称",
              children: e.jsx(t.Item, {
                name: "name",
                rules: [
                  { required: !0, whitespace: !0, message: "请输入社区名称" },
                ],
                children: e.jsx(l, {
                  className: "w-full",
                  placeholder: "请输入社区名称",
                  size: "large",
                  maxLength: 30,
                  showCount: !0,
                }),
              }),
            }),
            e.jsx(k, {
              title: "社区头像",
              children: e.jsx(t.Item, {
                name: "icon",
                children: e.jsxs("div", {
                  className: "flex flex-row items-center gap-4",
                  children: [
                    e.jsx(w, {
                      ref: f,
                      needBorder: !0,
                      defaultUrl: D.icon,
                      useHoverMask: !1,
                      useCrop: { title: "编辑社区头像" },
                      onlyStatic: !0,
                      onChange: (e) => {
                        a.setFieldValue("icon", e);
                      },
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "pb-4 pt-2 text-xs text-[var(--fg-b60)]",
                          children: "建议图片比例 1:1，请勿超过 8M",
                        }),
                        e.jsx(s, {
                          onClick: () => {
                            var e;
                            return null == (e = f.current)
                              ? void 0
                              : e.pickImage();
                          },
                          children: "更换头像",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            e.jsx(k, {
              title: "社区背景图（建议上传比例 2:1）",
              children: e.jsx(t.Item, {
                name: "banner_use",
                rules: [
                  ({ getFieldValue: e }) => ({
                    validator: (a, n) =>
                      3 !== n || e("banner_dynamic")
                        ? Promise.resolve()
                        : Promise.reject(new Error("请上传动图背景图")),
                  }),
                ],
                dependencies: ["banner_dynamic"],
                children: e.jsxs(i.Group, {
                  name: "radiogroup",
                  className: "flex flex-row gap-3 [&>*]:me-0 [&>*]:flex-1",
                  size: "large",
                  children: [
                    e.jsx(
                      L,
                      {
                        title: "默认背景图",
                        value: 1,
                        defaultUrl: D.banner_default,
                        canEdit: !1,
                        staticImage: !0,
                      },
                      1
                    ),
                    e.jsx(
                      L,
                      {
                        title: "静态背景图",
                        value: 2,
                        defaultUrl: D.banner_static,
                        staticImage: !0,
                        onChange: (e) => {
                          a.setFieldValue("banner_static", e);
                        },
                      },
                      2
                    ),
                    e.jsx(
                      L,
                      {
                        title: "动态背景图",
                        value: 3,
                        defaultUrl: D.banner_dynamic,
                        staticImage: !1,
                        onChange: (e) => {
                          a.setFieldValue("banner_dynamic", e);
                        },
                      },
                      3
                    ),
                  ],
                }),
              }),
            }),
            e.jsx(k, {
              title: "社区简介",
              children: e.jsx(t.Item, {
                name: "description",
                children: e.jsx(l, {
                  className: "w-full",
                  placeholder: "向小伙伴们介绍社区",
                  size: "large",
                  maxLength: 35,
                  showCount: !0,
                }),
              }),
            }),
            e.jsx(t.Item, {
              name: "banner_default",
              hidden: !0,
              children: e.jsx("span", {}),
            }),
            e.jsx(t.Item, {
              name: "banner_static",
              hidden: !0,
              children: e.jsx("span", {}),
            }),
            e.jsx(t.Item, {
              name: "banner_dynamic",
              hidden: !0,
              children: e.jsx("span", {}),
            }),
            e.jsx(t.Item, {
              name: "tags",
              hidden: !0,
              children: e.jsx("span", {}),
            }),
            g &&
              e.jsxs(k, {
                title: "社区分类",
                children: [
                  e.jsx(C, {
                    title: "当前社区分类",
                    arrowCallback: U
                      ? () =>
                          (function ({ onClose: a, ...n }) {
                            const s = u({
                              title: "选择社区分类",
                              width: 440,
                              content: e.jsx(E, {
                                onClose: (e) => {
                                  s.destroy(), a(e);
                                },
                                ...n,
                              }),
                              footer: null,
                            });
                          })({
                            defaultTags: a.getFieldValue("tags"),
                            guildId: n.guild_id,
                            onClose: (e) => {
                              e && a.setFieldValue("tags", e);
                            },
                          })
                      : void 0,
                    suffix: e.jsxs(e.Fragment, {
                      children: [
                        0 ===
                          (null == (o = a.getFieldValue("tags"))
                            ? void 0
                            : o.length) && "未设置",
                        null == (m = a.getFieldValue("tags") ?? [])
                          ? void 0
                          : m
                              .map((e) => {
                                const a = N(e.item, []);
                                return a && a.length > 0
                                  ? e.name + " / " + a[0].name
                                  : e.name;
                              })
                              .join(","),
                      ],
                    }),
                  }),
                  e.jsx(d, { className: "m-0 mb-[10px]" }),
                  e.jsx("div", {
                    className: "text-xs text-[var(--fg-b40)]",
                    children: U
                      ? "仅可选择唯一分类，每3个月只能修改1次 "
                      : `仅可选择唯一分类，每3个月只能修改1次 。下次可修改时间：${r(
                          g.can_edit_time,
                          "x"
                        ).format("YYYY年M月D日")}`,
                  }),
                ],
              }),
            e.jsx(k, {
              title: "社区助力",
              bottomDivider: !0,
              children: e.jsx(C, {
                title: "显示助力等级进度条",
                desc: "开启后，将会在社区首页显示助力进度条，成员可以更便捷地助力本社区。",
                suffix: e.jsx(t.Item, {
                  name: "assist_display",
                  valuePropName: "checked",
                  children: e.jsx(c, {
                    defaultChecked: 1 == D.assist_display,
                    onChange: (e) =>
                      a.setFieldValue("assist_display", e ? 1 : 0),
                  }),
                }),
              }),
            }),
            e.jsx(s, {
              block: !0,
              className: "mb-4",
              onClick: () => {
                F(null == n ? void 0 : n.guild_id).then();
              },
              children: "复制社区ID",
            }),
          ],
        })
      );
    },
  });
}
function L({
  value: a,
  title: n,
  defaultUrl: s,
  canEdit: t = !0,
  staticImage: l = !1,
  benefit: d,
  onChange: r,
}) {
  const c = !V(d),
    u = e.jsx(i, {
      disabled: c,
      value: a,
      rootClassName:
        "flex border rounded-xl flex-row p-3 [&>*:first-child]:!self-start [&>*:first-child]:!mt-[3px] [&>*]:!p-0  [&>*:nth-child(2)]:flex-1",
      children: e.jsxs("div", {
        className: "ml-2 flex flex-col justify-center gap-2",
        children: [
          e.jsxs("div", {
            children: [
              n,
              c &&
                d &&
                e.jsx("span", {
                  className: "ml-1",
                  children: e.jsx(D, { level: d.requiredLevel, tooltip: !1 }),
                }),
            ],
          }),
          e.jsx("div", {
            className: "aspect-[2] w-full",
            children: e.jsx(w, {
              defaultUrl: s,
              useHoverMask: !0,
              useCrop: !!l && { title: "编辑背景图", aspect: 2 },
              onlyStatic: l,
              disabled: !t || c,
              size: { width: 160, height: 80 },
              className:
                "h-full aspect-[2] w-full [&_.ant-upload-disable]:cursor-pointer [&_.ant-upload-select]:relative",
              onChange: r,
            }),
          }),
        ],
      }),
    });
  return c
    ? e.jsx(o, {
        placement: "top",
        title: `解锁社区等级 LV.${
          (null == d ? void 0 : d.requiredLevel) ?? 0
        } 后可使用`,
        overlayInnerStyle: { fontSize: 12 },
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0,
        children: u,
      })
    : u;
}
export { z as default };
//# sourceMappingURL=GuildInfo-DD-_MSHA.js.map
