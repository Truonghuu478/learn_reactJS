import React, { useState, useDeferredValue, Suspense, useEffect, useMemo } from 'react';
import SearchResults from './SearchResults';

function SearchPage() {
    const [name, setName] = useState("")
    const deferredName = useDeferredValue(name)
    const list = useMemo(() => {
      return largeList.filter(item => item.name.includes(deferredName))
    }, [deferredName])
  
    function handleChange(e) {
      setName(e.target.value)
    }
  
    return <>
      <input type="text" value={name} onChange={handleChange} />
      {list.map(item => <ListComponent key={item.id} item={item} />)}
    </>
}

export default SearchPage;