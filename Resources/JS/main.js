const { dialog } = require('electron').remote

window.onload = () => {

    $('#menu').append(makeTable('test', 'data'));
    $('#menu').append(makeTable('test2', 'data'));

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

function addLib(){
    dialog.showOpenDialog({ properties: ['openDirectory'] }).then((ret) => {
        let dir = ret.filePaths[0];
        console.log(dir);
    })
}