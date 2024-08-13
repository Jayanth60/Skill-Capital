"use client"

function home(){
    return(
        <div className=" container flex  bg-red-200 ">
         <div>
         <img className="w-full" src="/images/logo.png"/>
         </div>
         <div>
            <ul className="flex gap-5 mt-3 ">
                <li >
                    <a className="border rounded bg-white  text-gray-500 p-2 pl-3 pr-3 hover:bg-rose-600 text-white ">Login</a>
                </li>
                <li >
                    <a className="border rounded text-gray-500 p-2 pl-3 pr-3 ">Submit</a>
                </li>
            </ul>
         </div>
        </div>
    )
}
export default home;