import { useState, useEffect } from 'react';
import './App.css';
import confetti from 'canvas-confetti';

function WelcomeScreen() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [userInput, setUserInput] = useState('');
  // const [responsedata, setResponseData] = useState('null');

  const fetchData = async () => {
   
      const url = `/api/birthday/${encodeURIComponent(userInput)}`;
      window.location.href = url;
    
  };

  useEffect(() => {
    setAnimate(true);

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    // Run confetti on mount
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='p-4'>
      <div>
        <h1 className={`font-bold italic transform transition-all duration-1000 text-wave ${animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>Hi Buddy</h1>
        <h1 className={`font-bold italic transform transition-all duration-3000 text-wave ${animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>There is a surprise for you</h1>
        <h2 className={`font-bold italic transform transition-all duration-4000 text-wave ${animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>Please Click on the Button</h2>
      </div>
      <div className='p-3'>
        <input type="text"
         placeholder="Enter your name"
         value={userInput}
         onChange={(e) => setUserInput(e.target.value)} />
        <button className='text-purple-900 border border-blue-900' onClick={fetchData}>Click Here</button>
      </div>
    </div>
  );
}

function App() {
  return <WelcomeScreen />;
}

export default App;
