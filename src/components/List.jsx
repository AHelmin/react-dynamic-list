


export default function List({ items, removeItem }) {

    // console.log(items.length)
    // console.log(typeof removeItem)

    return (
        <ul>
            {items.map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span>{item}</span>
                <button onClick={() => removeItem(idx)}>x</button>
              </li>
            ))}
          </ul>
    )
}