const timeElement = document.getElementById("time")
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent =  `Insert a string here: ${currentTime}`

chrome.action.setBadgeText({
    text:"TIME",
},()=>{
    console.log("Finished setting badge text.")
})