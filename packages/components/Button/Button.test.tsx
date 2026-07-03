// 从 vitest 导入测试 API
// describe: 创建测试套件（分组管理测试用例）
// it/test: 创建单个测试用例，两者等价
// expect: 断言函数，检查实际结果是否符合预期
// vi: vitest 工具集，这里用 vi.fn() 创建 mock 函数
import { describe, it, expect, vi, test } from "vitest";

// mount: Vue 测试工具核心函数，将组件挂载到虚拟 DOM 并返回 wrapper
// wrapper 可以操作组件、查询 DOM、触发事件、获取 props/emits 等
import { mount } from '@vue/test-utils'

// Font Awesome 图标核心库，负责图标的注册和查找
import { library } from "@fortawesome/fontawesome-svg-core";
// faArrowUp: 向上箭头图标, faSpinner: 加载旋转图标
import { faArrowUp, faSpinner } from "@fortawesome/free-solid-svg-icons";

// 被测试的三个组件
import Icon from "../Icon/Icon.vue";
import Button from "./Button.vue";
import ButtonGroup from "../ButtonGroup/ButtonGroup.vue";

// 把测试中需要用到的图标注册到 Font Awesome 图标库
// 不注册的话 <font-awesome-icon> 找不到图标会渲染失败
library.add(faArrowUp, faSpinner);

