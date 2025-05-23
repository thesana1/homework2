import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Text from './components/Text'

function App() {
  return (
    <div>
      <Header />
      <Text />
      <ProductCard />
      <Button 
      backgroundColor='blue'
      textContent='Click me'
      width='200px'
      height='100px'
      color='white'
      />
    </div>
  )
}

export default App
