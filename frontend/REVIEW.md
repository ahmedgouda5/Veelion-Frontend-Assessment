## Code Review of VeeLion Frontend

### 1. Performance Issues

- Unnecessary setInterval causes continuous re-renders on the Activity page.
- forcedList creates redundant array copies and extra renders.
- Activity filtering runs twice with identical functions.
- useMemo for stats unnecessarily depends on tick.
- Activity data is fully fetched and processed on every request.
- JSON file storage will become inefficient as activity data grows.

### 2. Maintainability Issues

- applyFilterA and applyFilterB contain duplicate logic
- formatTimeA and formatTimeB contain duplicate logic
- Activity page contains fetching, filtering, state, and UI logic in one component
- API error-handling logic is duplicated between the hook and backend API utilities
- allActivity, shownActivity, and forcedList create unnecessary state complexity
- Hardcoded spacing values are scattered across components

### 3. UX Issues

- Activity page has no loading state
- Activity page has no visible error state or retry action
- Activity timestamps are rendered twice
- Home navigation cards lack descriptions and clear interaction feedback
- Task filters remain interactive while tasks are loading
- Tasks and Activity pages have no page-specific metadata
- Activity search input has no accessible label
- Completed tasks have limited visual distinction from pending tasks

### 4. Code Quality Issues

- Activity API response shape is inconsistent with the Tasks API
- Activity client does not properly handle non-2xx responses
- Backend errors from PATCH /tasks/:id are always returned as 500
- updatingTaskId uses an empty string instead of null
- ErrorResponse type is weaker than the actual backend contract
- everySecondTick is unused dead state
- No automated tests are present
- No linting or formatting scripts are configured

### 5. React Best-Practice Issues

- Derived state is unnecessarily stored using useEffect + useState
- shownActivity should be derived from allActivity and query
- forcedList should be removed completely
- Activity page could use Server Components for initial data fetching
- useCallback exposes more hook API than currently required
- tasks is unnecessarily exposed alongside filteredTasks
- "use client" in useTasks.ts is unnecessary

### 6. Other Architectural Problems

- Reports endpoint has no corresponding Next.js API proxy route
- TasksSummary type is missing from the frontend types
- Backend report status terminology differs from the frontend task terminology
- Activity and Tasks APIs use different response envelope conventions
- Backend URL configuration has an unsafe localhost fallback
- NEXT_PUBLIC_BACKEND_API_URL exposes the backend URL unnecessarily
- Reports page should use Server Components with dedicated loading/error boundaries

### Priority Issues

- Fix Activity API error handling and runtime crash
- Remove tick, forcedList, and duplicated filtering logic
- Add Activity loading and error states
- Fix unnecessary NEXT*PUBLIC* backend URL exposure
- Normalize API response shapes and error handling
- Add missing Reports API integration and types
- Add basic testing and linting
