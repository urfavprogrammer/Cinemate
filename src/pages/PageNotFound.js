import pagenotfound from "../assets/pagenotfound.avif";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks";

export const PageNotFound = () => {

  useTitle(`Page_Not_Found`)
  
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
        <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
        <div className="max-w-lg">
            <img className="rounded" src={pagenotfound} alt="404 Page Not Found" />
        </div>
        

        </div>
        <div className="flex justify-center my-4">
        <Link to="/" >
            <button className="w-64 text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">Back Home</button>
        </Link>
         
        </div>
      </section>
      </main>
  )
}

 
