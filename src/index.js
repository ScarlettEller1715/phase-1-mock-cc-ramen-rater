document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/ramens')
        .then(res => res.json())
        .then(data => { data.forEach((e) => {
            printRamenImages(e)
        })})
    const form = document.querySelector('#new-ramen')
    form.addEventListener('submit', (submission) => {
        submission.preventDefault()
        printSubmittedRamen(submission)
    })
})

function printRamenImages(ramen) {
    const menu = document.querySelector('#ramen-menu')
    let menuPic = document.createElement('img')
        menuPic.src = `${ramen.image}`
        menu.appendChild(menuPic)

    menuPic.addEventListener('click', () => {
        printRamenInfo(ramen)
    })
}


function printRamenInfo(ramen) {
    const display = document.querySelector('#ramen-detail')
    const replacePic = document.querySelector('.detail-image')
        replacePic.src =`${ramen.image}`
    const ramenName = document.querySelector('.name')
        ramenName.textContent = `${ramen.name}`
    const ramenrestaurant = document.querySelector('.restaurant') 
        ramenrestaurant.textContent = `${ramen.restaurant}`
    const ramenRating = document.querySelector('#rating-display')
        ramenRating.textContent = `${ramen.rating}`
    const ramenComment = document.querySelector('#comment-display')
        ramenComment.textContent = `${ramen.comment}`
}

function printSubmittedRamen(newRamen) {
    let newImage = (newRamen.target.newImage.value)
    
    const menu = document.querySelector('#ramen-menu')
    let menuPic = document.createElement('img')
        menuPic.src = `${newImage}`
        menu.appendChild(menuPic)
    
    menuPic.addEventListener('click', () => {
        printNewRamenInfo(newRamen) 
    })
}

function printNewRamenInfo(newRamen) {
    let newName = (newRamen.target.newName.value)
    let newRestaurant = (newRamen.target.newRestaurant.value)
    let newImage = (newRamen.target.newImage.value)
    let newRating = (newRamen.target.newRating.value)
    let newComment = (newRamen.target.newComment.value)

    const display = document.querySelector('#ramen-detail')
    const replacePic = document.querySelector('.detail-image')
        replacePic.src =`${newImage}`
    const ramenName = document.querySelector('.name')
        ramenName.textContent = `${newName}`
    const ramenrestaurant = document.querySelector('.restaurant') 
        ramenrestaurant.textContent = `${newRestaurant}`
    const ramenRating = document.querySelector('#rating-display')
        ramenRating.textContent = `${newRating}`
    const ramenComment = document.querySelector('#comment-display')
        ramenComment.textContent = `${newComment}`
}