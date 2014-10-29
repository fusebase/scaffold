/* function to force footer to bottom */
function forceFooter() {
    var footer = $("#footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
}

/* page load */
$(document).ready(function() {

    /* foundation settings */
    $(document).foundation({
        reveal : {
            animation_speed: 150
        },
        tab: {
            callback : function(tab) {
                forceFooter();
            }
        }
    });
    
    /* move footer to bottom */
    $(window).bind("load", function () {
        forceFooter();
    });

});
