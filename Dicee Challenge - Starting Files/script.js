const randnum = Math.floor(Math.random()*6)+ 1
const diceimage = 'images/dice' + randnum + '.png';
document.querySelectorAll('img')[0].setAttribute('src', diceimage);

const srandnum = Math.floor(Math.random()*6)+ 1
const sdiceimage = 'images/dice' + srandnum + '.png';
document.querySelectorAll('img')[1].setAttribute('src', sdiceimage);


if(randnum>srandnum){
    document.querySelector('h1').innerHTML='player 1 wins !';
} else if(randnum<srandnum){
    document.querySelector('h1').innerHTML='player 2 wins !';
}else{
    document.querySelector('h1').innerHTML="it's a draw !";
}