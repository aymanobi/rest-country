import Link from "next/link"

const Country = ({ item }) => {

    const handleClick = () => {
        localStorage.setItem('key', item.name.common);
    }

    return (
        <div className="bg-White dark:bg-DarkBlue rounded-md overflow-hidden w-full h-96 shadow-lg" onClick={handleClick}>
            <Link href='/details'>
                <div className="h-[50%]">
                    <img src={item.flags.svg} alt={item.flags.alt} className='w-full h-full object-cover' loading="lazy" />
                </div>
                <div className="p-5 h-[50%]">
                    <ul className="flex flex-col items-start gap-2">
                        <li className="font-bold text-xl">{item.name.common}</li>
                        <li className="text-lg"><strong>Region: </strong> {item.region}</li>
                        <li className="text-lg"><strong>Population: </strong> {item.population}</li>
                        <li className="text-lg"><strong>Capital: </strong> {item.capital}</li>
                    </ul>
                </div>
            </Link>


        </div>
    )
}

export default Country