import { useState } from 'react'
import { SearchBar, CompanyResults, Layout } from './components'
import { SearchResult } from './types/search'

function App() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  return (
    <Layout>
      <SearchBar onSearch={setSearchResults} />
      <CompanyResults results={searchResults} />
    </Layout>
  )
}

export default App
