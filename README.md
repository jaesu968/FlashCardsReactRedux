# Flashcards — React + Redux Toolkit

This project is a flashcard/quiz app built with React (v18), React Router, and Redux Toolkit. It demonstrates structuring application state with slices for topics, quizzes, and cards, and provides UI for creating and taking simple quizzes.

## Features (implemented)
- Create and list Topics (with icon selection) — `src/features/topics/*` and `src/components/NewTopicForm.js`
- Create Quizzes for a Topic and add multiple Cards to a Quiz — `src/features/quizzes/*` and `src/components/NewQuizForm.js`
- Persist quizzes/topics/cards in Redux store (in-memory) via three slices: `topics`, `quizzes`, `cards` — `src/features/*/ *Slice.js`
- View a Topic to see its Quizzes, and view a Quiz to see its Cards — routes configured in `src/app/App.js` and `src/app/routes.js`
- Flip a flashcard to see front/back content (simple click toggle) — `src/features/cards/Card.js`

## How it works (implementation notes)
- State management: uses Redux Toolkit `createSlice` for `topics`, `quizzes`, and `cards`.
	- `topics` stores topic objects keyed by id and keeps a `quizIds` array for each topic.
	- `quizzes` stores quizzes keyed by id and each quiz contains `cardIds` referencing cards.
	- `cards` stores individual card objects keyed by id with `front` and `back` strings.
- Creating a quiz: the `NewQuizForm` component creates card entries in the `cards` slice, collects their IDs, then creates a quiz in the `quizzes` slice and links it to a topic via `topicId`.
- Navigation: React Router v6 is used to expose routes for listing and creating topics/quizzes and for viewing specific topic/quiz pages.

## Tech stack
- React 18
- Redux Toolkit
- react-redux
- react-router-dom v6
- uuid (for generating ids)

## Project structure (relevant files)
- `src/app/store.js` — Redux store configuration
- `src/app/App.js` — Routes and app layout
- `src/features/topics/` — Topics list, topic detail, and `topicsSlice`
- `src/features/quizzes/` — Quizzes list, quiz detail, and `quizzesSlice`
- `src/features/cards/` — Card component and `cardsSlice`
- `src/components/NewTopicForm.js`, `src/components/NewQuizForm.js` — forms for creating entities

## Local setup
1. Install dependencies
```bash
npm install
```
2. Start the dev server
```bash
npm start
```
3. Open the app
	- Visit `http://localhost:3000` (note: routes are available at `/topics` and `/quizzes`)

Other scripts from `package.json`:
- `npm test` — run tests
- `npm run build` — build for production

## Notes & possible next steps
- Persistence: currently data lives only in the Redux store (in-memory). Add localStorage persistence or a backend to persist topics/quizzes/cards across reloads.
- Edits & deletes: UI supports creating topics/quizzes/cards but does not include editing or deleting items — consider adding CRUD operations.
- UI polish: add better styling, animations for flipping cards, and validation/error handling in forms.
- Tests: add unit and integration tests for slices and major components.

## Where to look in code
- See `src/features/*` for most business logic and `src/components/*` for input forms.

If you'd like, I can:
- add screenshots or GIFs to this README;
- wire up localStorage persistence;
- or add simple unit tests for one of the slices — tell me which next.

---
_README updated to summarize implemented features, code locations, and next steps._