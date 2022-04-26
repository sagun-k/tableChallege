import { dynamicHeader } from '../utils/DynamicHeader'
import './table.css'

interface Props {
  movieData: Array<any>
}

const DynamicTable: React.FC<Props> = ({ movieData }) => {
  const headerArray = dynamicHeader(movieData[0])
  return (
    <div>
      <table className="w-[90%] mx-auto">
        <thead>
          <tr>
            {headerArray.map((item) => {
              return <th key={item}>{item}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {movieData.map((item, index) => {
            return (
              <tr key={index}>
                {headerArray.map((key) => {
                  return <td>{item[key]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DynamicTable
