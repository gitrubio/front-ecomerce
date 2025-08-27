import useGetProductField from '@/api/useGetProductField';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CategoryType } from '@/types/product';
import React from 'react'

type FiltersControlsCategoryProps = {
  readonly slug: string | string[] | undefined
  readonly handleFilterChange: (newFilter: string) => void;
}


export default function FilterCategory( {slug: slugFather, handleFilterChange}: FiltersControlsCategoryProps) {
    const { result, loading } = useGetProductField();

  return (
    <div className='my-5'>
        <p className='mb-3 font-bold'>Categorias</p>
        {loading && !result && (
            <p>Cargando...</p>
        )}
        <RadioGroup>
            {result?.map(({ categoryName, slug }: CategoryType) => (
                <div key={categoryName} className='flex items-center space-x-2'>
                    <RadioGroupItem value={categoryName} id={categoryName} checked={slug === slugFather} onClick={()=>handleFilterChange(slug)} />
                    <Label htmlFor={categoryName}>
                        {categoryName}
                    </Label>
                </div>
            ))}
        </RadioGroup>
    </div>
  )
}
