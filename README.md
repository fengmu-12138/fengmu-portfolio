# 杨世琨作品集网页

这是使用原生 HTML、CSS 和 JavaScript 编写的静态作品集网站，无需本地构建步骤。

## 图片资源

作品图片由 `fengmu-12138/fengmu-portfolio-img` 仓库通过 jsDelivr 提供。PicGo 配置使用 `main` 分支和 `img/` 路径，页面图片地址格式为：

`https://cdn.jsdelivr.net/gh/fengmu-12138/fengmu-portfolio-img@main/img/文件名.jpg`

上传新图后，请确认它实际位于图片仓库的 `img/` 目录，再更新 `gallery-data.js`。详情长图使用单独的高清文件名（例如 `-full.jpg`），不要覆盖预览图。

## GitHub Pages

此站点的 Pages 来源配置为 **GitHub Actions**，近期部署运行在 `main` 分支。网页文件位于仓库根目录。推送更新后，请在 Actions 确认 `pages-build-deployment` 成功，再从 Settings → Pages 的 **Visit site** 打开网站。