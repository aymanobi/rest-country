import Theme from "./Theme";

const Header = () => {
    return (
        <header className="bg-White dark:bg-VeryDarkBlue shadow-lg flex items-center justify-between px-5 py-2 lg:px-10 lg:py-4">
            <h1 className="font-bold text-xl lg:text-3xl">Where in the world!</h1>
            {/* <div>
                <Theme />
            </div> */}
        </header>
    )
}

export default Header