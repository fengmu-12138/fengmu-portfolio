# 杨世琨作品集网页

这是可直接发布到 GitHub Pages 的静态网页，不需要安装依赖或构建。

## 本地预览

在 VS Code 中对 `index.html` 使用 Live Server（或使用任意静态 HTTP 服务发布仓库根目录），通过服务提供的 `http://localhost:端口/` 地址浏览。不要以本地文件地址打开。网页资源全部使用相对路径；素材位于 `assets/portfolio/`，`gallery-data.js` 保存目录层级、文件排序和导航数据。

## 发布到 GitHub Pages

将仓库根目录设为 Pages 发布源（Deploy from a branch，选择 `main` 和 `/(root)`），保存后等待 GitHub Pages 完成发布。

## 替换封面或作品素材

网页读取 `gallery-data.js` 中的目录清单。替换图片时建议保持对应文件夹和文件名，并同步替换 `assets/portfolio/` 下的优化图片。需要新增或删除图片时，需重新生成 `gallery-data.js`。

原始素材没有修改；`assets/portfolio/` 是缩放与压缩后的网页副本。
# 素材同步约定

每次修改作品集网站时，先对照用户最新的【素材】目录，检查图片新增、改名和删减，再同步更新 `gallery-data.js` 与 `assets/portfolio`，保持目录分类和顺序。

“产品精修”板块的来源是桌面【精修】文件夹；网站资源保存在 `assets/portfolio/product-retouch/`，与【素材】目录及其他图片分开放置，不覆盖原有图片。

“拍摄与精修”板块的原始素材归档于 `assets/portfolio/photo-retouch/original-archive/`，网页展示副本位于 `assets/portfolio/photo-retouch/web-images/`。网页副本按最长边 2200 像素、JPEG 质量 92 生成；新增内容没有覆盖已有素材。每次网站修改仍需对照最新素材目录检查增删改名。
