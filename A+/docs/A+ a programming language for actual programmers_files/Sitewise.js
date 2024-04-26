var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
 *  Script:		Sitewise.js
 *  Instance:		1
 *  version:		1.0
 *  created_by:		furmana 
 *  date_created:	Fri Nov 16 12:00:00 EDT 2002 
 *  Description:	Assigns content group variable based on URL.
 *			Includes Akamai Sitewise JavaScript to populate
 *			usage reporting engine.
 */

function wtl_Tag6_94033() {
        var ORDER= "";
        var SERVER= "";
        var CONTENTGROUP = "aplusdev.org";
        var INVOICE= "";
        var CARTVIEW= "";
        var CARTADD= "";
        var CARTREMOVE= "";
        var CHECKOUT= "";
        var CARTBUY= "";
        var ADCAMPAIGN= "";
 
        var wtl_URL= document.URL;
        var wtl_Title= document.title;
 
        function D8 (d)
        {
                var fwd=0, seed= new Date('01/01/2000'), key= "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                var s= key.charAt( d.getFullYear()-2000)+key.charAt( d.getMonth()+1)+key.charAt( d.getDate());
                s+= key.charAt( d.getHours())+key.charAt( d.getMinutes())+key.charAt( d.getSeconds());
                while( seed.getDay()!=fwd) seed= new Date(seed.getTime() + 86400000);
                var w= Math.floor( (d.getTime()-(seed.getTime()+86400000)) / 604800000 );
                s+= key.charAt( (w-(w%16))/16 );
                s+= key.charAt( w%16);
                return s;
        }
 
        function A( B, C)
        {
                W+="&"+B+"="+escape(C);
        }
	var t = new Date();
        var W="http"+(document.URL.indexOf('https:')==0?'s':'')+"://statse.webtrendslive.com/S005-01-8-2-233860-94033/button6.asp?tagver=6&si=94033&fw=0";
        A( "server", typeof(SERVER)== "string" ? SERVER : "");
        A( "order", typeof(ORDER)== "string" ? ORDER : "");
        A( "Group", typeof(CONTENTGROUP)== "string" ? CONTENTGROUP : "");
        A( "invoice", typeof(INVOICE)== "string" ? INVOICE : "");
        A( "cartview", typeof(CARTVIEW)== "string" ? CARTVIEW : "");
        A( "cartadd", typeof(CARTADD)== "string" ? CARTADD : "");
        A( "cartremove", typeof(CARTREMOVE)== "string" ? CARTREMOVE : "");
        A( "checkout", typeof(CHECKOUT)== "string" ? CHECKOUT : "");
        A( "cartbuy", typeof(CARTBUY)== "string" ? CARTBUY : "");
        A( "adcampaign", typeof(ADCAMPAIGN)== "string" ? ADCAMPAIGN : "");
        A( "tz", t.getTimezoneOffset());
        A( "ch", t.getHours());
        A( "cl", D8(t));
        A( "ti", typeof(wtl_Title)== "string" ? wtl_Title : document.title);
        A( "url", typeof(wtl_URL)== "string" ? wtl_URL : document.URL);
        A( "rf", window.document.referrer);
        A( "js", "Yes");
        A( "ul", navigator.appName=="Netscape" ? navigator.language : navigator.userLanguage);
        if(typeof(screen)=="object")
        {
        A( "sr", screen.width+"x"+screen.height);
        A( "cd", screen.colorDepth);
        A( "jo", navigator.javaEnabled() ? "Yes" : "No");
        }
        if( W.length>2048 && navigator.userAgent.indexOf('MSIE')>=0)
                W= W.substring( 0, 2043)+"&tu=1";
 
        document.write('<IMG ID="WTL_TAG" BORDER="0" WIDTH="1" HEIGHT="1" SRC="'+W+'">');
}

