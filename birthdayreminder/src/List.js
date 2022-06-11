
export default function List(props) {
    return (
        <>
            {props.people.map(p=>{
                return (
                <article key={p.id} className="person">
                    <img src={p.image} alt={p.name} />
                    <div>
                        <h4>
                            {p.name}
                        </h4>
                        <p>{p.age} years</p>
                    </div>
                </article>)
            })}
        </>
    )
}