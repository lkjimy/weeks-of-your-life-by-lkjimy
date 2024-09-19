const WEEKS = 5218

const urlParams = new URLSearchParams(window.location.search)

const d = urlParams.get("d") || 0
const m = urlParams.get("m") || 0
const y = urlParams.get("y") || 0

const backgroundColor = urlParams.get("backgroundColor") || "white"
const borderColor = urlParams.get("borderColor") || "black"
const fillColor = urlParams.get("fillColor") || "black"
const birthdayColor = urlParams.get("birthdayColor") || "forestgreen"

document.body.style.setProperty("--background-color", backgroundColor)
document.body.style.setProperty("--border-color", borderColor)
document.body.style.setProperty("--fill-color", fillColor)
document.body.style.setProperty("--birthday-color", birthdayColor)

const birth = new Date(y, m - 1, d)
const now = new Date()
const diff = now - birth
const calculatedWeek = Math.floor(diff / (1000 * 60 * 60 * 24 * 7))

const wrapper = document.querySelector("#app")

for (let i = 0; i < WEEKS; i++) {
  const weekEl = document.createElement("div")
  weekEl.classList.add("week")
  weekEl.setAttribute("data-active", i <= calculatedWeek)
  wrapper.appendChild(weekEl)
}
