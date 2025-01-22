const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"
    ]
]

const btnWhyReact = document.getElementById("btn-why-react")
const btnCoreFeature = document.getElementById("btn-core-features")
const btnResources = document.getElementById("btn-resources")
const tabContent = document.getElementById("tab-content")
  
function displayContent(items) { 
const list = document.createElement("ul")
list.innerHTML = items.map(item => `<li>${item}</li>`).join("")
tabContent.innerHTML = ""
tabContent.append(list)
}
  
  function highlightButton(btn) {
    [btnWhyReact, btnCoreFeature, btnResources].forEach(button => button.classList.remove("active"))
    btn.classList.add("active")
  }
  
  function handleClick(event) {
    const buttonMap = {
      "btn-why-react": 0,
      "btn-core-features": 1,
      "btn-resources": 2
    }
    highlightButton(event.target);
    displayContent(content[buttonMap[event.target.id]])
  }
  
  displayContent(content[0]);
  highlightButton(btnWhyReact);
 
[btnWhyReact, btnCoreFeature, btnResources].forEach(btn => btn.addEventListener("click", handleClick));