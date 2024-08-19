'use client'

import {  useRouter, useSearchParams } from 'next/navigation'
import React, { FormEvent, useState } from 'react'


const FormComponent = () => {
  
  const [query, setQuery] = useState<string>('');
  const router = useRouter()
  const searchParams = useSearchParams();

   const handleSearch = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const params = new URLSearchParams(searchParams.toString());
      params.set('query', query);
      params.delete('page')

      router.push(`/search?${params.toString()}`);
    };

  return (

      <form onSubmit={handleSearch}>
         <input type="text" name={'searchData'}  value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."/>
         
         <button>Search</button>
      </form>
    
  )
}

export default FormComponent