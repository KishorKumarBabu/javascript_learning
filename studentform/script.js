var nam=document.getElementById("nam")
var ag=document.getElementById("ag")
var cour=document.getElementById("cour")
var data=document.getElementById("data")
function stform()
{
    var innam=nam.value
    var inag=ag.value
    var ingen=document.querySelector('input[name="gender"]:checked').value
    var incour=cour.value
    var indata=data.value
    let newRow = document.createElement('tr');

    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    let cell4 = document.createElement('td');
    let cell5 = document.createElement('td');
    let cell6 = document.createElement('td');
    cell1.textContent=innam
    cell2.textContent=inag
    cell3.textContent=incour
    cell4.textContent=ingen
    cell5.textContent=indata
    var del=document.createElement('button')
    del.textContent="delete"
    del.onclick=dele
    del.style.backgroundColor="red"
    cell6.appendChild(del);
    newRow.appendChild(cell1)
    newRow.appendChild(cell2)
    newRow.appendChild(cell3)
    newRow.appendChild(cell4)
    newRow.appendChild(cell5)
    newRow.appendChild(cell6)
    document.getElementById('two').appendChild(newRow)
    function dele(){
        newRow.remove()
    }
    
}

