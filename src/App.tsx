import './App.css'
import DynamicTable from './components/DynamicTable'
import { data } from './data/data'

function App() {
  return (
    <div>
      <DynamicTable movieData={data} />
    </div>
  )
}

export default App
