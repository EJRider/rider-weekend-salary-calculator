$(document).ready(onReady);

let workers = [];

function onReady(){
    $('#addEmployee').on('submit', sendData);
    $('#listEmployee').on('click','.delete', onDelete);
}

function onDelete(){
    console.log('in onDelete');

    $(this).parent().parent().remove();
}

function sendData(event){
    event.preventDefault();
    console.log('testing sendData');

    let workerInfo = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        iD: $('#iD').val(),
        title: $('#position').val(),
        annualSalary: $('#annualSalary').val()
    }

    cleanUp();

    workers.push(workerInfo);

    console.log(workers);

    render();

}