module.exports = {
  rintWidth: 80, // 每行最大字符数
  tabWidth: 2, // 缩进空格数
  useTabs: false, // 是否使用 Tab 进行缩进
  semi: true, // 是否在语句末尾添加分号
  singleQuote: false, // 是否使用单引号
  quoteProps: "as-needed", // 对象属性需要引号时的处理方式
  jsxSingleQuote: false, // 是否在 JSX 中使用单引号
  trailingComma: "es5", // 是否在对象和数组最后一个元素后添加逗号
  bracketSpacing: true, // 是否在对象字面量的大括号之间添加空格
  jsxBracketSameLine: false, // 是否将 JSX 元素的 > 放在最后一行的末尾，而不是放在下一行开头
  arrowParens: "avoid", // 箭头函数参数是否添加括号
  rangeStart: 0, // 只格式化某个文件的代码片段
  rangeEnd: Infinity, // 只格式化某个文件的代码片段
  requirePragma: false, // 是否在文件顶部添加特殊的注释，以表明文件已经被格式化过
  insertPragma: false, // 是否在文件顶部添加特殊的注释，以表明文件已经被格式化过
  proseWrap: "preserve", // 是否在 markdown 文件中对文本进行换行
  htmlWhitespaceSensitivity: "css", // 是否对 HTML 中的空格敏感
  vueIndentScriptAndStyle: false, // 是否缩进 Vue 文件中的 <script> 和 <style> 标签
  endOfLine: "lf", // 文件末尾使用 LF 或 CRLF
  embeddedLanguageFormatting: "auto", // 是否格式化内嵌的代码块
  plugins: ["prettier-plugin-packagejson"],
};
