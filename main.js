function goToPage() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
}

function goToSearch() {
    //append new input form 
    var newDiv = document.createElement('div');
    newDiv.innerHTML = document.getElementById('template').innerHTML;
    newDiv.classList.add("formClass");
    document.getElementById('dynamic-target').appendChild(newDiv);

    //new form functionality 
    function onSubmit() {

    }
}