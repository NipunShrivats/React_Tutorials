## Custom Hooks

Ceating custom hooks in react is a powerful way to encapsulate logic and make your components cleaner and more maintainable

### Rules for custom Hooks

Custom hooks:

1. "use" Prefix : must start with the word "use". This convention ensures that hooks are easily identifiable and adhere to the hook rules.

2. use Built-in Hooks: Should utilize React's built-in Hooks (eg., useState, useEffect etc...) to leverage react's state and lifecycle features.

3. Avoid Side Effects Outside Hooks: Side Effects (eg., data fetching, subscription) should be managed within hooks using useEffect or other appropriate hooks.

4. Keep Hooks Pure: Hooks Should be free from side effects and return values or function that the component can use.

#### Note: Pure Components?

components that only re-render when their props or state change, not when their parent components re-render
