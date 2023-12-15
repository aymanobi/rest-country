"use client"
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";

const Theme = () => {

    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (window.matchMedia('(prefers-colors-scheme: dark)').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])


    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        console.log(theme)
    }

    return (

        <button className="flex items-center gap-2 text-sm lg:text-lg cursor-pointer" onClick={handleTheme}>
            {theme === 'light' ? <CiLight className="text-2xl" /> : <MdDarkMode className="text-2xl" />}
            {theme === 'light' ? "Light Mode" : "Dark Mode"}
        </button>


    )
}

export default Theme