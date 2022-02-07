//extra scripts

$("#open-history").click(() => {

    $("#btn-modalH").prop("checked", true);

});

$("#clear").click(() => {
    window.location.reload();
});

$("#open-modal").one( "click", () => {

    $(function(){

        let i = 1;
        let interval = setInterval(function()
        {
            $('div.col-img img').attr({ src: `/images/animation/e${i}.png` });
            i++;
            if(i === 5){
                i=1;
                $('div.col-img img').attr({ src: `/images/animation/e1.png` });
            }
        
        }, 250);

    });  

});