// ======================= Button 组件测试套件 =======================
describe("Button.vue", () => {

  // 创建一个 mock 函数 onClick
  // vi.fn() 返回一个空函数，但可以追踪: 被调用了几次、传了什么参数
  // 用来替代真实的事件处理函数，做行为验证
  const onClick = vi.fn();

  // ---------- 测试: 基本按钮 ----------
  test("basic button", async () => {
    // mount(() => JSX): 用 JSX 语法挂载组件
    // type="primary": 传入主题类型 prop
    // onClick={onClick}: 绑定点击事件到 mock 函数
    // "button content": 子元素会被放入默认插槽
    const wrapper = mount(() => (
      <Button type="primary" onClick={onClick}>
        button content
      </Button>
    ));

    // wrapper.classes(): 获取根元素的所有 class，返回数组
    // toContain(): 断言数组包含指定值
    // 验证 primary 类型的 CSS class 已生效
    expect(wrapper.classes()).toContain("er-button--primary");

    // wrapper.get("button"): 在组件内查找 <button> 元素
    // .text(): 获取元素的文本内容
    // 验证插槽内容 "button content" 正确渲染
    expect(wrapper.get("button").text()).toBe("button content");

    // .trigger("click"): 模拟用户点击事件
    // await 等待 Vue 异步更新 DOM 完成
    await wrapper.get("button").trigger("click");

    // toHaveBeenCalledOnce(): 断言 mock 函数被调用了恰好 1 次
    expect(onClick).toHaveBeenCalledOnce();
  });

  // ---------- 测试: 禁用按钮 ----------
  test("disabled button", async () => {
    // {...{ onClick }}: JSX 展开语法，等价于 onClick={onClick}
    // 因为 JSX 中 onClick 是特殊属性，用展开写法避免类型问题
    const wrapper = mount(() => (
      <Button disabled {...{ onClick }}>
        disabled button
      </Button>
    ));

    // 验证 disabled 对应的 CSS class
    expect(wrapper.classes()).toContain("is-disabled");

    // .attributes("disabled"): 获取根元素的 "disabled" attribute 值
    // 验证 disabled 属性存在于 DOM 上
    expect(wrapper.attributes("disabled")).toBeDefined();

    // .find("button").element: 获取原生 <button> DOM 元素
    // .disabled: HTMLButtonElement 的原生属性，为 true 表示按钮真正被禁用
    expect(wrapper.find("button").element.disabled).toBeTruthy();

    // 模拟点击被禁用的按钮
    await wrapper.get("button").trigger("click");

    // onClick 仍然只被调用了 1 次（basic button 测试中那次）
    // 因为 disabled 的按钮不应再触发 click
    expect(onClick).toHaveBeenCalledOnce();

    // .emitted("click"): 获取组件 emit 的 "click" 事件列表
    // 为 undefined 说明组件根本没有对外触发 click 事件
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  // ---------- 测试: 加载中按钮 ----------
  test("loading button", () => {
    // 另一种挂载方式: mount(组件, { 选项 })
    // 不用 JSX，而是通过 options 对象传入 props/slots/global
    const wrapper = mount(Button, {
      props: {
        loading: true,              // 开启加载状态
      },
      slots: {
        default: "loading button",  // 默认插槽内容
      },
      global: {
        // stubs: 把指定的子组件替换为空的占位组件
        // 避免测试中渲染真实 bnIcon 带来的复杂性
        stubs: ["bn-icon"],
      },
    });

    // 验证加载状态 CSS class
    expect(wrapper.classes()).toContain("is-loading");

    // loading 状态下按钮也应被禁用
    expect(wrapper.attributes("disabled")).toBeDefined();
    expect(wrapper.find("button").element.disabled).toBeTruthy();

    // 触发点击事件
    wrapper.get("button").trigger("click");

    // not.toHaveProperty("click"): 断言 emitted 对象上没有 "click" 属性
    // loading 状态下按钮不应响应点击
    expect(wrapper.emitted()).not.toHaveProperty("click");

    // .findComponent(Icon): 在 wrapper 中查找 Icon 子组件实例
    const iconElement = wrapper.findComponent(Icon);
    // Icon 组件确实被渲染了
    expect(iconElement.exists()).toBeTruthy();

    // Font Awesome 渲染后会在 <svg> 上加 data-icon 属性标记图标名
    // 验证渲染的是 spinner（加载动画）图标
    expect(iconElement.find('svg').attributes('data-icon')).toBe("spinner");
  });

  // ---------- 测试: 图标按钮 ----------
  test("icon button", () => {
    const wrapper = mount(Button, {
      props: {
        icon: "arrow-up",         // 传入图标名
      },
      slots: {
        default: "icon button",
      },
      global: {
        stubs: ["ErIcon"],
      },
    });

    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
    // 验证渲染的图标是 arrow-up
    expect(iconElement.find('svg').attributes('data-icon')).toBe("arrow-up");
  });

  // ---------- 测试: type 属性（遍历 5 种类型） ----------
  it("should has the correct type class when type prop is set", () => {
    // 遍历所有按钮类型
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type: type as any },
        // as any: TypeScript 类型断言，因为 type 是字面量联合类型
        // forEach 中的变量类型太宽，需要断言
      });
      // 用模板字符串拼接期望的 class: "er-button--primary" 等
      expect(wrapper.classes()).toContain(`er-button--${type}`);
    });
  });

  // ---------- 测试: size 属性（遍历 3 种尺寸） ----------
  it("should has the correct size class when size prop is set", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as any },
      });
      expect(wrapper.classes()).toContain(`er-button--${size}`);
    });
  });

  // ---------- 测试: 布尔属性（参数化测试） ----------
  // it.each: 对每组数据生成独立的测试用例
  // 每组 [prop, className]，共 5 组 = 5 个测试用例
  // %s 会被替换为 prop 的值，测试报告会显示具体名称
  it.each([
    ["plain", "is-plain"],
    ["round", "is-round"],
    ["circle", "is-circle"],
    ["disabled", "is-disabled"],
    ["loading", "is-loading"],
  ])(
    "should has the correct class when prop %s is set to true",
    // (prop, className) 从上面数组解构出来
    (prop, className) => {
      const wrapper = mount(Button, {
        // [prop]: ES6 计算属性名
        // prop="plain" 时等价于 { plain: true }
        props: { [prop]: true },
        global: {
          stubs: ["ErIcon"],
        },
      });
      expect(wrapper.classes()).toContain(className);
    }
  );

  // ---------- 测试: 原生 type 属性 ----------
  it("should has the correct native type attribute when native-type prop is set", () => {
    const wrapper = mount(Button, {
      props: { nativeType: "submit" },
      // nativeType 对应 HTML <button type="submit|button|reset">
    });

    // .element.tagName: 原生 DOM 标签名，这里应是 "BUTTON"
    expect(wrapper.element.tagName).toBe("BUTTON");

    // .element.type: HTMLButtonElement.type 原生属性
    // 验证渲染出的 DOM type 确实是 "submit"
    expect((wrapper.element as any).type).toBe("submit");
  });

  // ---------- 测试: 节流点击事件（参数化测试） ----------
  it.each([
    ["withoutThrottle", false],   // 不开启节流
    ["withThrottle", true],       // 开启节流
  ])("emits click event %s", async (_, useThrottle) => {
    // _ 表示忽略第一个参数（描述文字），只用 useThrottle

    // 为每个用例创建独立的 mock 函数
    const clickSpy = vi.fn();

    const wrapper = mount(() => (
      <Button
        onClick={clickSpy}
        {...{
          useThrottle,              // 是否开启节流
          throttleDuration: 400,    // 节流间隔 400ms
        }}
      />
    ));

    await wrapper.get("button").trigger("click");

    // toHaveBeenCalled(): 断言 mock 函数被调用过（不限制次数）
    expect(clickSpy).toHaveBeenCalled();
  });

  // ---------- 测试: 自定义标签 ----------
  it("should renders the custom tag when tag prop is set", () => {
    const wrapper = mount(Button, {
      props: { tag: "a" },
      // tag="a": Button 可以渲染为 <a> 链接标签
    });

    // .toLowerCase(): 统一转小写比较，因为 tagName 返回大写 "A"
    expect(wrapper.element.tagName.toLowerCase()).toBe("a");
  });

  // ---------- 测试: 基本点击事件 emit ----------
  it("should emits a click event when the button is clicked", async () => {
    // 不传任何 props 的纯默认 Button
    const wrapper = mount(Button, {});

    // wrapper.trigger("click"): 直接在根元素上触发 click
    // 区别于 wrapper.get("button").trigger("click")
    await wrapper.trigger("click");

    // .emitted().click: 组件 emit 的所有 "click" 事件组成的数组
    // toHaveLength(1): 被触发了恰好 1 次
    expect(wrapper.emitted().click).toHaveLength(1);
  });

  // ---------- 测试: loading 时图标和事件行为 ----------
  it("should display loading icon and not emit click event when button is loading", async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      global: {
        stubs: ["ErIcon"],
      },
    });

    const iconElement = wrapper.findComponent(Icon);

    // .find(".loading-icon"): 通过 CSS class 查找加载图标包裹元素
    // .exists(): 判断元素是否存在
    expect(wrapper.find(".loading-icon").exists()).toBe(true);

    // Icon 组件存在且渲染了 spinner 图标
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.find('svg').attributes('data-icon')).toBe("spinner");

    // 点击 loading 状态的按钮
    await wrapper.trigger("click");

    // 验证没有 emit click 事件（loading 时阻止交互）
    expect(wrapper.emitted("click")).toBeUndefined();
  });
});

