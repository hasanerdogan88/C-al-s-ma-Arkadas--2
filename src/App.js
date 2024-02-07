import './styles.css'
import { useState } from 'react'

export default function app() {
  const [isFlipped, setIsFlipped] = useState(false); // Ekledik: flip durumunu takip etmek için bir state

  const [flashCard, setFlashCard] = useState({
    question: 'React nedir?',
    choices: ["JavaScript framework'ü", 'JavaScript kütüphanesi'],
    answer: 'JavaScript kütüphanesi.',
    explanation: `Birinin framework diyebilme cüretini gösterdiğini duyarsanız, onu mümkün olduğunca bilgili bir şekilde düzeltmeniz, tercihen yanıtınıza " aslında..." diye başlamanız önemlidir.`,
  })

  // onClick olayı ile flip durumunu değiştiren bir fonksiyon
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <header>
        <img src='./images/react.svg' />
        <h1> React Çalışma Arkadaşı </h1>
      </header>

      <div className={`flash-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}> {/* Ekledik: flip durumuna göre CSS class'ını ekliyoruz */}
        <div className='flash-card-inner'>
          <div className='flash-card-front'>
            <p className='question'>{flashCard.question}</p>
            <ol type='a'>
              {flashCard.choices.map((choice) => (
                <li key={crypto.randomUUID()}>{choice}</li>
              ))}
            </ol>
          </div>
          <div className='flash-card-back'>
            <p className='answer'>{flashCard.answer}</p>
            <p>{flashCard.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
