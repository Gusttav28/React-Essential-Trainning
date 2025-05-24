async function getData() {
    const res = await fetch("http://snowtooth-api-rest.fly.dev");
    return res.json();
}

export default async function Page() {
    const data = await getData();
    return(
        <main>
            <h1>
                this the moutain page
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Lift Name</th>
                        <th>Current Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((lift) => (
                        <tr key={lift.id}>
                            <td>{lift.name}</td>
                            <td>{lift.statuss}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}