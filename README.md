# InternW0 Homepage

InternW0 模型发布主页占位版本。保留模板的蓝色主题、深浅色切换、章节顺序、表格展开和视频网格。
技术描述、评测结果及引用信息使用 `xxx`；未提供的研究图片和视频使用占位框。
首屏署名为 Physical Intelligence Team, Shanghai AI Laboratory。
机构 Logo 和 Github、Huggingface、ModelScope 图标保存在本项目的 `public/images/` 中，
均为独立文件，运行和部署不依赖其他项目。

## 已接入的视频

| 页面位置 | 原始素材 | 网页文件 | 时长 |
| --- | --- | --- | --- |
| Introduction 主视频 | A004C009_260910XY.mp4 | `public/videos/intro.mp4` | 2 分 36 秒 |
| Experiments / Demo 1 | A004C048_260910WY.mp4 | `public/videos/demos/A004C048_260910WY.mp4` | 53 秒 |
| Experiments / Demo 2 | A004C049_260910YW.mp4 | `public/videos/demos/A004C049_260910YW.mp4` | 59 秒 |

视频从工作区的 `Videos/` 导入，保留原始素材不变，网页版本为 1080p、50 fps、H.264/AAC，
并启用 MP4 faststart、附带 JPEG 封面。网页运行仅依赖本项目的 `public/`，不读取外部素材目录。
主视频点击播放；两个 Demo 并排展示、静音自动循环，并保留播放控件。

## 本地运行

环境：Node.js 20.9+；依赖使用仓库中的 pnpm 锁文件。

```bash
cd /home/xue/A15_Homepage-source/W0-Homepage-source
npx --yes pnpm@10.34.5 install --frozen-lockfile
npm run dev
```

打开终端显示的地址，通常为 http://localhost:3000。保存源码后页面自动更新；按 Ctrl+C 停止。
依赖已安装时只需执行 `npm run dev`。如端口被占用，可用 `npm run dev -- --port 3001`。

## 补充文案、链接和素材

内容入口：`src/data/project-page.ts`。

| 配置项 | 对应内容 |
| --- | --- |
| `projectInfo` | 模型名、副标题、首屏说明、搜索和分享元数据 |
| `authors`、`teamLogos` | 作者、机构及 Logo |
| `heroActions` | Paper、Github、Huggingface、ModelScope、BibTeX 按钮 |
| `stats` | 四个首屏指标卡 |
| `sections` | 各章节标题、描述、图注及训练／推理说明 |
| `figures` | 总览图、数据图、实验图及训练／推理架构图 |
| `introVideo` | 介绍视频及封面 |
| `dataTables`、`benchmarkResults` | 数据来源表及评测汇总、对比结果 |
| `realWorldTasks`、`experimentGroups` | 实验说明和三组视频网格 |
| `bibtex` | 引用内容 |

素材放入 `public/images/`、`public/videos/`、`public/paper/`。
`src: null` 表示占位，填入路径后自动显示素材，代码中的路径不包含 `public`：

```ts
// 图片示例；width / height 填实际像素尺寸。
teaser: {
  src: "/images/teaser.png",
  width: 1920,
  height: 1080,
  alt: "InternW0 overview",
}

// 视频示例。
export const introVideo: VideoAsset = {
  src: "/videos/intro.mp4",
  poster: "/videos/intro-poster.jpg",
  type: "video/mp4",
  width: 1920,
  height: 1080,
  alt: "InternW0 introduction video",
};
```

首组实验视频已接入两个 Demo，其余组通过 `videoPlaceholders()` 生成占位。
素材到齐后，将对应组的 `videos` 替换为对象数组，例如：

```ts
videos: [
  {
    id: "experiment-1-video-1",
    condition: "xxx",
    subject: "xxx",
    target: "xxx",
    src: "/videos/task-01.mp4",
    poster: "/videos/task-01.jpg",
    type: "video/mp4",
    width: 1280,
    height: 720,
    alt: "InternW0 task demonstration",
  },
]
```

评测表目前使用生成的占位数组；补充结果时可将 `benchmarkResults` 改为 `BenchmarkResult[]` 对象数组，
为每组设置唯一 `id`，并保证每行 `cells` 数量与 `detailColumns` 数量一致。

资源按钮的 `href: null` 表示禁用；填入真实网址或本地 PDF 路径后自动启用。
BibTeX 保留 `#bibtex` 页面内跳转。不要在路径中手动加部署子路径，组件会统一调用 `assetPath()`。
模型区已改为独立的 `ModelPreview`，分别读取 `figures.modelTraining` 和 `figures.modelInference`。

## 页面与样式

