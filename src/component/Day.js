import dummy from '../db/data.json'
console.log(dummy)
const Day = function Day() {
  return (
    <table>
      <tbody>
        {dummy.words.map((word) => (
          <tr>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Day
