(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{640:function(e,t,a){"use strict";a.r(t);var o=a(30),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Java 网络启动协议(JNLP) 是一种允许客户端启动托管在远程Web服务器上的应用程序的协议。\n通过 JNLP 协议增加 agent 比较简单，步骤如下：")]),e._v(" "),a("ol",[a("li",[e._v("进入 Manage Jenkins 页面 -> Configure Global Security -> Agents\n勾选固定端口，填一个端口数字")])]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-176a122e659dadeb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("进入 Manage Jenkins -> Manage Nodes -> New Node\n勾选 Permanent Agent ，即设置为固定节点")])]),e._v(" "),a("li",[a("p",[e._v('配置页面\nRemote root directory 远程根目录，指连接 slave节点后使用的目录，相关文件会存放于此\nLaunch method  选择 "Launch agent by connecting it to the master"')])])]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-8ed41628330c6c5b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("添加节点后，点击名称进入连接页面")])]),e._v(" "),a("p",[e._v("提示连接agent有两种方式：")]),e._v(" "),a("ul",[a("li",[e._v("直接在 agent 的浏览器上打开此页面，单击 Launch 按钮")]),e._v(" "),a("li",[e._v("slave 需要安装java，复制页面上的地址 "),a("code",[e._v('sudo nohup java -jar agent.jar -jnlpUrl http://xx.xx.xx.xx:xx/computer/new/slave-agent.jnlp -secret ef6bedd1dfc7001077179aa6888e02078d4187aa28f4edfe8be23a7f796528a5 -workDir "/home" &')]),e._v("\n然后运行")])]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-9dc99004e9808a4d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),a("p",[e._v("SSH 登录 slave 机器上，然后运行master上提供的连接命令")]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-d55dcd8237689fd0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),a("p",[e._v("连接成功")]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-b0c565d5981ad4f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])])])}),[],!1,null,null,null);t.default=n.exports}}]);