$(document).ready(function() {

    $('input.addNote').focus();
    
    var noteList = $.extend($('ul.notes'), {
        addNote: function(text) {
            var newNote = $('<li></li>').text(text).addClass('note');
            $('.notes').prepend(newNote);
            checkbox = $('<input></input>').attr('type','checkbox').addClass('status').click(function(){
                if(this.checked)
                    $(this).parent().addClass('checked')
                else
                    $(this).parent().removeClass('checked')
            });
            $(newNote).append(checkbox);
        }
    });

    $('.addNote').bind('enterKey',function(e){
        if ( $(this).val()!="" ) {
            noteList.addNote($(this).val());
            $(this).val('');
        }
    });
    
    $('.addNote').keyup(function(e){
        if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
    });
    
});
