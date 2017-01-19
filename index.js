var spazio =  documen.getElementsByTagName('h2');
fucntion sommaRicorsiva (x, y) {
    debugger:
    if(y > 0) {
        sommaRicorsiva(x+1, y-1)
    }else{
        return document.write(x);
    }

}

console.log(sommaRicorsiva(10, 10));
