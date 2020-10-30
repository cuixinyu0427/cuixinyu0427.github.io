$(function(){
  var NY = Math.round((new Date('4/17/2019 00:00:00')).getTime()/1000);
  $('#runtime').flipcountdown({
    size:"xs",
    tick:function(){
      var nol = function(h){
        return h>9?h:'0'+h;
      }
      var	range  	= Math.abs(Math.round((new Date()).getTime()/1000)-NY),
        secday = 86400, sechour = 3600,
        days 	= parseInt(range/secday),
        hours	= parseInt((range%secday)/sechour),
        min		= parseInt(((range%secday)%sechour)/60),
        sec		= ((range%secday)%sechour)%60;
      return nol(days)+' '+nol(hours)+' '+nol(min)+' '+nol(sec);
    }
  });
});
