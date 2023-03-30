(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{689:function(e,s,n){"use strict";n.r(s);var a=n(30),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("不同的操作系统方法有略微差异，这里以Ubuntu 18.04为例。")]),e._v(" "),n("h2",{attrs:{id:"更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[e._v("#")]),e._v(" 更新")]),e._v(" "),n("p",[e._v("证书过期续期方法")]),e._v(" "),n("p",[e._v("执行"),n("code",[e._v("sudo /snap/bin/certbot renew --force-renewal")])]),e._v(" "),n("p",[e._v("提示")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Saving debug log to /var/log/letsencrypt/letsencrypt.log\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nProcessing /etc/letsencrypt/renewal/course.intogolf.nl.conf\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nCould not choose appropriate plugin: The manual plugin is not working; there may be problems with your existing configuration.\nThe error was: PluginError('An authentication script must be provided with --manual-auth-hook when using the manual plugin non-interactively.')\nFailed to renew certificate course.intogolf.nl with error: The manual plugin is not working; there may be problems with your existing configuration.\nThe error was: PluginError('An authentication script must be provided with --manual-auth-hook when using the manual plugin non-interactively.')\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nAll renewals failed. The following certificates could not be renewed:\n  /etc/letsencrypt/live/course.intogolf.nl/fullchain.pem (failure)\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n1 renew failure(s), 0 parse failure(s)\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br")])]),n("p",[e._v("经查，不管是申请还是续期，只要是通配符证书，只能采用 dns-01 的方式校验申请者的域名，也就是说 certbot 操作者必须手动添加 DNS TXT 记录。")]),e._v(" "),n("p",[e._v("certbot 提供了一个 hook，可以编写一个 Shell 脚本，让脚本调用 DNS 服务商的 API 接口，动态添加 TXT 记录，这样就无需人工干预了。")]),e._v(" "),n("p",[e._v("--manual-auth-hook：在执行命令的时候调用一个 hook 文件")]),e._v(" "),n("h3",{attrs:{id:"安装生成工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装生成工具"}},[e._v("#")]),e._v(" 安装生成工具")]),e._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" letsencrypt\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("h3",{attrs:{id:"生成证书文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成证书文件"}},[e._v("#")]),e._v(" 生成证书文件")]),e._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" certbot --server https://acme-v02.api.letsencrypt.org/directory -d *.example.com --manual --preferred-challenges dns-01 certonly --agree-tos --manual-public-ip-logging-ok\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("为了证明域名是属于你的，需要进行验证，其中"),n("code",[e._v("preferred-challenges=dns")]),e._v("表示使用dns验证方式\n参数解释:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("certonly:                    只生成证书\n–manual:                     使用交互方式\n–preferred-challenges=dns:   使用dns验证方式\n–server:                     指定要用于生成证书的服务器地址\n–agree-tos:                  同意条款\n-d:                          指定要生成证书的域名\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("回车后，会出现类似如下提示")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Please deploy a DNS TXT record under the name\n_acme-challenge.example.com with the following value:\n\nx4MrZ6y-JqFJQRmq_lGi9ReRQHPa1aTC9J2O7wDKzq8\n\nBefore continuing, verify the record is deployed.\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("需要在你的域名DNS中添加一条txt类型的记录，名为"),n("code",[e._v("_acme-challenge.example.com")]),e._v("值为"),n("code",[e._v("x4MrZ6y-JqFJQRmq_lGi9ReRQHPa1aTC9J2O7wDKzq8")]),e._v("\n添加后先不要急着回车，等几分钟后回车，会出现成功提示")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('IMPORTANT NOTES:\n - Congratulations! Your certificate and chain have been saved at:\n   /etc/letsencrypt/live/example.com/fullchain.pem\n   Your key file has been saved at:\n   /etc/letsencrypt/live/example.com/privkey.pem\n   Your cert will expire on 2020-01-09. To obtain a new or tweaked\n   version of this certificate in the future, simply run certbot\n   again. To non-interactively renew *all* of your certificates, run\n   "certbot renew"\n - Your account credentials have been saved in your Certbot\n   configuration directory at /etc/letsencrypt. You should make a\n   secure backup of this folder now. This configuration directory will\n   also contain certificates and private keys obtained by Certbot so\n   making regular backups of this folder is ideal.\n - If you like Certbot, please consider supporting our work by:\n\n   Donating to ISRG / Let\'s Encrypt:   https://letsencrypt.org/donate\n   Donating to EFF:                    https://eff.org/donate-le\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br")])]),n("p",[e._v("会告诉你证书的生成地址")]),e._v(" "),n("p",[e._v("使用"),n("code",[e._v("sudo certbot certificates")]),e._v("来查看证书的过期时间和存放路径")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Found the following certs:\n  Certificate Name: example.com\n    Domains: *.example.com\n    Expiry Date: 2020-01-05 07:48:04+00:00 (VALID: 85 days)\n    Certificate Path: /etc/letsencrypt/live/example.com/fullchain.pem\n    Private Key Path: /etc/letsencrypt/live/example.com/privkey.pem\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("默认情况，证书的有效时间是三个月，为了防止过期，添加一条计划任务，自动续签，先编辑"),n("code",[e._v("sudo crontab -e")]),e._v("添加下行")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("0 1 * * * /usr/bin/certbot renew >> /var/log/letsencrypt/renew.log\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("最后打开nginx配置，引入证书，站点路径需要改为你实际的")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("server {\n        root /home/example/;\n\n        # Add index.php to the list if you are using PHP\n        index index.php index.html index.htm index.nginx-debian.html;\n\n        server_name *.example.com;\n\n        location / {\n                # First attempt to serve request as file, then\n                # as directory, then fall back to displaying a 404.\n                # try_files $uri $uri/ =404;\n                try_files $uri $uri/ /index.php?$query_string;\n        }\n\n        location = /favicon.ico { access_log off; log_not_found off; }\n        location = /robots.txt  { access_log off; log_not_found off; }\n\n        error_page 404 /index.php;\n\n        # pass PHP scripts to FastCGI server\n        #\n        location ~ \\.php$ {\n                include snippets/fastcgi-php.conf;\n        #\n        #       # With php-fpm (or other unix sockets):\n                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;\n        #       # With php-cgi (or other tcp sockets):\n        #       fastcgi_pass 127.0.0.1:9000;\n        }\n\n        listen [::]:443 ssl ipv6only=on; # managed by Certbot\n        listen 443 ssl; # managed by Certbot\n        ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem; # managed by Certbot\n        ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem; # managed by Certbot\n        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot\n        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br")])]),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),n("p",[e._v("https://github.com/ywdblog/certbot-letencrypt-wildcardcertificates-alydns-au")]),e._v(" "),n("p",[e._v("https://websiteforstudents.com/generate-free-wildcard-certificates-using-lets-encrypt-certbot-on-ubuntu-18-04/")])])}),[],!1,null,null,null);s.default=t.exports}}]);