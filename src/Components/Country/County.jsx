import { useState } from "react";

const County = ({ country, handleVisitedCntry, handleVisitedFlag }) => {

    // console.log(handleVisitedCntry)

    const { name, flags, capital, cca3, area, population } = country;

    // ? visited country
    // ! ২. স্টেট ডিক্লেইয়ার করব।
    const [handleVisit, sethandleVisit] = useState(false);

    // ! ৩. স্টেট হ্যান্ডেল করব
    const handleVisitedCountry = () => {
        sethandleVisit(!handleVisit);
    }
    // console.log(cca3)
    return ( 
        <div className="border p-4 my-4 w-80 space-y-2">
            <h1 className="text-3xl font-medium">Name: {name.common}</h1>
            <h1 className="text-2xl font-medium">Capital: {capital}</h1>
            <div >
                <img src={flags.png} alt="flags" className="w-80 h-[200px]" />
            </div>
            <h1>Area: {area}</h1>
            <h1>Population: {population}</h1>
            <h1>Code: {cca3}</h1>
            <button onClick={() => handleVisitedCntry(country)} className="border px-4 py-1 bg-red-500 rounded-lg">Mark as visited</button>
            <br />
            <button onClick={() => handleVisitedFlag(flags.png)} className="border px-4 py-1 bg-red-500 rounded-lg">Mark as visited Flag</button>
            <br />
            <button onClick={handleVisitedCountry} className="border px-4 py-1 bg-red-500 rounded-lg">
                {/*১. যদি ট্রিগার করি তবে ২ ও ৩ নং কাজ করব */}
                {
                    handleVisit ? 'Visited' : 'Visit'
                }
            </button>
            
        </div>
    )
}

export default County