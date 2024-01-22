import {memo, useDeferredValue, useState} from "react"
import {faker} from '@faker-js/faker'

const names = (count) => {
  const names = [];
  for (let i = 0; i < count; i++) {
    const name = faker.person.fullName();
    names.push(name);
  }
  return names;
};

const nameArray = names(10000);

function App() {
  const [keyword, setKeyword] = useState("")
  const [showNames, setShowNames] = useState(nameArray)
  const deferredShowNames = useDeferredValue(showNames)
  const handleKeyWord = (e) => {
    let value = e.target.value;
    const filterShowNames = nameArray.filter(item => item.includes(value))
    setKeyword(value)
    setShowNames(filterShowNames)
  }
  
  return (
    <div>
      搜索：<input type="text" value={keyword} onChange={e => handleKeyWord(e)}/>
      <ul>
        {
          deferredShowNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default memo(App)