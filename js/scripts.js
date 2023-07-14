var menuresponsive=false;

function mostrar(){
    if(menuresponsive==false){
        document.getElementById("items-menu").className = "show";
        menuresponsive=true;
    }else{
        document.getElementById("items-menu").className = document.getElementById("items-menu").className.replace( /(?:^|\s)show(?!\S)/g , '' );
        menuresponsive=false;
    }
    
}
const mediumBp=matchMedia('(max-width: 800px)');
const changeSize = mql => {
    mql.matches
        ?menuresponsive=true
        :menuresponsive=false
    
    mostrar();
}
mediumBp.addListener(changeSize);