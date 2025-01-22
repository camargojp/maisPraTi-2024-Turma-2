import { useState } from 'react'
import "./styles.css"

const content = [
  {
    label: "Why React?",
    items: [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"
    ]
  },
  {
    label: "Core Features",
    items: [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ]
  },
  {
    label: "Related Resources",
    items: [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"
    ]
  }
]

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0)

  return (
    <div className="container">
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>Using the React library to render a UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          {content.map((tab, index) => (
            <button 
            key={tab.label}
            className={activeContentIndex === index ? "active" : ""}
            onClick={() => setActiveContentIndex(index)}>
            {tab.label}              
            </button>
          ))}
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}