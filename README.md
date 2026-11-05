# 杨世琨作品集网页

这是可直接发布到 GitHub Pages 的静态网站，无需安装依赖或构建。

## 本地预览

使用 VS Code Live Server 打开仓库根目录的 `index.html`。页面代码、样式、头像和字体由网页仓库提供；作品集图片从 `fengmu-portfolio-img` 图片仓库通过 jsDelivr 加载。

## 图片仓库

PicGo 配置使用 `fengmu-12138/fengmu-portfolio-img`，分支 `main`，存储路径 `img/`。网页图片地址格式为：

`https://cdn.jsdelivr.net/gh/fengmu-12138/fengmu-portfolio-img@main/img/文件名.jpg`

上传图片后，确认仓库内实际路径和文件名，再更新 `gallery-data.js`。整页详情图应使用高清版本的独立文件名（例如 `-full.jpg`），不要覆盖预览图。

## 发布到 GitHub Pages

网页仓库默认分支为 `master`。在仓库 Settings → Pages 中选择 `Deploy from a branch`、`master` 和 `/(root)`。发布源根目录需包含 `index.html`、`gallery-data.js`、`script.js` 和 `styles.css`。推送后在 Actions 中确认 Pages 部署任务成功。