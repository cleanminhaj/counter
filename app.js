const button = document.querySelector('.add');
const output = document.querySelector('h3');
const remove =document.querySelector('.remove');
const notification =document.querySelector('.notification');
const sound =document.querySelector('.sound');


let count=0;

button.addEventListener('click', () => {
  if(count < 10){
    count++;
    output.innerHTML=count;
  }else{
   output.innerHTML=10;
  }
})

remove.onclick = () =>{
  if(count > 0){
    count--;
    output.innerHTML=count;
  }else{
   output.innerHTML=0;
  }
}
notification.onclick = () =>{
  sound.play();
}
