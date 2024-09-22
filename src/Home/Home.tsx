// pages/index.tsx
import React, { useState } from 'react';
import type { NextPage } from 'next';
import DynamicChart from '../components/DynamicChart';
import AudioInputForm from '../components/AudioInputForm';
import RungeKuttaSimulator from '../utils/RungeKuttaSimulator';

const Home: NextPage = () => {
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabels] = useState<number[]>([]);

  // State pour stocker les paramètres du signal
  const [frequency, setFrequency] = useState<number>(440);
  const [amplitude, setAmplitude] = useState<number>(1);
  const [duration, setDuration] = useState<number>(5);
  const [initialVelocity, setInitialVelocity] = useState<number>(0);

  const handleGenerateSignal = (
    freq: number,
    amp: number,
    dur: number,
    initialVel: number
  ) => {
    setFrequency(freq);
    setAmplitude(amp);
    setDuration(dur);
    setInitialVelocity(initialVel);
  };

  const handleSimulateSignal = (simulatedData: number[], simulatedLabels: number[]) => {
    setData(simulatedData);
    setLabels(simulatedLabels);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Simulation de Signal avec Runge-Kutta</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Formulaire à gauche */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <AudioInputForm onGenerate={handleGenerateSignal} />
        </div>

        {/* Graphique à droite */}
        <div className="flex-grow w-full lg:w-2/3">
          <RungeKuttaSimulator
            frequency={frequency}
            amplitude={amplitude}
            duration={duration}
            initialVelocity={initialVelocity}
            onSimulate={handleSimulateSignal}
          />
          <DynamicChart data={data} labels={labels} />
        </div>
      </div>
    </div>
  );
};

export default Home;
