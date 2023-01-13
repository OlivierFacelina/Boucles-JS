// bool

let bool = true;
let friends = '';
while(bool){
    let friend = window.prompt('Renseignez un ami ou q pour quitter');
    if(friend === 'q'){
        break;
    }
    friends += ` ${friend}`;
}
window.alert(friends);