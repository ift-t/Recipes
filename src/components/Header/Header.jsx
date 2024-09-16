const Header = () => {
    return (
        <header>
            <div className="flex justify-between container mx-auto m-8">
                <div>
                    <h1 className="text-4xl font-bold">Recipe Calories</h1>
                </div>
                <div className="flex gap-8 items-center">
                    <p>Home</p>
                    <p>Recipes</p>
                    <p>About</p>
                    <p>Search</p>
                </div>
                <div className="content-center"> 
                    <input className="bg-gray-300 rounded-lg" type="search" name="" id="" placeholder="Search" />
                    <button>a</button>
                </div>
            </div>
        </header>
    );
};

export default Header;