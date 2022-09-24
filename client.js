$(document).ready(onReady);

let workers = [];

function onReady(){
    $('#addEmployee').on('submit', sendData);
    $('#listEmployee').on('click','.delete', onDelete);
}