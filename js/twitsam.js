"use strict";window.mainPage='http://twitpalas.com/';window['contactEmailDialog']=contactEmailDialog;window['redirectToBiglockPage']=redirectToBiglockPage;window.wordList=setWordList;window.debug=false;$(document).ready(function(){showFacebookLikeDialog();resizeResponsiveElements();setWordList();showLanguageAlert();toggleElementsForLogoutPage();documentReadyWorks();var usersTableOuter=$('#usersTableOuter');if(usersTableOuter.length!==0){window.tableType=usersTableOuter.attr('data-tabletype');window.dataScreenName=usersTableOuter.attr('data-screenname');window.titleScreenName=usersTableOuter.attr('data-title-screenname');window.authedUser=usersTableOuter.attr('data-authed-user');if($('#usersTableAjaxContent').length!==0){$('#loadingTable').show();$.ajax({type:"POST",url:"/tools/createUsersTableFromScreenname/"+window.tableType+"/"+window.dataScreenName,success:function(data){if(data=='4013'){data='401';}
if(data=='4043'){data='404';}
if(data=='401'||data=='403'||data=='0'||data=='400'||data=='404'||data=='503'||data=='429'||data=='713'){document.location.href="/errors/index/"+data;}else{$("#loadingTable").hide();$("#usersTableAjaxContent").html(data);$("#usersTableAjaxContent").show();startDatatables();documentReadyWorks();registerAjaxq();FB.XFBML.parse();}},timeout:40000,error:function(r,s,e){$("#loadingTable").hide();$("#usersTableTimeout").show();$("#usersTableTimeout img").attr("src",$("#usersTableTimeout img").data("src"));}});}
if($('#usersTableNotAjaxContent').length!==0){startDatatables();documentReadyWorks();registerAjaxq();FB.XFBML.parse();}}
$('#otherUserForm').change(function(){var screenName=$('input:text[name=screenName]').val();var tableType=$('input:radio[name=optionsRadios]:checked').val();if(screenName.indexOf("@")==0){screenName=screenName.replace("@","");}
if(screenName){var newAction='/tools/'+tableType+'/'+screenName;$(this).attr('action',newAction);$('button:submit').removeAttr('disabled');}else{$('button:submit').attr('disabled','disabled');}});$('#friendshipForm').submit(function(){var user1=$('#friendshipForm_user1').val();var user2=$('#friendshipForm_user2').val();user1=getCleanScreenname(user1);user2=getCleanScreenname(user2);$(this).attr('action',"/tools/friendship/"+user1+"/"+user2+"/");});$('#twitterJoinForm').submit(function(){var user=$('#twitterJoinForm_user').val();user=getCleanScreenname(user);$(this).attr('action',"/tools/joins/"+user+"/");});if($('#signinedTable').length!==0){$('#signinedTable').dataTable({"bPaginate":false});}
if($('#tweetsTable').length!==0){window.tableType='tweetsTable';registerAjaxq();}
if($('#whitelistTable').length!==0){window.tableType='whitelistTable';registerAjaxq();}
if($('#fflogsPage').length!==0){window.tableType='fflogsPage';registerAjaxq();}
if($('#fflistPage').length!==0){window.tableType='fflistPage';registerAjaxq();}
if($('#joinsCountdown').length!==0){var joinsTimeStamp=$('#joinsTimeStamp').text();var joinsTimeStampJS=new Date(joinsTimeStamp*1000);$('#joinsCountdown').countdown({since:joinsTimeStampJS,format:'yowdhMS',labels:['Yıl','Ay','Hafta','Gün','Saat','Dakika','Saniye'],labels1:['Yıl','Ay','Hafta','Gün','Saat','Dakika','Saniye']});}});function documentReadyWorks(){$("[data-rel=popover]").popover({});$("[data-rel=tooltip]").tooltip();$('.dropdown-toggle').dropdown();if(!isMobilePhone()){imageResizeEffect();assignLightboxAvatars();}
addDatatablesPlugins();if($.pnotify){$.pnotify.defaults.history=false;}}
function startDatatables(){var userstable=$('#usersTable');var mobileUser=userstable.hasClass('mobile');var paginationType,aoColumnDefsType;var defaultSortColumn=[];if(mobileUser){paginationType="two_button";aoColumnDefsType=[{"bSortable":false,"aTargets":[0]},{"bSortable":false,"aTargets":[2]}];}else if(!mobileUser){paginationType="full_numbers";aoColumnDefsType=[{"sType":"title-numeric","aTargets":[3]},{"sType":"title-numeric","aTargets":[7]},{"sType":"num-html","aTargets":[4]},{"sType":"num-html","aTargets":[5]},{"sType":"num-html","aTargets":[6]},{"bSortable":false,"aTargets":[0]},{"bSortable":false,"aTargets":[8]},{"bSortable":false,"aTargets":[9]},{"sClass":"center","aTargets":[2,3,4,5,6,7]}];if(window.tableType=="passives"){defaultSortColumn=[[7,"desc"]];}}
userstable.dataTable({"aoColumnDefs":aoColumnDefsType,"sPaginationType":paginationType,"aaSorting":defaultSortColumn,"bPaginate":true,"sDom":'<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>',"fnDrawCallback":function(){updateTableCallback();},"iDisplayLength":25,"aLengthMenu":[[10,25,50],[10,25,50]],"oLanguage":{"sProcessing":window.wordList['sProcessing']+"...","sLengthMenu":window.wordList['sLengthMenu'],"sZeroRecords":window.wordList['sZeroRecords'],"sInfo":window.wordList['sInfo'],"sInfoEmpty":window.wordList['sInfoEmpty'],"sInfoFiltered":window.wordList['sInfoFiltered'],"sInfoPostFix":"","sSearch":window.wordList['sSearch'],"sUrl":"","oPaginate":{"sFirst":window.wordList['oPaginate_sFirst'],"sPrevious":window.wordList['oPaginate_sPrevious'],"sNext":window.wordList['oPaginate_sNext'],"sLast":window.wordList['oPaginate_sLast']}}});}
function updateTableCallback(){if(!isMobilePhone()){$("[data-rel=popover]").popover({});$("[data-rel*=popover-left]").popover({placement:'left'});assignLightboxAvatars();$("details").deets({speed:'fast'});}
$("tr.fraction-done td.sorting_1").removeClass('sorting_1');}
function addDatatablesPlugins(){if($.fn.dataTableExt){$.fn.dataTableExt.oSort['title-numeric-asc']=function(a,b){var x=a.match(/title="*(-?[0-9\.]+)/)[1];var y=b.match(/title="*(-?[0-9\.]+)/)[1];x=parseFloat(x);y=parseFloat(y);return((x<y)?-1:((x>y)?1:0));};$.fn.dataTableExt.oSort['title-numeric-desc']=function(a,b){var x=a.match(/title="*(-?[0-9\.]+)/)[1];var y=b.match(/title="*(-?[0-9\.]+)/)[1];x=parseFloat(x);y=parseFloat(y);return((x<y)?1:((x>y)?-1:0));};$.fn.dataTableExt.oSort['html-better-asc']=function(a,b){var x=$(a).text();var y=$(b).text();return((x<y)?-1:((x>y)?1:0));};$.fn.dataTableExt.oSort['html-better-desc']=function(a,b){var x=$(a).text();var y=$(b).text();return((x<y)?1:((x>y)?-1:0));};$.fn.dataTableExt.oSort['num-html-pre']=function(a){var x=String(a).replace(/<[\s\S]*?>/g,"");return parseFloat(x);};$.fn.dataTableExt.oSort['num-html-asc']=function(a,b){return((a<b)?-1:((a>b)?1:0));};$.fn.dataTableExt.oSort['num-html-desc']=function(a,b){return((a<b)?1:((a>b)?-1:0));};}}
function updateButtonData(id,object){var curButton;if(id!=null){curButton=$('#fs'+id);}else if(object!=null){curButton=object;id=(object.attr('id')).slice(2);}
var protection=curButton.attr('data-protection');var status=curButton.attr('data-status');var fraction=curButton.attr('data-fraction');if(status=='processing'){curButton.text(window.wordList[status]);curButton.attr('onclick','');curButton.attr('class','btn btn-warning');}
if((status=='following')||(status=='unlocked_following')){curButton.text(window.wordList[status]);curButton.attr('class','btn btn-primary');if(window.dataScreenName=="1"||window.tableType=='tweetsTable'){curButton.attr('onclick','friendshipDestroy('+id+')');}else if(!window.authedUser){curButton.attr('onclick','notAuthedDialog()');}else{curButton.attr('onclick','notOwnerDialog()');}}
if((status=='notfollowing')||(status=='unlocked_notfollowing')){curButton.text(window.wordList[status]);curButton.attr('class','btn');if(window.dataScreenName=="1"||!window.authedUser||window.tableType=='tweetsTable'){curButton.attr('onclick','friendshipCreate('+id+')');}else if(!window.authedUser){curButton.attr('onclick','notAuthedDialog()');}else{curButton.attr('onclick','notOwnerDialog()');}}
if((status=='locked_following')||(status=='locked_notfollowing')){curButton.text(window.wordList[status]);curButton.attr('class','btn btn-danger');curButton.attr('onclick','unlockTweetDialog()');}
if(status=='follow'){curButton.text(window.wordList[status]);curButton.attr('class','btn btn-danger');if(window.dataScreenName=="1"||!window.authedUser||window.tableType=='tweetsTable'){curButton.attr('onclick','friendshipCreate('+id+')');}else if(!window.authedUser){curButton.attr('onclick','notAuthedDialog()');}else{curButton.attr('onclick','notOwnerDialog()');}}
if(status=='unfollow'){curButton.text(window.wordList[status]);curButton.attr('class','btn btn-danger');if(window.dataScreenName=="1"||window.tableType=='tweetsTable'){curButton.attr('onclick','friendshipDestroy('+id+')');}else if(!window.authedUser){curButton.attr('onclick','notAuthedDialog()');}else{curButton.attr('onclick','notOwnerDialog()');}}
if(status=='whitelist_added'){curButton.text(window.wordList[status]);curButton.attr('onclick','');}
if(status=='whitelist_already'){curButton.text(window.wordList['whitelist_added']);curButton.attr('onclick','');}
if(status=='blocked'){curButton.text(window.wordList[status]);curButton.attr('onclick','');}
if(status=='deleted'){curButton.text(window.wordList[status]);curButton.attr('onclick','');curButton.attr('class','btn');}
if(fraction=='done'){curButton.attr('class','btn disabled');curButton.attr('onclick','');}}
function updateButtonDataMulti(objects){objects.each(function(){updateButtonData(null,$(this))})}
function updateButtonStatusForMobile(){alert("table type:"+window.tableType);if(window.tableType=="unfollowers"||window.tableType=="passives"){var allFsButtons=$("button[id^='fs']");allFsButtons.attr('data-status','unfollow');updateButtonDataMulti(allFsButtons);}}
function disableRowButtons(id){var curRow=$('#rw'+id);curRow.find("td.sorting_1").removeClass('sorting_1');curRow.find(".btn").addClass('disabled').popover('disable').removeAttr('href').removeAttr('target');}
function assignLightboxAvatars(){$(".lightb-avatar").colorbox({rel:'lightb-avatar',scrolling:false,current:"",slideshow:true,slideshowAuto:false,opacity:0.6,width:"60%",height:"60%"});}
function friendshipDestroy(id){var curButton=$('#fs'+id);var scrname=curButton.attr('data-screenname');var sourcePage=curButton.attr('data-sourcepage');var curRow=$('#rw'+id);curButton.attr('data-status','processing');updateButtonData(id,null);if(typeof yaCounter16513888!='undefined'){yaCounter16513888.hit('/friendshipDestroy','friendshipDestroy: '+scrname);}
if(typeof _gaq!=="undefined"&&_gaq!==null){_gaq.push(['_trackPageview','/friendshipDestroy']);}
$.ajaxq("friendshipDestroy",{type:"GET",url:"/tools/friendshipDestroy/"+id+"/"+scrname+"/"+sourcePage,success:function(data){if(data=='200'){curButton.attr('data-status','notfollowing');curButton.attr('data-fraction','done');$('#noFriends').text(parseInt($('#noFriends').text())-1);$('#noUnfollowers').text(parseInt($('#noUnfollowers').text())-1);$('#noUnfollowers2').text(parseInt($('#noUnfollowers2').text())-1);$('#noPassives').text(parseInt($('#noPassives').text())-1);$('#wl'+id).remove();$('#bl'+id).remove();curRow.addClass("fraction-done").addClass("action-shade");curRow.find('td').addClass('twitp_striket');}else if(data=='710'){var allFsButtons=$("button[id^='fs']");allFsButtons.attr('data-status','locked_following');updateButtonDataMulti(allFsButtons);}else if(data=='711'){document.location.href="/errors/index/711/";}else if(data=='401'){curButton.attr('data-status','unfollow');notAuthedDialog();}else{curButton.attr('data-status','unfollow');$.pnotify({text:window.wordList['general_fracterror'],delay:2000,type:'error'});}
updateButtonData(id,null);disableRowButtons(id);},error:function(){$.pnotify({text:window.wordList['general_fracterror'],delay:2000,type:'error'});}})}
function friendshipCreate(id){var curButton=$('#fs'+id);var scrname=curButton.attr('data-screenname');var sourcePage=curButton.attr('data-sourcepage');var curRow=$('#rw'+id);curButton.attr('data-status','processing');updateButtonData(id,null);if(typeof yaCounter16513888!='undefined'){yaCounter16513888.hit('/friendshipCreate','friendshipCreate: '+scrname);}
if(typeof _gaq!=="undefined"&&_gaq!==null){_gaq.push(['_trackPageview','/friendshipCreate']);}
$.ajaxq("friendshipCreate",{type:"GET",url:"/tools/friendshipCreate/"+id+"/"+scrname+"/"+sourcePage,success:function(data){if(data=='200'){curButton.attr('data-status','following');curButton.attr('data-fraction','done');$('#noFollowers').text(parseInt($('#noFollowers').text())+1);$('#noNotfollowing').text(parseInt($('#noNotfollowing').text())-1);$('#wl'+id).remove();$('#bl'+id).remove();curRow.addClass("fraction-done").addClass("action-shade");curRow.find('td').addClass('twitp_striket');}else if(data=='710'){var allFsButtons=$("button[id^='fs']");allFsButtons.attr('data-status','locked_notfollowing');updateButtonDataMulti(allFsButtons);}else if(data=='711'){document.location.href="/errors/index/711/";}else if(data=='401'){curButton.attr('data-status','follow');notAuthedDialog();}else{curButton.attr('data-status','follow');$.pnotify({text:window.wordList['general_fracterror'],delay:2000,type:'error'});}
updateButtonData(id,null);disableRowButtons(id);},error:function(){$.pnotify({text:window.wordList['general_fracterror'],delay:2000,type:'error'});}})}
function friendshipBlock(id){var answer=confirm(window.wordList['block_ask']);if(answer==false){return;}
var curElement=$('#bl'+id);var fractionButton=$('#fs'+id);var curRow=$('#rw'+id);var scrname=fractionButton.attr('data-screenname');fractionButton.attr('data-status','processing');updateButtonData(id,null);var sourcePage=fractionButton.attr('data-sourcepage');if(typeof yaCounter16513888!='undefined'){yaCounter16513888.hit('/friendshipBlock','friendshipBlock: '+scrname);}
if(typeof _gaq!=="undefined"&&_gaq!==null){_gaq.push(['_trackPageview','/friendshipBlock']);}
$.ajaxq("friendshipBlock",{type:"GET",url:"/tools/friendshipBlock/"+id+"/"+scrname+"/"+sourcePage,success:function(data){if(data=='200'){curElement.attr('onclick','').attr('title',window.wordList['blocked']).addClass('icon-white');fractionButton.attr('data-status','blocked');fractionButton.attr('data-fraction','done');curRow.addClass("fraction-done").addClass("action-shade");disableRowButtons(id);$('#noFriends').text(parseInt($('#noFriends').text())-1);$('#noUnfollowers').text(parseInt($('#noUnfollowers').text())-1);$('#noUnfollowers2').text(parseInt($('#noUnfollowers2').text())-1);$('#noPassives').text(parseInt($('#noPassives').text())-1);$('#wl'+id).remove();curRow.find('td').addClass('twitp_striket');}else if(data=='710'){var allFsButtons=$("button[id^='fs']");allFsButtons.attr('data-status','locked_following');updateButtonDataMulti(allFsButtons);}else if(data=='711'){document.location.href="/errors/index/711/";}else if(data=='401'){curButton.attr('data-status','unfollow');notAuthedDialog();}else{curButton.attr('data-status','unfollow');$.pnotify({text:window.wordList['general_fracterror'],delay:2000,type:'error'});}
updateButtonData(id,null);disableRowButtons(id);},error:function(){$.pnotify({text:window.wordList['general_fracterror'],delay:2000,type:'error'});}})}
function whitelistAdd(id){var answer=confirm(window.wordList['whitelist_add_ask']);if(answer==false){return;}
var curElement=$('#wl'+id);var fractionButton=$('#fs'+id);var curRow=$('#rw'+id);fractionButton.attr('data-status','processing');updateButtonData(id,null);var blockIcon=$('#bl'+id);var userData=getUserDataFromRow(id);$.ajaxq("whitelistAdd",{type:"POST",url:"/tools/whitelistAdd/"+id+"/",data:{userData:userData},success:function(data){if(data=='200'||data=='304'){curElement.attr('onclick','').attr('title',window.wordList['whitelist_added']).addClass('icon-white');fractionButton.attr('data-status','whitelist_added');fractionButton.attr('data-fraction','done');curRow.addClass("fraction-done").addClass("action-shade");disableRowButtons(id);blockIcon.remove();}else if(data=='720'){$('[id^=wl]').attr('onclick','notWhitelistLimitDialog()').attr('title',window.wordList['whitelist_limit']);fractionButton.attr('data-status','unfollow');notWhitelistLimitDialog();}else if(data=='401'){document.location.href="/errors/index/401";}else{}
updateButtonData(id,null);},error:function(){$.pnotify({text:window.wordList['general_fracterror'],delay:2000,type:'error'});}})}
function whitelistRemove(id){var curElement=$('#wl'+id);var curRow=$('#rw'+id);curElement.attr('data-status','processing');updateButtonData(null,curElement);$.ajaxq("whitelistRemove",{type:"POST",url:"/tools/whitelistRemove/"+id+"/",success:function(data){if(data=='200'){curElement.attr('onclick','').attr('title',window.wordList['deleted']).attr('data-status','deleted');$('#ws'+id).addClass('twitp_striket');$('#rw'+id).addClass("action-shade");}else if(data=='401'){document.location.href="/errors/index/401";}else{curElement.attr('data-status','general-delete');}
updateButtonData(null,curElement);disableRowButtons(id);},error:function(){$.pnotify({text:window.wordList['general_fracterror'],delay:2000,type:'error'});}})}
function notAuthedDialog(){var width;var height;if(isMobilePhone()){width="250px";height="600px";}else{width="800px";height="450px";}
$.colorbox({width:width,height:height,iframe:true,href:"/errors/index/401/true",opacity:0.6});}
function notOwnerDialog(){var notOwnerStr=window.wordList['general_notowner'];notOwnerStr=notOwnerStr.replace("%s",'"'+window.titleScreenName+'"');alert(notOwnerStr+'.');}
function notWhitelistLimitDialog(){var notWhitelistLimitStr=window.wordList['whitelist_limit'];alert(notWhitelistLimitStr+".");}
function unlockTweetDialog(){var width;var height;if(isMobilePhone()){width="250px";height="750px";}else{width="500px";height="400px";}
$.colorbox({width:width,height:height,iframe:true,href:"/tools/unlock/",opacity:0.6});}
function sendGeneralTweet(m,id,type){var curButton=$('#'+id);curButton.text(window.wordList['processing']);curButton.attr('onclick','');curButton.attr('data-status','processing');$.ajax({type:"GET",url:"/tools/sendGeneralTweet/",data:{tweetText:m,tweetType:type},success:function(data){if(data=='200'){$("#sendTweetInitial").hide();$("#sendTweetSuccess").show();if(type=='8'){parent.location.href=parent.location.href+'?unlocked=1';}}else if(data=='401'){document.location.href="/errors/index/401";}else{curButton.text(window.wordList['tweetle']);curButton.attr('data-status','initial');curButton.attr('class','btn btn-primary');$.pnotify({text:window.wordList['general_fracterror'],delay:2000,type:'error'});}},error:function(){}})}
function contactEmailDialog(){$.colorbox({width:"700px",height:"600px",iframe:true,href:"/tools/contact/",opacity:0.6});}
function sendContactEmail(){var n=$('#name').val();var e=$('#email').val();var s=$('#subject').val();var m=$('#message').val();$('button:submit').attr('disabled','disabled');$.ajax({url:"/tools/sendContactEmail/",type:"GET",data:{name:n,email:e,subject:s,message:m},success:function(data){if(data=='200'){$("#contactDialogInitial").hide();$("#contactDialogSuccess").show();setTimeout("parent.$.colorbox.close();",5000);}else{$.pnotify({text:window.wordList['general_fracterror'],delay:2000,type:'error'});}},error:function(){$.pnotify({text:window.wordList['general_fracterror'],delay:2000,type:'error'});}})}
function biglockDialog(){var width;var height;if(isMobilePhone()){width="250px";height="750px";}else{width="500px";height="400px";}
$.colorbox({width:width,height:height,iframe:true,href:"/tools/biglock/",opacity:0.6});}
function redirectToBiglockPage(){document.location.href="/errors/index/711/";}
function imageResizeEffect(){$('img.avatar_resizable').each(function(){var imageSourceNormal=$(this).attr("src");var imageSourceBig=$(this).attr("src").replace("_normal","");var w=$(this).attr("width");var h=$(this).attr("height");var resizeTimes=1.5;$(this).hover(function(){$(this).attr('src',imageSourceBig);$(this).attr('width',w*resizeTimes);$(this).attr('height',h*resizeTimes);},function(){$(this).attr('src',imageSourceNormal);$(this).attr('width',w);$(this).attr('height',h);})});}
function resizeResponsiveElements(){var width=window.innerWidth||document.documentElement.clientWidth;$("#latestsignins div img").each(function(){var oldSrc=$(this).attr('src');var newSrc,newWidth,newHeight;if(width>=768){newSrc=oldSrc.replace('_mini.','_bigger.');newWidth=73;newHeight=73;}else if(width>=480){newSrc=oldSrc.replace('_mini.','_normal.');newWidth=48;newHeight=48;}
$(this).attr('src',newSrc).attr('width',newWidth).attr('height',newHeight);});if(width>=980){$("#youtThumb").hide();$("#youtThumbBigLink img").attr("src",$("#youtThumbBigLink img").data("src"));$("#youtThumbBig").show();$('#youtThumbBigLink').bind('click',function(){if(width>=980){$("#youtThumbBig").hide();$("#youtEmbed iframe").attr("src",$("#youtEmbed iframe").data("src"));$("#youtEmbed").show();}});}
if(width>=480){$("#collapseFAQ").addClass("in");}}
function isMobilePhone(){var ua=navigator.userAgent.toLowerCase();if((ua.match(/iphone/i))||(ua.match(/android/i))||(ua.match(/ipod/i))||(ua.match(/symbian/i))||(ua.match(/blackberry/i))||(ua.match(/mobile/i))||(ua.match(/opera mini/i)))
{return true;}else{return false;}}
function showLanguageAlert(){if(isTurkishMainPage()&&!isTurkishSpeaker()){$("#mainPageAlert").show();}}
function isTurkishSpeaker(){var language=window.navigator.userLanguage||window.navigator.language;return(language.indexOf("tr")>=0);}
function isTurkishMainPage(){if((document.URL=="http://twitpalas.com/")||(document.URL=="http://twitpalas.com/tur/")||(document.URL=="http://twitpalas.com/index.html")||(document.URL.indexOf("http://twitpalas.com/?utm")>=0))
{return true;}else{return false;}}
function isLogoutPage(){return(document.URL.indexOf("logged_out=1")>=0);}
function toggleElementsForLogoutPage(){if(isLogoutPage()){$("#mainPageAlert").hide();$("#mainpTeaser1").hide();$("#mainpTeaser2").hide();$("#mainpTeaser3").hide();$("#mainpTeaser4").hide();$("#collapseFAQ").removeClass("in");var mobileAlert=$("#mobileAlterInfo");var img=mobileAlert.find("img");img.attr("src",img.data("src"));mobileAlert.show();}}
function showFacebookLikeDialog(){if(document.URL.indexOf("logged_in")>=0){if(!isMobilePhone()){if($('#facebook_box').length!==0){if(document.cookie.indexOf('visited=true')==-1){var sevenDays=1000*60*60*24*7;var expires=new Date((new Date()).valueOf()+sevenDays);document.cookie="visited=true;expires="+expires.toUTCString()+";path=/";$.colorbox({inline:true,width:"300px",height:"430px",href:"#facebook_box",opacity:0.7});}}}}}
function setWordList(){var wordListElement=$('#wordList');if(wordListElement.attr('data-table-processing')===undefined){return;}
window.wordList['processing']=wordListElement.attr('data-table-processing');window.wordList['following']=wordListElement.attr('data-table-following');window.wordList['unlocked_following']=wordListElement.attr('data-table-unlocked_following');window.wordList['notfollowing']=wordListElement.attr('data-table-notfollowing');window.wordList['unlocked_notfollowing']=wordListElement.attr('data-table-unlocked_notfollowing');window.wordList['locked_following']=wordListElement.attr('data-table-locked_following');window.wordList['locked_notfollowing']=wordListElement.attr('data-table-locked_notfollowing');window.wordList['follow']=wordListElement.attr('data-table-follow');window.wordList['unfollow']=wordListElement.attr('data-table-unfollow');window.wordList['whitelist_added']=wordListElement.attr('data-table-whitelist_added');window.wordList['whitelist_add_ask']=wordListElement.attr('data-table-whitelist_add_ask');window.wordList['whitelist_limit']=wordListElement.attr('data-table-whitelist_limit');window.wordList['blocked']=wordListElement.attr('data-table-blocked');window.wordList['block_ask']=wordListElement.attr('data-table-block_ask');window.wordList['deleted']=wordListElement.attr('data-table-deleted');window.wordList['sProcessing']=wordListElement.attr('data-datatables-sProcessing');window.wordList['sLengthMenu']=wordListElement.attr('data-datatables-sLengthMenu');window.wordList['sZeroRecords']=wordListElement.attr('data-datatables-sZeroRecords');window.wordList['sInfo']=wordListElement.attr('data-datatables-sInfo');window.wordList['sInfoEmpty']=wordListElement.attr('data-datatables-sInfoEmpty');window.wordList['sInfoFiltered']=wordListElement.attr('data-datatables-sInfoFiltered');window.wordList['sSearch']=wordListElement.attr('data-datatables-sSearch');window.wordList['oPaginate_sFirst']=wordListElement.attr('data-datatables-oPaginate_sFirst');window.wordList['oPaginate_sPrevious']=wordListElement.attr('data-datatables-oPaginate_sPrevious');window.wordList['oPaginate_sNext']=wordListElement.attr('data-datatables-oPaginate_sNext');window.wordList['oPaginate_sLast']=wordListElement.attr('data-datatables-oPaginate_sLast');window.wordList['general_notowner']=wordListElement.attr('data-general-notowner');window.wordList['general_fracterror']=wordListElement.attr('data-general-fracterror');window.wordList['general_tweetle']=wordListElement.attr('data-general-tweetle');window.wordList['general_delete']=wordListElement.attr('data-general-delete');}
function getCleanScreenname(string){return string.replace(/[^a-zA-Z0-9_]/g,'');}
function appendDebugDataToScreen(data){$("#debugDiv").append(data);}
function debugStartTime(){if(window.debug){console.time('debugTimer');}}
function debugWriteTimeDifToConsole(){if(window.debug){console.log('bbb');}}
function getUserDataFromRow(id){var userData=new Object();var currentRow=$('#rw'+id);userData.userid=currentRow.find('button[id^=fs]').attr('id').substring(2);userData.screenname=currentRow.find("span.userDataScreenname").text();userData.avatar=currentRow.find("img.userDataAvatar").attr('src');userData.protecteduser=currentRow.find("i.userDataProtected").length;userData.name=currentRow.find("summary.userDataName").text();userData.location=currentRow.find("span.userDataLocation").text();userData.description=currentRow.find("span.userDataDescription").text();userData.friends=currentRow.find("span.userDataFriends").text();userData.followers=currentRow.find("span.userDataFollowers").text();userData.statuses=currentRow.find("span.userDataStatuses").text();if(currentRow.find("a.userDataURL").length){userData.url=currentRow.find("a.userDataURL").attr('href');}else{userData.url="";}
return userData;}
function registerAjaxq(){(function($){var queues={};$.ajaxq=function(qname,opts){var deferred=$.Deferred(),promise=deferred.promise();promise.success=promise.done;promise.error=promise.fail;promise.complete=promise.always;var clonedOptions=$.extend(true,{},opts);enqueue(function(){var jqXHR=$.ajax.apply(window,[clonedOptions]).always(dequeue);jqXHR.done(function(){deferred.resolve.apply(this,arguments);});jqXHR.fail(function(){deferred.reject.apply(this,arguments);});});return promise;function enqueue(cb){if(!queues[qname]){queues[qname]=[];cb();}
else{queues[qname].push(cb);}}
function dequeue(){var nextCallback=queues[qname].shift();if(nextCallback){nextCallback();}
else{delete queues[qname];}}};$.each(["getq","postq"],function(i,method){$[method]=function(qname,url,data,callback,type){if($.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return $.ajaxq(qname,{type:method==="postq"?"post":"get",url:url,data:data,success:callback,dataType:type});};});$.ajaxq.isRunning=function(){for(var i in queues){if(queues.hasOwnProperty(i)){return true;}}
return false;};})(jQuery);}