let id = document.querySelectorAll('.id');

id.forEach((element, index) => {
    element.innerHTML = `0${index + 1}`;
})