
javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.4.2",function($,L){




$("iframe,object,embed,input[type=image],ins").hide();
    $("div,table").live("mouseover mouseout click", function (c) {
        c.type == "mouseover" ? $(this).css({
            border: "2px solid red"
        }) : $("div,table").css({
            border: "none"
        });
        if (c.type == "click") {
            $("link[type='text/css'],link[rel='stylesheet'],script,style,noscript").remove();
            $("body").empty();
            $(this).appendTo("body");
            c = $("title").text();
            $("head").empty();
            $("head").append("<title>" + c + "</title>");
            $("head").append('<style type="text/css">@media print{div,table {width:100% !important;font-family:Garamond,"Times New Roman",serif !important;font-size:14pt !important;}}</style>');
            var b = '<hr>Original web page:&nbsp;<a href="' + $(document).attr("location").href + '" title="' + c + '"><i>' + c + "</i></a><hr>";
            $(this).removeAttr("style").removeAttr("class");
            $(this).find("*").removeAttr("style").removeAttr("class").removeAttr("align");
            $(this).append(b).prepend(b);
            var lnk='#54A3C1';
            var txt='#DEC37C';
            var bck='#26170F';
            var brd='#7A0000';
            var hdg='#D97C0B';
            $(this).css({
                display: "block",
                font: "21px/1.618 Georgia, serif",
                color: txt,
                width: "62%",
                margin: "10px auto"
            });
            $(this).find("div,p").css({
                "margin": "0.618em 0",
            });
            $(this).find("table").css({
                "margin": "20px auto",
                "border": "1px dotted " + brd
            });
            $(this).find("td").css({
                "font": "21px/1.618 Georgia, serif",
                "color": txt,
                "border": "1px dotted " + brd
            });
            $("body,table").css({
                "background-color": bck
            });
            $("h1,h2,h3,h4,h5,h6").css({
                "line-height": "1.3",
                color:hdg
            });
            $("a").css({
                color: lnk
            });
            $("img").css({
                "display": "block",
                "margin": "10px"
            });
            $("div,table").die("mouseover mouseout click");
            $('html, body').scrollTop(0);
        }
        return false
    });



    
});
