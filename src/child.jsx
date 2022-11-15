let items = [
  { text: "купить молоко", id: 0 },
  { text: "выучить React", id: 1 },
  { text: "погулять с собакой", id: 2 }
]

// let items = ["купить молоко", "выучить React", "погулять с собакой"]

function child() {
  if (!items.length) {
    return <p>нет toodoo</p>
  }
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  )
}

export default child