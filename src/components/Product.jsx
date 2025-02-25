
export default function Product({image, prix, compositon}) {
    return (// <div>
        //     <div className="relative">
        //         <a
        //             href=""
        //             className="absolute bottom-0 text-center w-full h-16 bg-black bg-opacity-0 hover:bg-opacity-45 transition"
        //         >
        //             Commander
        //         </a>
        //
        //         <img
        //             src={image}
        //             alt=""
        //             className="h-60 w-full object-cover object-top"
        //         />
        //     </div>
        //     <div className="mt-6">
        //         <h3 className="mt-6 text-xl font-semibold">Prix : {prix}</h3>
        //         <h4 className="mt-6 text-lg">Composition : </h4>
        //         <p className="mt-4">Fait a partir de {compositon}</p>
        //     </div>
        // </div>

        // <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        //     <div className="px-4 py-2">
        //         {/*<h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>*/}
        //         <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{compositon}</p>
        //     </div>
        //
        //     <img className="object-cover w-full h-48 mt-2"
        //          src={image}
        //          alt="image_produit"/>
        //
        //     <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        //         <h1 className="text-lg font-bold text-white">{prix}</h1>
        //         <button
        //             className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add
        //             to cart
        //         </button>
        //     </div>
        // </div>

        <div className="w-80 shadow rounded-xl">
            <div
                className={`h-48 w-full flex flex-col justify-between rounded-xl p-4 bg-cover bg-center bg-[url('${image}')]`}
                style={{backgroundImage: `url('${image}')`}}
            >
                {/*<div className="flex justify-between"><input type="checkbox"/>*/}
                {/*    <button className="text-white hover:text-blue-500">*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
                {/*             stroke="currentColor">*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>*/}
                {/*        </svg>*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div>
                    <span
                        className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                    Disponible
                </span>
                </div>
            </div>
            <div className="p-4 flex flex-col items-center">
                <p className="text-gray-400 font-light text-xs text-center">
                    {compositon}
                </p>
                {/*<h1 className="text-gray-800 text-center mt-1">Item name</h1>*/}
                <p className="text-center text-gray-800 mt-1">{prix}</p>
                <div className="inline-flex items-center mt-2">
                    <button
                        className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                        </svg>
                    </button>
                    <div
                        className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                        1
                    </div>
                    <button
                        className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                        </svg>
                    </button>
                </div>
                <button
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                    Passer commande
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg></button>
                {/*<div className="flex justify-between w-full mt-4">*/}
                {/*    <div className="flex items-center text-gray-500"><input id="input1" type="checkbox"*/}
                {/*                                                            className="mr-2"/> <label htmlFor="input1"*/}
                {/*                                                                                      className="select-none cursor-pointer">Compare</label>*/}
                {/*    </div>*/}
                {/*    /!*<div>*!/*/}
                {/*    /!*    <button*!/*/}
                {/*    /!*        className="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center"> Add*!/*/}
                {/*    /!*        to List <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none"*!/*/}
                {/*    /!*                     viewBox="0 0 24 24" stroke="currentColor">*!/*/}
                {/*    /!*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*!/*/}
                {/*    /!*                  d="M19 9l-7 7-7-7"/>*!/*/}
                {/*    /!*        </svg></button>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}
            </div>
        </div>)
}
