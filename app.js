const button = document.querySelector('.add');
const output = document.querySelector('h3');
const remove =document.querySelector('.remove');

let count=0;


button.addEventListener('click', () => {
  count++,
  output.innerHTML=count;
})
remove.onclick = () =>{
  count--;
  output.innerHTML=count;
}

