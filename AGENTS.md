# 个人作品集项目说明

## 项目定位

这是杨世琨的跨境电商视觉设计作品集网站。

网页仓库：
https://github.com/fengmu-12138/fengmu-portfolio

图库仓库：
https://github.com/fengmu-12138/fengmu-portfolio-img

线上地址：
https://fengmu-12138.github.io/fengmu-portfolio/

## 图片规则

- 网页图片主要存放在图库仓库，不要把原始素材重复复制到网页仓库。
- 页面图片优先使用 jsDelivr CDN。
- CDN 基础地址是：
  https://cdn.jsdelivr.net/gh/fengmu-12138/fengmu-portfolio-img@main/img/
- 图片地址不要改成 raw.githubusercontent.com。
- 修改图片时保留 gallery-data.js 的数组顺序和字段结构。
- 修改后核对图片文件名与图库仓库是否对应。
- 超长详情页使用 assets/page-view/ 的分段图片方案，优先加载首段，再加载后续分段。

## 页面规则

- 修改桌面端时保持现有布局和交互。
- 修改手机端时检查导航菜单、头像资料卡、页尾、轮播图和详情弹窗。
- 轮播图切换前预加载下一张图片，避免切换时出现空白。
- 产品图片应保持清晰，并根据图片原比例适配展示区域。
- 不要删除 A+ 图片或用户没有要求删除的素材。

## 修改后检查

运行以下检查：

```bash
node --check script.js
node --check assets/page-view/pages.js
git diff --check
```

修改完成后：

1. 检查图片引用和图库仓库文件名是否对应。
2. 提交到 main 分支。
3. 检查 GitHub Actions 的 Pages 部署状态。
4. 强制刷新线上页面后检查桌面端和手机端。
