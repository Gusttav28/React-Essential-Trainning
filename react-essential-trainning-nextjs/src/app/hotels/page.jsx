import HotelBlock from "./HotelBlocks";

async function getData() {
    const res = await fetch("http://snowtooth-api-rest.fly.dev");
    return res.json();
}

export default async function Page() {
    const data = await getData();
    return(
        <main>
            <div>
                <h1>This is the hotek page</h1>
                <div>
                    {data.map((hotel) => (
                        <HotelBlock key={hotel.id} id={hotel.id} name={hotel.name} capacity={hotel.capacity}/>
                    ))}
                </div>
            </div>
        </main>
    )
}   