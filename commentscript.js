const post=document.getElementById("post");
const input = document.getElementById('comment')
const name= document.getElementById('Name')
const ul = document.querySelector('ul')
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = (text) => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

post.addEventListener('click', function onchange(event){
	const input2 = document.getElementById('comment').value
const name1= document.getElementById('Name').value
const input1= name1.concat(" :  ",input2);
	itemsArray.push(input1)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input1)
 
	input.value=''
	name.value=''
    
	
}
)
data.forEach((item) => {
  liMaker(item)
})
