

















$(document).ready(function () {
    const gridContainer = $('.grid-container');

    
    for (let i = 0; i < 16; i++) {
        const square = $('<div></div>')
            .addClass('square')
            .on('click', function () {
                
                $(this).toggleClass('toggled');
            });
        gridContainer.append(square);
    }
});




