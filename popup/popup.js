
function TimeUpdate() {
    chrome.storage.local.get(["timer", "timeOption", "isRunning"], (res) => {
        const time = document.getElementById("time")
        const min = `${res.timeOption - Math.ceil(res.timer / 60)}`.padStart(2, "0")
        let secs = "00"
        if (res.timer % 60 != 0) {
            secs = `${60 - res.timer % 60}`.padStart(2, "0")
        }
        time.textContent = `${min}:${secs}`
        starttimeBtn.textContent = starttimeBtn.isRunning ? "Pause Timer" : "Start Timer"
        shortbreakBtn.textContent= shortbreakBtn.isRunning ? "Pause Timer" : "Short Break"
        longbreakBtn.textContent= longbreakBtn.isRunning ? "Pause Timer" : "Long Break"
    })
}

TimeUpdate()
setInterval(TimeUpdate, 1000)

const starttimeBtn = document.getElementById("start-timer-btn")
starttimeBtn.addEventListener("click", () => {
    chrome.storage.local.get(["isRunning"], (starttimeBtn) => {
        chrome.storage.local.set({
            timeOption: 25,
            isRunning: !starttimeBtn.isRunning,
        }, () => {
            starttimeBtn.textContent = starttimeBtn.isRunning ? "Pause Timer": "Start Timer"
        })
    })
})

const resettimeBtn = document.getElementById("reset-timer-btn")
resettimeBtn.addEventListener("click", () => {

    chrome.storage.local.set({
        timer: 0,
        isRunning: false,
    }, () => {
        starttimeBtn.textContent = "Start Timer"
    })
    
})

const shortbreakBtn = document.getElementById("add-break-btn")
shortbreakBtn.addEventListener("click", () => {
    chrome.storage.local.get(["isRunning"], (shortbreakBtn) => {
        chrome.storage.local.set({
            timeOption: 5,
            isRunning: !shortbreakBtn.isRunning,
    },() => {
            shortbreakBtn.textContent= shortbreakBtn.isRunning ? "Pause Timer" : "Short Break"
    })
 } )

})
const longbreakBtn= document.getElementById("long-break-btn")
longbreakBtn.addEventListener("click", () => {
    chrome.storage.local.get(["isRunning"], (longbreakBtn) => {
        chrome.storage.local.set({
            timeOption: 15,
            isRunning: !longbreakBtn.isRunning,
    },()=>{
        longbreakBtn.textContent= longbreakBtn.isRunning ? "Pause Timer" : "Long Break"

    })
})
})












