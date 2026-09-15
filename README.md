# HEALTHOS Frontend

A from-scratch Next.js frontend for the HEALTHOS concept.

## Includes

- Today dashboard
- Personal Health Twin
- Nutrition tracking UI
- Adaptive Fitness / workout UI
- Medical document and lab UI
- Family permissions UI
- Tool-oriented AI Coach UI
- Deterministic demo scenarios
- Mock health data and evidence-backed explanations

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Next backend integration

Replace the mock data in `lib/data.ts` and client-side actions with API calls to the HEALTHOS backend:

- `GET /api/health/today`
- `GET /api/health/timeline`
- `GET /api/health/baseline`
- `GET /api/nutrition/today`
- `GET /api/workouts/today`
- `POST /api/workouts/adapt`
- `POST /api/medical/documents`
- `GET /api/medical/labs`
- `POST /api/ai/analyze`
- `POST /api/ai/recommend`
- `POST /api/ai/simulate`
- `POST /api/demo/scenario`
