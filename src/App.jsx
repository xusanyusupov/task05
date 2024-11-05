import './App.scss'
import Collection from './components/collection/Collection'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Card from './components/products/Card'
import User from './components/user/User'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Collection/>
      <User/>
      <Card/>
    </>
  )
}

export default App
