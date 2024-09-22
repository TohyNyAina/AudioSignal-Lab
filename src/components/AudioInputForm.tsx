// components/AudioInputForm.tsx
import React, { useState } from 'react';

interface AudioInputFormProps {
  onGenerate: (frequency: number, amplitude: number, duration: number, initialVelocity: number) => void;
}

const AudioInputForm: React.FC<AudioInputFormProps> = ({ onGenerate }) => {
  const [frequency, setFrequency] = useState<number>(440); // Fréquence par défaut
  const [amplitude, setAmplitude] = useState<number>(1); // Amplitude par défaut
  const [duration, setDuration] = useState<number>(5); // Durée par défaut
  const [initialVelocity, setInitialVelocity] = useState<number>(0); // Vitesse initiale par défaut

  const handleGenerate = () => {
    onGenerate(frequency, amplitude, duration, initialVelocity);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto lg:mx-0">
      <h2 className="text-xl font-bold mb-4">Formulaire du Signal Audio</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Frequence (Hz):</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={frequency}
          onChange={(e) => setFrequency(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Amplitude:</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={amplitude}
          onChange={(e) => setAmplitude(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Duration (s):</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={duration}
          onChange={(e) => setDuration(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Velocité Initial:</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={initialVelocity}
          onChange={(e) => setInitialVelocity(parseFloat(e.target.value))}
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        onClick={handleGenerate}
      >
        Generer le Signale
      </button>
    </div>
  );
};

export default AudioInputForm;
