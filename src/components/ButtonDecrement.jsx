export default function ButtonDecrement ({text, onClick}){
    return(
        <button onClick={onClick} class="text-gray-500 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-red-500">
           {text}
        </button>
    )
}