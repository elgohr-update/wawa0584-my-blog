(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{511:function(s,t,a){"use strict";a.r(t);var n=a(30),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"每次发送邮件自动记录日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每次发送邮件自动记录日志"}},[s._v("#")]),s._v(" 每次发送邮件自动记录日志")]),s._v(" "),a("p",[s._v("根据"),a("a",{attrs:{href:"https://learnku.com/docs/laravel/6.x/mail/5165#events",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档说明"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("Laravel 在处理邮件消息发送时触发两个事件。"),a("code",[s._v("MessageSending")]),s._v(" 事件在消息发送前触发，"),a("code",[s._v("MessageSent")]),s._v(" 事件则在消息发送后触发。\n切记，这些事件是在邮件被 发送 时触发，而不是在队列化的时候。可以在 "),a("code",[s._v("EventServiceProvider")]),s._v(" 中注册此事件的侦听器：")]),s._v(" "),a("p",[s._v("希望实现：每当邮件发送出去，就将一些基本信息(邮件发件人，收件人，邮件标题等)记录到相关的日志文件中，")]),s._v(" "),a("ol",[a("li",[s._v("打开 "),a("code",[s._v("App\\Providers\\EventServiceProvider")])])]),s._v(" "),a("p",[s._v("修改")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("Registered")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("SendEmailVerificationNotification")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Illuminate\\Mail\\Events\\MessageSent'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'App\\Listeners\\EmailLogSentMessage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("执行 "),a("code",[s._v("php artisan make:listener EmailLogSentMessage")])])]),s._v(" "),a("li",[a("p",[s._v("打开新创建的 "),a("code",[s._v("App\\Listeners\\EmailLogSentMessage")])])]),s._v(" "),a("li",[a("p",[s._v("修改handle方法")])])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里只打印了邮件头信息，邮件内容比较长，就不让输出了")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Log")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("channel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'emailSend'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$event")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("message")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("这里需要打开 "),a("code",[s._v("config\\logging")]),s._v("， channels 下面添加一节\n意思我希望输出日志，按天轮回，并且指定了输出日志的路径和文件名")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'channels'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'stack'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'emailSend'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'driver'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'daily'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'path'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("storage_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'logs/emailSend.log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'level'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'info'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'days'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"每次发送邮件把日志记录到数据库中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每次发送邮件把日志记录到数据库中"}},[s._v("#")]),s._v(" 每次发送邮件把日志记录到数据库中")]),s._v(" "),a("p",[s._v("机制一样，根据MessageSending事件搞事情，直接安装这个"),a("a",{attrs:{href:"https://github.com/shvetsgroup/laravel-email-database-log",target:"_blank",rel:"noopener noreferrer"}},[s._v("laravel-email-database-log"),a("OutboundLink")],1),s._v("即可")])])}),[],!1,null,null,null);t.default=e.exports}}]);