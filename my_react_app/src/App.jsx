import './App.css'
import Wellcome from './components/Wellcome'
import { useState } from 'react'
import Counter from './components/counter'

function App() {
  const [count, setCount] = useState(0)
  let peserta = [
    {nama:"Heldi", kota:"TGR", umur:"17"},
    {nama:"Taufiq", kota:"SMR", umur:"27"},
    {nama:"Debby", kota:"MKS", umur:"22"},
    {nama:"Yul", kota:"MLN", umur:"25"},
    {nama:"Irti", kota:"MKS", umur:"18"},
    {nama:"Daffa", kota:"SMR", umur:"19"},
  ]

  // Kata 'return' ini wajib ada untuk merender isi HTML/JSX dari komponen App
  return ( 
    <>
      <div className='Kontainer'>
        {/* Kurung setelah item sudah dirapikan, ditambah index untuk key */}
        {peserta.map((item, index) => {
          return (
            /* Hapus fragmen <> yang tidak perlu, lalu ganti peserta[0] dengan item */
            <Wellcome 
              key={index}
              nama={item.nama} 
              job={item.kota} 
              age={item.umur}
            />
          )
        })}
      </div>
              <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <Counter></Counter>
    </>
  )
}

export default App