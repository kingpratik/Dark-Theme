function swapTheme(){
    if(document.getElementById('app').className=='day'){
        if(document.getElementById('swap').className== 'button_day'){
            document.getElementById('app').className= 'night';
            document.getElementById('swap').className = 'button_night';
        }
    }
    else{
        document.getElementById('app').className = 'day';
        document.getElementById('swap').className = 'button_day';
    }
    
}