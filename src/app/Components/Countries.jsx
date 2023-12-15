"use client"
import { useEffect, useState, useContext } from "react"
import Country from "./Country"
import StoreContext from "@/storeContext";


const Countries = () => {

    const { filter } = useContext(StoreContext)
    const { url } = useContext(StoreContext)
    const [countries, setCountries] = useState([])


    const getData = async () => {
        const res = await fetch("https://restcountries.com/v3.1/" + url);
        const data = await res.json();
        setCountries(data.filter(item => item.name.official !== "Sahrawi Arab Democratic Republic" && item.name.common !== 'Israel'))
    }

    useEffect(() => {
        getData()
    }, [url])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10">
            {countries
                .filter(country => country.name.common.toLowerCase()
                    .includes(filter))
                .map((item, i) => {
                    return (
                        <Country item={item} key={i} />
                    )
                })}
        </div>
    )
}

export default Countries