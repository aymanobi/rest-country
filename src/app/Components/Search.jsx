import { useContext } from "react";
import { IoMdSearch } from "react-icons/io";
import StoreContext from "@/storeContext";

const Search = () => {

    const { setFilter, setUrl } = useContext(StoreContext)

    const handllChange = (e) => {
        setFilter(e.target.value)
    }

    const handleRegion = (e) => {
        setUrl(e.target.value)
    }

    return (
        <section className="flex items-center justify-between gap-3 flex-wrap">
            <div className="shadow-lg bg-White dark:bg-DarkBlue flex items-center justify-between gap-2 lg:w-80 w-full px-3 py-2 rounded-md">
                <IoMdSearch />
                <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Search a country"
                    autoComplete="off"
                    className="border-0 bg-blue-500 bg-opacity-0 outline-none flex-1 bg-White dark:bg-DarkBlue placeholder:text-VeryDarkBlue dark:placeholder:text-White"
                    onChange={handllChange} />
            </div>
            <div className="lg:w-64 w-full rounded-md">
                <select name="region" id="region" className="w-full p-2 shadow-lg rounded-md outline-none bg-White dark:bg-DarkBlue" onClick={handleRegion}>
                    <option value="all">All</option>
                    <option value="region/africa">Africa</option>
                    <option value="region/asia">Asia</option>
                    <option value="region/europe">Europe</option>
                    <option value="region/america">America</option>
                    <option value="region/oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}

export default Search