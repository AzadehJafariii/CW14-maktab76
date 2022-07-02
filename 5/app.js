$(document).ready(function () {

    $("#parent .child").each(function(){
        $(this).html("Hello").dblclick(function(){
            $(this).html("Goodbye!")
        })
    })

})
