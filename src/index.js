// write your code here
fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(ramens => updateRamen(ramens))

const menu = document.getElementById('ramen-menu')


function updateRamen(ramens){
    ramens.forEach(ramen => {
        const imgHolder = document.createElement('img')
        imgHolder.src = ramen.image
            menu.appendChild(imgHolder)
        imgHolder.names = ramen.name
        imgHolder.restaurants = ramen.restaurant
        imgHolder.ratings = ramen.rating
        imgHolder.comments = ramen.comment
    })

    
    let currentImg = document.querySelector('.detail-image')
    let ramenName = document.querySelector('.name')
    let ramenRest = document.querySelector('.restaurant')
    let ramenRating = document.getElementById('rating-display')
    let ramenComment = document.getElementById('comment-display')
    menu.addEventListener('click', (e) => {
        currentImg.src = e.target.src
        ramenName.textContent = ''
        ramenRest.textContent = ''
        ramenRating.textContent = ''
        ramenComment.textContent = ''
        ramenName.append(e.target.names)
        ramenRest.append(e.target.restaurants)
        ramenRating.append(e.target.ratings)
        ramenComment.append(e.target.comments)
    })
    
    const ramenForm = document.getElementById('new-ramen')
    ramenForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const imgHolder2 = document.createElement('img')
        imgHolder2.src = document.getElementById('new-image')
            menu.appendChild(imgHolder2)
        imgHolder2.names = document.getElementById('new-name')
        imgHolder2.restaurants = document.getElementById('new-restaurant')
        imgHolder2.ratings = document.getElementById('new-rating')
        imgHolder2.comments = document.getElementById('new-comment')
    })
    
}