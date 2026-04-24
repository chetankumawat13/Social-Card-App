# Social Card App (React)

A structured and maintainable React UI implementation demonstrating state management for a collection of components. This project focuses on predictable updates, clean data flow, and scalable component design.

---

## Overview

The application renders a list of profile cards where each card supports independent like and follow interactions. State is managed centrally and updated immutably to ensure consistency and performance.

---

## Core Features

* Independent like/unlike functionality with accurate count updates
* Follow/unfollow system with synchronized follower count
* Centralized state management for a list of entities
* Immutable updates using functional state patterns
* Conditional rendering and styling based on state

---

## Tech Stack

* React (useState, functional components)
* JavaScript (ES6+)
* CSS

---

## Project Structure

```plaintext
src/
│
├── components/
│   └── Card.jsx
│
├── style/
│   ├── base.css
│   └── card.css
│
└── App.jsx
```

---

## Architecture and Data Flow

The application follows a top-down data flow:

* The `App` component owns the state (`cardData`)
* State and action handlers (`like`, `follow`) are passed to child components via props
* The `Card` component remains presentational and triggers updates through callbacks

This approach keeps logic centralized and components reusable.

---

## State Design

Each card object maintains the following shape:

* `id`: unique identifier
* `name`: profile name
* `likes`: numeric count
* `followers`: numeric count
* `isLiked`: boolean flag
* `isFollow`: boolean flag

This structure ensures UI and logic remain tightly aligned.

---

## Update Strategy

State updates are handled using functional updates to avoid stale closures and ensure correctness under React’s batching behavior.

### Like Handler

```js
const like = (id) => {
  setCardData((prev) =>
    prev.map((card) =>
      card.id === id
        ? {
            ...card,
            likes: card.isLiked ? card.likes - 1 : card.likes + 1,
            isLiked: !card.isLiked
          }
        : card
    )
  );
};
```

### Follow Handler

```js
const follow = (id) => {
  setCardData((prev) =>
    prev.map((card) =>
      card.id === id
        ? {
            ...card,
            followers: card.isFollow
              ? card.followers - 1
              : card.followers + 1,
            isFollow: !card.isFollow
          }
        : card
    )
  );
};
```

---

## Key Considerations

* No direct mutation of state; all updates return new objects
* O(n) update complexity due to array mapping; acceptable for small datasets, but can be optimized with normalized state if scaled
* Clear separation of concerns between container (App) and presentational (Card) components
* Inline styles can be refactored into class-based styling for better maintainability

---

## Potential Improvements

* Introduce `useReducer` for more structured state transitions as complexity grows
* Normalize state using an object map for constant-time updates
* Memoize components to prevent unnecessary re-renders
* Extract business logic into custom hooks
* Add unit tests for state update logic
* Integrate API or persistence layer
* Improve accessibility (ARIA roles, keyboard interactions)

---

## Getting Started

```bash
git clone <your-repo-link>
cd <project-folder>
npm install
npm run dev
```

---

## Conclusion

This project demonstrates a clean and scalable approach to handling dynamic UI state in React. The patterns used here can be extended to more complex applications with minimal refactoring.

---

## Author

Chetan Kumawat

---

## Tags

#React #JavaScript #FrontendArchitecture #StateManagement #CleanCode #WebDevelopment
