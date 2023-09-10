import React, { useEffect, useState } from 'react'
import County from '../Country/County';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    // ! যেখানেই স্টেট থাকবে আমরা সেখানেই স্টেট হ্যান্ডেল করব।
    const handleVisitedCntry = (country) => {
        const numberOfItem = [...visitedCountries, country]
        setvisitedCountries(numberOfItem);
    }
    const handleVisitedFlag = (flag) => {
        const numberOfFlag = [...visitedFlag, flag]
        setVisitedFlag(numberOfFlag);
    }


    return (
        <div>
            <div>
                <h1>Visited Country :</h1>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>
                                {country.name.common}
                            </li>)
                    }
                </ul>
            </div>
            <div>
                <h1>Visited Flags</h1>
                <div className='my-8 grid grid-cols-10 gap-4'>
                    {
                        visitedFlag.map((flag, index) => <img key={index} src={flag} className='w-[120px]' />)
                    }
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-20 lg:gap-28'>
                    {
                        countries.map(country => {
                            return (
                                <County
                                    key={country.cca3}
                                    // ! যদি বাটন না থেকে তবে ফাংশন প্রপস হিসেবে পাঠায়ে দিব।
                                    handleVisitedCntry={handleVisitedCntry}
                                    handleVisitedFlag={handleVisitedFlag}
                                    country={country}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Countries