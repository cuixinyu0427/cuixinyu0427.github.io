var visit_calendar=(t,e)=>{var i=new Date;i.getFullYear(),i.getMonth(),i.getMonth(),i.getDate(),i.getDate();i.setFullYear(i.getFullYear()-1),i.setTime(i.getTime()-864e5*i.getDay());i.getFullYear(),i.getMonth(),i.getMonth(),i.getDate(),i.getDate();var n="pv_count"===t?"次":"visitor_count"===t?"人":"",a="https://baidu.tongji.cuixinyu.com/calendar.json?date"+new Date,o=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],l=[],r="",d="",s="",c="",p=0,g=0,v=[],u=[],f=[],m=[],x=0,h=0,b=[],y=[],w=[],_=0;function k(){var t=window.devicePixelRatio||1,i=document.getElementById("visit_tooltip_container"),n="",a="",o="",r="";if(document.getElementById("visitcanvas")){var d=document.getElementById("visitcanvas");d.style.width="100%",d.style.height="";document.getElementById("visitmessage");var s=d.getContext("2d");width=d.width=document.getElementById("visitcalendarcanvasbox").offsetWidth,height=d.height=8.64*d.width/visit_data.length,((t,e,i)=>{if(i>1){var n=t.width,a=t.height;t.width=n*i,t.height=a*i,t.style.width="100%",t.style.height=a+"px",e.scale(i,i)}})(d,s,t);var c=height/9,p=.8*c,g={x:.02*width,y:.025*width};for(var u in visit_data){for(var f in weekdata=visit_data[u],weekdata){var m={date:"",count:"",x:0,y:0};v.push(m),s.fillStyle=M(e,weekdata[f].count),g.y=Math.round(100*g.y)/100,m.date=weekdata[f].date,m.count=weekdata[f].count,m.x=g.x,m.y=g.y,s.fillRect(g.x,g.y,p,p),g.y=g.y+c}g.y=.025*width,g.x=g.x+c}if(document.body.clientWidth>700){s.font="600  Arial",s.fillStyle="#aaa",s.fillText("日",0,1.9*c),s.fillText("二",0,3.9*c),s.fillText("四",0,5.9*c),s.fillText("六",0,7.9*c);var x=width/24;for(var h in l)s.fillText(l[h],x,.7*c),x+=width/12}d.onmousemove=function(t){document.querySelector(".visitmessage")&&(i.innerHTML=""),function(t,e){var l=t.getBoundingClientRect(),d=e.clientX-l.left*(t.width/l.width),s=e.clientY-l.top*(t.height/l.height);for(var c of v){var g=d-c.x,u=s-c.y;0<g&&g<p&&0<u&&u<p&&(o=c.date,r=c.count,n=e.clientX-100,a=e.clientY-60,html=D(n,a,o,r),append_div_visitcalendar(i,html))}}(d,t)},i.onmousemove=function(t){document.querySelector(".visitmessage")&&(i.innerHTML="")}}}function I(){0===h?(B(52),B(51),B(50),B(49),B(48),x+=b[6].count,s=b[6].date):(B(52),B(51),B(50),B(49),function(){for(var t=h-1;t<y.length;t++)x+=y[t].count}(),s=y[h-1].date)}function B(t){for(var e of visit_data[t])x+=e.count}function T(){for(var t of f)p+=t.count}function z(t){6===h?(c=f[0].date,T()):(lastweek=t.contributions[51],c=lastweek[h+1].date,T(),function(){for(var t=h;t<m.length;t++)p+=m[t].count}())}function E(t,e){let i=[];for(let n=0;n<t.length;)i.push(t.slice(n,n+=e));return i}fetch(a).then((t=>t.json())).then((t=>{var i=t.result.items[0],n=t.result.items[1],a=0,v=[];for(let t=0;t<i.length;t++)"--"!==n[t][0]?(v.push({date:i[t][0].replace(/\//g,"-"),count:n[t][0]}),a+=n[t][0]):v.push({date:i[t][0].replace(/\//g,"-"),count:0});var B={total:a,contributions:E(v,7)};visit_data=B.contributions,g=B.total,y=visit_data[48],b=visit_data[47],u=B.contributions[0],f=B.contributions[52],m=B.contributions[51],h=f.length-1,d=f[h].date,r=u[0].date,_=1*d.substring(5,7),w=o.splice(_,12-_),l=w.concat(o),z(B),I();var T=C(l,visit_data,e,g,x,p,r,d,c,s);append_div_visitcalendar(document.getElementById("visit_container"),T),document.getElementById("visit_loading")&&(document.getElementById("echarts_text").remove(),document.getElementById("visit_loading").remove()),k()})).catch((function(t){console.log(t)})),window.onresize=function(){k()},window.onscroll=function(){document.querySelector(".visitmessage")&&(visit_tooltip_container.innerHTML="")};var M=(e,i)=>{if("pv_count"===t){if(0===i){parseInt(i/20);return e[0]}return i<20?e[1]:i<200?e[parseInt(i/20)]:e[9]}if(0===i){parseInt(i/2);return e[0]}return i<2?e[1]:i<20?e[parseInt(i/2)]:e[9]},D=(t,e,i,a)=>{var o="";return o+='<div class="visitmessage" style="top:'+e+"px;left:"+t+'px;position: fixed;z-index:9999"><div class="angle-wrapper" style="display:block;"><span>'+i+"&nbsp;</span><span>"+a+" "+n+"访问</span></div></div>"},C=(t,e,i,n,a,o,l,r,d,s)=>{var c="",p=(t=>{var e="";return e+'<div id="visit_tooltip_container"></div><div class="contrib-footer clearfix mt-1 mx-3 px-3 pb-1"><div class="float-left text-gray">数据来源 <a href="https://tongji.baidu.com/" target="blank">百度统计</a></div><div class="contrib-legend text-gray">Less <ul class="legend"><li style="background-color:'+t[0]+'"></li><li style="background-color:'+t[2]+'"></li><li style="background-color:'+t[4]+'"></li><li style="background-color:'+t[6]+'"></li><li style="background-color:'+t[8]+'"></li></ul>More </div></div>'})(i);return c+='<div class="position-relative"><div><span class="visit_title">博客访问日历</span></div><div class="border py-2 graph-before-activity-overview"><div class="js-visitcalendar-graph mx-md-2 mx-3 d-flex flex-column flex-items-end flex-xl-items-center overflow-hidden pt-1 is-graph-loading graph-canvas visitcalendar-graph height-full text-center"><div id="visitcalendarcanvasbox"> <canvas id="visitcanvas" style="animation: none;"></canvas></div></div>'+p+"</div></div>",c+='<div style="display:flex;width:100%"><div class="contrib-column contrib-column-first table-column"><span class="text-muted">过去一年访问</span><span class="contrib-number">'+n+'</span><span class="text-muted">'+l+"&nbsp;-&nbsp;"+r+'</span></div><div class="contrib-column table-column"><span class="text-muted">最近一月访问</span><span class="contrib-number">'+a+'</span><span class="text-muted">'+s+"&nbsp;-&nbsp;"+r+'</span></div><div class="contrib-column table-column"><span class="text-muted">最近一周访问</span><span class="contrib-number">'+o+'</span><span class="text-muted">'+d+"&nbsp;-&nbsp;"+r+"</span></div></div>"+j()},j=()=>(style='<style>#visit_container{text-align:center;margin:0 auto;width:100%;padding:10px;display:flex;display:-webkit-flex;justify-content:center;align-items:center;flex-wrap:wrap;}.visit_title{font-size:1rem;font-weight:550;}.visitcalendar-graph text.wday,.visitcalendar-graph text.month{font-size:10px;fill:#aaa;}.contrib-legend{text-align:right;padding:0 14px 10px 0;display:inline-block;float:right;}.contrib-legend .legend{display:inline-block;list-style:none;margin:0 5px;position:relative;bottom:-7px;padding:0;}.contrib-legend .legend li{display:inline-block;width:10px;height:10px;}.contrib-legend .legend li::before{content: none !important;}.text-small{font-size:12px;color:#767676;}.visitcalendar-graph{padding:15px 0 0;text-align:center;}.contrib-column{text-align:center;border-left:1px solid #ddd;border-top:1px solid #ddd;}.contrib-column-first{border-left:0;}.table-column{padding:10px;display:table-cell;flex:1;vertical-align:top;}.contrib-number{font-weight:400;line-height:1.3em;font-size:24px;display:block;}.visitcalendar img.spinner{width:70px;margin-top:50px;min-height:70px;}.monospace{text-align:center;color:#000;font-family:monospace;}.monospace a{color:#1D75AB;text-decoration:none;}.contrib-footer{font-size:11px;padding:0 10px 12px;text-align:left;width:100%;box-sizing:border-box;height:26px;}.left.text-muted{float:left;margin-left:9px;color:#767676;}.left.text-muted a{color:#4078c0;text-decoration:none;}.left.text-muted a:hover,.monospace a:hover{text-decoration:underline;}h2.f4.text-normal.mb-3{display:none;}.float-left.text-gray{float:left;}#user-activity-overview{display:none;}.day-tooltip{white-space:nowrap;position:absolute;z-index:99999;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.85);border-radius:3px;display:none;pointer-events:none;}.day-tooltip strong{color:#dfe2e5;}.day-tooltip.is-visible{display:block;}.day-tooltip:after{position:absolute;bottom:-10px;left:50%;width:5px;height:5px;box-sizing:border-box;margin:0 0 0 -5px;content:" ";border:5px solid transparent;border-top-color:rgba(0,0,0,.85)}.position-relative{width:100%;}@media screen and (max-width:650px){.contrib-column{display:none}}.angle-wrapper{z-index:9999;display:inline;width:200px;height:40px;position:relative;padding:5px 0;background:rgba(0,0,0,0.8);border-radius:8px;text-align:center;color:white;}.angle-box{position:fixed;padding:10px}.angle-wrapper span{padding-bottom:1em;}.angle-wrapper:before{content:"";width:0;height:0;border:10px solid transparent;border-top-color:rgba(0,0,0,0.8);position:absolute;left:47.5%;top:100%;}</style>',style)},append_div_visitcalendar=(t,e)=>{if(null!==t)if("string"==typeof e){var i=document.createElement("div");i.innerHTML=e;for(var n=document.createDocumentFragment();i.firstChild;)n.appendChild(i.firstChild);t.appendChild(n)}else t.appendChild(e)},loading_visit=t=>(loading='<div id="visit_loading" style="width:10%;height:100%;margin:0 auto;display: block"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 50 50" style="enable-background:new 0 0 50 50" xml:space="preserve"><path fill="'+t+'" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" transform="rotate(275.098 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg></div>',loading);!function(){var t=document.getElementById("visit_container"),e=(document.getElementById("visit_loading"),["#ebedf0","#fdcdec","#fc9bd9","#fa6ac5","#f838b2","#f5089f","#c4067e","#92055e","#540336","#48022f","#30021f"]);append_div_visitcalendar(t,loading_visit(e[4])),visit_calendar("pv_count",e)}();