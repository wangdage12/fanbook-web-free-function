// [WDG] 解锁邀请码设置中的自定义邀请码设置
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
      s = new Error().stack;
    s &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[s] = "b26a7c1f-401b-495a-aca6-22f94672ce1c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-b26a7c1f-401b-495a-aca6-22f94672ce1c"));
  } catch (n) {}
})();
import { j as e } from "./index-BqQCRxQS.js";
import {
  as as s,
  F as n,
  I as t,
  B as l,
  T as a,
  ap as o,
  a as i,
  aC as r,
  aW as c,
} from "./library-C_xBo1Ac.js";
import { r as d } from "./react-vendor-0oQ6VE-n.js";
import {
  bd as u,
  be as m,
  a4 as x,
  G as p,
  ab as h,
  bf as f,
  ao as b,
  b6 as v,
  N as g,
  F as j,
  a6 as y,
  au as k,
  b4 as C,
  U as I,
  ax as _,
  ay as w,
  bg as N,
  b5 as E,
  az as P,
  bh as M,
  bi as T,
  L as B,
  a7 as F,
  bj as z,
  ag as G,
  ah as L,
  ad as $,
  ai as q,
  a8 as V,
} from "./Index-y9exz2Qn.js";
import { b as D, l as O, U as S } from "./lodash-ByAddTSU.js";
import { F as A } from "./fb_table-DOrnFydC.js";
import "./web-component-B1GRHp9g.js";
import "./pinyin-pro-BlFF5yCo.js";
function R(e) {
  return [
    { required: !0, whitespace: !0, message: "请输入用户ID" },
    {
      validator: (s, n) =>
        u
          .validateMemberId({ guildId: e, memberId: n })
          .catch((e) => Promise.reject(e.desc)),
    },
  ];
}
function W(e, s, n = !0) {
  return [
    { required: !0, whitespace: !0, message: "请输入邀请码" },
    {
      pattern: /^[a-zA-Z0-9_]{2,18}$/,
      whitespace: !0,
      message: "请输入正确格式的邀请码",
    },
    {
      validator: (t, l) =>
        s == l
          ? Promise.resolve()
          : u
              .validateMemberId({ guildId: e, code: `${n ? m : ""}${l}` })
              .catch((e) => Promise.reject(e.desc)),
    },
  ];
}
function Y({ onClose: s, ...n }) {
  const t = {
      form: "edit-guild-exclusive-code-form",
      htmlType: "submit",
      onClick: void 0,
    },
    l = {
      form: "edit-guild-exclusive-code-form",
      htmlType: "reset",
      onClick: void 0,
    },
    a = x({
      width: 440,
      title: "设置社区专属邀请码",
      maskClosable: !1,
      okButtonProps: t,
      cancelButtonProps: l,
      cancelText: "重置",
      okText: "保存并启用",
      onCancel: () => a.destroy(),
      content: e.jsx(H, {
        updateOkProps: (e) => a.update({ okButtonProps: { ...e, ...t } }),
        updateCancelProps: (e) =>
          a.update({ cancelButtonProps: { ...e, ...l } }),
        onClose: (e) => {
          a.destroy(), null == s || s(e);
        },
        ...n,
      }),
    });
}
function H({
  codeInfo: l,
  onClose: a,
  updateOkProps: o,
  updateCancelProps: i,
}) {
  const [r] = s(),
    c = n.useWatch([], r);
  d.useEffect(() => {
    const e = !D(c, x);
    null == o || o({ disabled: !e }), null == i || i({ disabled: !e });
  }, [c]);
  const m = (e) => {
      null == o || o({ loading: e });
    },
    x = { code: (null == l ? void 0 : l.code) ?? "" },
    f = p.getCurrentGuildId();
  return e.jsxs(n, {
    form: r,
    id: "edit-guild-exclusive-code-form",
    onFinish: async () => {
      try {
        m(!0);
        const { code: e } = r.getFieldsValue(),
          s = { guildId: f, code: e, status: "1" },
          n = await u.updateGuildExclusiveCode(s);
        null == a || a(n);
      } catch (e) {
        console.log("invite code remark error", e);
      } finally {
        m(!1);
      }
    },
    initialValues: x,
    children: [
      e.jsx(h, {
        title: "社区专属邀请码",
        children: e.jsx(n.Item, {
          name: "code",
          label: "",
          validateFirst: !0,
          rules: W(f, x.code, !1),
          children: e.jsx(t, {
            placeholder: "请输入邀请码",
            size: "large",
            maxLength: 20,
            showCount: !0,
          }),
        }),
      }),
      e.jsxs(h, {
        title: "注意事项",
        className: "text-[var(--fg-b40)] text-[12px] leading-[20px]",
        children: [
          "1. 邀请码可输入2-20个字符，可由英文、数字和下划线组成。 ",
          e.jsx("br", {}),
          "2. 设置服务器专属邀请码后，其他用户可直接使用你的专属邀请码加入本服务器，永久有效，不限次数。",
          e.jsx("br", {}),
          "3. 每个服务器专属邀请码为唯一，不能重复。",
          e.jsx("br", {}),
          "4.邀请码一旦生成每30天才能修改一次，其余时间不能修改。",
        ],
      }),
    ],
  });
}
function U({ onClose: s, className: n = "", type: t, ...a }) {
  return e.jsx(l, {
    type: "primary",
    className: `flex flex-row items-center text-[var(--fg-white-1)] ${n}`,
    icon: e.jsx("iconpark-icon", { size: 16, name: "Plus" }),
    onClick: () => {
      t == f.MemberExclusive
        ? (function ({ onClose: s, ...n }) {
            const t = {
                form: "add-member-exclusive-code-form",
                htmlType: "submit",
                onClick: void 0,
              },
              l = {
                form: "add-member-exclusive-code-form",
                htmlType: "reset",
                onClick: void 0,
              },
              a = x({
                width: 440,
                title: "添加成员专属邀请码",
                maskClosable: !1,
                okButtonProps: t,
                cancelButtonProps: l,
                cancelText: "重置",
                okText: "保存",
                onCancel: () => a.destroy(),
                content: e.jsx(K, {
                  updateOkProps: (e) =>
                    a.update({ okButtonProps: { ...e, ...t } }),
                  updateCancelProps: (e) =>
                    a.update({ cancelButtonProps: { ...e, ...l } }),
                  onClose: (e) => {
                    a.destroy(), null == s || s(e);
                  },
                  ...n,
                }),
              });
          })({ onClose: s })
        : t == f.GuildExclusive && Y({ onClose: s });
    },
    ...a,
    children: "添加邀请码",
  });
}
function K({ onClose: l, updateOkProps: a, updateCancelProps: o }) {
  const [i] = s(),
    r = n.useWatch([], i);
  d.useEffect(() => {
    const e = !D(r, x);
    null == a || a({ disabled: !e }), null == o || o({ disabled: !e });
  }, [r]);
  const c = (e) => {
      null == a || a({ loading: e });
    },
    x = { memberId: "", code: "" },
    f = p.getCurrentGuildId();
  return e.jsxs(n, {
    form: i,
    id: "add-member-exclusive-code-form",
    onFinish: async () => {
      try {
        c(!0);
        const { memberId: e, code: s } = i.getFieldsValue(),
          n = { guildId: f, memberId: e, code: `FB${s}` },
          t = await u.addMemberExclusiveCode(n);
        null == l || l(t);
      } catch (e) {
        console.log("invite code remark error", e);
      } finally {
        c(!1);
      }
    },
    initialValues: x,
    children: [
      e.jsx(h, {
        title: "用户ID",
        children: e.jsx(n.Item, {
          name: "memberId",
          label: "",
          rules: R(f),
          validateFirst: !0,
          extra: e.jsx("span", {
            className: "text-xs py-2",
            children: "每个成员最多可拥有1个专属邀请码",
          }),
          children: e.jsx(t, { placeholder: "请输入用户ID", size: "large" }),
        }),
      }),
      e.jsx(h, {
        title: "邀请码",
        children: e.jsx(n.Item, {
          name: "code",
          label: "",
          validateFirst: !0,
          rules: W(f, ""),
          extra: e.jsx("span", {
            className: "text-xs py-2",
            children:
              "支持2-18个字符，仅可由数字、大小写字母、下划线组成，每30天可修改1次专属邀请码",
          }),
          children: e.jsx(t, {
            addonBefore: m,
            placeholder: "请输入备注",
            size: "large",
            maxLength: 18,
            showCount: !0,
          }),
        }),
      }),
    ],
  });
}
function X({
  codeInfo: l,
  onClose: a,
  updateOkProps: o,
  updateCancelProps: i,
}) {
  const [r] = s(),
    c = n.useWatch([], r);
  d.useEffect(() => {
    const e = !D(c, f);
    null == o || o({ disabled: !e }), null == i || i({ disabled: !e });
  }, [c]);
  const x = (e) => {
      null == o || o({ loading: e });
    },
    f = { code: O(l.code.split(m)) },
    b = p.getCurrentGuildId();
  return e.jsx(n, {
    form: r,
    id: "edit-member-exclusive-code-form",
    onFinish: async () => {
      try {
        x(!0);
        const { code: e } = r.getFieldsValue(),
          s = { guildId: b, code: l.code, newCode: `${m}${e}` };
        await u.updateMemberExclusiveCode(s), null == a || a(s.newCode);
      } catch (e) {
        console.log("invite code remark error", e);
      } finally {
        x(!1);
      }
    },
    initialValues: f,
    children: e.jsx(h, {
      title: "邀请码",
      children: e.jsx(n.Item, {
        name: "code",
        label: "",
        validateFirst: !0,
        rules: W(b, f.code),
        extra: e.jsx("span", {
          className: "text-xs py-2",
          children:
            "支持2-18个字符，仅可由数字、大小写字母、下划线组成，每30天可修改1次专属邀请码",
        }),
        children: e.jsx(t, {
          addonBefore: m,
          placeholder: "请输入邀请码",
          size: "large",
          maxLength: 18,
          showCount: !0,
        }),
      }),
    }),
  });
}
function Z({
  codeInfo: s,
  guildId: n,
  children: t,
  onCancel: l,
  onCopy: i,
  onRemark: r,
  onEdit: c,
  onEnable: m,
  ...x
}) {
  const { type: p, can_edit_time: h = "0" } = s,
    y = Date.now() > parseInt(h),
    k = "1" == s.status,
    C = {
      copy: {
        label: e.jsx(b, {
          label: "复制邀请码",
          icon: e.jsx("iconpark-icon", { name: "Copy" }),
        }),
        className: "h-10",
        key: "copy",
      },
      remark: {
        label: e.jsx(b, {
          label: "设置备注",
          icon: e.jsx("iconpark-icon", { name: "Edit" }),
        }),
        className: "h-10",
        key: "remark",
      },
      cancel: {
        label: e.jsx(b, {
          label: "撤销邀请码",
          icon: e.jsx("iconpark-icon", { name: "Recalled" }),
          type: "danger",
        }),
        className: "h-10",
        key: "cancel",
      },
      edit: {
        label: e.jsx(a, {
          title: y ? "" : `${v.format(parseInt(h))}后可修改`,
          zIndex: 3e3,
          children: e.jsx(e.Fragment, {
            children: e.jsx(b, {
              label: "修改邀请码",
              icon: e.jsx("iconpark-icon", { name: "Edit2" }),
            }),
          }),
        }),
        className: "h-10",
        key: "edit",
        disabled: false,
      },
      enable: {
        label: e.jsx(b, {
          opposite: k,
          label: "启用邀请码",
          oppositeLabel: e.jsx("span", {
            className: "text-[var(--function-red-1)]",
            children: "停用邀请码",
          }),
          icon: e.jsx("iconpark-icon", { name: "CheckCircle-bm989fi8" }),
          oppositeIcon: e.jsx("iconpark-icon", {
            name: "Stop",
            color: "var(--function-red-1)",
          }),
        }),
        className: "h-10",
        key: "enable",
      },
    },
    I = {
      items: d.useMemo(() => {
        const e = ["copy"];
        return (
          p == f.Common
            ? e.push("remark", "cancel")
            : (p == f.GuildExclusive || p == f.MemberExclusive) &&
              e.push("edit", "enable"),
          e.map((e) => C[e])
        );
      }, [s]),
      className: "min-w-[160px]",
      onClick: async (e) => {
        const { key: s, domEvent: n } = e;
        switch ((n.stopPropagation(), s)) {
          case "copy":
            _();
            break;
          case "remark":
            null == r || r();
            break;
          case "cancel":
            w();
            break;
          case "edit":
            null == c || c();
            break;
          case "enable":
            await N();
        }
      },
    },
    _ = () => {
      null == i || i();
    },
    w = () => {
      g.error({
        title: "撤销邀请码",
        content: "撤销后该邀请码将永久失效，确定撤销吗？",
        okText: "撤销邀请码",
        cancelText: "取消",
        closable: !1,
        onOk: async () => {
          await u.cancelInviteCode(s.code), null == l || l();
        },
      });
    },
    N = async () => {
      const e = "1" == s.status ? "0" : "1";
      async function t() {
        const t = { guildId: n, code: s.code, status: e };
        await u.updateMemberExclusiveCode(t);
      }
      if (k) {
        const s = g.error({
          title: "停用邀请码",
          content: "停用后用户将无法通过此邀请码加入社区，确定停用吗？",
          okText: "停用邀请码",
          cancelText: "取消",
          closable: !1,
          onOk: async () => {
            try {
              s.update({ okButtonProps: { loading: !0 } }),
                await t(),
                j.open({
                  type: "success",
                  content: "已停用邀请码",
                  key: "code-disable-success",
                }),
                null == m || m(e);
            } catch (n) {
              s.update({ okButtonProps: { loading: !1 } });
            }
          },
        });
      } else
        await t(),
          null == m || m(e),
          j.open({
            type: "success",
            content: "已启用邀请码",
            key: "code-enable-success",
          });
    };
  return e.jsx(o, { trigger: ["click"], menu: I, ...x, children: t });
}
function J({
  codeInfo: l,
  onClose: a,
  updateOkProps: o,
  updateCancelProps: i,
}) {
  const [r] = s(),
    c = n.useWatch([], r);
  d.useEffect(() => {
    const e = !D(c, x);
    null == o || o({ disabled: !e }), null == i || i({ disabled: !e });
  }, [c]);
  const m = (e) => {
      null == o || o({ loading: e });
    },
    x = { remark: l.remark ?? "" };
  return e.jsx(n, {
    form: r,
    id: "invite-code-remark-form",
    onFinish: async () => {
      try {
        m(!0);
        const { guild_id: e, channel_id: s, time: n, number: t } = l,
          o = r.getFieldsValue().remark,
          i = {
            channel_id: s,
            guild_id: e,
            v: Date.now(),
            type: 1,
            time: n,
            number: t,
            remark: o,
            member_id: l.inviter_id,
          };
        await u.getInviteCode(i), null == a || a(o);
      } catch (e) {
        console.log("invite code remark error", e);
      } finally {
        m(!1);
      }
    },
    initialValues: x,
    children: e.jsx(h, {
      title: "",
      children: e.jsx(n.Item, {
        name: "remark",
        label: "",
        children: e.jsx(t, {
          placeholder: "请输入备注",
          size: "large",
          maxLength: 12,
          showCount: !0,
        }),
      }),
    }),
  });
}
function Q({ code: s, guildId: n }) {
  const t = () => {
    u.getInviteUserList({
      code: s,
      list_id: (null == l ? void 0 : l.list_id) ?? "0",
      size: 20,
    }).then((e) => {
      a({
        ...e,
        records: [...((null == l ? void 0 : l.records) ?? []), ...e.records],
      });
    });
  };
  d.useEffect(() => {
    l || t();
  }, []);
  const [l, a] = d.useState();
  if (!l)
    return e.jsx("div", {
      className: "flex-center mx-[-12px] h-[460px]",
      children: e.jsx(y, {}),
    });
  const o = "1" == (null == l ? void 0 : l.next);
  return e.jsx(k, {
    className: "mx-[-12px] py-2",
    height: 460,
    dataLength: null == l ? void 0 : l.records.length,
    next: t,
    hasMore: o,
    loader: o
      ? e.jsx("div", {
          className: "flex-center h-[48px]",
          children: e.jsx(y, {}),
        })
      : null,
    children: l.records.map((s) =>
      e.jsx(
        "div",
        {
          className: " mb-[2px] h-[60px]",
          children: e.jsx(C, {
            userId: s.user_id,
            align: {
              points: ["tl"],
              offset: [-150, -22],
              _experimental: { dynamicInset: !0 },
            },
            children: e.jsxs(I, {
              className: "flex-center h-full w-full gap-3 px-3",
              style: { justifyContent: "flex-start" },
              children: [
                e.jsx(_, {
                  fbSize: 40,
                  src: w.thumbnailMin(s.avatar, 32, 32),
                  className: "mr-2 flex-shrink-0",
                  fbRadius: 32,
                }),
                e.jsxs("div", {
                  className: "flex-1 overflow-hidden flex flex-col",
                  children: [
                    e.jsx("div", {
                      className: "truncate",
                      children: N.getAliasName(s.user_id, n, s.nickname),
                    }),
                    e.jsxs("div", {
                      className: "text-xs text-[var(--fg-b40)] mt-1",
                      children: [
                        i(s.created, "X").format("YYYY年M月D日 HH:mm"),
                        " 加入",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        },
        s.user_id
      )
    ),
  });
}
const ee = d.forwardRef(
  (
    {
      guildId: s,
      type: n,
      queryType: t = "all",
      children: l,
      className: a = "",
      setAddButtonVisible: o,
      ...i
    },
    r
  ) => {
    const [c, m] = d.useState({ records: [], next: 1 });
    d.useImperativeHandle(r, () => ({ insert: b }), [c]);
    const [p, h] = d.useState(!0),
      b = (e) => {
        n == f.MemberExclusive
          ? (m({ records: [], next: 1, list_id: "0" }),
            null == o || o(!1),
            w("0").then())
          : m({ ...c, records: [e, ...c.records] });
      },
      v = (s) => {
        !(function ({ onClose: s, ...n }) {
          const t = {
              form: "invite-code-remark-form",
              htmlType: "submit",
              onClick: void 0,
            },
            l = {
              form: "invite-code-remark-form",
              htmlType: "reset",
              onClick: void 0,
            },
            a = x({
              width: 440,
              title: "设置备注",
              maskClosable: !1,
              okButtonProps: t,
              cancelButtonProps: l,
              cancelText: "重置",
              okText: "保存",
              onCancel: () => a.destroy(),
              content: e.jsx(J, {
                updateOkProps: (e) =>
                  a.update({ okButtonProps: { ...e, ...t } }),
                updateCancelProps: (e) =>
                  a.update({ cancelButtonProps: { ...e, ...l } }),
                onClose: (e) => {
                  a.destroy(), null == s || s(e);
                },
                ...n,
              }),
            });
        })({
          codeInfo: s,
          onClose: (e) => {
            if (!e) return;
            const n = k.findIndex((e) => e.code == s.code);
            -1 !== n &&
              (k.splice(n, 1, { ...s, remark: e }),
              m({ ...c, records: [...k] }));
          },
        });
      },
      g = (s) => {
        s.type == f.MemberExclusive
          ? (function ({ onClose: s, ...n }) {
              const t = {
                  form: "edit-member-exclusive-code-form",
                  htmlType: "submit",
                  onClick: void 0,
                },
                l = {
                  form: "edit-member-exclusive-code-form",
                  htmlType: "reset",
                  onClick: void 0,
                },
                a = x({
                  width: 440,
                  title: "修改成员专属邀请码",
                  maskClosable: !1,
                  okButtonProps: t,
                  cancelButtonProps: l,
                  cancelText: "重置",
                  okText: "保存",
                  onCancel: () => a.destroy(),
                  content: e.jsx(X, {
                    updateOkProps: (e) =>
                      a.update({ okButtonProps: { ...e, ...t } }),
                    updateCancelProps: (e) =>
                      a.update({ cancelButtonProps: { ...e, ...l } }),
                    onClose: (e) => {
                      a.destroy(), null == s || s(e);
                    },
                    ...n,
                  }),
                });
            })({
              codeInfo: s,
              onClose: (e) => {
                if (!e) return;
                const n = k.findIndex((e) => e.code == s.code);
                -1 !== n &&
                  (k.splice(n, 1, { ...k[n], code: e }),
                  m({ ...c, records: [...k] }));
              },
            })
          : s.type == f.GuildExclusive &&
            Y({
              codeInfo: s,
              onClose: (e) => {
                if (!e) return;
                const n = k.findIndex((e) => e.code == s.code);
                -1 !== n &&
                  (k.splice(n, 1, { ...k[n], ...e }),
                  m({ ...c, records: [...k] }));
              },
            });
      },
      j = n == f.GuildExclusive,
      y = d.useMemo(
        () => [
          {
            title: "邀请者",
            dataIndex: "inviter_name",
            width: j ? void 0 : 165,
            condition: () => n == f.MemberExclusive || n == f.Common,
            render: (n) =>
              e.jsxs("div", {
                className: "flex flex-row gap-2 overflow-hidden items-center",
                children: [
                  e.jsx(E, {
                    userId: n.inviter_id,
                    className: "mr-2 flex-shrink-0",
                  }),
                  e.jsxs("div", {
                    className: "flex flex-col flex-1 overflow-hidden gap-1",
                    children: [
                      e.jsx(P, {
                        guildId: s,
                        userId: n.inviter_id,
                        className: "truncate",
                      }),
                      n.channel_name &&
                        e.jsxs("span", {
                          className: "text-xs text-[var(--fg-b40)] truncate",
                          children: ["#", n.channel_name],
                        }),
                    ],
                  }),
                ],
              }),
          },
          { title: "邀请码", dataIndex: "code", width: j ? void 0 : 112 },
          {
            title: "邀请码状态",
            dataIndex: "status",
            width: j ? void 0 : 110,
            condition: () => n == f.MemberExclusive || n == f.GuildExclusive,
            render: (s) => {
              const n = "0" == s.status;
              return e.jsxs("div", {
                className: "inline-flex gap-1",
                children: [
                  e.jsx("iconpark-icon", {
                    size: 16,
                    name: n ? "Stop" : "CheckCircle-bm989fi8",
                    color: n ? "var(--fg-b40)" : "var(--function-green-1)",
                  }),
                  n ? "已停用" : "已启用",
                ],
              });
            },
          },
          {
            title: "备注",
            dataIndex: "remark",
            width: j ? void 0 : 100,
            condition: () => n == f.MemberExclusive || n == f.Common,
            render: (e) => e.remark || "无",
          },
          {
            title: "剩余次数",
            dataIndex: "number_less",
            width: j ? void 0 : 72,
            condition: () => n == f.Common,
            render: (s) =>
              "-1" == s.number_less
                ? "无限次数"
                : "0" == s.number_less
                ? e.jsx("span", {
                    className: "text-[var(--function-red-1)]",
                    children: "0次",
                  })
                : `${s.number_less}次`,
          },
          {
            title: "到期时间",
            dataIndex: "expire",
            width: j ? void 0 : 72,
            condition: () => n == f.Common,
            render: (s) =>
              "-1" == s.expire_time
                ? "永久有效"
                : "0" == s.expire_time
                ? e.jsx("span", {
                    className: "text-[var(--function-red-1)]",
                    children: "已过期",
                  })
                : `${M.formatSecond(parseInt(s.expire_time ?? "0"))}`,
          },
          {
            title: "邀请人数",
            dataIndex: "has_invited",
            width: j ? void 0 : 72,
            render: (n) =>
              "0" == (n.has_invited ?? "0")
                ? "0"
                : e.jsx("span", {
                    className: "text-[var(--fg-blue-1)] cursor-pointer",
                    onClick: () =>
                      (function ({
                        inviter: s,
                        invite_count: n,
                        code: t,
                        guildId: l,
                      }) {
                        x({
                          title: `${s}邀请了 ${n} 位好友`,
                          footer: null,
                          content: e.jsx(Q, { code: t, guildId: l }),
                        });
                      })({
                        guildId: s,
                        code: n.code,
                        inviter: N.getAliasName(
                          n.inviter_id,
                          s,
                          n.inviter_name
                        ),
                        invite_count: parseInt(n.has_invited),
                      }),
                    children: T(parseInt(n.has_invited)),
                  }),
          },
          {
            title: "操作",
            render: (n) =>
              "0" == n.expire_time || "0" == n.number_less
                ? e.jsx(e.Fragment, {})
                : e.jsx(Z, {
                    codeInfo: n,
                    onCopy: () => {
                      return (e = n.code), void G(e).then();
                      var e;
                    },
                    onRemark: () => v({ ...n, guild_id: s }),
                    onCancel: () =>
                      ((e) => {
                        const s = k.findIndex((s) => s.code == e.code);
                        -1 !== s &&
                          (k.splice(s, 1, {
                            ...e,
                            expire_time: "0",
                            number_less: "0",
                          }),
                          m({ ...c, records: [...k] }));
                      })(n),
                    onEdit: () => g(n),
                    onEnable: (e) =>
                      ((e, s) => {
                        const n = k.findIndex((s) => s.code == e.code);
                        -1 !== n &&
                          (k.splice(n, 1, { ...e, status: s }),
                          m({ ...c, records: [...k] }));
                      })(n, e),
                    children: e.jsx(I, {
                      size: 24,
                      className: "",
                      style: { padding: 2 },
                      children: e.jsx("iconpark-icon", {
                        size: 20,
                        name: "More",
                        color: "var(--fg-b40)",
                      }),
                    }),
                  }),
          },
        ],
        [c]
      ),
      { records: k, next: C, list_id: _ = "0" } = c,
      w = (e) => (
        h(!0),
        u
          .getInviteList({
            guild_id: s,
            list_id: e ?? c.list_id ?? "0",
            size: 50,
            type: n,
            member_id: n == f.Common && "mine" == t ? B.userId : void 0,
          })
          .then(
            (e) => (
              m((s) => ({
                ...e,
                records: S(
                  [...s.records, ...e.records.filter((e) => e.type === n)],
                  "list_id"
                ),
              })),
              e
            )
          )
          .finally(() => {
            h(!1);
          })
      );
    d.useEffect(() => {
      n == f.Common &&
        (m({ records: [], next: 1, list_id: "0" }), w("0").then());
    }, [t]),
      d.useEffect(() => {
        (n != f.MemberExclusive && n != f.GuildExclusive) ||
          (m({ records: [], next: 1, list_id: "0" }),
          w("0").then((e) => {
            n == f.MemberExclusive && (null == o || o(0 != e.records.length));
          }));
      }, []);
    const F = p && "0" == _;
    return e.jsxs("div", {
      className: `pt-4 flex-1 overflow-hidden flex flex-col h-full ${a}`,
      ...i,
      children: [
        l,
        e.jsx("div", {
          className: "flex-1 overflow-y-hidden",
          children: e.jsx(A, {
            uniqueKey: "list_id",
            records: k,
            hasMore: 1 == C,
            columns: y,
            loading: F,
            onNext: w,
            renderEmpty: () => e.jsx(se, { type: n, onAdd: b }),
          }),
        }),
      ],
    });
  }
);
function se({ type: s, onAdd: n }) {
  switch (s) {
    case f.Common:
      return e.jsx("div", {
        className: "inline-flex flex-col gap-4 mt-[72px] items-center",
        children: e.jsx(F, { context: "暂无邀请记录", message: "" }),
      });
    case f.GuildExclusive:
      return e.jsxs("div", {
        className: "inline-flex flex-col gap-4 mt-[72px] items-center",
        children: [
          e.jsx(F, {
            image: z,
            message: "快来添加社区专属邀请码吧",
            context:
              "添加社区专属邀请码后，其他用户可直接使用社区专属邀请码\n加入本社区，永久有效，不限次数",
          }),
          e.jsx(U, { onClose: (e) => e && n(e), type: f.GuildExclusive }),
        ],
      });
    case f.MemberExclusive:
      return e.jsxs("div", {
        className: "inline-flex flex-col gap-4 mt-[72px] items-center",
        children: [
          e.jsx(F, { context: "暂无邀请记录", message: "" }),
          e.jsx(U, { onClose: (e) => e && n(e), type: f.MemberExclusive }),
        ],
      });
  }
}
function ne() {
  const s = p.getCurrentGuildId(),
    n = L($.exclusiveCode),
    t = !n,
    [l, a] = d.useState(f.Common),
    [o, i] = d.useState("all"),
    c = d.useRef(null),
    u = d.useRef(null),
    m = d.useRef(null),
    [x, h] = d.useState(),
    b = d.useMemo(() => {
      const l = { guildId: s, queryType: o, setAddButtonVisible: h };
      return [
        {
          label: "普通邀请码",
          key: f.Common,
          children: e.jsx(ee, {
            type: f.Common,
            ref: c,
            ...l,
            children: e.jsx(
              le,
              {
                queryType: o,
                onChange: () => {
                  i("all");
                },
                onChange1: () => {
                  i("mine");
                },
              },
              "mine"
            ),
          }),
        },
        {
          label: e.jsxs(te, {
            disabled: false,
            children: [
              "成员专属邀请码",
              t &&
                e.jsx(q, { level: $.exclusiveCode.requiredLevel, tooltip: !1 }),
            ],
          }),
          key: f.MemberExclusive,
          children: e.jsx(ee, {
            type: f.MemberExclusive,
            ...l,
            ref: u,
            children: e.jsx(V, {
              content:
                "每个成员最多可拥有1个专属邀请码，成员专属邀请码永久有效、不限次数，每30天才能修改一次。",
            }),
          }),
          disabled: false,
        },
        {
          label: e.jsxs(te, {
            disabled: false,
            children: [
              "社区专属邀请码",
              t &&
                e.jsx(q, { level: $.exclusiveCode.requiredLevel, tooltip: !1 }),
            ],
          }),
          key: f.GuildExclusive,
          children: e.jsx(ee, {
            type: f.GuildExclusive,
            ...l,
            ref: m,
            children: e.jsx(V, {
              content: e.jsxs("div", {
                children: [
                  "1. 每个社区的专属邀请码为唯一，不能重复，邀请码一旦生成每30天才能修改一次。",
                  e.jsx("br", {}),
                  "2. 启用专属邀请码后，其他用户可使用此邀请码加入本社区，永久有效，不限次数。",
                ],
              }),
            }),
          }),
          disabled: false,
        },
      ];
    }, [o]);
  return e.jsx(r, {
    defaultActiveKey: f.Common,
    onChange: (e) => a(e),
    tabBarExtraContent:
      l == f.MemberExclusive &&
      x &&
      e.jsx(U, {
        className: "mr-6",
        type: f.MemberExclusive,
        onClose: (e) => e && u.current && u.current.insert(e),
      }),
    className:
      "h-full [&_.ant-tabs-nav-wrap]:h-[54px] [&_.ant-tabs-nav-wrap]:px-6 [&_.ant-tabs-content-holder]:px-6 [&_.ant-tabs-content-holder]:h-full [&_.ant-tabs-tabpane]:h-full [&_.ant-tabs-content]:h-full",
    size: "large",
    items: b,
  });
}
function te({ disabled: s = !1, children: n }) {
  return s
    ? e.jsx(a, {
        placement: "top",
        title: `解锁社区等级 LV.${$.exclusiveCode.requiredLevel} 后可使用`,
        children: n,
      })
    : n;
}
function le(s) {
  return e.jsxs("div", {
    className:
      "mb-4 [&_.ant-tag-checkable-checked]:bg-[var(--fg-blue-3)] [&_.ant-tag-checkable-checked]:font-medium [&_.ant-tag-checkable-checked]:!text-[var(--fg-blue-1)] [&_.ant-tag-checkable:not(.ant-tag-checkable-checked)]:bg-[var(--fg-b5)] [&_.ant-tag-checkable]:text-[var(--fg-b60)] hover:[&_.ant-tag-checkable]:text-[var(--fg-b100)] ",
    children: [
      e.jsx("span", {
        className: "mr-1 text-[var(--fg-b40)]",
        children: "筛选：",
      }),
      e.jsx(c, {
        checked: "all" == s.queryType,
        className: "rounded-full border-0 pe-4 ps-4 text-sm leading-[32px]",
        onChange: s.onChange,
        children: "全部",
      }),
      e.jsx(c, {
        checked: "mine" == s.queryType,
        className: "rounded-full border-0 pe-4 ps-4 text-sm leading-[32px]",
        onChange: s.onChange1,
        children: "我的",
      }),
    ],
  });
}
ee.displayName = "InviteCodeList";
export { ne as default };
//# sourceMappingURL=InviteManage-BToprilu.js.map
