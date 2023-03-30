import axios from 'axios'



const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cards = document.createElement('div')
  const headlines = document.createElement('div')
  const theAuthor = document.createElement('div')
  const imageContainer = document.createElement('div')
  const image = document.createElement('img')
  const authorNames = document.createElement('span')


  cards.classList.add('card')
  headlines.classList.add('headline')
  theAuthor.classList.add('author')
  imageContainer.classList.add('img-container')

  // theAuthor.textContent = article.
  headlines.textContent = article.headline;
  image.src = article.authorPhoto
  authorNames.textContent = article.authorName;
  // const theImg = imageContainer.appendChild(image)
  // authorName.textContent = article
  console.log(headlines)
  cards.appendChild(headlines)
  cards.appendChild(theAuthor)
  cards.appendChild(imageContainer)
  imageContainer.appendChild(image)
  theAuthor.appendChild(imageContainer)
  theAuthor.appendChild(authorNames)
  // cards.appendChild(writer)
  // cards.appendChild(theImg)



  return cards

}


const cardAppender = async (selector) => {
  const createCard = document.querySelector(selector)
  const theCard = document.createElement('div')
    theCard.classList.add('card')
    // createCard.appendChild(Card(theCard))
  // console.log(createCard)
  // console.log(createCard)
  let res = await axios.get('http://localhost:5001/api/articles')
  let theTech = res.data.articles.technology
  theTech.forEach(tech => {
    createCard.appendChild(Card(tech))
  })
  // console.log(theTech)
  // console.log(theBootstrap)
  let theBootstrap = res.data.articles.bootstrap
    theBootstrap.forEach(boot => {
      createCard.appendChild(Card(boot))
    })

    let theJs = res.data.articles.javascript
      theJs.forEach(js => {
        createCard.appendChild(Card(js))
      })

      let theJq = res.data.articles.jquery
        theJq.forEach(query =>{
          createCard.appendChild(Card(query))
        })

        let theNode = res.data.articles.node
          theNode.forEach(node => {
            createCard.appendChild(Card(node))
          })

          // createCard.appendChild(Card(selector))
  // theTech.forEach(tech => {
  //   const techName = document.createElement('div')
  //   techName.classList.add()
  // })

  // theBootstrap.forEach(boot => {
  //   const theHead = boot.headline
  //   const theName = boot.authorName
  //   const thePhoto = boot.authorPhoto
  //   const theId = boot.id
  //   theCard.classList.add('card')
    // theHead.classList.add('headline')
    // theName.classList.add('author')
    // thePhoto.classList.add('img-container')
    // theCard.textContent = theHead;
    // theCard.appendChild(Card(theHead))
    // createCard.appendChild(Card(theCard))

    // theHead.classList.add('headline')
    // theName.classList.add('author')
    // console.log(theHead, theName, thePhoto, theId)
    // createCard.appendChild(Card(theHead))
    // createCard.appendChild(Card(theName))
    // createCard.appendChild(Card(thePhoto))
    // createCard.appendChild(Card(theId))
  // })
  // let theJS = res.data.articles.javascript[0].authorName
  // let theJquery = res.data.articles.jquery
  // let theNode = res.data.articles.node;
  // let theTech = res.data.articles.technology;
  // createCard.appendChild(Card(theBootstrap))
  // createCard.appendChild(Card(theJS))
  // createCard.appendChild(Card(theJquery))
  // createCard.appendChild(Card(theNode))
  // createCard.appendChild(Card(theTech))
  // console.log(longData)
  // let theRes = res.data.articles.bootstrap
  // console.log(theRes)
  // createCard.appendChild(theRes)

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
