import React from 'react'

import { useMyHook } from 'use-mapbox-gl'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
