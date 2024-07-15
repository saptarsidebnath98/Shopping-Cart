
export default function Header() {
  return (
    <header>
        <nav className="bg-gradient-to-r from-blue-950 to-blue-700 text-white px-10 py-5 flex justify-between shadow-md m-5 rounded-md">
            <h3><a>Shopping Cart</a></h3>

            <div className="w-1/3 rounded-r-md bg-blue-950">
            <input type="text" 
            placeholder="search products" 
            className="w-4/5 rounded-md px-3 overflow-x-hidden"/>
            <button className="w-1/5 text-xs">
            <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            
            </div>
            <button>
                <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </nav>
    </header>
  )
}
