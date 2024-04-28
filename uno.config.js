import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerCompileClass,
  transformerVariantGroup
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";
export default defineConfig({
  //自定义规则
  rules: [[/^wh-(\d+)$/, ([, d]) => ({ width: `${d}px`, height: `${d}px` })]],
  presets: [
    //此预设规则可以看Tailwind CSS、Windi CSS、Tachyons官网了解相关规则
    presetUno(),

    //属性化 bg="blue-400 hover:blue-500 " 背景颜色的简写  也可以再元素上不加class 直接写属样式 例如 <div m-2 p-10 bg-000></div>
    presetAttributify(),

    //默认unocss默认是rem 转换成 px单位
    presetRemToPx({
      baseFontSize: 4 //基准字体大小  官方的默认预设（1单位 = 0.25rem） html的字体是16  所以这里为4
    })
  ],

  //添加转换器
  transformers: [transformerDirectives(), transformerCompileClass(), transformerVariantGroup()],

  //快捷方式
  shortcuts: {
    "f-c-c": "flex justify-center items-center",
    "wh-full": "w-full h-full",
    "inset-0": "top-0 bottom-0 left-0 right-0",
    "x-center": "left-[50%] translate-x-[-50%]",
    "y-center": "top-[50%] translate-y-[-50%]",
    "shadow-default": "shadow-[0px_3px_8px_0px_rgba(0,0,0,0.08)]",
    "absolute-full": "absolute top-0 left-0 right-0 bottom-0"
  },
  layers: {},
  theme: {
    breakpoints: {
      md: "1280px",
      lg: "1536px",
      xl: "1864px",
      xxl: "2088px"
    }
  },
  variants: [],
  extractors: [],
  preflights: []
});
