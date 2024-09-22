// components/RungeKuttaSimulator.tsx
import React from 'react';

interface RungeKuttaSimulatorProps {
  frequency: number;
  amplitude: number;
  duration: number;
  initialVelocity: number;
  onSimulate: (data: number[], labels: number[]) => void;
}

const RungeKuttaSimulator: React.FC<RungeKuttaSimulatorProps> = ({
  frequency,
  amplitude,
  duration,
  initialVelocity,
  onSimulate,
}) => {
  const rungeKutta4 = (x0: number, v0: number, t0: number, dt: number, omega: number) => {
    const data: number[] = [];
    const labels: number[] = [];
    let x = x0;
    let v = v0;
    let t = t0;

    for (let i = 0; i <= duration * (1 / dt); i++) {
      const k1x = dt * v;
      const k1v = -dt * omega * omega * x;

      const k2x = dt * (v + 0.5 * k1v);
      const k2v = -dt * omega * omega * (x + 0.5 * k1x);

      const k3x = dt * (v + 0.5 * k2v);
      const k3v = -dt * omega * omega * (x + 0.5 * k2x);

      const k4x = dt * (v + k3v);
      const k4v = -dt * omega * omega * (x + k3x);

      x += (k1x + 2 * k2x + 2 * k3x + k4x) / 6;
      v += (k1v + 2 * k2v + 2 * k3v + k4v) / 6;

      data.push(x);
      labels.push(parseFloat(t.toFixed(2)));
      t += dt;
    }

    return { data, labels };
  };

  const simulate = () => {
    const omega = 2 * Math.PI * frequency;
    const timeStep = 0.01;

    const { data, labels } = rungeKutta4(amplitude, initialVelocity, 0, timeStep, omega);
    onSimulate(data, labels);
  };

  React.useEffect(() => {
    simulate();
  }, [frequency, amplitude, duration, initialVelocity]);

  return null;
};

export default RungeKuttaSimulator;
