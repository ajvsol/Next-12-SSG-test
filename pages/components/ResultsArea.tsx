import React from 'react'
import { Beer } from '@/types/types'
import BeerCard from './BeerCard'

interface ResultsAreaProps {
    searchResults: Beer[] | null
}

export default function ResultsArea({ searchResults }: ResultsAreaProps) {
    if (searchResults !== null) {
        
    return (<>
        {searchResults?.map((el: Beer) => {   
            <BeerCard key={el.id} name={el.name} tagline={el.tagline} abv={el.abv} />
        })}
        </>)
    } else {

    return (<>
    <p>searchResults === null</p>
    </>
    )
    }
}