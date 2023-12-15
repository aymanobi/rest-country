"use client"
import Link from "next/link"
import { useEffect, useState, useContext } from "react"
import { FaArrowLeft } from "react-icons/fa";

const DetailCountry = () => {

    const [borderName, setBorderName] = useState([])
    const [detail, setDetail] = useState([])
    const [countryName, setCountryName] = useState(localStorage.getItem('key'))

    const getData = async () => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
            const data = await res.json();
            setDetail(data)
            getName(data[0].borders.filter(item => item !== "ESH" && item !== "ISR"))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const getName = async (names) => {

        const fetchName = []

        for (const element of names) {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/alpha/${element}`);
                const data = await res.json();
                fetchName.push(data[0].name.common);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        setBorderName(fetchName);
    }

    useEffect(() => {
        getData()
    }, [countryName])

    const handllClick = (e) => {
        setBorderName([])
        setCountryName(e.target.innerHTML)
    }

    return (
        <section className="px-3 py-5">
            <div className="w-32 h-auto mb-10 rounded-lg bg-White dark:bg-DarkBlue shadow-lg">
                <Link href="/" >
                    <p className="w-full h-full px-4 py-2 flex items-center gap-4"><FaArrowLeft /> Back</p>
                </Link>
            </div>

            <div className="flex flex-col">
                {detail.map((item, i) => {
                    return (
                        <div key={i} className="flex flex-col lg:flex-row gap-5">
                            <div className="lg:w-[50%] h-[380px] overflow-hidden">
                                <img src={item.flags.svg} alt={item.flags.slt} className="w-full lg:w-full lg:h-full object-cover mb-3" />
                            </div>

                            <div className="lg:w-[50%] lg:p-4">

                                <p className="text-3xl font-bold my-3">{item.name.official}</p>

                                <div className="lg:flex items-start flex-row gap-5">
                                    <div>
                                        <ul className="flex flex-col gap-3">
                                            <li><strong>Native Name: </strong> {Object.values(item.name.nativeName)[0].official} </li>
                                            <li><strong>Population :</strong> {item.population}</li>
                                            <li><strong>Region :</strong> {item.region}</li>
                                            <li><strong>SubRegion :</strong> {item.subregion}</li>
                                            <li><strong>Capital :</strong> {item.capital}</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul className="mt-5 mb-3 lg:mb-0 lg:mt-0 flex flex-col gap-3">
                                            {item.tld && item.tld.length > 0 && (
                                                <li>
                                                    <strong>Top Level Domain :</strong> {Object.values(item.tld[0])}
                                                </li>
                                            )}
                                            <li><strong>Currencies :</strong> {Object.keys(item.currencies).join(", ")}</li>
                                            <li><strong>Languages :</strong> {Object.values(item.languages).join(", ")}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start flex-wrap lg:w-full gap-3 mt-20">
                                    <p><strong>Border Country :</strong></p>
                                    <div>
                                        {borderName && borderName.length > 0 ? (
                                            borderName.map((br, i) => (
                                                <button key={i} className='shadow-lg px-3 py-2 mr-3 mb-2 rounded-lg bg-White dark:bg-DarkBlue' onClick={(e) => handllClick(e)}>{br}</button>
                                            ))
                                        ) : (
                                            <p>This country has no borders</p>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default DetailCountry