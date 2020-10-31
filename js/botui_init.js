function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
        delay: 800, content: "Hi, there👋"
    }).then(function () {
        botui.message.add({
            delay: 1100, content: "这里是 崔心宇"
        }).then(function () {
            botui.message.add({
                delay: 1100, content: "一个可爱的男孩子~"
            }).then(function () {
                botui.action.button({
                    delay: 1600, action: [{text: "然后呢？ 😃", value: "sure"}, {text: "少废话！ 🙄", value: "skip"}]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
            botui.message.add({
                delay: 600, content: "😘"
            }).then(function () {
                secondpart()
            })
        },
        end = function () {
            botui.message.add({
                delay: 600,
                content: "![...](https://view.moezx.cc/images/2018/05/06/a1c4cd0452528b572af37952489372b6.md.jpg)"
            })
        },
        secondpart = function () {
            botui.message.add({
                delay: 1500, content: "毕业于大连财经学院"
            }).then(function () {
                botui.message.add({
                    delay: 1500, content: "是在国际经济与贸易毕业后半路转行的程序⚪"
                }).then(function () {
                    botui.message.add({
                        delay: 1200, content: "将敲代码看成一种快乐"
                    }).then(function () {
                        botui.message.add({
                            delay: 1500, content: "主修 Java 和 Python,略知 linux,偶尔也搞 HTML/CSS/JavaScript/Spring"
                        }).then(function () {
                            botui.message.add({
                                delay: 1500, content: "专业方向，物联网及汽车远程操控(Internet of things)"
                            }).then(function () {
                                botui.message.add({
                                    delay: 1800, content: "喜欢看听音乐和看鬼畜"
                                }).then(function () {
                                    botui.action.button({
                                        delay: 1100, action: [{text: "为什么要建这个博客呢？🤔", value: "why-mashiro"}]
                                    }).then(function (a) {
                                        thirdpart()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        },
        thirdpart = function () {
            botui.message.add({
                delay: 1e3, content: "起初看大佬们做博客网站做的很炫，想尝试做着玩玩，现在觉得当程序员需要不停的记录复习，所以新用途🤔。"
            }).then(function () {
                botui.action.button({
                    delay: 1500, action: [{text: "将来的方向呢？", value: "why-cat"}]
                }).then(function (a) {
                    fourthpart()
                })
            })
        }, fourthpart = function () {
            botui.message.add({
                delay: 1e3, content: "一步一个脚印 "
            }).then(function () {
                botui.message.add({
                    delay: 1100, content: "博客一个模块一个模块，一个功能一个功能的搭起来！"
                }).then(function () {
                    botui.action.button({
                        delay: 1500, action: [{text: "域名有什么含义吗？", value: "why-domain"}]
                    }).then(function (a) {
                        fifthpart()
                    })
                })
            })
        }, fifthpart = function () {
            botui.message.add({
                delay: 1e3, content: "emmmm，因为选域名的时候cuixinyu.com没有了，突然看见了cuixinyu.icu，老icu了，后面也买了cuixinyu1.com的域名，填补了没有.com域名的遗憾"
            }).then(function () {
                botui.message.add({delay: 1600, content: "那么，相遇就是缘分，交个朋友加入友链，一起努力吧 ^_^"})
            })
        }
}