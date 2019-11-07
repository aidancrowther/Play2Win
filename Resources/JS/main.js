window.onload = () => {

    $('#menu').append(makeTable('test', 'data'));
    $('#menu').append(makeTable('test2', 'data'));
    console.log('boop');
}

let makeTable = (type, data) => {
    let subTable = '\
    <div id="'+type+'" class="row header">\
    <div class="col-sm-12">\
    '+type+'\
    </div></div>\
    <div id="'+type+'-body" class="row body">\
    <div class="col-sm-12">\
    '+data+'\
    </div></div>';

    return subTable;
}