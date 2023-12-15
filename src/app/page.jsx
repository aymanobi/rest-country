"use client"
import Countries from "@/app/Components/Countries";
import Search from "@/app/Components/Search";
import StoreContext from "@/storeContext";
import { useState } from "react";

export default function Home() {

  const [filter, setFilter] = useState('')
  const [url, setUrl] = useState('all')

  return (
    <main className="w-full min-h-screen pt-8 bg-VeryLightGray dark:bg-VeryDarkBlue">
      <section className="h-full px-5 py-2 lg:px-10 lg:py-4">
        <StoreContext.Provider value={{ url, setUrl, filter, setFilter }}>
          <Search />
          <Countries />
        </StoreContext.Provider>
      </section>

    </main>
  )
}
