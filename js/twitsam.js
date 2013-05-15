"use strict";window.mainPage='http://twitpalas.com/';window['contactEmailDialog']=contactEmailDialog;window['redirectToBiglockPage']=redirectToBiglockPage;$(document).ready(function(){documentReadyWorks();if($('#usersTableOuter').length!=0){window.tableType=$('#usersTableOuter').attr('data-tabletype');window.dataScreenName=$('#usersTableOuter').attr('data-screenname');window.titleScreenName=$('#usersTableOuter').attr('data-title-screenname');window.authedUser=$('#usersTableOuter').attr('data-authed-user');if($('#usersTableAjaxContent').length!=0){$('#loadingTable').show();$.ajax({type:"POST",url:"/tools/createUsersTableFromScreenname/"+window.tableType+"/"+window.dataScreenName,success:function(data){if(data=='4013'){data='401';}
if(data=='4043'){data='404';}
if(data=='401'||data=='403'||data=='0'||data=='400'||data=='404'||data=='503'||data=='429'||data=='713'){document.location.href="/errors/index/"+data;}else{$("#loadingTable").hide();$("#usersTableAjaxContent").html(data);$("#usersTableAjaxContent").show();startDatatables();documentReadyWorks();FB.XFBML.parse();}}});}
if($('#usersTableNotAjaxContent').length!=0){startDatatables();documentReadyWorks();FB.XFBML.parse();}}
$('#otherUserForm').change(function(){var screenName=$('input:text[name=screenName]').val();var tableType=$('input:radio[name=optionsRadios]:checked').val();if(screenName.indexOf("@")==0){screenName=screenName.replace("@","");}
if(screenName){var newAction='/tools/'+tableType+'/'+screenName;$(this).attr('action',newAction);$('button:submit').removeAttr('disabled');}else{$('button:submit').attr('disabled','disabled');}});if($('#signinedTable').length!=0){$('#signinedTable').dataTable({"bPaginate":false});}
if($('#tweetsTable').length!=0){window.tableType='tweetsTable';}});function documentReadyWorks(){showFacebookLikeDialog();$("[data-rel=popover]").popover({});$("[rel=tooltip]").tooltip();$('.dropdown-toggle').dropdown();$(".lightb-contact").colorbox({iframe:true,width:"20%",height:"80%",opacity:0.6});$(".lightb-screensh").colorbox({scrolling:false,maxWidth:"80%",maxHeight:"90%",opacity:0.6});$(".lightb-modal").colorbox({scrolling:false,iframe:true,width:"80%",height:"80%"});imageResizeEffect();resizeResponsiveElements();if(!isMobilePhone()){assignLightboxAvatars();}
addDatatablesPlugins();setWordList();if($.pnotify){$.pnotify.defaults.history=false;}
if(isTurkishMainPage()&&!isTurkishSpeaker()){$("#mainPageAlert").show();}}
function startDatatables(){var mobileUser=$('#usersTable').hasClass('mobile');var paginationType;var aoColumnDefsType;var defaultSortColumn=[];if(mobileUser){paginationType="two_button";aoColumnDefsType=[{"bSortable":false,"aTargets":[0]},{"bSortable":false,"aTargets":[2]}];}else if(!mobileUser){paginationType="full_numbers";aoColumnDefsType=[{"sType":"title-numeric","aTargets":[3]},{"sType":"title-numeric","aTargets":[7]},{"bSortable":false,"aTargets":[0]},{"bSortable":false,"aTargets":[8]},{"bSortable":false,"aTargets":[9]},{"sClass":"center","aTargets":[2,3,4,5,6,7]}];if(window.tableType=="passives"){defaultSortColumn=[[7,"desc"]];}}
$('#usersTable').dataTable({"aoColumnDefs":aoColumnDefsType,"sPaginationType":paginationType,"aaSorting":defaultSortColumn,"bPaginate":true,"sDom":'<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>',"fnDrawCallback":function(){updateTableFuncts()},"iDisplayLength":25,"aLengthMenu":[[10,25,50],[10,25,50]],"oLanguage":{"sProcessing":window.wordList['sProcessing']+"...","sLengthMenu":window.wordList['sLengthMenu'],"sZeroRecords":window.wordList['sZeroRecords'],"sInfo":window.wordList['sInfo'],"sInfoEmpty":window.wordList['sInfoEmpty'],"sInfoFiltered":window.wordList['sInfoFiltered'],"sInfoPostFix":"","sSearch":window.wordList['sSearch'],"sUrl":"","oPaginate":{"sFirst":window.wordList['oPaginate_sFirst'],"sPrevious":window.wordList['oPaginate_sPrevious'],"sNext":window.wordList['oPaginate_sNext'],"sLast":window.wordList['oPaginate_sLast']}}});registerAjaxq();}
function updateTableFuncts(){if(!isMobilePhone()){$("[data-rel=popover]").popover({});$("[rel=tooltip]").tooltip();$("[data-rel*=popover-left]").popover({placement:'left'});assignLightboxAvatars();$("details").deets({speed:'fast'});}
setHoverStates();}
function addDatatablesPlugins(){if($.fn.dataTableExt){$.fn.dataTableExt.oSort['title-numeric-asc']=function(a,b){var x=a.match(/title="*(-?[0-9\.]+)/)[1];var y=b.match(/title="*(-?[0-9\.]+)/)[1];x=parseFloat(x);y=parseFloat(y);return((x<y)?-1:((x>y)?1:0));};$.fn.dataTableExt.oSort['title-numeric-desc']=function(a,b){var x=a.match(/title="*(-?[0-9\.]+)/)[1];var y=b.match(/title="*(-?[0-9\.]+)/)[1];x=parseFloat(x);y=parseFloat(y);return((x<y)?1:((x>y)?-1:0));};$.fn.dataTableExt.oSort['html-better-asc']=function(a,b){var x=$(a).text();var y=$(b).text();return((x<y)?-1:((x>y)?1:0));};$.fn.dataTableExt.oSort['html-better-desc']=function(a,b){var x=$(a).text();var y=$(b).text();return((x<y)?1:((x>y)?-1:0));};}}
function addAdsLine(){if($('#usersTableOuter').length!=0){var screenName=window.titleScreenName;var screenName2=window.dataScreenName;if(screenName2==1){if(screenName=="ksokut"||screenName=="twitpalas"||screenName=="esesci"){var adCode='<script type="text/javascript">google_ad_client = "ca-pub-1421618425504490";  /* my advertisement */ google_ad_slot = "3810962900"; google_ad_width = 728; google_ad_height = 90; <'+'/script><script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><'+'/script>';var gnTr=document.createElement('tr');var nCell=document.createElement('td');nCell.colSpan=20;nCell.innerHTML="<mark>yyy</mark>"+adCode;gnTr.appendChild(nCell);var nTrs=$('#usersTable tbody tr');nTrs[3].parentNode.insertBefore(gnTr,nTrs[3]);}}}}
function updateButtonData(id,object){var curButton;if(id!=null){curButton=$('#fs'+id);}else if(object!=null){curButton=object;id=(object.attr('id')).slice(2);}
var protection=curButton.attr('data-protection');var status=curButton.attr('data-status');if(status=='processing'){curButton.text(window.wordList[status]);curButton.attr('onclick','');curButton.attr('class','btn btn-danger');}
if((status=='following')||(status=='unlocked_following')){curButton.text(window.wordList[status]);curButton.attr('class','btn btn-primary');if(window.dataScreenName=="1"||window.tableType=='tweetsTable'){curButton.attr('onclick','friendshipDestroy('+id+')');}else if(!window.authedUser){curButton.attr('onclick','notAuthedDialog()');}else{curButton.attr('onclick','notOwnerDialog()');}}
if((status=='notfollowing')||(status=='unlocked_notfollowing')){curButton.text(window.wordList[status]);curButton.attr('class','btn');if(window.dataScreenName=="1"||!window.authedUser||window.tableType=='tweetsTable'){curButton.attr('onclick','friendshipCreate('+id+')');}else if(!window.authedUser){curButton.attr('onclick','notAuthedDialog()');}else{curButton.attr('onclick','notOwnerDialog()');}}
if((status=='locked_following')||(status=='locked_notfollowing')){curButton.text(window.wordList[status]);curButton.attr('class','btn btn-danger');curButton.attr('onclick','unlockTweetDialog()');}
if(status=='follow'){curButton.text(window.wordList[status]);curButton.attr('class','btn btn-danger');}
if(status=='unfollow'){curButton.text(window.wordList[status]);curButton.attr('class','btn btn-danger');}}
function updateButtonDataMulti(objects){objects.each(function(){updateButtonData(null,$(this))})}
function setHoverStates(){$('button[data-status]').hover(function(){if($(this).attr('data-status')=='following'){$(this).attr('data-old-status','following');$(this).attr('data-status','unfollow');updateButtonData(null,$(this));}
if($(this).attr('data-status')=='notfollowing'){$(this).attr('data-old-status','notfollowing');$(this).attr('data-status','follow');updateButtonData(null,$(this));}},function(){if($(this).attr('data-status')=='follow'||$(this).attr('data-status')=='unfollow')
{$(this).attr('data-status',$(this).attr('data-old-status'));updateButtonData(null,$(this));}});}
function assignLightboxAvatars(){$(".lightb-avatar").colorbox({rel:'lightb-avatar',scrolling:false,current:"",slideshow:true,slideshowAuto:false,opacity:0.6,width:"60%",height:"60%"});}
function friendshipDestroy(id){var curButton=$('#fs'+id);var scrname=curButton.attr('data-screenname');var sourcePage=curButton.attr('data-sourcepage');curButton.attr('data-status','processing');updateButtonData(id,null);if(typeof yaCounter16513888!='undefined'){yaCounter16513888.hit('/friendshipDestroy','friendshipDestroy: '+scrname);}
if(typeof _gaq!=="undefined"&&_gaq!==null){_gaq.push(['_trackPageview','/friendshipDestroy']);}
$.ajaxq("friendshipDestroy",{type:"GET",url:"/commons/friendshipDestroy/"+id+"/"+scrname+"/"+sourcePage,success:function(data){if(data=='200'){curButton.attr('data-status','notfollowing');$('#noFriends').text(parseInt($('#noFriends').text())-1);$('#noUnfollowers').text(parseInt($('#noUnfollowers').text())-1);$('#noPassives').text(parseInt($('#noPassives').text())-1);}else if(data=='710'){var allFsButtons=$("button[id^='fs']");allFsButtons.attr('data-status','locked_following');updateButtonDataMulti(allFsButtons);}else if(data=='711'){document.location.href="/errors/index/711/";}else if(data=='401'){curButton.attr('data-status','following');notAuthedDialog();}else{curButton.attr('data-status','following');$.pnotify({text:window.wordList['general-fracterror'],delay:2000,type:'error'});}
updateButtonData(id,null);},error:function(){$.pnotify({text:window.wordList['general-fracterror'],delay:2000,type:'error'});}})}
function friendshipCreate(id){var curButton=$('#fs'+id);var scrname=curButton.attr('data-screenname');var sourcePage=curButton.attr('data-sourcepage');curButton.attr('data-status','processing');updateButtonData(id,null);if(typeof yaCounter16513888!='undefined'){yaCounter16513888.hit('/friendshipCreate','friendshipCreate: '+scrname);}
if(typeof _gaq!=="undefined"&&_gaq!==null){_gaq.push(['_trackPageview','/friendshipCreate']);}
$.ajaxq("friendshipCreate",{type:"GET",url:"/commons/friendshipCreate/"+id+"/"+scrname+"/"+sourcePage,success:function(data){if(data=='200'){curButton.attr('data-status','following');$('#noFriends').text(parseInt($('#noFriends').text())+1);$('#noNotfollowing').text(parseInt($('#noNotfollowing').text())-1);}else if(data=='710'){var allFsButtons=$("button[id^='fs']");allFsButtons.attr('data-status','locked_notfollowing');updateButtonDataMulti(allFsButtons);}else if(data=='711'){document.location.href="/errors/index/711/";}else if(data=='401'){curButton.attr('data-status','notfollowing');notAuthedDialog();}else{curButton.attr('data-status','notfollowing');$.pnotify({text:window.wordList['general-fracterror'],delay:2000,type:'error'});}
updateButtonData(id,null);},error:function(){$.pnotify({text:window.wordList['general-fracterror'],delay:2000,type:'error'});}})}
function notAuthedDialog(){var width;var height;if(isMobilePhone()){width="250px";height="600px";}else{width="800px";height="450px";}
$.colorbox({width:width,height:height,iframe:true,href:"/errors/index/401/true",opacity:0.6});}
function notOwnerDialog(){var notOwnerStr=window.wordList['general_notowner'];notOwnerStr=notOwnerStr.replace("%s",'"'+window.titleScreenName+'"');alert(notOwnerStr+'.');}
function unlockTweetDialog(){var width;var height;if(isMobilePhone()){width="250px";height="750px";}else{width="500px";height="400px";}
$.colorbox({width:width,height:height,iframe:true,href:"/tools/unlock",opacity:0.6});}
function sendUnlockTweet(m,id){var curButton=$('#'+id);curButton.text(window.wordList['processing']);curButton.attr('onclick','');curButton.attr('data-status','processing');$.ajax({type:"GET",url:"/commons/sendUnlockTweet/",data:"tweetText="+m,success:function(data){if(data=='200'){$("#unlockDialogInitial").hide();$("#UnlockDialogSuccess").show();parent.location.href=parent.location.href+'?unlocked=1';}else if(data=='401'){document.location.href="/errors/index/401";}else{curButton.text(window.wordList['tweetle']);curButton.attr('data-status','initial');curButton.attr('onclick','sendUnlockTweet(\''+m+'\',\''+id+'\')');curButton.attr('class','btn btn-primary');$.pnotify({text:window.wordList['general-fracterror'],delay:2000,type:'error'});}},error:function(){}})}
function sendGeneralTweet(m,id,type){var curButton=$('#'+id);curButton.text(window.wordList['processing']);curButton.attr('onclick','');curButton.attr('data-status','processing');$.ajax({type:"GET",url:"/commons/sendGeneralTweet/",data:{tweetText:m,tweetType:type},success:function(data){if(data=='200'){$("#sendTweetInitial").hide();$("#sendTweetSuccess").show();}else if(data=='401'){document.location.href="/errors/index/401";}else{curButton.text(window.wordList['tweetle']);curButton.attr('data-status','initial');curButton.attr('onclick','sendUnlockTweet(\''+m+'\',\''+id+'\')');curButton.attr('class','btn btn-primary');$.pnotify({text:window.wordList['general-fracterror'],delay:2000,type:'error'});}},error:function(){}})}
function contactEmailDialog(){$.colorbox({width:"700px",height:"600px",iframe:true,href:"/tools/contact",opacity:0.6});}
function sendContactEmail(){var n=$('#name').val();var e=$('#email').val();var s=$('#subject').val();var m=$('#message').val();$.ajax({url:"/commons/sendContactEmail/",type:"GET",data:{name:n,email:e,subject:s,message:m},success:function(data){if(data=='200'){$("#contactDialogInitial").hide();$("#contactDialogSuccess").show();setTimeout("parent.$.colorbox.close();",5000);}else{$.pnotify({text:window.wordList['general-fracterror'],delay:2000,type:'error'});}},error:function(){$.pnotify({text:window.wordList['general-fracterror'],delay:2000,type:'error'});}})}
function biglockDialog(){var width;var height;if(isMobilePhone()){width="250px";height="750px";}else{width="500px";height="400px";}
$.colorbox({width:width,height:height,iframe:true,href:"/tools/biglock",opacity:0.6});}
function redirectToBiglockPage(){document.location.href="/errors/index/711/";}
function imageResizeEffect(){$('img.avatar_resizable').each(function(){var imageSourceNormal=$(this).attr("src");var imageSourceBig=$(this).attr("src").replace("_normal","");var w=$(this).attr("width");var h=$(this).attr("height");var resizeTimes=1.5;$(this).hover(function(){$(this).attr('src',imageSourceBig);$(this).attr('width',w*resizeTimes);$(this).attr('height',h*resizeTimes);},function(){$(this).attr('src',imageSourceNormal);$(this).attr('width',w);$(this).attr('height',h);})});}
function resizeResponsiveElements(){var width=window.innerWidth||document.documentElement.clientWidth;$("#latestsignins div img").each(function(){var oldSrc=$(this).attr('src');var newSrc,newWidth,newHeight;if(width>=768){newSrc=oldSrc.replace('_mini.','_bigger.');newWidth=73;newHeight=73;}else if(width>=480){newSrc=oldSrc.replace('_mini.','_normal.');newWidth=48;newHeight=48;}
$(this).attr('src',newSrc);$(this).attr('width',newWidth);$(this).attr('height',newHeight);});if(width>=980){$("#youtThumb").hide();$("#youtEmb iframe").attr("src",$("#youtEmb iframe").data("src"));$("#youtEmb").show();}}
function isMobilePhone(){var ua=navigator.userAgent.toLowerCase();if((ua.match(/iphone/i))||(ua.match(/android/i))||(ua.match(/ipod/i))||(ua.match(/symbian/i))||(ua.match(/blackberry/i))||(ua.match(/mobile/i))||(ua.match(/opera mini/i)))
{return true;}else{return false;}}
function isTurkishSpeaker(){var language=window.navigator.userLanguage||window.navigator.language;if(language.indexOf("tr")!=-1){return true;}else{return false;}}
function isTurkishMainPage(){if((document.URL=="http://twitpalas.com/")||(document.URL=="http://twitpalas.com/tur/")||(document.URL=="http://twitpalas.com/index.html")||(document.URL.indexOf("http://twitpalas.com/?utm")>=0))
{return true;}else{return false;}}
function showFacebookLikeDialog(){if(document.URL.indexOf("logged_in")>=0){if(!isMobilePhone()){if($('#facebook_box').length!=0){if(document.cookie.indexOf('visited=true')==-1){var sevenDays=1000*60*60*24*7;var expires=new Date((new Date()).valueOf()+sevenDays);document.cookie="visited=true;expires="+expires.toUTCString()+";path=/";$.colorbox({inline:true,width:"300px",height:"430px",href:"#facebook_box",opacity:0.7});}}}}}
function setWordList(){if($('#wordList').attr('data-table-processing')===undefined){return;}
window.wordList['processing']=$('#wordList').attr('data-table-processing');window.wordList['following']=$('#wordList').attr('data-table-following');window.wordList['unlocked_following']=$('#wordList').attr('data-table-unlocked_following');window.wordList['notfollowing']=$('#wordList').attr('data-table-notfollowing');window.wordList['unlocked_notfollowing']=$('#wordList').attr('data-table-unlocked_notfollowing');window.wordList['locked_following']=$('#wordList').attr('data-table-locked_following');window.wordList['locked_notfollowing']=$('#wordList').attr('data-table-locked_notfollowing');window.wordList['follow']=$('#wordList').attr('data-table-follow');window.wordList['unfollow']=$('#wordList').attr('data-table-unfollow');window.wordList['sProcessing']=$('#wordList').attr('data-datatables-sProcessing');window.wordList['sLengthMenu']=$('#wordList').attr('data-datatables-sLengthMenu');window.wordList['sZeroRecords']=$('#wordList').attr('data-datatables-sZeroRecords');window.wordList['sInfo']=$('#wordList').attr('data-datatables-sInfo');window.wordList['sInfoEmpty']=$('#wordList').attr('data-datatables-sInfoEmpty');window.wordList['sInfoFiltered']=$('#wordList').attr('data-datatables-sInfoFiltered');window.wordList['sSearch']=$('#wordList').attr('data-datatables-sSearch');window.wordList['oPaginate_sFirst']=$('#wordList').attr('data-datatables-oPaginate_sFirst');window.wordList['oPaginate_sPrevious']=$('#wordList').attr('data-datatables-oPaginate_sPrevious');window.wordList['oPaginate_sNext']=$('#wordList').attr('data-datatables-oPaginate_sNext');window.wordList['oPaginate_sLast']=$('#wordList').attr('data-datatables-oPaginate_sLast');window.wordList['general_notowner']=$('#wordList').attr('data-general-notowner');window.wordList['general-fracterror']=$('#wordList').attr('data-general-fracterror');window.wordList['general-tweetle']=$('#wordList').attr('data-general-tweetle');}
function registerAjaxq(){(function($){var queues={};$.ajaxq=function(qname,opts){var deferred=$.Deferred(),promise=deferred.promise();promise.success=promise.done;promise.error=promise.fail;promise.complete=promise.always;var clonedOptions=$.extend(true,{},opts);enqueue(function(){var jqXHR=$.ajax.apply(window,[clonedOptions]).always(dequeue);jqXHR.done(function(){deferred.resolve.apply(this,arguments);});jqXHR.fail(function(){deferred.reject.apply(this,arguments);});});return promise;function enqueue(cb){if(!queues[qname]){queues[qname]=[];cb();}
else{queues[qname].push(cb);}}
function dequeue(){var nextCallback=queues[qname].shift();if(nextCallback){nextCallback();}
else{delete queues[qname];}}};$.each(["getq","postq"],function(i,method){$[method]=function(qname,url,data,callback,type){if($.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return $.ajaxq(qname,{type:method==="postq"?"post":"get",url:url,data:data,success:callback,dataType:type});};});$.ajaxq.isRunning=function(){for(var i in queues){if(queues.hasOwnProperty(i)){return true;}}
return false;};})(jQuery);}