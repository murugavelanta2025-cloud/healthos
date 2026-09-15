export const health = {
  readiness: 74,
  sleep: '6h 42m',
  hrv: '48 ms',
  rhr: '63 bpm',
  steps: '6,320',
  calories: '1,840',
  protein: '118g',
  hydration: '1.7L',
};

export const evidence = [
  ['Sleep', '-16%', 'below 14-day baseline'],
  ['HRV', '-13%', 'below personal baseline'],
  ['Resting HR', '+6 bpm', 'above personal baseline'],
  ['Training load', '+18%', 'above recent average'],
];

export const timeline = [
  ['07:10', 'Sleep', '6h 42m — 16% below baseline'],
  ['08:00', 'Resting HR', '63 bpm — slightly elevated'],
  ['09:05', 'Breakfast', '620 kcal · 32g protein'],
  ['12:40', 'Activity', '4,210 steps'],
  ['17:30', 'Workout', 'Push session — adaptive plan'],
  ['19:05', 'AI insight', 'Recovery state recalculated'],
];

export const labs = [
  ['HbA1c', '5.7', '%', 'Sep 10, 2026', '↑ 0.3 from Jan'],
  ['LDL', '128', 'mg/dL', 'Sep 10, 2026', '↑ 16 from Jan'],
  ['Vitamin D', '24', 'ng/mL', 'Sep 10, 2026', '↓ 7 from Jan'],
  ['Hemoglobin', '14.2', 'g/dL', 'Sep 10, 2026', 'Stable'],
];

export const workoutNormal = [
  ['Bench Press', '4 × 8', 'RPE 8'],
  ['Incline DB Press', '4 × 10', 'RPE 8'],
  ['Cable Fly', '3 × 12', 'RPE 8'],
  ['Triceps Pressdown', '3 × 12', 'RPE 8'],
];

export const workoutAdaptive = [
  ['Bench Press', '3 × 6–8', '2 RIR'],
  ['Incline DB Press', '3 × 8', '2 RIR'],
  ['Cable Fly', '2 × 12', 'Controlled'],
  ['Triceps Pressdown', '2 × 12', 'No failure'],
];
