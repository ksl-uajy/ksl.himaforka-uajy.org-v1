function home(){
    document.getElementById("aboutUs").className="hide";
}

function showAboutUs(){
    document.getElementById("aboutUs").className="show";
}

function showSection(idSection){
    var sectionIDs = ['aboutUs'];

    document.getElementById(idSection).className="show";

}

function openURL(url){
    var buka = window.open(url, '_blank');
    buka.focus();
}