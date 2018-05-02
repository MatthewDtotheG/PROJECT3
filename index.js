const container = document.getElementById('container')
const wrapper = document.getElementById('wrapper')
const input = document.getElementById('input')
const find = document.getElementsByClassName('find')

container.addEventListener('submit', function(e){
  e.preventDefault()
  console.log(input.value)
  input.value = ''
})

container.addEventListener('click', function(e){
  if(e.target.id === 'cool'){
    console.log('Its working')
  } else if (e.target.className === 'find') {
    console.log('Found it')
  }

})

wrapper.addEventListener('click', function(e){
  e.target.remove()
})
