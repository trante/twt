window.mainPage="http://twitpalas.com/";window.contactEmailDialog=contactEmailDialog;window.redirectToBiglockPage=redirectToBiglockPage;window.wordList=setWordList;window.debug=!1;
$(document).ready(function(){registerCookiePlugin();redirectUser();showFacebookLikeDialog();modifyResponsiveElements();setWordList();showLanguageAlert();toggleElementsForLogoutPage();startSidebarProcess();triggerApp();registerClickFunction();tweetsTableCheckForFilters();popularityTableChecks();documentReadyWorks();var a=$("#usersTableOuter");0!==a.length&&(window.tableType=a.attr("data-tabletype"),window.dataScreenName=a.attr("data-screenname"),window.titleScreenName=a.attr("data-title-screenname"),
window.authedUser=a.attr("data-authed-user"),0!==$("#usersTableAjaxContent").length&&($("#loadingTable").show(),"undefined"!=typeof yaCounter16513888&&yaCounter16513888.hit("/createUsersTable","createUsersTable: "+window.dataScreenName),"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview","/createUsersTable"]),$.ajax({type:"POST",url:"/tools/createUsersTableFromScreenname/"+window.tableType+"/"+window.dataScreenName,success:function(a){"4013"==a&&(a="401");"4043"==a&&(a="404");"401"==
a||"403"==a||"0"==a||"400"==a||"404"==a||"503"==a||"429"==a||"713"==a||"750"==a||"751"==a?document.location.href="/errors/index/"+a:($("#loadingTable").hide(),$("#usersTableAjaxContent").html(a),$("#usersTableAjaxContent").show(),startDatatables("usersTable"),documentReadyWorks(),registerAjaxq(),"undefined"!=typeof FB&&null!=FB&&FB.XFBML.parse())},timeout:4E4,error:function(a,b,c){$("#loadingTable").hide();$("#usersTableTimeout").show();$("#usersTableTimeout img").attr("src",$("#usersTableTimeout img").data("src"))}})),
0!==$("#usersTableNotAjaxContent").length&&(markProcessedUsers(),startDatatables("usersTable"),documentReadyWorks(),registerAjaxq(),"undefined"!=typeof FB&&null!=FB&&FB.XFBML.parse()));a=$("#popularityTableOuter");if(0!==a.length){window.tableType=a.attr("data-tabletype");window.dataScreenName=a.attr("data-screenname");window.popularityNoTweets=a.attr("data-no-tweets");var b=$("#popularityTableAjaxContent");0!==b.length&&($("#popularityLoadingTable").show(),"undefined"!=typeof yaCounter16513888&&
yaCounter16513888.hit("/createPopularityTable","createPopularityTable: "+window.dataScreenName),"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview","/createPopularityTable"]),$.ajax({type:"POST",url:"/tools/createPopularityTableFromScreenname/"+window.tableType+"/"+window.dataScreenName,data:{noTweets:window.popularityNoTweets},success:function(a){3<=a.length&&!isNaN(a)?document.location.href="/errors/index/"+a:($("#popularityLoadingTable").hide(),b.html(a),b.show(),startDatatables("popularityRTtable"),
startDatatables("popularityFAVtable"),popularityTableChecks(),documentReadyWorks())},timeout:4E4,error:function(a,b,c){$("#popularityLoadingTable").hide();$("#popularityTableTimeout").show();$("#popularityTableTimeout img").attr("src",$("#popularityTableTimeout img").data("src"))}}));0!==$("#popularityTableNotAjaxContent").length&&(startDatatables("popularityRTtable"),startDatatables("popularityFAVtable"),documentReadyWorks())}$("#otherUserForm").change(function(){var a=$("input:text[name=screenName]").val(),
b=$("input:radio[name=optionsRadios]:checked").val();0==a.indexOf("@")&&(a=a.replace("@",""));a?(a="/tools/"+b+"/"+a,$(this).attr("action",a),$("button:submit").removeAttr("disabled")):$("button:submit").attr("disabled","disabled")});$("#optionsForm").find("#options_theme").change(function(){var a=$(this).find(":selected").data("theme-css");"undefined"!==typeof a&&($("#bootstrap_stylesheet").attr("href",a),window.onbeforeunload=function(){return window.wordList.made_changes+"."})});$("#optionsForm").submit(function(){window.onbeforeunload=
null});$("#friendshipForm").submit(function(){var a=$("#friendshipForm_user1").val(),b=$("#friendshipForm_user2").val(),a=getCleanScreenname(a),b=getCleanScreenname(b);$(this).attr("action","/tools/friendship/"+a+"/"+b+"/")});$("#twitterJoinForm").submit(function(){var a=$("#twitterJoinForm_user").val(),a=getCleanScreenname(a);$(this).attr("action","/tools/joins/"+a+"/")});$("#tweetsTableForm").submit(function(){var a=$("#tweetsTableForm"),b="0";"undefined"!=typeof a.data("autosubmit")&&(b=a.data("autosubmit"));
"0"==b&&modifyTweetsTableForm()});0!==$("#signinedTable").length&&$("#signinedTable").dataTable({bPaginate:!1});0!==$("#tweetsTable").length&&(window.tableType="tweetsTable",registerAjaxq());0!==$("#whitelistTable").length&&(window.tableType="whitelistTable",registerAjaxq());0!==$("#fflogsPage").length&&(window.tableType="fflogsPage",registerAjaxq());0!==$("#fflistPage").length&&(window.tableType="fflistPage",registerAjaxq(),markProcessedUsers());0!==$("#blocklistTable").length&&(window.tableType=
"blocksPage",registerAjaxq());if(0!==$("#joinsCountdown").length){var a=$("#joinsTimeStamp").text(),a=new Date(1E3*a),c=window.wordList.date_year,d=window.wordList.date_month,e=window.wordList.date_week,f=window.wordList.date_day,h=window.wordList.date_hour,g=window.wordList.date_minute,k=window.wordList.date_second;$("#joinsCountdown").countdown({since:a,format:"yowdhMS",labels:[c,d,e,f,h,g,k],labels1:[c,d,e,f,h,g,k]})}});
function documentReadyWorks(){$("[data-rel=popover]").popover({});$("[data-rel=tooltip]").tooltip();$(".dropdown-toggle").dropdown();isMobilePhone()||(imageResizeEffect(),assignLightboxAvatars());addDatatablesPlugins();$.pnotify&&($.pnotify.defaults.history=!1)}
function startDatatables(a){a=$("#"+a);var b=isMobilePhone(),c=isLargeDevice(),d=[],e=[],f=[],h,g;a.find("th").each(function(a,k){var l=$(this).attr("data-samsort"),m=$(this).attr("data-samcenter"),n=$(this).attr("data-samhide_xs"),q=$(this).attr("data-samhide_xs_sm_md"),r=$(this).attr("data-samsortpassive");"false"==l&&d.push({bSortable:!1,aTargets:[a]});"title-numeric"==l&&d.push({sType:"title-numeric",aTargets:[a]});"sam-data-title-numeric"==l&&d.push({sType:"data-title-numeric",aTargets:[a]});
"true"==m&&e.push(a);(b&&"true"==n||!c&&"true"==q)&&f.push(a);"true"==r&&(h=a,g=$(this).attr("data-samsortpassivetype"))});0<e.length&&d.push({sClass:"center",aTargets:e});0<f.length&&d.push({bVisible:!1,aTargets:f});var k="rt",m=!1,n="",l="";1<=a.find("tbody > tr").length/25&&(m=!0,n="i",l=b?"":"f",k='<"top"'+n+l+'lp<"clear">>rt<"bottom"'+n+l+'lp<"clear">>');n=[];"passives"==window.tableType&&(n=[[h,g]]);a.dataTable({aoColumnDefs:d,aaSorting:n,sPaginationType:b?"two_button":"full_numbers",bPaginate:m,
sDom:k,fnDrawCallback:function(){updateTableCallback()},iDisplayLength:25,aLengthMenu:[[10,25,50],[10,25,50]],oLanguage:{sProcessing:window.wordList.sProcessing+"...",sLengthMenu:window.wordList.sLengthMenu,sZeroRecords:window.wordList.sZeroRecords,sInfo:window.wordList.sInfo,sInfoEmpty:window.wordList.sInfoEmpty,sInfoFiltered:window.wordList.sInfoFiltered,sInfoPostFix:"",sSearch:window.wordList.sSearch,sUrl:"",oPaginate:{sFirst:window.wordList.oPaginate_sFirst,sPrevious:window.wordList.oPaginate_sPrevious,
sNext:window.wordList.oPaginate_sNext,sLast:window.wordList.oPaginate_sLast}}})}function updateTableCallback(){isMobilePhone()||($("[data-rel=popover]").popover({}),$("[data-rel*=popover-left]").popover({placement:"left"}),assignLightboxAvatars());$("tr.fraction-done td.sorting_1").removeClass("sorting_1")}
function addDatatablesPlugins(){$.fn.dataTableExt&&($.fn.dataTableExt.oSort["title-numeric-asc"]=function(a,b){var c=a.match(/title="*(-?[0-9\.]+)/)[1],d=b.match(/title="*(-?[0-9\.]+)/)[1],c=parseFloat(c),d=parseFloat(d);return c<d?-1:c>d?1:0},$.fn.dataTableExt.oSort["title-numeric-desc"]=function(a,b){var c=a.match(/title="*(-?[0-9\.]+)/)[1],d=b.match(/title="*(-?[0-9\.]+)/)[1],c=parseFloat(c),d=parseFloat(d);return c<d?1:c>d?-1:0},$.fn.dataTableExt.oSort["data-title-numeric-asc"]=function(a,b){var c=
a.match(/data-sam-title="*(-?[0-9\.]+)/)[1],d=b.match(/data-sam-title="*(-?[0-9\.]+)/)[1],c=parseFloat(c),d=parseFloat(d);return c<d?-1:c>d?1:0},$.fn.dataTableExt.oSort["data-title-numeric-desc"]=function(a,b){var c=a.match(/data-sam-title="*(-?[0-9\.]+)/)[1],d=b.match(/data-sam-title="*(-?[0-9\.]+)/)[1],c=parseFloat(c),d=parseFloat(d);return c<d?1:c>d?-1:0},$.fn.dataTableExt.oSort["html-better-asc"]=function(a,b){var c=$(a).text(),d=$(b).text();return c<d?-1:c>d?1:0},$.fn.dataTableExt.oSort["html-better-desc"]=
function(a,b){var c=$(a).text(),d=$(b).text();return c<d?1:c>d?-1:0},$.fn.dataTableExt.oSort["num-html-pre"]=function(a){a=String(a).replace(/<[\s\S]*?>/g,"");return parseFloat(a)},$.fn.dataTableExt.oSort["num-html-asc"]=function(a,b){return a<b?-1:a>b?1:0},$.fn.dataTableExt.oSort["num-html-desc"]=function(a,b){return a<b?1:a>b?-1:0})}
function updateButtonData(a,b){var c;null!=a?c=$("#fs"+a):null!=b&&(c=b,a=b.attr("id").slice(2));var d=c.attr("data-status"),e=c.attr("data-fraction");"processing"==d&&(c.text(window.wordList[d]),c.attr("onclick",""),c.attr("class","btn btn-warning"));if("following"==d||"unlocked_following"==d)c.text(window.wordList[d]),c.attr("class","btn btn-primary"),"1"==window.dataScreenName||"tweetsTable"==window.tableType?c.attr("onclick","friendshipDestroy("+a+")"):window.authedUser?c.attr("onclick","notOwnerDialog()"):
c.attr("onclick","notAuthedDialog()");if("notfollowing"==d||"unlocked_notfollowing"==d)c.text(window.wordList[d]),c.attr("class","btn"),"1"!=window.dataScreenName&&window.authedUser&&"tweetsTable"!=window.tableType?window.authedUser?c.attr("onclick","notOwnerDialog()"):c.attr("onclick","notAuthedDialog()"):c.attr("onclick","friendshipCreate("+a+")");if("locked_following"==d||"locked_notfollowing"==d||"locked_blocked"==d)c.text(window.wordList[d]),c.attr("class","btn btn-danger"),c.attr("onclick",
"unlockTweetDialog()");"follow"==d&&(c.text(window.wordList[d]),c.attr("class","btn btn-danger"),"1"!=window.dataScreenName&&window.authedUser&&"tweetsTable"!=window.tableType?window.authedUser?c.attr("onclick","notOwnerDialog()"):c.attr("onclick","notAuthedDialog()"):c.attr("onclick","friendshipCreate("+a+")"));"unfollow"==d&&(c.text(window.wordList[d]),c.attr("class","btn btn-danger"),"1"==window.dataScreenName||"tweetsTable"==window.tableType?c.attr("onclick","friendshipDestroy("+a+")"):window.authedUser?
c.attr("onclick","notOwnerDialog()"):c.attr("onclick","notAuthedDialog()"));"whitelist_added"==d&&(c.text(window.wordList[d]),c.attr("onclick",""));"whitelist_already"==d&&(c.text(window.wordList.whitelist_added),c.attr("onclick",""));"blocked"==d&&(c.text(window.wordList[d]),c.attr("onclick",""));"unblocked"==d&&(c.text(window.wordList[d]),c.attr("onclick",""));"deleted"==d&&(c.text(window.wordList[d]),c.attr("onclick",""),c.attr("class","btn"));"done"==e&&(c.attr("class","btn disabled"),c.attr("onclick",
""))}function updateButtonDataMulti(a){a.each(function(){updateButtonData(null,$(this))})}function updateButtonStatusForMobile(){alert("table type:"+window.tableType);if("unfollowers"==window.tableType||"passives"==window.tableType){var a=$("button[id^='fs']");a.attr("data-status","unfollow");updateButtonDataMulti(a)}}
function disableRowButtons(a){a=$("#rw"+a);a.find("td.sorting_1").removeClass("sorting_1");a.find(".btn").addClass("disabled").popover("disable").removeAttr("href").removeAttr("target")}function assignLightboxAvatars(){$(".lightb-avatar").colorbox({rel:"lightb-avatar",scrolling:!1,current:"",slideshow:!0,slideshowAuto:!1,opacity:0.6,width:"60%",height:"60%"})}
function friendshipDestroy(a){var b=$("#fs"+a),c=b.attr("data-screenname"),d=b.attr("data-sourcepage"),e=$("#rw"+a);b.attr("data-status","processing");updateButtonData(a,null);"undefined"!=typeof yaCounter16513888&&yaCounter16513888.hit("/friendshipDestroy","friendshipDestroy: "+c);"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview","/friendshipDestroy"]);$.ajaxq("friendshipDestroy",{type:"GET",url:"/tools/friendshipDestroy/"+a+"/"+c+"/"+d,success:function(c){if("200"==c)b.attr("data-status",
"notfollowing"),b.attr("data-fraction","done"),$("#noFriends").text(parseInt($("#noFriends").text())-1),$("#noUnfollowers").text(parseInt($("#noUnfollowers").text())-1),$("#noUnfollowers2").text(parseInt($("#noUnfollowers2").text())-1),$("#noPassives").text(parseInt($("#noPassives").text())-1),$("#wl"+a).remove(),$("#bl"+a).remove(),e.addClass("fraction-done").addClass("action-shade"),e.find("td").addClass("twitp_striket");else if("710"==c){var d=$("button[id^='fs']");d.attr("data-status","locked_following");
updateButtonDataMulti(d)}else"711"==c?document.location.href="/errors/index/711/":"401"==c?(b.attr("data-status","unfollow"),notAuthedDialog()):(b.attr("data-status","unfollow"),$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"}));updateButtonData(a,null);"710"!=c&&disableRowButtons(a)},error:function(){$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"})}})}
function friendshipCreate(a){var b=$("#fs"+a),c=b.attr("data-screenname"),d=b.attr("data-sourcepage"),e=$("#rw"+a);b.attr("data-status","processing");updateButtonData(a,null);"undefined"!=typeof yaCounter16513888&&yaCounter16513888.hit("/friendshipCreate","friendshipCreate: "+c);"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview","/friendshipCreate"]);$.ajaxq("friendshipCreate",{type:"GET",url:"/tools/friendshipCreate/"+a+"/"+c+"/"+d,success:function(c){if("200"==c)b.attr("data-status",
"following"),b.attr("data-fraction","done"),$("#noFollowers").text(parseInt($("#noFollowers").text())+1),$("#noNotfollowing").text(parseInt($("#noNotfollowing").text())-1),$("#wl"+a).remove(),$("#bl"+a).remove(),e.addClass("fraction-done").addClass("action-shade"),e.find("td").addClass("twitp_striket");else if("710"==c){var d=$("button[id^='fs']");d.attr("data-status","locked_notfollowing");updateButtonDataMulti(d)}else"711"==c?document.location.href="/errors/index/711/":"401"==c?(b.attr("data-status",
"follow"),notAuthedDialog()):(b.attr("data-status","follow"),$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"}));updateButtonData(a,null);"710"!=c&&disableRowButtons(a)},error:function(){$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"})}})}
function friendshipBlock(a){if(!1!=confirm(window.wordList.block_ask)){var b=$("#bl"+a),c=$("#fs"+a),d=$("#rw"+a),e=c.attr("data-screenname");c.attr("data-status","processing");updateButtonData(a,null);var f=c.attr("data-sourcepage");"undefined"!=typeof yaCounter16513888&&yaCounter16513888.hit("/friendshipBlock","friendshipBlock: "+e);"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview","/friendshipBlock"]);$.ajaxq("friendshipBlock",{type:"GET",url:"/tools/friendshipBlock/"+a+"/"+e+
"/"+f,success:function(f){if("200"==f)b.attr("onclick","").attr("title",window.wordList.blocked).addClass("icon-white"),c.attr("data-status","blocked"),c.attr("data-fraction","done"),d.addClass("fraction-done").addClass("action-shade"),disableRowButtons(a),$("#noFriends").text(parseInt($("#noFriends").text())-1),$("#noUnfollowers").text(parseInt($("#noUnfollowers").text())-1),$("#noUnfollowers2").text(parseInt($("#noUnfollowers2").text())-1),$("#noPassives").text(parseInt($("#noPassives").text())-
1),$("#wl"+a).remove(),d.find("td").addClass("twitp_striket");else if("710"==f){var e=$("button[id^='fs']");e.attr("data-status","locked_following");updateButtonDataMulti(e)}else"711"==f?document.location.href="/errors/index/711/":"401"==f?(curButton.attr("data-status","unfollow"),notAuthedDialog()):(curButton.attr("data-status","unfollow"),$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"}));updateButtonData(a,null);"710"!=f&&disableRowButtons(a)},error:function(){$.pnotify({text:window.wordList.general_fracterror,
delay:2E3,type:"error"})}})}}
function friendshipUnblock(a){var b=$("#fs"+a),c=b.attr("data-screenname"),d=b.attr("data-sourcepage"),e=$("#rw"+a);b.attr("data-status","processing");updateButtonData(a,null);"undefined"!=typeof yaCounter16513888&&yaCounter16513888.hit("/friendshipUnblock","friendshipUnblock: "+c);"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview","/friendshipUnblock"]);$.ajaxq("friendshipUnblock",{type:"GET",url:"/tools/friendshipUnblock/"+a+"/"+c+"/"+d,success:function(c){if("200"==c)b.attr("data-status",
"unblocked"),b.attr("data-fraction","done"),$("#wl"+a).remove(),$("#bl"+a).remove(),e.addClass("fraction-done").addClass("action-shade"),e.find("td").addClass("twitp_striket");else if("710"==c){var d=$("button[id^='fs']");d.attr("data-status","locked_blocked");updateButtonDataMulti(d)}else"711"==c?document.location.href="/errors/index/711/":"401"==c?(b.attr("data-status","follow"),notAuthedDialog()):(b.attr("data-status","unblock"),$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"}));
updateButtonData(a,null);"710"!=c&&disableRowButtons(a)},error:function(){$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"})}})}
function whitelistAdd(a){if(!1!=confirm(window.wordList.whitelist_add_ask)){var b=$("#wl"+a),c=$("#fs"+a),d=$("#rw"+a);c.attr("data-status","processing");updateButtonData(a,null);var e=$("#bl"+a),f=getUserDataFromRow(a);$.ajaxq("whitelistAdd",{type:"POST",url:"/tools/whitelistAdd/"+a+"/",data:{userData:f},success:function(f){"200"==f||"304"==f?(b.attr("onclick","").attr("title",window.wordList.whitelist_added).addClass("icon-white"),c.attr("data-status","whitelist_added"),c.attr("data-fraction","done"),
d.addClass("fraction-done").addClass("action-shade"),disableRowButtons(a),e.remove()):"720"==f?($("[id^=wl]").attr("onclick","notWhitelistLimitDialog()").attr("title",window.wordList.whitelist_limit),c.attr("data-status","unfollow"),notWhitelistLimitDialog()):"401"==f&&(document.location.href="/errors/index/401");updateButtonData(a,null)},error:function(){$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"})}})}}
function whitelistRemove(a){var b=$("#wl"+a);$("#rw"+a);b.attr("data-status","processing");updateButtonData(null,b);$.ajaxq("whitelistRemove",{type:"POST",url:"/tools/whitelistRemove/"+a+"/",success:function(c){"200"==c?(b.attr("onclick","").attr("title",window.wordList.deleted).attr("data-status","deleted"),$("#ws"+a).addClass("twitp_striket"),$("#rw"+a).addClass("action-shade")):"401"==c?document.location.href="/errors/index/401":b.attr("data-status","general-delete");updateButtonData(null,b);disableRowButtons(a)},
error:function(){$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"})}})}function notAuthedDialog(){var a,b;isMobilePhone()?(a="250px",b="600px"):(a="800px",b="450px");$.colorbox({width:a,height:b,iframe:!0,href:"/errors/index/401/true",opacity:0.6})}function notAuthedDialogAlert(){var a=window.wordList.general_notauthed;"undefined"===typeof a&&(a="Lutfen giris yapiniz");alert(a+".")}
function notOwnerDialog(){var a=window.wordList.general_notowner,a=a.replace("%s",'"'+window.titleScreenName+'"');alert(a+".")}function notWhitelistLimitDialog(){alert(window.wordList.whitelist_limit+".")}function unlockTweetDialog(){var a,b;isMobilePhone()?(a="250px",b="750px"):(a="500px",b="400px");$.colorbox({width:a,height:b,iframe:!0,href:"/tools/unlock/",opacity:0.6})}
function sendGeneralTweet(a,b,c,d){for(var e=0;e<b.length;e++){var f=$("#"+b[e]);f.text(window.wordList.processing);f.attr("onclick","");f.attr("data-status","processing")}$.ajax({type:"GET",url:"/tools/sendGeneralTweet/",data:{tweetText:a,tweetType:c},success:function(a){if("200"==a){if("undefined"!==typeof d){for(a=0;a<d[0].length;a++)$("#"+d[0][a]).hide();for(a=0;a<d[1].length;a++)$("#"+d[1][a]).show()}"8"==c&&(parent.location.href+="?unlocked=1")}else"401"==a?document.location.href="/errors/index/401":
(f.text(window.wordList.tweetle),f.attr("data-status","initial"),f.attr("class","btn btn-primary"),$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"}))},error:function(){}})}function contactEmailDialog(){$.colorbox({width:"700px",height:"600px",iframe:!0,href:"/tools/contact/true/",opacity:0.6})}
function sendContactEmail(){var a=$("#name").val(),b=$("#email").val(),c=$("#subject").val(),d=$("#message").val();5>d.length||($("button:submit").attr("disabled","disabled"),$("#contactDialogInitial").hide(),$("#contactDialogProcessing").show(),$.ajax({url:"/tools/sendContactEmail/",type:"GET",data:{name:a,email:b,subject:c,message:d},success:function(a){"200"==a?($("#contactDialogProcessing").hide(),$("#contactDialogSuccess").show(),setTimeout("parent.$.colorbox.close();",5E3)):($("#contactDialogProcessing").hide(),
$("#contactDialogFailure").show())},error:function(){$("#contactDialogProcessing").hide();$("#contactDialogFailure").show()}}))}function biglockDialog(){var a,b;isMobilePhone()?(a="250px",b="750px"):(a="500px",b="400px");$.colorbox({width:a,height:b,iframe:!0,href:"/tools/biglock/",opacity:0.6})}function redirectToBiglockPage(){document.location.href="/errors/index/711/"}
function imageResizeEffect(){$("img.avatar_resizable").each(function(){var a=$(this).attr("src"),b=$(this).attr("src").replace("_normal",""),c=$(this).attr("width"),d=$(this).attr("height");$(this).hover(function(){$(this).attr("src",b);$(this).attr("width",1.5*c);$(this).attr("height",1.5*d)},function(){$(this).attr("src",a);$(this).attr("width",c);$(this).attr("height",d)})})}
function modifyResponsiveElements(){var a=window.innerWidth||document.documentElement.clientWidth;isForceDesktopActive()&&(a=1200);$("#latestsignins div img").each(function(){var b=$(this).attr("src"),c,d,g;768<=a?(c=b.replace("_mini.","_bigger."),g=d=73):480<=a&&(c=b.replace("_mini.","_normal."),g=d=48);$(this).attr("src",c).attr("width",d).attr("height",g)});980<=a&&($("#youtThumb").hide(),$("#youtThumbBigLink img").attr("src",$("#youtThumbBigLink img").data("src")),$("#youtThumbBig").show(),$("#youtThumbBigLink").bind("click",
function(){980<=a&&($("#youtThumbBig").hide(),$("#youtEmbed iframe").attr("src",$("#youtEmbed iframe").data("src")),$("#youtEmbed").show())}));(480<=a||0<=document.URL.indexOf("#faq"))&&$("#collapseFAQ").addClass("in");navigator.userAgent.match(/Opera Mini/i)&&$("i.glyphicon").replaceWith('<img src="http://trante.github.io/twt/img/icons/gly_right_30.gif" width="20" height="20">');isMobilePhone()&&($("input.rememberme_checkbox").attr("checked","checked"),$("span.twitp_split2").each(function(){var a=
$(this).text().replace(/ /g,"");$(this).text(a)}));if(!isMobilePhone()){$("span.twitp_split1").each(function(){var a=$(this).text().replace(/ /g,"");$(this).text(a)});var b=$("body"),c=b.css("padding-top").replace("px",""),d=$("nav.twitp_navbar_extendable");d.is(":visible")&&(d=d.height(),c<d&&b.css("padding-top",d+20),b=$("#twitp_sidebar"),0<b.length&&b.css("top").replace("px","")<d&&b.css("top",d))}isSmallMobilePhone()&&0!==$("#blocklistTable").length&&($("th.blocks_detail").hide(),$("td.blocks_detail").hide());
isForceDesktopActive()&&($("#twitp_navbar").removeClass("hidden-xs"),$("#twitp_navbar_mobile").removeClass("visible-xs").addClass("hidden-xs hidden-sm hidden-md hidden-lg"),$("#navbar_bigscr_collapse_div").removeClass("collapse navbar-collapse"))}function startSidebarProcess(){$("#twitp_sidebar_doorman").hover(function(){$("#twitp_sidebar").show()},function(){});$("#twitp_sidebar").hover(function(){},function(){$("#twitp_sidebar").hide()})}
function isMobilePhone(){return isForceDesktopActive()?!1:768>(window.innerWidth||document.documentElement.clientWidth)}function isSmallMobilePhone(){return isForceDesktopActive()?!1:320>=(window.innerWidth||document.documentElement.clientWidth)}function isLargeDevice(){return isForceDesktopActive()?!0:1200<=(window.innerWidth||document.documentElement.clientWidth)}function showLanguageAlert(){isTurkishMainPage()&&!isTurkishSpeaker()&&$("#mainPageAlert").show()}
function isTurkishSpeaker(){return 0<=(window.navigator.userLanguage||window.navigator.language).indexOf("tr")}function getBrowserLanguage(){var a=window.navigator.userLanguage||window.navigator.language,b="";a&&(b=a.substr(0,2));return b}function isLanguageSupported(a){var b=$("#passData").data("sup-langs");return"undefined"!==typeof b&&null!==b?-1!==$.inArray(a,b):!1}
function isTurkishMainPage(){return"http://twitpalas.com/"==document.URL||"http://twitpalas.com/tur/"==document.URL||"http://twitpalas.com/index.html"==document.URL||0<=document.URL.indexOf("http://twitpalas.com/?utm")}function isLogoutPage(){return 0<=document.URL.indexOf("logged_out=1")}function isTouchDevice(){return"ontouchstart"in window||"onmsgesturechange"in window}
function isUserBot(){return/Googlebot|YandexBot|Google Web Preview|bingbot|Baiduspider|Slurp|ia_archiver/i.test(navigator.userAgent)}function isTwitpAuthedUser(){return"undefined"!==typeof $.cookie("CakeCookie[authorized]")}function isTwitpUsedBefore(){return"undefined"!==typeof $.cookie("CakeCookie[user_gen]")}function isUserTwitpUnsecure(){return"twitpalas"==$.cookie("CakeCookie[user_gen]")}
function toggleElementsForLogoutPage(){if(isLogoutPage()){$("#mainPageAlert").hide();$("#mainpTeaser1").hide();$("#mainpTeaser2").hide();$("#mainpTeaser3").hide();$("#mainpTeaser4").hide();$("#collapseFAQ").removeClass("in");var a=$("#mobileAlterInfo"),b=a.find("img");b.attr("src",b.data("src"));a.show()}}
function showFacebookLikeDialog(){0===$("#facebook_box").length||isMobilePhone()||-1!=document.cookie.indexOf("visited=true")||(document.cookie="visited=true;expires="+(new Date((new Date).valueOf()+6048E5)).toUTCString()+";path=/",$.colorbox({inline:!0,width:"300px",height:"430px",href:"#facebook_box",opacity:0.7}))}
function setWordList(){var a=$("#wordList");void 0!==a.attr("data-table-processing")&&(window.wordList.processing=a.attr("data-table-processing"),window.wordList.following=a.attr("data-table-following"),window.wordList.unlocked_following=a.attr("data-table-unlocked_following"),window.wordList.notfollowing=a.attr("data-table-notfollowing"),window.wordList.unlocked_notfollowing=a.attr("data-table-unlocked_notfollowing"),window.wordList.locked_following=a.attr("data-table-locked_following"),window.wordList.locked_notfollowing=
a.attr("data-table-locked_notfollowing"),window.wordList.locked_blocked=a.attr("data-table-locked_blocked"),window.wordList.follow=a.attr("data-table-follow"),window.wordList.unfollow=a.attr("data-table-unfollow"),window.wordList.whitelist_added=a.attr("data-table-whitelist_added"),window.wordList.whitelist_add_ask=a.attr("data-table-whitelist_add_ask"),window.wordList.whitelist_limit=a.attr("data-table-whitelist_limit"),window.wordList.blocked=a.attr("data-table-blocked"),window.wordList.unblocked=
a.attr("data-table-unblocked"),window.wordList.block_ask=a.attr("data-table-block_ask"),window.wordList.deleted=a.attr("data-table-deleted"),window.wordList.sProcessing=a.attr("data-datatables-sProcessing"),window.wordList.sLengthMenu=a.attr("data-datatables-sLengthMenu"),window.wordList.sZeroRecords=a.attr("data-datatables-sZeroRecords"),window.wordList.sInfo=a.attr("data-datatables-sInfo"),window.wordList.sInfoEmpty=a.attr("data-datatables-sInfoEmpty"),window.wordList.sInfoFiltered=a.attr("data-datatables-sInfoFiltered"),
window.wordList.sSearch=a.attr("data-datatables-sSearch"),window.wordList.oPaginate_sFirst=a.attr("data-datatables-oPaginate_sFirst"),window.wordList.oPaginate_sPrevious=a.attr("data-datatables-oPaginate_sPrevious"),window.wordList.oPaginate_sNext=a.attr("data-datatables-oPaginate_sNext"),window.wordList.oPaginate_sLast=a.attr("data-datatables-oPaginate_sLast"),window.wordList.general_notauthed=a.attr("data-general-notauthed"),window.wordList.general_notowner=a.attr("data-general-notowner"),window.wordList.general_fracterror=
a.attr("data-general-fracterror"),window.wordList.general_tweetle=a.attr("data-general-tweetle"),window.wordList.general_delete=a.attr("data-general-delete"),window.wordList.made_changes=a.attr("data-general-made-changes"),window.wordList.date_year=a.attr("data-date-year"),window.wordList.date_month=a.attr("data-date-month"),window.wordList.date_week=a.attr("data-date-week"),window.wordList.date_day=a.attr("data-date-day"),window.wordList.date_hour=a.attr("data-date-hour"),window.wordList.date_minute=
a.attr("data-date-minute"),window.wordList.date_second=a.attr("data-date-second"))}function getCleanScreenname(a){return a.replace(/[^a-zA-Z0-9_]/g,"")}function appendDebugDataToScreen(a){var b=$("#debugDiv");b.append(a+"<br>");b.show()}function debugStartTime(){window.debug&&console.time("debugTimer")}function debugWriteTimeDifToConsole(){window.debug&&console.log("bbb")}
function getUserDataFromRow(a){var b={},c=$("#ud"+a);b.userid=a;b.screenname=c.attr("data-userDataScreenname");b.avatar=c.attr("data-userDataAvatar");b.protecteduser=c.attr("data-userDataProtected");b.name=c.attr("data-userDataName");b.location=c.attr("data-userDataLocation");b.description=c.attr("data-userDataDescription");b.friends=c.attr("data-userDataFriends");b.followers=c.attr("data-userDataFollowers");b.statuses=c.attr("data-userDataStatuses");b.url=c.attr("data-userDataURL");return b}
function showUserDataFromRow(a){a=getUserDataFromRow(a);a.avatar=a.avatar.replace("_normal","_bigger");var b;b=""+('<img src="'+a.avatar+'">');b+="<h3>"+a.name+"</h3>";b+="<h4>@"+a.screenname+'<a href="http://twitter.com/'+a.screenname+'" target="_blank" rel="nofollow"><i class="glyphicon glyphicon-share-alt"></i></a></h4>';b+="<h6>"+a.location+" - "+a.description+"</h6>";b+='         <div class="btn-group-vertical">         <a href="http://twitter.com/'+a.screenname+'/" class="btn btn-primary" target="_blank" rel="nofollow">Tweet '+
a.statuses+' <i class="glyphicon glyphicon-share-alt"></i></a>         <a href="http://twitter.com/'+a.screenname+'/following/" class="btn btn-success" target="_blank" rel="nofollow">Arkadas '+a.friends+' <i class="glyphicon glyphicon-share-alt"></i></a>         <a href="http://twitter.com/'+a.screenname+'/followers/" class="btn btn-danger" target="_blank" rel="nofollow">Takipci '+a.followers+' <i class="glyphicon glyphicon-share-alt"></i></a>    </div>   ';$.colorbox({html:b,opacity:0.8,width:"240px",
height:"420px",maxWidth:"95%",maxHeight:"95%"})}function markProcessedUsers(){var a=$("#twitp_processedusers").data("users");if(a)for(var b=0;b<a.length;b++){var c=a[b],d=$("#rw"+c);d.length&&(d.addClass("fraction-done").addClass("action-shade"),d.find("td").addClass("twitp_striket"),disableRowButtons(c),$("#wl"+c).remove(),$("#bl"+c).remove())}}function hideShowBlocks(a,b){$("#"+a).hide();$("#"+b).show()}function toggleBlocks(a){if(a)for(var b=0;b<a.length;b++)$("#"+a[b]).toggle()}
function tourLinkActivate(a){$(".tour_div").hide();$("#"+a).show();0<=a.indexOf("1")&&($(".tour_link").removeClass("btn-primary").addClass("btn-info"),$("#"+a+"_link").removeClass("btn-info").addClass("btn-primary"));0<=a.indexOf("index")&&$("#tour_links_dropdown").show();$("html, body").animate({scrollTop:0},"slow")}
function activateTextForSendTweet(a,b){var c=$("#"+a);c.find(".twp_twShowable").hide();c.find("#"+b).find(".twp_twShowable").show();c.find(".twp_twSendable").removeClass("twp_twSendable");c.find("#"+b).find(".twp_twHidden").addClass("twp_twSendable")}function getTextForSendTweet(a){return $("#"+a).find(".twp_twHidden.twp_twSendable").text()}function triggerApp(){var a=$("#passData").data("userinfo");"undefined"!==typeof a&&null!==a&&"undefined"!==typeof window.HTMLOUT&&window.HTMLOUT.sendGA(a)}
function isForceDesktopActive(){var a=$("#passData").data("forcedesktop");return"undefined"!==typeof a&&null!==a&&a?!0:!1}function registerClickFunction(){$(".twitp_toggleable_chevron").on("click",function(){$(this).toggleClass("glyphicon-chevron-down glyphicon-chevron-up")});if(0!==$("#tweetsTable").length)$("#tweetsTableFilter1").on("click",function(){$(this).is(":checked")?tweetsTableHideShowRows("possiblefollower","hide"):tweetsTableHideShowRows("possiblefollower","show")})}
function tweetsTableCheckForFilters(){0!==$("#tweetsTable").length&&$("#tweetsTableFilter1").is(":checked")&&tweetsTableHideShowRows("possiblefollower","hide")}function tweetsTableHideShowRows(a,b){"possiblefollower"==a&&("hide"==b?$("div.tweetsTableRowData").each(function(){if(!$(this).data("possiblefollower")){var a=$(this).attr("id").slice(2);$("#rw"+a).hide()}}):"show"==b&&$("div.tweetsTableRowData").each(function(){var a=$(this).attr("id").slice(2);$("#rw"+a).show()}))}
function submitTweetsTableFormByLink(a){var b=$("#tweetsTableForm");b.data("autosubmit","1");b.find('input[name="tweetsTableSearchKeyword"]').val(decodeURIComponent(a));modifyTweetsTableForm();b.find("#submit").click()}function modifyTweetsTableForm(){var a=$("#tweetsTableForm"),b=$("#tweetsTableSearchType").val(),c=$("#tweetsTableSearchKeyword").val();a.attr("action","/tools/search/"+b+"/"+encodeURIComponent(c)+"/")}
function popularityTableChecks(){0!==$("#poptime-table").length&&(0<=document.URL.indexOf("read_only")||0<=document.URL.indexOf("share=1"))&&$("#poptime-shr-parent").find("a:last").tab("show")}
function redirectUser(){var a=$("#passData"),b=a.data("page-contractn"),a=a.data("page-fresh");if("mainspage"==b&&!a&&-1===document.URL.indexOf("redir_fromjs")&&!isUserBot()){var b=$("html").attr("lang"),a=getBrowserLanguage(),c=b!=a,d=isLanguageSupported(a),e=isTwitpAuthedUser(),f="";e?f="/?redir_fromjs=1&authed=1":c&&(f=(d?"tr"!=a?"/"+a:"":"/en")+"/index.html?redir_fromjs=1&authed=0&fromPage="+b);f&&((new Date).getTime()<=(new Date(2014,4,8,23,59)).getTime()&&(b={pageLang:b,browserLang:a,isTwitpAuthedUser:e,
url:document.URL,redirUrl:f,userAgent:navigator.userAgent,isUserBot:isUserBot(),isUserNBot:!isUserBot()},$.ajax({url:"/tools/denemesomething2/",type:"POST",data:b})),setTimeout(function(){document.location.href=f},500))}}
function registerAjaxq(){(function(a){var b={};a.ajaxq=function(c,d){function e(){var a=b[c].shift();a?a():delete b[c]}var f=a.Deferred(),h=f.promise();h.success=h.done;h.error=h.fail;h.complete=h.always;var g=a.extend(!0,{},d);(function(a){b[c]?b[c].push(a):(b[c]=[],a())})(function(){var b=a.ajax.apply(window,[g]).always(e);b.done(function(){f.resolve.apply(this,arguments)});b.fail(function(){f.reject.apply(this,arguments)})});return h};a.each(["getq","postq"],function(b,d){a[d]=function(b,c,h,g,
k){a.isFunction(h)&&(k=k||g,g=h,h=void 0);return a.ajaxq(b,{type:"postq"===d?"post":"get",url:c,data:h,success:g,dataType:k})}});a.ajaxq.isRunning=function(){for(var a in b)if(b.hasOwnProperty(a))return!0;return!1}})(jQuery)}
function registerCookiePlugin(){(function(a){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){function b(a){a=e.json?JSON.stringify(a):String(a);return e.raw?a:encodeURIComponent(a)}function c(b,c){var g;if(e.raw)g=b;else a:{var k=b;0===k.indexOf('"')&&(k=k.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{k=decodeURIComponent(k.replace(d," "));g=e.json?JSON.parse(k):k;break a}catch(m){}g=void 0}return a.isFunction(c)?
c(g):g}var d=/\+/g,e=a.cookie=function(d,h,g){if(void 0!==h&&!a.isFunction(h)){g=a.extend({},e.defaults,g);if("number"===typeof g.expires){var k=g.expires,m=g.expires=new Date;m.setTime(+m+864E5*k)}return document.cookie=[e.raw?d:encodeURIComponent(d),"=",b(h),g.expires?"; expires="+g.expires.toUTCString():"",g.path?"; path="+g.path:"",g.domain?"; domain="+g.domain:"",g.secure?"; secure":""].join("")}g=d?void 0:{};for(var k=document.cookie?document.cookie.split("; "):[],m=0,n=k.length;m<n;m++){var l=
k[m].split("="),p;p=l.shift();p=e.raw?p:decodeURIComponent(p);l=l.join("=");if(d&&d===p){g=c(l,h);break}d||void 0===(l=c(l))||(g[p]=l)}return g};e.defaults={};a.removeCookie=function(b,c){if(void 0===a.cookie(b))return!1;a.cookie(b,"",a.extend({},c,{expires:-1}));return!a.cookie(b)}})}function deneme_isUserBot(){return/Safari/i.test(navigator.userAgent)};