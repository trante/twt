window.mainPage="http://twitpalas.com/";window.contactEmailDialog=contactEmailDialog;window.redirectToBiglockPage=redirectToBiglockPage;window.wordList=setWordList;window.debug=!1;
$(document).ready(function(){showFacebookLikeDialog();resizeResponsiveElements();setWordList();showLanguageAlert();toggleElementsForLogoutPage();startSidebarProcess();documentReadyWorks();var a=$("#usersTableOuter");0!==a.length&&(window.tableType=a.attr("data-tabletype"),window.dataScreenName=a.attr("data-screenname"),window.titleScreenName=a.attr("data-title-screenname"),window.authedUser=a.attr("data-authed-user"),0!==$("#usersTableAjaxContent").length&&($("#loadingTable").show(),"undefined"!=
typeof yaCounter16513888&&yaCounter16513888.hit("/createUsersTable","createUsersTable: "+window.dataScreenName),"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview","/createUsersTable"]),$.ajax({type:"POST",url:"/tools/createUsersTableFromScreenname/"+window.tableType+"/"+window.dataScreenName,success:function(a){"4013"==a&&(a="401");"4043"==a&&(a="404");"401"==a||"403"==a||"0"==a||"400"==a||"404"==a||"503"==a||"429"==a||"713"==a?document.location.href="/errors/index/"+a:($("#loadingTable").hide(),
$("#usersTableAjaxContent").html(a),$("#usersTableAjaxContent").show(),startDatatables(),documentReadyWorks(),registerAjaxq(),"undefined"!=typeof FB&&null!=FB&&FB.XFBML.parse())},timeout:4E4,error:function(a,c,b){$("#loadingTable").hide();$("#usersTableTimeout").show();$("#usersTableTimeout img").attr("src",$("#usersTableTimeout img").data("src"))}})),0!==$("#usersTableNotAjaxContent").length&&(startDatatables(),documentReadyWorks(),registerAjaxq(),markProcessedUsers(),"undefined"!=typeof FB&&null!=
FB&&FB.XFBML.parse()));$("#otherUserForm").change(function(){var a=$("input:text[name=screenName]").val(),c=$("input:radio[name=optionsRadios]:checked").val();0==a.indexOf("@")&&(a=a.replace("@",""));a?(a="/tools/"+c+"/"+a,$(this).attr("action",a),$("button:submit").removeAttr("disabled")):$("button:submit").attr("disabled","disabled")});$("#friendshipForm").submit(function(){var a=$("#friendshipForm_user1").val(),c=$("#friendshipForm_user2").val(),a=getCleanScreenname(a),c=getCleanScreenname(c);
$(this).attr("action","/tools/friendship/"+a+"/"+c+"/")});$("#twitterJoinForm").submit(function(){var a=$("#twitterJoinForm_user").val(),a=getCleanScreenname(a);$(this).attr("action","/tools/joins/"+a+"/")});0!==$("#signinedTable").length&&$("#signinedTable").dataTable({bPaginate:!1});0!==$("#tweetsTable").length&&(window.tableType="tweetsTable",registerAjaxq());0!==$("#whitelistTable").length&&(window.tableType="whitelistTable",registerAjaxq());0!==$("#fflogsPage").length&&(window.tableType="fflogsPage",
registerAjaxq());0!==$("#fflistPage").length&&(window.tableType="fflistPage",registerAjaxq(),markProcessedUsers(),hideFflistColumns());0!==$("#blocklistTable").length&&(window.tableType="blocksPage",registerAjaxq());if(0!==$("#joinsCountdown").length){var a=$("#joinsTimeStamp").text(),a=new Date(1E3*a),c=window.wordList.date_year,b=window.wordList.date_month,d=window.wordList.date_week,e=window.wordList.date_day,g=window.wordList.date_hour,f=window.wordList.date_minute,h=window.wordList.date_second;
$("#joinsCountdown").countdown({since:a,format:"yowdhMS",labels:[c,b,d,e,g,f,h],labels1:[c,b,d,e,g,f,h]})}});function documentReadyWorks(){$("[data-rel=popover]").popover({});$("[data-rel=tooltip]").tooltip();$(".dropdown-toggle").dropdown();isMobilePhone()||(imageResizeEffect(),assignLightboxAvatars());addDatatablesPlugins();$.pnotify&&($.pnotify.defaults.history=!1)}
function startDatatables(){var a=$("#usersTable"),c=isMobilePhone(),b=isLargeDevice(),d=[],e=[],g=[],f,h;a.find("th").each(function(a,l){var k=$(this).attr("data-samsort"),m=$(this).attr("data-samcenter"),n=$(this).attr("data-samhide_xs"),p=$(this).attr("data-samhide_xs_sm_md"),q=$(this).attr("data-samsortpassive");"false"==k&&d.push({bSortable:!1,aTargets:[a]});"title-numeric"==k&&d.push({sType:"title-numeric",aTargets:[a]});"true"==m&&e.push(a);(c&&"true"==n||!b&&"true"==p)&&g.push(a);"true"==q&&
(f=a,h=$(this).attr("data-samsortpassivetype"))});0<e.length&&d.push({sClass:"center",aTargets:e});0<g.length&&d.push({bVisible:!1,aTargets:g});var l="rt",n=!1,k="",m="";1<=a.find("tbody > tr").length/25&&(n=!0,k="i",m=c?"":"f",l='<"top"'+k+m+'lp<"clear">>rt<"bottom"'+k+m+'lp<"clear">>');k=[];"passives"==window.tableType&&(k=[[f,h]]);a.dataTable({aoColumnDefs:d,aaSorting:k,sPaginationType:c?"two_button":"full_numbers",bPaginate:n,sDom:l,fnDrawCallback:function(){updateTableCallback()},iDisplayLength:25,
aLengthMenu:[[10,25,50],[10,25,50]],oLanguage:{sProcessing:window.wordList.sProcessing+"...",sLengthMenu:window.wordList.sLengthMenu,sZeroRecords:window.wordList.sZeroRecords,sInfo:window.wordList.sInfo,sInfoEmpty:window.wordList.sInfoEmpty,sInfoFiltered:window.wordList.sInfoFiltered,sInfoPostFix:"",sSearch:window.wordList.sSearch,sUrl:"",oPaginate:{sFirst:window.wordList.oPaginate_sFirst,sPrevious:window.wordList.oPaginate_sPrevious,sNext:window.wordList.oPaginate_sNext,sLast:window.wordList.oPaginate_sLast}}})}
function updateTableCallback(){isMobilePhone()||($("[data-rel=popover]").popover({}),$("[data-rel*=popover-left]").popover({placement:"left"}),assignLightboxAvatars());$("tr.fraction-done td.sorting_1").removeClass("sorting_1")}
function addDatatablesPlugins(){$.fn.dataTableExt&&($.fn.dataTableExt.oSort["title-numeric-asc"]=function(a,c){var b=a.match(/title="*(-?[0-9\.]+)/)[1],d=c.match(/title="*(-?[0-9\.]+)/)[1],b=parseFloat(b),d=parseFloat(d);return b<d?-1:b>d?1:0},$.fn.dataTableExt.oSort["title-numeric-desc"]=function(a,c){var b=a.match(/title="*(-?[0-9\.]+)/)[1],d=c.match(/title="*(-?[0-9\.]+)/)[1],b=parseFloat(b),d=parseFloat(d);return b<d?1:b>d?-1:0},$.fn.dataTableExt.oSort["html-better-asc"]=function(a,c){var b=$(a).text(),
d=$(c).text();return b<d?-1:b>d?1:0},$.fn.dataTableExt.oSort["html-better-desc"]=function(a,c){var b=$(a).text(),d=$(c).text();return b<d?1:b>d?-1:0},$.fn.dataTableExt.oSort["num-html-pre"]=function(a){a=String(a).replace(/<[\s\S]*?>/g,"");return parseFloat(a)},$.fn.dataTableExt.oSort["num-html-asc"]=function(a,c){return a<c?-1:a>c?1:0},$.fn.dataTableExt.oSort["num-html-desc"]=function(a,c){return a<c?1:a>c?-1:0})}
function updateButtonData(a,c){var b;null!=a?b=$("#fs"+a):null!=c&&(b=c,a=c.attr("id").slice(2));var d=b.attr("data-status"),e=b.attr("data-fraction");"processing"==d&&(b.text(window.wordList[d]),b.attr("onclick",""),b.attr("class","btn btn-warning"));if("following"==d||"unlocked_following"==d)b.text(window.wordList[d]),b.attr("class","btn btn-primary"),"1"==window.dataScreenName||"tweetsTable"==window.tableType?b.attr("onclick","friendshipDestroy("+a+")"):window.authedUser?b.attr("onclick","notOwnerDialog()"):
b.attr("onclick","notAuthedDialog()");if("notfollowing"==d||"unlocked_notfollowing"==d)b.text(window.wordList[d]),b.attr("class","btn"),"1"!=window.dataScreenName&&window.authedUser&&"tweetsTable"!=window.tableType?window.authedUser?b.attr("onclick","notOwnerDialog()"):b.attr("onclick","notAuthedDialog()"):b.attr("onclick","friendshipCreate("+a+")");if("locked_following"==d||"locked_notfollowing"==d||"locked_blocked"==d)b.text(window.wordList[d]),b.attr("class","btn btn-danger"),b.attr("onclick",
"unlockTweetDialog()");"follow"==d&&(b.text(window.wordList[d]),b.attr("class","btn btn-danger"),"1"!=window.dataScreenName&&window.authedUser&&"tweetsTable"!=window.tableType?window.authedUser?b.attr("onclick","notOwnerDialog()"):b.attr("onclick","notAuthedDialog()"):b.attr("onclick","friendshipCreate("+a+")"));"unfollow"==d&&(b.text(window.wordList[d]),b.attr("class","btn btn-danger"),"1"==window.dataScreenName||"tweetsTable"==window.tableType?b.attr("onclick","friendshipDestroy("+a+")"):window.authedUser?
b.attr("onclick","notOwnerDialog()"):b.attr("onclick","notAuthedDialog()"));"whitelist_added"==d&&(b.text(window.wordList[d]),b.attr("onclick",""));"whitelist_already"==d&&(b.text(window.wordList.whitelist_added),b.attr("onclick",""));"blocked"==d&&(b.text(window.wordList[d]),b.attr("onclick",""));"unblocked"==d&&(b.text(window.wordList[d]),b.attr("onclick",""));"deleted"==d&&(b.text(window.wordList[d]),b.attr("onclick",""),b.attr("class","btn"));"done"==e&&(b.attr("class","btn disabled"),b.attr("onclick",
""))}function updateButtonDataMulti(a){a.each(function(){updateButtonData(null,$(this))})}function updateButtonStatusForMobile(){alert("table type:"+window.tableType);if("unfollowers"==window.tableType||"passives"==window.tableType){var a=$("button[id^='fs']");a.attr("data-status","unfollow");updateButtonDataMulti(a)}}
function disableRowButtons(a){a=$("#rw"+a);a.find("td.sorting_1").removeClass("sorting_1");a.find(".btn").addClass("disabled").popover("disable").removeAttr("href").removeAttr("target")}function assignLightboxAvatars(){$(".lightb-avatar").colorbox({rel:"lightb-avatar",scrolling:!1,current:"",slideshow:!0,slideshowAuto:!1,opacity:0.6,width:"60%",height:"60%"})}
function friendshipDestroy(a){var c=$("#fs"+a),b=c.attr("data-screenname"),d=c.attr("data-sourcepage"),e=$("#rw"+a);c.attr("data-status","processing");updateButtonData(a,null);"undefined"!=typeof yaCounter16513888&&yaCounter16513888.hit("/friendshipDestroy","friendshipDestroy: "+b);"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview","/friendshipDestroy"]);$.ajaxq("friendshipDestroy",{type:"GET",url:"/tools/friendshipDestroy/"+a+"/"+b+"/"+d,success:function(b){if("200"==b)c.attr("data-status",
"notfollowing"),c.attr("data-fraction","done"),$("#noFriends").text(parseInt($("#noFriends").text())-1),$("#noUnfollowers").text(parseInt($("#noUnfollowers").text())-1),$("#noUnfollowers2").text(parseInt($("#noUnfollowers2").text())-1),$("#noPassives").text(parseInt($("#noPassives").text())-1),$("#wl"+a).remove(),$("#bl"+a).remove(),e.addClass("fraction-done").addClass("action-shade"),e.find("td").addClass("twitp_striket");else if("710"==b){var d=$("button[id^='fs']");d.attr("data-status","locked_following");
updateButtonDataMulti(d)}else"711"==b?document.location.href="/errors/index/711/":"401"==b?(c.attr("data-status","unfollow"),notAuthedDialog()):(c.attr("data-status","unfollow"),$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"}));updateButtonData(a,null);"710"!=b&&disableRowButtons(a)},error:function(){$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"})}})}
function friendshipCreate(a){var c=$("#fs"+a),b=c.attr("data-screenname"),d=c.attr("data-sourcepage"),e=$("#rw"+a);c.attr("data-status","processing");updateButtonData(a,null);"undefined"!=typeof yaCounter16513888&&yaCounter16513888.hit("/friendshipCreate","friendshipCreate: "+b);"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview","/friendshipCreate"]);$.ajaxq("friendshipCreate",{type:"GET",url:"/tools/friendshipCreate/"+a+"/"+b+"/"+d,success:function(b){if("200"==b)c.attr("data-status",
"following"),c.attr("data-fraction","done"),$("#noFollowers").text(parseInt($("#noFollowers").text())+1),$("#noNotfollowing").text(parseInt($("#noNotfollowing").text())-1),$("#wl"+a).remove(),$("#bl"+a).remove(),e.addClass("fraction-done").addClass("action-shade"),e.find("td").addClass("twitp_striket");else if("710"==b){var d=$("button[id^='fs']");d.attr("data-status","locked_notfollowing");updateButtonDataMulti(d)}else"711"==b?document.location.href="/errors/index/711/":"401"==b?(c.attr("data-status",
"follow"),notAuthedDialog()):(c.attr("data-status","follow"),$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"}));updateButtonData(a,null);"710"!=b&&disableRowButtons(a)},error:function(){$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"})}})}
function friendshipBlock(a){if(!1!=confirm(window.wordList.block_ask)){var c=$("#bl"+a),b=$("#fs"+a),d=$("#rw"+a),e=b.attr("data-screenname");b.attr("data-status","processing");updateButtonData(a,null);var g=b.attr("data-sourcepage");"undefined"!=typeof yaCounter16513888&&yaCounter16513888.hit("/friendshipBlock","friendshipBlock: "+e);"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview","/friendshipBlock"]);$.ajaxq("friendshipBlock",{type:"GET",url:"/tools/friendshipBlock/"+a+"/"+e+
"/"+g,success:function(e){if("200"==e)c.attr("onclick","").attr("title",window.wordList.blocked).addClass("icon-white"),b.attr("data-status","blocked"),b.attr("data-fraction","done"),d.addClass("fraction-done").addClass("action-shade"),disableRowButtons(a),$("#noFriends").text(parseInt($("#noFriends").text())-1),$("#noUnfollowers").text(parseInt($("#noUnfollowers").text())-1),$("#noUnfollowers2").text(parseInt($("#noUnfollowers2").text())-1),$("#noPassives").text(parseInt($("#noPassives").text())-
1),$("#wl"+a).remove(),d.find("td").addClass("twitp_striket");else if("710"==e){var g=$("button[id^='fs']");g.attr("data-status","locked_following");updateButtonDataMulti(g)}else"711"==e?document.location.href="/errors/index/711/":"401"==e?(curButton.attr("data-status","unfollow"),notAuthedDialog()):(curButton.attr("data-status","unfollow"),$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"}));updateButtonData(a,null);"710"!=e&&disableRowButtons(a)},error:function(){$.pnotify({text:window.wordList.general_fracterror,
delay:2E3,type:"error"})}})}}
function friendshipUnblock(a){var c=$("#fs"+a),b=c.attr("data-screenname"),d=c.attr("data-sourcepage"),e=$("#rw"+a);c.attr("data-status","processing");updateButtonData(a,null);"undefined"!=typeof yaCounter16513888&&yaCounter16513888.hit("/friendshipUnblock","friendshipUnblock: "+b);"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview","/friendshipUnblock"]);$.ajaxq("friendshipUnblock",{type:"GET",url:"/tools/friendshipUnblock/"+a+"/"+b+"/"+d,success:function(b){if("200"==b)c.attr("data-status",
"unblocked"),c.attr("data-fraction","done"),$("#wl"+a).remove(),$("#bl"+a).remove(),e.addClass("fraction-done").addClass("action-shade"),e.find("td").addClass("twitp_striket");else if("710"==b){var d=$("button[id^='fs']");d.attr("data-status","locked_blocked");updateButtonDataMulti(d)}else"711"==b?document.location.href="/errors/index/711/":"401"==b?(c.attr("data-status","follow"),notAuthedDialog()):(c.attr("data-status","unblock"),$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"}));
updateButtonData(a,null);"710"!=b&&disableRowButtons(a)},error:function(){$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"})}})}
function whitelistAdd(a){if(!1!=confirm(window.wordList.whitelist_add_ask)){var c=$("#wl"+a),b=$("#fs"+a),d=$("#rw"+a);b.attr("data-status","processing");updateButtonData(a,null);var e=$("#bl"+a),g=getUserDataFromRow(a);$.ajaxq("whitelistAdd",{type:"POST",url:"/tools/whitelistAdd/"+a+"/",data:{userData:g},success:function(f){"200"==f||"304"==f?(c.attr("onclick","").attr("title",window.wordList.whitelist_added).addClass("icon-white"),b.attr("data-status","whitelist_added"),b.attr("data-fraction","done"),
d.addClass("fraction-done").addClass("action-shade"),disableRowButtons(a),e.remove()):"720"==f?($("[id^=wl]").attr("onclick","notWhitelistLimitDialog()").attr("title",window.wordList.whitelist_limit),b.attr("data-status","unfollow"),notWhitelistLimitDialog()):"401"==f&&(document.location.href="/errors/index/401");updateButtonData(a,null)},error:function(){$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"})}})}}
function whitelistRemove(a){var c=$("#wl"+a);$("#rw"+a);c.attr("data-status","processing");updateButtonData(null,c);$.ajaxq("whitelistRemove",{type:"POST",url:"/tools/whitelistRemove/"+a+"/",success:function(b){"200"==b?(c.attr("onclick","").attr("title",window.wordList.deleted).attr("data-status","deleted"),$("#ws"+a).addClass("twitp_striket"),$("#rw"+a).addClass("action-shade")):"401"==b?document.location.href="/errors/index/401":c.attr("data-status","general-delete");updateButtonData(null,c);disableRowButtons(a)},
error:function(){$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"})}})}function notAuthedDialog(){var a,c;isMobilePhone()?(a="250px",c="600px"):(a="800px",c="450px");$.colorbox({width:a,height:c,iframe:!0,href:"/errors/index/401/true",opacity:0.6})}function notAuthedDialogAlert(){var a=window.wordList.general_notauthed;"undefined"===typeof a&&(a="Lutfen giris yapiniz");alert(a+".")}
function notOwnerDialog(){var a=window.wordList.general_notowner,a=a.replace("%s",'"'+window.titleScreenName+'"');alert(a+".")}function notWhitelistLimitDialog(){alert(window.wordList.whitelist_limit+".")}function unlockTweetDialog(){var a,c;isMobilePhone()?(a="250px",c="750px"):(a="500px",c="400px");$.colorbox({width:a,height:c,iframe:!0,href:"/tools/unlock/",opacity:0.6})}
function sendGeneralTweet(a,c,b,d){var e=$("#"+c);e.text(window.wordList.processing);e.attr("onclick","");e.attr("data-status","processing");$.ajax({type:"GET",url:"/tools/sendGeneralTweet/",data:{tweetText:a,tweetType:b},success:function(a){"200"==a?("undefined"!==typeof d&&($("#"+d[0]).hide(),$("#"+d[1]).show()),$("#sendTweetInitial").hide(),$("#sendTweetSuccess").show(),"8"==b&&(parent.location.href+="?unlocked=1")):"401"==a?document.location.href="/errors/index/401":(e.text(window.wordList.tweetle),
e.attr("data-status","initial"),e.attr("class","btn btn-primary"),$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"}))},error:function(){}})}function contactEmailDialog(){$.colorbox({width:"700px",height:"600px",iframe:!0,href:"/tools/contact/true/",opacity:0.6})}
function sendContactEmail(){var a=$("#name").val(),c=$("#email").val(),b=$("#subject").val(),d=$("#message").val();$("button:submit").attr("disabled","disabled");$.ajax({url:"/tools/sendContactEmail/",type:"GET",data:{name:a,email:c,subject:b,message:d},success:function(a){"200"==a?($("#contactDialogInitial").hide(),$("#contactDialogSuccess").show(),setTimeout("parent.$.colorbox.close();",5E3)):$.pnotify({text:window.wordList.general_fracterror,delay:2E3,type:"error"})},error:function(){$.pnotify({text:window.wordList.general_fracterror,
delay:2E3,type:"error"})}})}function biglockDialog(){var a,c;isMobilePhone()?(a="250px",c="750px"):(a="500px",c="400px");$.colorbox({width:a,height:c,iframe:!0,href:"/tools/biglock/",opacity:0.6})}function redirectToBiglockPage(){document.location.href="/errors/index/711/"}
function imageResizeEffect(){$("img.avatar_resizable").each(function(){var a=$(this).attr("src"),c=$(this).attr("src").replace("_normal",""),b=$(this).attr("width"),d=$(this).attr("height");$(this).hover(function(){$(this).attr("src",c);$(this).attr("width",1.5*b);$(this).attr("height",1.5*d)},function(){$(this).attr("src",a);$(this).attr("width",b);$(this).attr("height",d)})})}
function resizeResponsiveElements(){var a=window.innerWidth||document.documentElement.clientWidth;$("#latestsignins div img").each(function(){var c=$(this).attr("src"),b,d,e;768<=a?(b=c.replace("_mini.","_bigger."),e=d=73):480<=a&&(b=c.replace("_mini.","_normal."),e=d=48);$(this).attr("src",b).attr("width",d).attr("height",e)});980<=a&&($("#youtThumb").hide(),$("#youtThumbBigLink img").attr("src",$("#youtThumbBigLink img").data("src")),$("#youtThumbBig").show(),$("#youtThumbBigLink").bind("click",
function(){980<=a&&($("#youtThumbBig").hide(),$("#youtEmbed iframe").attr("src",$("#youtEmbed iframe").data("src")),$("#youtEmbed").show())}));(480<=a||0<=document.URL.indexOf("#faq"))&&$("#collapseFAQ").addClass("in")}function startSidebarProcess(){$("#twitp_sidebar_doorman").hover(function(){$("#twitp_sidebar").show()},function(){});$("#twitp_sidebar").hover(function(){},function(){$("#twitp_sidebar").hide()})}
function isMobilePhone(){return 768>(window.innerWidth||document.documentElement.clientWidth)}function isSmallMobilePhone(){return 320>=(window.innerWidth||document.documentElement.clientWidth)}function isLargeDevice(){return 1200<=(window.innerWidth||document.documentElement.clientWidth)}function showLanguageAlert(){isTurkishMainPage()&&!isTurkishSpeaker()&&$("#mainPageAlert").show()}function isTurkishSpeaker(){return 0<=(window.navigator.userLanguage||window.navigator.language).indexOf("tr")}
function isTurkishMainPage(){return"http://twitpalas.com/"==document.URL||"http://twitpalas.com/tur/"==document.URL||"http://twitpalas.com/index.html"==document.URL||0<=document.URL.indexOf("http://twitpalas.com/?utm")}function isLogoutPage(){return 0<=document.URL.indexOf("logged_out=1")}
function toggleElementsForLogoutPage(){if(isLogoutPage()){$("#mainPageAlert").hide();$("#mainpTeaser1").hide();$("#mainpTeaser2").hide();$("#mainpTeaser3").hide();$("#mainpTeaser4").hide();$("#collapseFAQ").removeClass("in");var a=$("#mobileAlterInfo"),c=a.find("img");c.attr("src",c.data("src"));a.show()}}
function showFacebookLikeDialog(){0<=document.URL.indexOf("logged_in")&&!isMobilePhone()&&0!==$("#facebook_box").length&&-1==document.cookie.indexOf("visited=true")&&(document.cookie="visited=true;expires="+(new Date((new Date).valueOf()+6048E5)).toUTCString()+";path=/",$.colorbox({inline:!0,width:"300px",height:"430px",href:"#facebook_box",opacity:0.7}))}
function setWordList(){var a=$("#wordList");void 0!==a.attr("data-table-processing")&&(window.wordList.processing=a.attr("data-table-processing"),window.wordList.following=a.attr("data-table-following"),window.wordList.unlocked_following=a.attr("data-table-unlocked_following"),window.wordList.notfollowing=a.attr("data-table-notfollowing"),window.wordList.unlocked_notfollowing=a.attr("data-table-unlocked_notfollowing"),window.wordList.locked_following=a.attr("data-table-locked_following"),window.wordList.locked_notfollowing=
a.attr("data-table-locked_notfollowing"),window.wordList.locked_blocked=a.attr("data-table-locked_blocked"),window.wordList.follow=a.attr("data-table-follow"),window.wordList.unfollow=a.attr("data-table-unfollow"),window.wordList.whitelist_added=a.attr("data-table-whitelist_added"),window.wordList.whitelist_add_ask=a.attr("data-table-whitelist_add_ask"),window.wordList.whitelist_limit=a.attr("data-table-whitelist_limit"),window.wordList.blocked=a.attr("data-table-blocked"),window.wordList.unblocked=
a.attr("data-table-unblocked"),window.wordList.block_ask=a.attr("data-table-block_ask"),window.wordList.deleted=a.attr("data-table-deleted"),window.wordList.sProcessing=a.attr("data-datatables-sProcessing"),window.wordList.sLengthMenu=a.attr("data-datatables-sLengthMenu"),window.wordList.sZeroRecords=a.attr("data-datatables-sZeroRecords"),window.wordList.sInfo=a.attr("data-datatables-sInfo"),window.wordList.sInfoEmpty=a.attr("data-datatables-sInfoEmpty"),window.wordList.sInfoFiltered=a.attr("data-datatables-sInfoFiltered"),
window.wordList.sSearch=a.attr("data-datatables-sSearch"),window.wordList.oPaginate_sFirst=a.attr("data-datatables-oPaginate_sFirst"),window.wordList.oPaginate_sPrevious=a.attr("data-datatables-oPaginate_sPrevious"),window.wordList.oPaginate_sNext=a.attr("data-datatables-oPaginate_sNext"),window.wordList.oPaginate_sLast=a.attr("data-datatables-oPaginate_sLast"),window.wordList.general_notauthed=a.attr("data-general-notauthed"),window.wordList.general_notowner=a.attr("data-general-notowner"),window.wordList.general_fracterror=
a.attr("data-general-fracterror"),window.wordList.general_tweetle=a.attr("data-general-tweetle"),window.wordList.general_delete=a.attr("data-general-delete"),window.wordList.date_year=a.attr("data-date-year"),window.wordList.date_month=a.attr("data-date-month"),window.wordList.date_week=a.attr("data-date-week"),window.wordList.date_day=a.attr("data-date-day"),window.wordList.date_hour=a.attr("data-date-hour"),window.wordList.date_minute=a.attr("data-date-minute"),window.wordList.date_second=a.attr("data-date-second"))}
function getCleanScreenname(a){return a.replace(/[^a-zA-Z0-9_]/g,"")}function appendDebugDataToScreen(a){$("#debugDiv").append(a)}function debugStartTime(){window.debug&&console.time("debugTimer")}function debugWriteTimeDifToConsole(){window.debug&&console.log("bbb")}
function getUserDataFromRow(a){var c={},b=$("#rw"+a);a=$("#ud"+a);c.userid=b.find("button[id^=fs]").attr("id").substring(2);c.screenname=a.attr("data-userDataScreenname");c.avatar=a.attr("data-userDataAvatar");c.protecteduser=a.attr("data-userDataProtected");c.name=a.attr("data-userDataName");c.location=a.attr("data-userDataLocation");c.description=a.attr("data-userDataDescription");c.friends=a.attr("data-userDataFriends");c.followers=a.attr("data-userDataFollowers");c.statuses=a.attr("data-userDataStatuses");
c.url=a.attr("data-userDataURL");return c}
function showUserDataFromRow(a){a=getUserDataFromRow(a);a.avatar=a.avatar.replace("_normal","_bigger");var c;c=""+('<img src="'+a.avatar+'">');c+="<h3>"+a.name+"</h3>";c+="<h4>@"+a.screenname+'<a href="http://twitter.com/'+a.screenname+'" target="_blank" rel="nofollow"><i class="glyphicon glyphicon-share-alt"></i></a></h4>';c+="<h6>"+a.location+" - "+a.description+"</h6>";c+=' <div class="btn-group-vertical"> <a href="http://twitter.com/'+a.screenname+'/" class="btn btn-primary" target="_blank" rel="nofollow">Tweet '+a.statuses+
' <i class="glyphicon glyphicon-share-alt"></i></a> <a href="http://twitter.com/'+a.screenname+'/following/" class="btn btn-success" target="_blank" rel="nofollow">Arkadas '+a.friends+' <i class="glyphicon glyphicon-share-alt"></i></a> <a href="http://twitter.com/'+a.screenname+'/followers/" class="btn btn-danger" target="_blank" rel="nofollow">Takipci '+a.followers+' <i class="glyphicon glyphicon-share-alt"></i></a> </div>';$.colorbox({html:c,opacity:0.8,width:"240px",height:"420px",maxWidth:"95%",
maxHeight:"95%"})}function markProcessedUsers(){var a=$("#twitp_processedusers").data("users");if(a)for(var c=0;c<a.length;c++){var b=a[c];$("#wl"+b).remove();$("#bl"+b).remove();var d=$("#rw"+b);d.addClass("fraction-done").addClass("action-shade");d.find("td").addClass("twitp_striket");disableRowButtons(b)}}function hideFflistColumns(){isSmallMobilePhone()&&$("td.fflist_detail").hide()}function hideShowBlocks(a,c){$("#"+a).hide();$("#"+c).show()}
function registerAjaxq(){(function(a){var c={};a.ajaxq=function(b,d){function e(){var a=c[b].shift();a?a():delete c[b]}var g=a.Deferred(),f=g.promise();f.success=f.done;f.error=f.fail;f.complete=f.always;var h=a.extend(!0,{},d);(function(a){c[b]?c[b].push(a):(c[b]=[],a())})(function(){var b=a.ajax.apply(window,[h]).always(e);b.done(function(){g.resolve.apply(this,arguments)});b.fail(function(){g.reject.apply(this,arguments)})});return f};a.each(["getq","postq"],function(b,c){a[c]=function(b,g,f,h,
l){a.isFunction(f)&&(l=l||h,h=f,f=void 0);return a.ajaxq(b,{type:"postq"===c?"post":"get",url:g,data:f,success:h,dataType:l})}});a.ajaxq.isRunning=function(){for(var a in c)if(c.hasOwnProperty(a))return!0;return!1}})(jQuery)};