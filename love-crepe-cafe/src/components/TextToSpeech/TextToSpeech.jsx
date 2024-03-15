import React, { useState, useEffect } from 'react';

function TextToSpeech() {
  const [speech, setSpeech] = useState(new SpeechSynthesisUtterance());
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onVoicesChanged = () => {
      setVoices(window.speechSynthesis.getVoices());
      setLoading(false);
    };

    window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
    };
  }, []);

  const speakText = (text) => {
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  return { voices, loading, speakText };
}

const App = () => {
  const [queueCount, setQueueCount] = useState(0);
  const textToSpeech = TextToSpeech();

  useEffect(() => {
    if (queueCount > 0) {
      textToSpeech.speakText(`Queue number ${queueCount}. Please wait for a moment.`);
    }
  }, [queueCount, textToSpeech]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueueCount(prevCount => prevCount + 1);
    }, 50000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Current Queue Count: {queueCount}</p>
    </div>
  );
};

export default App;
