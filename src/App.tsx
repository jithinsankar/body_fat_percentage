import React, { useState } from 'react'
import './App.css'

type Gender = 'male' | 'female' | ''

const App: React.FC = () => {
  const [weight, setWeight] = useState<number | ''>("");
  const [hips, setHips] = useState<number | ''>("");
  const [neck, setNeck] = useState<number | ''>("");
  const [waist, setWaist] = useState<number | ''>("");
  const [height, setHeight] = useState<number | ''>("");
  const [abdomen, setAbdomen] = useState<number | ''>("");
  const [selectedGender, setSelectedGender] = useState<Gender>('')
  const [bodyFatPercentage, setBodyFatPercentage] = useState<number | ''>('')

  const calculateBodyFatPercentage = () => {

    const parsedWeight = typeof weight === 'number' ? weight : parseFloat(weight);
    const parsedHips = typeof hips === 'number' ? hips : parseFloat(hips);
    const parsedNeck = typeof neck === 'number' ? neck : parseFloat(neck);
    const parsedWaist = typeof waist === 'number' ? waist : parseFloat(waist);
    const parsedHeight = typeof height === 'number' ? height : parseFloat(height);
    const parsedAbdomen = typeof abdomen === 'number' ? abdomen : parseFloat(abdomen);
    

    // Check if any of the parsed values are NaN (Not a Number)
    if (isNaN(parsedWeight) || (selectedGender === 'female' && (isNaN(parsedHips) || isNaN(parsedWaist))) || isNaN(parsedNeck)  || isNaN(parsedHeight) || (selectedGender == 'male' && isNaN(parsedAbdomen)) || selectedGender =='') {
      // Handle error or invalid input
      alert("Please give details correctly")
      return;
    }

    const calculatedPercentage = (selectedGender === 'female') ?
    (163.205 * Math.log10(parsedWaist + parsedHips - parsedNeck) - 97.684 * Math.log10(parsedHeight) - 78.387) :
    (86.010 * Math.log10(parsedAbdomen - parsedNeck) - 70.041 * Math.log10(parsedHeight) + 36.76);

    setBodyFatPercentage(calculatedPercentage)

  }

  return (
    <div>
      <h1>Body fat % Calculator</h1>
      <div>
        <label>Weight (in kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} />
      </div>

      <div>
        <label>Gender:</label>
        <select id="selectGender" value={selectedGender} onChange={(e) => setSelectedGender(e.target.value as Gender)}>
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

     
      </div>
      {
        selectedGender == 'female' && (<><div>
          <label htmlFor="">Hips:</label>
          <input type="number" value={hips} onChange={(e) => setHips(parseFloat(e.target.value))} />
        </div><div>
          <label htmlFor="">Waist:</label>
          <input type="number" value={waist} onChange={(e) => setWaist(parseFloat(e.target.value))} />
        </div></>)
      }
      {
        selectedGender == 'male' && <div>
          <label htmlFor="">Abdomen:</label>
          <input type="number" value={abdomen} onChange={(e) => setAbdomen(parseFloat(e.target.value))} />
        </div>
      }

      <div>
        <label>Neck: </label>
        <input type="number" value={neck} onChange={(e) => setNeck(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Height: </label>
        <input type="number" value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} />
      </div>


      <button onClick={calculateBodyFatPercentage}>Calculate</button>
      {bodyFatPercentage !== '' && (
        <div>
          {typeof bodyFatPercentage == 'number' ? bodyFatPercentage.toFixed(2) : 'N/A'}
        </div>
      )}
    </div>
  )
}

export default App