function wtl_Tag6_147427(cgroup)
{
        var ORDER= "";
        var SERVER= "";
        var CONTENTGROUP= cgroup;
        var INVOICE= "";
        var CARTVIEW= "";
        var CARTADD= "";
        var CARTREMOVE= "";
        var CHECKOUT= "";
        var CARTBUY= "";
        var ADCAMPAIGN= "";
 
        var wtl_URL= document.URL;
        var wtl_Title= document.title;
 
        function D8( d)
        {
                var fwd=0, seed= new Date('01/01/2000'), key= "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                var s= key.charAt( d.getFullYear()-2000)+key.charAt( d.getMonth()+1)+key.charAt( d.getDate());
                s+= key.charAt( d.getHours())+key.charAt( d.getMinutes())+key.charAt( d.getSeconds());
                while( seed.getDay()!=fwd) seed= new Date(seed.getTime() + 86400000);
                var w= Math.floor( (d.getTime()-(seed.getTime()+86400000)) / 604800000 );
                s+= key.charAt( (w-(w%16))/16 );
                s+= key.charAt( w%16);
                return s;
        }
 
        function A( B, C)
        {
                W+="&"+B+"="+escape(C);
        }
        var t = new Date();
        var W="http"+(document.URL.indexOf('https:')==0?'s':'')+"://statse.webtrendslive.com/S005-01-8-1-233860-147427/button6.asp?tagver=6&si=147427&fw=0";
        A( "server", typeof(SERVER)== "string" ? SERVER : "");
        A( "order", typeof(ORDER)== "string" ? ORDER : "");
        A( "Group", typeof(CONTENTGROUP)== "string" ? CONTENTGROUP : "");
        A( "invoice", typeof(INVOICE)== "string" ? INVOICE : "");
        A( "cartview", typeof(CARTVIEW)== "string" ? CARTVIEW : "");
        A( "cartadd", typeof(CARTADD)== "string" ? CARTADD : "");
        A( "cartremove", typeof(CARTREMOVE)== "string" ? CARTREMOVE : "");
        A( "checkout", typeof(CHECKOUT)== "string" ? CHECKOUT : "");
        A( "cartbuy", typeof(CARTBUY)== "string" ? CARTBUY : "");
        A( "adcampaign", typeof(ADCAMPAIGN)== "string" ? ADCAMPAIGN : "");
        A( "tz", t.getTimezoneOffset());
        A( "ch", t.getHours());
        A( "cl", D8(t));
        A( "ti", typeof(wtl_Title)== "string" ? wtl_Title : document.title);
        A( "url", typeof(wtl_URL)== "string" ? wtl_URL : document.URL);
        A( "rf", window.document.referrer);
        A( "js", "Yes");
        A( "ul", navigator.appName=="Netscape" ? navigator.language : navigator.userLanguage);
        if(typeof(screen)=="object")
        {
        A( "sr", screen.width+"x"+screen.height);
        A( "cd", screen.colorDepth);
        A( "jo", navigator.javaEnabled() ? "Yes" : "No");
        }
        if( W.length>2048 && navigator.userAgent.indexOf('MSIE')>=0)
                W= W.substring( 0, 2043)+"&tu=1";
 
        document.write('<IMG ID="WTL_TAG" BORDER="0" WIDTH="1" HEIGHT="1" SRC="'+W+'">');
}
 
var group = '';
var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = document.URL;
var result = text.match(url);
if (result != null) {
   var fullurl = result[0];
   var protocol = result[1];
   var host = result[2];
   var path = result[3];
   if (path == null || path == "") {
      path = "index.html";
   }
   if (path.indexOf("?") == -1) {
        var path_array = path.split("?");
        path = path_array[0];
   }
}

if ((location.hostname.indexOf("pisas268")) == -1) { 	//ignore staging server
   wtl_Tag6_94033();
   wtl_Tag6_147427(path);
}


}
/*
     FILE ARCHIVED ON 21:25:35 Oct 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:20:44 Sep 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 584.657
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.058
  cdx.remote: 0.057
  esindex: 0.01
  LoadShardBlock: 262.765 (3)
  PetaboxLoader3.datanode: 209.208 (5)
  load_resource: 232.777 (2)
  PetaboxLoader3.resolve: 162.238 (2)
*/