// ======================= ButtonGroup 组件测试套件 =======================
describe("ButtonGroup.vue", () => {

  // ---------- 测试: 基本按钮组 ----------
  test("basic button group", async () => {
    // ButtonGroup 包裹两个 Button 子组件
    const wrapper = mount(() => (
      <ButtonGroup>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));

    // 验证 ButtonGroup 根元素的 CSS class
    expect(wrapper.classes()).toContain("er-button-group");
  });

  // ---------- 测试: 按钮组 size（传入父组件，子组件应继承） ----------
  test("button group size", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(() => (
        <ButtonGroup size={size as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      // .findComponent(Button): 查找第一个 Button 子组件
      const buttonWrapper = wrapper.findComponent(Button);
      // 验证子 Button 继承了父组件传入的 size
      expect(buttonWrapper.classes()).toContain(`er-button--${size}`);
    });
  });

  // ---------- 测试: 按钮组 type（子组件继承父组件的 type） ----------
  test("button group type", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(() => (
        <ButtonGroup type={type as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      // 验证子 Button 继承了父组件传入的 type
      expect(buttonWrapper.classes()).toContain(`er-button--${type}`);
    });
  });

  // ---------- 测试: 按钮组 disabled（子组件继承禁用状态） ----------
  test("button group disabled", () => {
    const wrapper = mount(() => (
      <ButtonGroup disabled>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));

    const buttonWrapper = wrapper.findComponent(Button);
    // verify子 Button 继承了 disabled 状态对应的 CSS class
    expect(buttonWrapper.classes()).toContain(`is-disabled`);
  });
});