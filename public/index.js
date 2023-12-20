///////////////////////////////// FUNCTION COLD STORAGE /////////////////////////////////////
function InitialSetup() {
    $.get('/rocks', (data, error) => {
        if (error) { console.error(error); };
        console.log(data[0])
        for (let i = 0; i < data.length; i++) {
            let div = $('<div></div>');
            let p1 = $('<p></p>');
            let img = $('<img>', {class: 'rockImg', src: 'resources/petRock.png'});
            div.addClass('rocks').attr('id', data[i].id).appendTo('.rockContainer');          
            p1.addClass('rockText').text(data[i].firstname + ' ' + data[i].lastname).appendTo(div);
            img.appendTo(div);
        }
    })
}

///////////////////////////////////////// SETUP /////////////////////////////////////////////
InitialSetup();

////////////////////////////////////// CLICK HANDLER ////////////////////////////////////////
let selected = '';

$('.rockContainer').click((event) => {
    console.log('clicking ', event.target.children[0].innerText);
    $(selected).removeClass('selected');
    selected = '#' + event.target.id;
    $(selected).addClass('selected');
    $('.nextContainer').empty().append('<h1 class=\'containerHeader\' >' + event.target.children[0].innerText + '\'s Rock Collection' + '</h1>');
    $.get('/rocks/' + event.target.id, (data, error) => {
        if (error) { console.error(error); };
        for (let i = 0; i < data.length; i++) {
            let div = $('<div></div>');
            let p1 = $('<p></p>');
            let img = $('<img>', {class: 'rockImg', src: 'resources/petRock.png'});
            div.addClass('rocks').attr('id', data[i].id).appendTo('.nextContainer');          
            p1.addClass('rockText').text(data[i].firstname + ' ' + data[i].lastname).appendTo(div);
            img.appendTo(div);
        }
    })
})