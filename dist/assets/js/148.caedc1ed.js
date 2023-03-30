(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{586:function(s,e,a){"use strict";a.r(e);var n=a(30),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在 "),a("a",{attrs:{href:"https://www.jianshu.com/p/ef1fed775e4a",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 学习系列17 镜像和容器的导入导出"),a("OutboundLink")],1),s._v("\n我讲过docker镜像是由一层层组成的\n比如如下dockerfile文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("FROM node:10.8.0-alpine\nMAINTAINER www.mafeifan.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置工作目录，下面的RUN命令会在工作目录执行")]),s._v("\nWORKDIR /app\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先拷贝本地的 package.json 和 package-lock 到容器内")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这样是利用docker的镜像分层机制")]),s._v("\nCOPY package*.json ./\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装项目依赖包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生产环境可以运行 RUN npm install --only=production 只按照 package.json 中dependencies定义的模块")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的app文件夹下")]),s._v("\nADD "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /app/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露容器内的3000端口")]),s._v("\nEXPOSE "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器启动时执行的命令，类似npm run start")]),s._v("\nCMD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("当我们执行docker build 生成镜像的时候，实际上每行命令产生的文件会存到一个目录中，即一层，"),a("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/appendix/best_practices.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Dockerfile 最佳实践"),a("OutboundLink")],1),s._v(" 也建议我们")]),s._v(" "),a("blockquote",[a("p",[s._v("镜像层数尽可能少")])]),s._v(" "),a("p",[s._v("这里推荐一款工具 "),a("a",{attrs:{href:"https://github.com/wagoodman/dive",target:"_blank",rel:"noopener noreferrer"}},[s._v("dive"),a("OutboundLink")],1),s._v(" 可以方便的查看镜像层详情，评估镜像的质量，如浪费了多少空间")]),s._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-55f0d75dadb7a82d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-8e13a73e2041219c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),a("p",[s._v("如果作为镜像审查之后，可以进行如下命令操作:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$: CI=true dive <image-id>\nFetching image... (this can take a while with large images)\nParsing image...\nAnalyzing image...\n  efficiency: 95.0863 %\n  wastedBytes: 671109 bytes (671 kB)\n  userWastedPercent: 8.2274 %\nRun CI Validations...\n  Using default CI config\n  PASS: highestUserWastedPercent\n  SKIP: highestWastedBytes: rule disabled\n  PASS: lowestEfficiency\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("从输出信息可以得到很多有用的信息，集成到CI过程也就非常容易了。 dive本身支持添加"),a("code",[s._v(".dive-ci")]),s._v(" 配置文件作为项目的CI配置，具体配置规则见文档。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If the efficiency is measured below X%, mark as failed.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Expressed as a percentage between 0-1.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("lowestEfficiency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.95")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If the amount of wasted space is at least X or larger than X, mark as failed.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Expressed in B, KB, MB, and GB.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highestWastedBytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20MB\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If the amount of wasted space makes up for X% or more of the image, mark as failed.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Note: the base image layer is NOT included in the total image size.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Expressed as a percentage between 0-1; fails if the threshold is met or crossed.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highestUserWastedPercent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.20")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("集成到CI中，增加以下命令即可:\n"),a("code",[s._v("$: CI=true dive <image-id>")])]),s._v(" "),a("p",[s._v("镜像审查和代码审查类似，是一件开始抵制，开始后就欲罢不能的事。这件事宜早不宜迟，对于企业与个人而言均百利而无一害。")]),s._v(" "),a("p",[s._v("随着容器化的普及，个人觉得这个工具很有前途")]),s._v(" "),a("p",[s._v("另外推荐一个容器的静态分析工具 "),a("a",{attrs:{href:"https://github.com/coreos/clair",target:"_blank",rel:"noopener noreferrer"}},[s._v("clair"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d0ad89c518825282e2c3e7d",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何对Docker Image进行审查"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=t.exports}}]);