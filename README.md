# Next.js 15 Shallow Routing Unexpected Behavior

This repository demonstrates an unexpected behavior with shallow routing in Next.js 15.  When navigating between pages using `router.push('/contact', { shallow: true })`, the expected behavior (preserving the query parameters) is not consistently met.  This might lead to unexpected page behavior or errors depending on the routing setup.

## Bug Description

The shallow routing functionality is inconsistently applied, leading to incorrect or unexpected page transitions or reloading the page despite the `shallow: true` option being used. This inconsistency is not clearly documented and is difficult to debug.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Click the button to navigate to the `/contact` page using shallow routing.
6. Observe the unexpected behavior or errors.

## Potential Solution

The solution involves further investigation into how Next.js 15 handles shallow routing.  It might involve reviewing the routing configuration, using a different navigation approach or reporting this as a bug to the Next.js team if it's an issue within the framework itself.  A potential solution might involve a more explicit management of the routing and query parameters.