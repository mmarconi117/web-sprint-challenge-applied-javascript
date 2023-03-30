
import axios from "axios"


// const newArray = ["javascript", "bootstrap", "technology", "jquery", "node.js"]



// let parent = document.querySelector('.tab-contai4
// for (let i = 0; i < newArray.length; i++){
  //   Tabs(newArray[i])

  // }

  const Tabs = (topics) => {

    // document.querySelector('.tabs-container').appendChild(Tabs(data.data))

    // axios.get('http://localhost:5001/api/topics')
    // .then(res => {
    //   console.log(res.data)
    //  res.data.forEach(resp =>{

    //})
    // })
    // .catch(err =>{
    //   console.log(err)
    // })








  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //


  // const container = document.querySelector('.tab-container')
  // const javascript = document.createElement('div')
  // const bootstrap = document.createElement('div')
  // const technology = document.createElement('div')
  // const jquery = document.createElement('div')
  // const nodeJS = document.createElement('div')

  // container.classList.add('tab-container')
  const topic = document.createElement('div')
  topic.classList.add('topics')
  topics.forEach(name => {
    const myDiv = document.createElement('div')
    myDiv.classList.add('tab')
    myDiv.textContent = name;
    topic.appendChild(myDiv)
  })
  // javascript.classList.add('tab')
  // bootstrap.classList.add('tab')
  // technology.classList.add('tab')
  // jquery.classList.add('tab')
  // nodeJS.classList.add('tab')
  // javascript.textContent = topics[0]
  // bootstrap.textContent = topics[1]
  // technology.textContent = topics[2]
  // jquery.textContent = topics[3]
  // nodeJS.textContent = topics[4]

  // container.appendChild(topic)
  // topic.appendChild(javascript)
  // topic.appendChild(bootstrap)
  // topic.appendChild(technology)
  // topic.appendChild(jquery)
  // topic.appendChild(nodeJS)



  return topic

}

// console.log(Tabs(newArray))

const tabsAppender = async (selector) => {
  const container = document.querySelector(selector)
  let data = await axios.get('http://localhost:5001/api/topics')
    // console.log(data.data.topics)
    let theData = data.data.topics;
    // console.log(theData.topics)

      // console.log(theData)

      // console.log(create)
      container.appendChild(Tabs(theData))


  // console.log(selector)
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


  // append.appendChild(Tabs(selector))
}

export { Tabs, tabsAppender }
