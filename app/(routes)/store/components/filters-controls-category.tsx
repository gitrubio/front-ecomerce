import React from 'react'
import FilterCategory from './filter-category'

type FiltersControlsCategoryProps = {
   readonly slug: string | string[] | undefined
   readonly handleFilterChange: (newFilter: string) => void;
}


export default function FiltersControlsCategory(props : FiltersControlsCategoryProps) {
  return (
    <div className='sm:w-[350px] sm:mt-5'>
        <FilterCategory slug={props.slug} handleFilterChange={props.handleFilterChange} />
    </div>
  )
}
