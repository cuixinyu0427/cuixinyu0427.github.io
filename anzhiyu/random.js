var posts=["posts/7b2178fe.html","posts/b49df70f.html","posts/8bd8601.html","posts/4a17b156.html","posts/6bbbe4a5.html","posts/a98ed020.html","posts/28bf5491.html","posts/12817a66.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"小智の空间站","link":"https://blog.cuixinyu.com","avatar":"https://blog.cuixinyu.com/img/others/avatar.png","descr":"记录学习踩坑","hundredSuffix":"!w120"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://document.cuixinyu.com/img/favatar/avatar_Akilar%E3%81%AE%E7%B3%96%E6%9E%9C%E5%B1%8B.webp","descr":"期待您的光临！","hundredSuffix":"!w120"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://document.cuixinyu.com/img/favatar/avatar_%E5%AE%89%E7%9F%A5%E9%B1%BC.png","descr":"生活明朗，万物可爱","hundredSuffix":"!w120"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://document.cuixinyu.com/img/favatar/avatar_%E5%BC%A0%E6%B4%AAHeo.webp","descr":"分享设计与科技生活","hundredSuffix":"!w120"},{"name":"Ganzhe","link":"https://ganzhe2028.github.io","avatar":"https://document.cuixinyu.com/img/favatar/avatar_Ganzhe.png","descr":"顺其自然，持之以恒"},{"name":"Pzai","link":"https://blog.pzai.cloud","avatar":"https://document.cuixinyu.com/img/favatar/avatar_Pzai.png","descr":"从入门到放弃"},{"name":"绯鞠的博客","link":"https://loli.fj.cn","avatar":"https://document.cuixinyu.com/img/favatar/avatar_%E7%BB%AF%E9%9E%A0%E7%9A%84%E5%8D%9A%E5%AE%A2.gif","descr":"一只爱折腾的绯鞠"},{"name":"Ariasakaの小窝","link":"https://yisous.xyz","avatar":"https://document.cuixinyu.com/img/favatar/avatar_Ariasaka%E3%81%AE%E5%B0%8F%E7%AA%9D.png","descr":"人有悲欢离合 月有阴晴圆缺"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://document.cuixinyu.com/img/favatar/avatar_%E9%93%AD%E5%BF%83%E7%9F%B3%E5%88%BB.webp","descr":"愿岁并谢，与友长兮"},{"name":"厕所干饭人","link":"https://bkz.asia","avatar":"https://document.cuixinyu.com/img/favatar/avatar_%E5%8E%95%E6%89%80%E5%B9%B2%E9%A5%AD%E4%BA%BA.jpg","descr":"有钱终成眷属，没钱亲眼目睹"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://document.cuixinyu.com/img/favatar/avatar_%E9%9D%92%E6%A1%94%E6%B0%94%E7%90%83.webp","descr":"分享网络安全与科技生活","siteshot":"https://document.cuixinyu.com/img/fsiteshot/siteshot_%E9%9D%92%E6%A1%94%E6%B0%94%E7%90%83.webp"},{"name":"葱苓","link":"https://blog.itciraos.cn","avatar":"https://document.cuixinyu.com/img/favatar/avatar_%E8%91%B1%E8%8B%93.webp","descr":"Dare && Do","siteshot":"https://document.cuixinyu.com/img/fsiteshot/siteshot_%E8%91%B1%E8%8B%93.webp"},{"name":"Winner365の博客","link":"https://blog.365sites.top","avatar":"https://document.cuixinyu.com/img/favatar/avatar_Winner365%E3%81%AE%E5%8D%9A%E5%AE%A2.png","descr":"所谓浮躁，也就是时时刻刻，希望以最短的时间，博取最多的存在感优越感和自我认同"},{"name":"Cisyam","link":"https://manamn.space/","avatar":"https://document.cuixinyu.com/img/favatar/avatar_Cisyam.jpg","descr":"分享思想，留下痕迹","siteshot":"https://document.cuixinyu.com/img/fsiteshot/siteshot_Cisyam.png"},{"name":"风起星辰","link":"https://blog.qiaoxiao.top","avatar":"https://document.cuixinyu.com/img/favatar/avatar_%E9%A3%8E%E8%B5%B7%E6%98%9F%E8%BE%B0.webp","descr":"行远自迩，登高自卑"},{"name":"杀死一只知更鸟","link":"https://www.shangjidong.com","avatar":"https://document.cuixinyu.com/img/favatar/avatar_%E6%9D%80%E6%AD%BB%E4%B8%80%E5%8F%AA%E7%9F%A5%E6%9B%B4%E9%B8%9F.gif","descr":"前端技术分享、前端学习记录"},{"name":"林与记","link":"https://ywv.cc","avatar":"https://document.cuixinyu.com/img/favatar/avatar_%E6%9E%97%E4%B8%8E%E8%AE%B0.jpg","descr":"建站交流与考证资料分享"},{"name":"小TiD笔记","link":"https://www.tidnotes.top/","avatar":"https://document.cuixinyu.com/img/favatar/avatar_%E5%B0%8FTiD%E7%AC%94%E8%AE%B0.jpg","descr":"技术无止境，随心随所记","siteshot":"https://document.cuixinyu.com/img/fsiteshot/siteshot_%E5%B0%8FTiD%E7%AC%94%E8%AE%B0.png"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };