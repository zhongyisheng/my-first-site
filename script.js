// ============================================
// script.js - 让页面动起来
// HTML 是骨架，CSS 是皮肤，JS 是肌肉。
// ============================================

// 等页面所有元素都加载完再执行，避免"找不到元素"的报错
document.addEventListener('DOMContentLoaded', function () {

  // ---- 1. 主题切换 ----

  // 找到 HTML 里的那个按钮
  var btn = document.getElementById('themeBtn');

  // localStorage 是浏览器自带的小仓库，关掉网页再打开数据还在。
  // 用它记住用户上次选的主题。
  var saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light');
  }

  // 点击按钮时切换
  btn.addEventListener('click', function () {
    // classList.toggle：有这个 class 就去掉，没有就加上
    document.body.classList.toggle('light');

    // 记住当前选择，下次打开还是这个
    if (document.body.classList.contains('light')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });


  // ---- 2. 页脚自动显示当前年份 ----
  var footer = document.getElementById('footerText');
  var year = new Date().getFullYear();   // 拿到 2026 这样的数字
  footer.textContent = '© ' + year + ' 钟奕生 · 由 AI 辅助构建';


  // ---- 3. 打招呼（顺便证明 JS 真的在跑）----
  var hour = new Date().getHours();
  var greet;
  if (hour < 6)       greet = '凌晨了，注意休息';
  else if (hour < 12) greet = '早上好';
  else if (hour < 18) greet = '下午好';
  else                greet = '晚上好';

  console.log(greet + '！这是我在浏览器控制台里说的话，按 F12 能看到。');
});
