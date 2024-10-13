const elem = document.getElementById('ahay');
function handleClick() {
  elem.style.filter = "blur(0px)";
}

elem.addEventListener('click', handleClick);

