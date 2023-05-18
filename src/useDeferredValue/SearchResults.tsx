import React from 'react';

function SearchResults({ query, results }:any) {

  console.log('query',query,'results',);
  
  if (!results.length) {
    return null;
  }

  return (
    <div>
      <h2 style={{color:'white'}}>Search Results for "{query}"</h2>
      <ul>
        {results.map((result:any) => (
          <li style={{color:'white'}} key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;