- `src/app/page.tsx`：章节顺序。
- `src/app/globals.css`：主题与布局，包括素材占位框样式。
- `src/components/research-page/`：首屏、章节、评测表和模型切换。
- `src/components/media/`：图片、视频及空素材占位逻辑。

## 检查、构建和静态预览

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

构建产物在 `out/`，静态预览需要 Python 3。`npm run preview` 适用于未设置子路径的本地构建。
开发服务器和静态预览默认都使用 3000 端口，同时运行时需要为其中一个指定不同端口。

## 发布到 InternRobotics 的 GitHub Pages

目标仓库：`InternRobotics/internw0`。
目标网址：https://internrobotics.github.io/internw0/ 。

已提供 `.github/workflows/deploy-pages.yml`：推送到 `main` 后，使用 Node.js 22 和
`package.json` 指定的 pnpm 版本安装依赖、检查代码、构建并发布 `out/`。
构建时根据 GitHub 仓库名自动设置 `NEXT_PUBLIC_BASE_PATH`；仓库名为 `internw0` 时，
路径为 `/internw0`，使样式、图片和视频使用正确的子路径。
本地 `npm run dev` 不需要设置这个变量。

### 已有仓库改为简短网址

如果已创建 `InternRobotics/internw0.github.io`，在该仓库 Settings → General 中，
将 Repository name 改为 `internw0` 并点击 Rename。此操作需要仓库 Admin 或组织 Owner 权限。
重命名后在本项目目录更新远程地址，并提交本次工作流和文档修改：

```bash
git remote set-url origin git@github.com:InternRobotics/internw0.git
git add .github/workflows/deploy-pages.yml README.md
git commit -m "Use repository name for GitHub Pages path"
git push
```

确认新仓库的 Settings → Pages → Source 仍为 GitHub Actions，等待新部署成功。
工作流会自动使用 `/internw0`。旧的 Pages 网址不会因仓库重命名而自动跳转，
对外分享请使用新网址。本地文件夹名 `W0-Homepage-source` 不影响线上地址。

### 首次发布

1. 在 https://github.com/new 新建仓库，Owner 选择 `InternRobotics`，
   Repository name 填 `internw0`，选择 Public。
   为直接推送现有项目，保持仓库为空，不勾选初始化 README、.gitignore 或 License。
   如果不能选择组织或 Public，请组织管理员代建仓库，并授予你仓库管理权限。
2. 在新仓库进入 Settings → Pages → Build and deployment，将 Source 设为 **GitHub Actions**。
   如果空仓库暂时无法设置，完成下一步后再设置，并在 Actions 中重新运行部署任务。
3. 在本地项目目录执行以下命令。它们适用于首次上传到新建的空仓库；
   将本目录的内容放在远程仓库根目录，不要额外套一层 `W0-Homepage-source/`。

```bash
cd /home/xue/A15_Homepage-source/W0-Homepage-source
git init -b main
git add .
git commit -m "Create InternW0 homepage"
git remote add origin git@github.com:InternRobotics/internw0.git
git push -u origin main
```

4. 在仓库 Actions 中打开 **Deploy InternW0 to GitHub Pages**，等待 build 和 deploy 成功。
   然后访问目标网址。也可以在该工作流页面点击 Run workflow，选择 `main` 手动发布。

`.gitignore` 已排除 `node_modules/`、`.next/` 和 `out/`；GitHub Actions 会自行构建。
上传素材使用本项目 `public/` 内的网页版本，三个视频均小于 Git 单文件 100 MiB 上限。
其中主视频和 Demo 2 超过网页上传的 25 MiB 上限，因此使用上面的 Git 推送命令。
组织成员能否新建仓库取决于组织设置；配置 Pages 需要仓库的 Admin 或 Maintainer 权限。

### 后续更新

修改文案或素材后，在本项目目录执行：

```bash
git add .
git commit -m "Update InternW0 homepage"
git push
```

每次推送 `main` 都会自动重新发布。如果组织要求通过 Pull Request 修改 `main`，
在工作分支提交并发起 PR，合并后触发发布。

如需在本地生成与线上路径一致的静态文件：

```bash
NEXT_PUBLIC_BASE_PATH=/internw0 npm run build
```

上述构建产物的资源路径包含 `/internw0`，预览时需将 `out/` 挂载到该子路径。
如需使用前面的 `npm run preview`，先执行不带该环境变量的 `npm run build`。
重命名项目仓库后重新运行工作流即可使用新路径；部署到自定义路径时再调整工作流的 `NEXT_PUBLIC_BASE_PATH`。
该项目为静态导出，不使用 `next start` 启动生产服务。

官方说明：[GitHub Pages 项目站点](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)、
[发布源设置](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、
[组织仓库创建权限](https://docs.github.com/en/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)、
[文件大小限制](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github)。
