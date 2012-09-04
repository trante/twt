"use strict";
var mainPage='http://twitpalas.com/';

jQuery.fn.dataTableExt.oSort['title-numeric-asc']  = function(a,b) {
    var x = a.match(/title="*(-?[0-9\.]+)/)[1];
    var y = b.match(/title="*(-?[0-9\.]+)/)[1];
    x = parseFloat( x );
    y = parseFloat( y );
    return ((x < y) ? -1 : ((x > y) ?  1 : 0));
};
jQuery.fn.dataTableExt.oSort['title-numeric-desc'] = function(a,b) {
    var x = a.match(/title="*(-?[0-9\.]+)/)[1];
    var y = b.match(/title="*(-?[0-9\.]+)/)[1];
    x = parseFloat( x );
    y = parseFloat( y );
    return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};
// userstable da bulunan name kolonu onceden html better ile siralaniyordu
jQuery.fn.dataTableExt.oSort['html-better-asc']  = function(a,b) {
    var x = $(a).text();
    var y = $(b).text();
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
};
jQuery.fn.dataTableExt.oSort['html-better-desc']  = function(a,b) {
    var x = $(a).text();
    var y = $(b).text();
    return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};


$(document).ready(function() {

    showFacebookLikeDialog();

    documentReadyWorks();

    if ($('#usersTableOuter').length != 0) {

        if ($('#usersTableAjaxContent').length != 0) {

            // normalde yukleniyor imagei kapali geliyor. bu onu aciyor
            $('#loadingTable').show();

            var tableType = $('#usersTableOuter').attr('data-tabletype');
            //alert(tableType);
            var screenName = $('#usersTableOuter').attr('data-screenname');
            //alert(screenName);

            $.ajax({
                type: "POST",
                url: "/tools/createUsersTableFromScreenname/" + tableType + "/" + screenName,
                success: function(data) {
                    //if (screenName == "brc_brc41") { alert('data:' + data + ' geldi'); }
                    // alert('data:' + data + ' geldi');
                    // alert('screenName data:' + data + ' geldi');
                    // eger hata donduyse redirect et
                    if (data == '4013') { data = '401'; }
                    if (data == '4043') { data = '404'; }

                    if ( data == '401' || data == '403' || data == '0' || data == '404' || data == '503') {
                        //if ( data == '401' || data == '403' || data == '0' || data == '404' || data == '503') {
                        // eski document.location.href="/signins/error/" + data + "/false/" + screenName;
                        document.location.href="/signins/error/" + data;
                        //alert(data);
                    } else {
                        $("#loadingTable").hide();
                        $("#usersTableAjaxContent").html(data);
                        $("#usersTableAjaxContent").show();

                        startDatatables();
                        documentReadyWorks();
                        FB.XFBML.parse();
                    }
                },
                error: function(xhr, status, error) {
                    //$("#loadingTable").hide();
                    //alert('alt errora girdi , ' + xhr.statusText + ' , ' + error);
                    //$("div.deneme").html('birseyler bozukkkkkkkkkkkkkkkk');
                }
            });
        }

        if ($('#usersTableNotAjaxContent').length != 0) {
            startDatatables();
            documentReadyWorks();
            FB.XFBML.parse();
        }
    }

    // baska kullanici gozetle formu, araclar da var
    $('#otherUserForm').change(function() {
        var screenName = $('input:text[name=screenName]').val();
        var tableType = $('input:radio[name=optionsRadios]:checked').val();

        // kullanici bazen nickin basina @ koyuyor, onu engellemek icin
        if (screenName.indexOf("@") == 0){
            screenName = screenName.replace("@","");
        }

        if (screenName) {
            var newAction='/tools/'+tableType+'/'+screenName;
            $(this).attr('action', newAction);
            $('button:submit').removeAttr('disabled');
        } else {
            $('button:submit').attr('disabled', 'disabled');
        }
    });

    if ($('#signinedTable').length != 0) {
        $('#signinedTable').dataTable( {
            "bPaginate":false
        });
    }


    /*if ($('#tweetsTable').length != 0) {
     optimizeForMobile();
     }*/

});


////  This event is limited to <input> elements, <textarea> boxes and <select> elements.
//$(document).change(function () {
//});



function documentReadyWorks() {
    $("[rel=popover]").popover({});
    $("[rel=tooltip]").tooltip();

    $('.dropdown-toggle').dropdown();

    $(".lightb-contact").colorbox({
        iframe:true, width:"20%", height:"80%", opacity:0.6
    });

    $(".lightb-screensh").colorbox({
        scrolling: false, maxWidth:"80%", maxHeight:"90%", opacity:0.6
//        onComplete:function(){
//            $('.cboxPhoto').unbind().click($.colorbox.close);
//        }
    });

//    $(".lightb-youtube").colorbox({iframe:true, innerWidth:425, innerHeight:344});

    $(".lightb-modal").colorbox({
        scrolling: false,
        iframe:true, width:"80%", height:"80%"
    });

    imageResizeEffect();

    //updateTableFuncts();

}

function startDatatables() {
    var mobileUser = $('#usersTable').hasClass('mobile');

    var paginationType;
    var aoColumnDefsType;
    if (mobileUser) {
        paginationType = "two_button";
        aoColumnDefsType = [
            { "bSortable":false, "aTargets":[ 0 ] },  //avatar
            { "bSortable":false, "aTargets":[ 2 ] }  //follow state
        ];
    } else if (!mobileUser) {
        paginationType = "full_numbers";
        aoColumnDefsType = [
            // su anda standart kullaniliyor { "sType":"html-better", "aTargets":[ 2 ] },  name
            { "sType":"title-numeric", "aTargets":[ 3 ] },  //popularity
            { "sType":"title-numeric", "aTargets":[ 7 ] },  //tweet activity
            { "bSortable":false, "aTargets":[ 0 ] },  //avatar
            { "bSortable":false, "aTargets":[ 8 ] },  //last tweet
            { "bSortable":false, "aTargets":[ 9 ] },  //follow state
            { "sClass":"center", "aTargets":[ 2, 3, 4, 5, 6, 7 ] }
        ];
    }

    var oTable = $('#usersTable').dataTable(
        {
            "aoColumnDefs":aoColumnDefsType,
            "sPaginationType": paginationType,

            "bPaginate":true,
            // "bFilter": false,
            "sDom":'<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>',

            /* "bStateSave":true,
             "fnStateSave":function (oSettings, oData) {
             localStorage.setItem('DataTables_' + window.location.pathname, JSON.stringify(oData));
             },
             "fnStateLoad":function (oSettings) {
             return JSON.parse(localStorage.getItem('DataTables_' + window.location.pathname));
             }, */

            "fnDrawCallback": function () { updateTableFuncts() },
            "iDisplayLength":25,
            //"sDom": 'Rlfrtip',

            // diger diller icin: http://datatables.net/plug-ins/i18n
            "oLanguage":{
                "sProcessing":"İşleniyor...",
                "sLengthMenu":"Sayfada _MENU_ Kayıt Göster",
                "sZeroRecords":"Eşleşen Kayıt Bulunmadı",
                "sInfo":"  _TOTAL_ Kayıttan _START_ - _END_ Arası Kayıtlar",
                "sInfoEmpty":"Kayıt Yok",
                "sInfoFiltered":"( _MAX_ Kayıt İçerisinden Bulunan)",
                "sInfoPostFix":"",
                "sSearch":"Bul:",
                "sUrl":"",
                "oPaginate":{
                    "sFirst":"İlk",
                    "sPrevious":"Önceki",
                    "sNext":"Sonraki",
                    "sLast":"Son"
                }
            }
        }
    );
}

//function updateTableFuncts(alertNo) {
function updateTableFuncts() {
    //if (alertNo >0) { alert("somethings changed " + alertNo) }  ;

    if (!isMobilePhone()) {
        $("[rel=popover]").popover({  });
        $("[rel=tooltip]").tooltip();

        $("[rel*=popover-left]").popover({ placement:'left' });
        $("[rel*=popover-avatar]").popover({ placement:'right', html : true });

        $(".lightb-avatar").colorbox({
            rel:'lightb-avatar',
            scrolling: false,
            current: "",
            slideshow:true, slideshowAuto:false,
            opacity:0.6,
            width:"60%" , height:"60%"   //    maxWidth:"40%",	maxHeight:"40%"
        });

        //$("details").deeets();
        $("details").deets({speed: 'fast'});
    }

    setHoverStates();

    addAdsLine();
}


// TODO: sonra sil veya duzelt
function addAdsLine() {

    // usersTable varsa ads ekler
    if ($('#usersTableOuter').length != 0) {
        var screenName = $('#usersTableOuter').attr('data-screenname');
        if (screenName == "ksokut" || screenName == "twitpalas" || screenName == "esesci") {

            //var adCode = '!.!.!.!.!.!.!.!.!.!.!.';
            var adCode='<script type="text/javascript">google_ad_client = "ca-pub-1421618425504490";  /* my advertisement */ google_ad_slot = "3810962900"; google_ad_width = 728; google_ad_height = 90; <'+'/script><script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><'+'/script>';

            var gnTr = document.createElement( 'tr' );
            var nCell = document.createElement( 'td' );
            nCell.colSpan = 20;
            nCell.innerHTML = "<mark>AAA</mark>" + adCode;
            gnTr.appendChild( nCell );

            var nTrs = $('#usersTable tbody tr');
            nTrs[3].parentNode.insertBefore( gnTr, nTrs[3] );
        }
    }

    // tweetsTable icin buraya eklemedim cunku o datatables degil
}


// eger twitter id gelirse basina "fs" ekleyip objeyi bulur,
// eger id null gelirse object olani button objesi olarak alir
function updateButtonData(id, object) {

    var curButton;
    if (id != null) {
        curButton = $('#fs' + id);
    } else if (object != null) {
        curButton = object;
        id = (object.attr('id')).slice(2); // ilk 2 karakter olan fs yi sil
    }

    // var scrname = curButton.attr('data-screenname');
    var protection = curButton.attr('data-protection');

    if (curButton.attr('data-status') == 'processing') {
        curButton.text('İşlem yapılıyor');
        curButton.attr('onclick', '');
        curButton.attr('class', 'btn btn-danger');
    }

    if ( (curButton.attr('data-status') == 'following')
        || (curButton.attr('data-status') == 'unlocked_following') ) {
//        if (protection == 0) {
        curButton.text('Takip ediliyor');
//        } else if (protection == 1) {
//            curButton.text('Talep gönderildi');
//        }
        curButton.attr('class', 'btn btn-primary');
        curButton.attr('onclick', 'friendshipDestroy(' + id + ')');
    }

    if ( (curButton.attr('data-status') == 'notfollowing')
        || (curButton.attr('data-status') == 'unlocked_notfollowing') ) {
        curButton.text('Takip edilmiyor');
        curButton.attr('class', 'btn');
        curButton.attr('onclick', 'friendshipCreate(' + id + ')');
    }

    if ( (curButton.attr('data-status') == 'locked_following')
        || (curButton.attr('data-status') == 'locked_notfollowing') ) {
        curButton.text("Kilidi aç");
        curButton.attr('class', 'btn btn-danger');
        curButton.attr('onclick', 'unlockTweetDialog()');
    }

    if (curButton.attr('data-status') == 'follow') {
        curButton.text("Takip et");
        curButton.attr('class', 'btn btn-danger');
    }

    if (curButton.attr('data-status') == 'unfollow') {
        curButton.text("Takibi bırak");
        curButton.attr('class', 'btn btn-danger');
    }
}

function updateButtonDataMulti(objects) {
    objects.each(function(){
        updateButtonData(null,$(this))
    })
}




// function setHoverStates(alertNo) {
function setHoverStates() {
    //if (alertNo >0) { alert("somethings changed " + alertNo); }

    $('button[data-status]').hover(
        function () {
            if($(this).attr('data-status') == 'following') {
                $(this).attr('data-old-status' , 'following');
                $(this).attr('data-status','unfollow');
                updateButtonData(null,$(this));
            }
            if($(this).attr('data-status') == 'notfollowing') {
                $(this).attr('data-old-status' , 'notfollowing');
                $(this).attr('data-status','follow');
                updateButtonData(null,$(this));
            }
        },
        function () {
            if ( $(this).attr('data-status') == 'follow' || $(this).attr('data-status') == 'unfollow' )
            {
                $(this).attr( 'data-status' , $(this).attr('data-old-status') );
                updateButtonData(null,$(this));
            }
        }
    );
}






function friendshipDestroy(id){
    var curButton=$('#fs' + id);
    var scrname = curButton.attr('data-screenname');
    var sourcePage = curButton.attr('data-sourcepage');

    curButton.attr('data-status', 'processing');
    updateButtonData(id,null);

    $.ajax({
        type:"GET",
        url:"/app/friendshipDestroy/" + id + "/" + scrname + "/" + sourcePage,
        success : function(data) {
            //alert('data:' + data + ' geldi');
            if (data == '200') {
                curButton.attr('data-status', 'notfollowing');
                $('#noFriends').text( parseInt ($('#noFriends').text()) - 1 );
                $('#noUnfollowers').text( parseInt ($('#noUnfollowers').text()) - 1 );
            } else if (data == '710') {
                var allFsButtons=$("button[id^='fs']");
                allFsButtons.attr('data-status', 'locked_following');
                updateButtonDataMulti(allFsButtons);
            } else if (data == '401') {
                //document.location.href="/signins/error/401";
                curButton.attr('data-status', 'following');
                notAuthedDialog();
            } else {
                curButton.attr('data-status', 'following');
                noty({"text":"Bir hata oldu. Birazdan tekrar deneyin.","theme":"noty_theme_twitter","layout":"bottomRight","type":"error","animateOpen":{"height":"toggle"},"animateClose":{"height":"toggle"},"speed":500,"timeout":5000,"closeButton":true,"closeOnSelfClick":true,"closeOnSelfOver":false,"modal":false});
            }
            updateButtonData(id,null);
        },
        error: function (xhr, ajaxOptions, thrownError) {
//            alert('alt errora girdi');    alert(xhr.statusText);      alert(thrownError);
            noty({"text":"Bir hata oldu. Birazdan tekrar deneyin.","theme":"noty_theme_twitter","layout":"bottomRight","type":"error","animateOpen":{"height":"toggle"},"animateClose":{"height":"toggle"},"speed":500,"timeout":5000,"closeButton":true,"closeOnSelfClick":true,"closeOnSelfOver":false,"modal":false});
        }
    })
}


function friendshipCreate(id){
    var curButton=$('#fs' + id);
    var scrname = curButton.attr('data-screenname');
    var sourcePage = curButton.attr('data-sourcepage');

    curButton.attr('data-status', 'processing');
    updateButtonData(id,null);

    $.ajax({
        type:"GET",
        url:"/app/friendshipCreate/" + id + "/" + scrname + "/" + sourcePage,
        success : function(data) {
            //alert('data:' + data + ' geldi');
            if (data == '200') {
                curButton.attr('data-status', 'following');
                $('#noFriends').text( parseInt ($('#noFriends').text()) + 1 );
                $('#noNotfollowing').text( parseInt ($('#noNotfollowing').text()) - 1 );
            } else if (data == '710') {
                var allFsButtons=$("button[id^='fs']");
                allFsButtons.attr('data-status', 'locked_notfollowing');
                updateButtonDataMulti(allFsButtons);
            } else if (data == '401') {
                //document.location.href="/signins/error/401";
                curButton.attr('data-status', 'notfollowing');
                notAuthedDialog();
            } else {
                curButton.attr('data-status', 'notfollowing');
                noty({"text":"Bir hata oldu. Birazdan tekrar deneyin.","theme":"noty_theme_twitter","layout":"bottomRight","type":"error","animateOpen":{"height":"toggle"},"animateClose":{"height":"toggle"},"speed":500,"timeout":5000,"closeButton":true,"closeOnSelfClick":true,"closeOnSelfOver":false,"modal":false});
            }
            updateButtonData(id,null);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            //alert('alt errora girdi');    alert(xhr.statusText);      alert(thrownError);
            noty({"text":"Bir hata oldu. Birazdan tekrar deneyin.","theme":"noty_theme_twitter","layout":"bottomRight","type":"error","animateOpen":{"height":"toggle"},"animateClose":{"height":"toggle"},"speed":500,"timeout":5000,"closeButton":true,"closeOnSelfClick":true,"closeOnSelfOver":false,"modal":false});
        }
    })
}




function notAuthedDialog(){
    var width; var height;
    if (isMobilePhone()) {
        width = "250px";  height = "600px";
    } else {
        width = "800px";  height = "450px";
    }

    $.fn.colorbox({
        width:width, height:height,
        iframe:true, href:"/signins/error/401/true",
        opacity:0.6
        //onClosed:function(){ }
    });
}



function unlockTweetDialog(){
    var width; var height;
    if (isMobilePhone()) {
        width = "250px";  height = "750px";
    } else {
        width = "500px";  height = "400px";
    }

    $.fn.colorbox({
        width:width, height:height,
        //width:"50%", height:"50%",
        iframe:true, href:"/tools/unlock",
        opacity:0.6
        //onClosed:function(){ }
    });
}



function sendUnlockTweet(m,id){
    var curButton=$('#' + id);
    curButton.text('İşlem yapılıyor');
    curButton.attr('onclick', '');
    curButton.attr('data-status', 'processing');
    $.ajax({
        type:"GET",
        url:"/app/sendUnlockTweet/",
        data: "tweetText=" + m ,
        success : function(data) {
            //alert('data:' + data + ' geldi');
            if (data == '200') {
                $("#unlockDialogInitial").hide();
                $("#UnlockDialogSuccess").show();
                parent.location.reload();
            } else if (data == '401') {
                document.location.href="/signins/error/401";
            } else {
                curButton.text('Tweetle');
                curButton.attr('data-status', 'initial');
                curButton.attr('onclick', 'sendUnlockTweet(\'' + m + '\',\'' + id + '\')');
                curButton.attr('class', 'btn btn-primary');

                noty({"text":"Bir hata oldu. Birazdan tekrar deneyin.","theme":"noty_theme_twitter","layout":"bottomRight","type":"error","animateOpen":{"height":"toggle"},"animateClose":{"height":"toggle"},"speed":500,"timeout":5000,"closeButton":true,"closeOnSelfClick":true,"closeOnSelfOver":false,"modal":false});
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
//            alert('alt errora girdi');//  alert(xhr.statusText);//  alert(thrownError);
        }
    })
}



function contactEmailDialog(){
    $.fn.colorbox({
        width:"700px", height:"550px",
        //width:"50%", height:"50%",
        iframe:true, href:"/tools/contact",
        opacity:0.6
        //onClosed:function(){ }
    });
}

// n,e,s,m,a,i - name, email, subject, message, user agent, ip
function sendContactEmail(){
    var n=$('#name').val();
    var e=$('#email').val();
    var s=$('#subject').val();
    var m=$('#message').val();
    $.ajax({
        url:"/app/sendContactEmail/",
        type:"GET",
        data: { name: n, email: e, subject: s, message: m },
        success : function(data) {
            //alert('data:' + data + ' geldi');
            if (data == '200') {
                $("#contactDialogInitial").hide();
                $("#contactDialogSuccess").show();
                setTimeout("parent.$.fn.colorbox.close();",5000);
            } else {
                noty({"text":"Bir hata oldu. Birazdan tekrar deneyin.","theme":"noty_theme_twitter","layout":"bottomRight","type":"error","animateOpen":{"height":"toggle"},"animateClose":{"height":"toggle"},"speed":500,"timeout":5000,"closeButton":true,"closeOnSelfClick":true,"closeOnSelfOver":false,"modal":false});
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            //alert('alt errora girdi');  alert(xhr.status); alert(xhr.statusText);  alert(thrownError);
            noty({"text":"Bir hata oldu. Birazdan tekrar deneyin.","theme":"noty_theme_twitter","layout":"bottomRight","type":"error","animateOpen":{"height":"toggle"},"animateClose":{"height":"toggle"},"speed":500,"timeout":5000,"closeButton":true,"closeOnSelfClick":true,"closeOnSelfOver":false,"modal":false});
        }
    })
}


/*
 // Legacy: Eskiden search tweets ajax ile yapiliyordu, o zaman bu fonksiyon kullaniliyordu
 function searchTweets(){

 // var s= $('input:text').val();
 //    $('input[name="baz"]')[0].checked = true;
 var type=$('select#searchType').val();
 var s = $('input#searchKeyword').val();


 $("#tweetsTableBottom").hide();
 $("#loadingTable").show();

 $.ajax({
 url: "/tools/createTweetsTable/" + type + "/" + s,
 type:"GET",
 success : function(data) {
 $("#loadingTable").hide();
 //alert('data:' + data + ' geldi');
 $("#tweetsTableBottom").show();
 $("#tweetsTableBottom").html(data);
 documentReadyWorks();
 },
 error: function (xhr, ajaxOptions, thrownError) {
 //alert('alt errora girdi');  alert(xhr.status); alert(xhr.statusText);  alert(thrownError);
 noty({"text":"Bir hata oldu. Birazdan tekrar deneyin.","theme":"noty_theme_twitter","layout":"bottomRight","type":"error","animateOpen":{"height":"toggle"},"animateClose":{"height":"toggle"},"speed":500,"timeout":5000,"closeButton":true,"closeOnSelfClick":true,"closeOnSelfOver":false,"modal":false});
 }
 })
 }
 */


function imageResizeEffect() {
    $('img.avatar_resizable').each(function(){
        var imageSourceNormal = $(this).attr("src");
        var imageSourceBig = $(this).attr("src").replace("_normal", "");
        var w = $(this).attr("width");
        var h = $(this).attr("height");
        var resizeTimes=1.5;
        $(this).hover(function(){
            $(this).attr('src', imageSourceBig);
            $(this).attr('width', w*resizeTimes);
            $(this).attr('height', h*resizeTimes);
        }, function(){
            $(this).attr('src', imageSourceNormal);
            $(this).attr('width', w);
            $(this).attr('height', h);
        })
    });
}


//function aa() {
//    $("#usersTable").hide();
//    $("#loadingTable").show();
//
//    setTimeout('$("#usersTable").show();',8000);
//}


// sonra sil
//$(window).bind('beforeunload', function(e) {
//    return "ATTENZIONE!!";
//});


function isMobilePhone(){
    var ua = navigator.userAgent.toLowerCase();
    if(  (ua.match(/iphone/i))
        || (ua.match(/android/i))
        || (ua.match(/ipod/i))
        || (ua.match(/symbian/i))
        || (ua.match(/blackberry/i))
        || (ua.match(/mobile/i))
        || (ua.match(/opera mini/i))
        )
    {
        return true;
    } else {
        return false;
    }
}


function isTurkishSpeaker(){
    var language = window.navigator.userLanguage || window.navigator.language;
    if (language.indexOf("tr") != -1) {
        return true;
    } else {
        return false;
    }
}



function showFacebookLikeDialog() {
//    return;
//    if(document.URL.indexOf("deneme") >= 0) {
    if(document.URL.indexOf("logged_in") >= 0) {
        //if ( isTurkishSpeaker() ) {
            if ( !isMobilePhone() ) {
                if ($('#facebook_box').length != 0) {
                    if (document.cookie.indexOf('visited=true') == -1) {
                        //var fifteenDays = 1000*60*60*24*15;
                        var sevenDays = 1000*60*60*24*7;
                        var expires = new Date((new Date()).valueOf() + sevenDays);
                        document.cookie = "visited=true;expires=" + expires.toUTCString();
                        $.fn.colorbox({inline:true, width:"300px", height:"430px", href:"#facebook_box", opacity:0.7});
                    }
                    //    }
                }
            }
        //}
    }
}


// eskiden kullaniliyordu, artik column visibility php den yapiliyor
// bu fonksiyonu "FB.XFBML.parse" den once cagir, yoksa calismiyor
/*function optimizeForMobile() {
 // mobile platform optimization
 if (isMobilePhone()) {
 //if (screenName == "twitpalas") {
 var oTable;
 oTable = $('#usersTable').dataTable();
 oTable.fnSetColumnVis(2, false, false);
 oTable.fnSetColumnVis(3, false, false);
 oTable.fnSetColumnVis(4, false, false);
 oTable.fnSetColumnVis(5, false, false);
 oTable.fnSetColumnVis(6, false, false);
 oTable.fnSetColumnVis(7, false, false);
 oTable.fnSetColumnVis(8, false, false);
 oTable.fnSetColumnVis(10, false, false);

 oTable.fnDraw();

 oTable = $('#usersTable').dataTable();
 oTable.sPaginationType("two_button");


 //var searchKeyword = $('#tweetsTable').attr('data-search-keyword');
 //if (searchKeyword == "nanay") {
 //}

 }
 } */