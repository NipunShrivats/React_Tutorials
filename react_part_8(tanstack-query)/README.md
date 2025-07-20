# Tanstack Query / React Query

1. It is a library that helps us "to manage the state of data" you fetch from servers, like API's, in your React applications.

2. Now we already have "useState, useEffect and contextAPI" to manage the state but tanstack save labourios task.

### Advantages

1. Data fetching made easy - With a simple useQuery hook, fetching data becomes super easy.

2. Built-in Loading and Error States - No need to write custom code for handling, loading, errors, or success states.

3. Automatic Caching

4. Background Re-fetching - manage stale or out-of-date data by re-fetching
   it in the background.

5. Pagination and infinite scrolling - has special tools designed for those complex use cases.

### Veredict

1. Makes workig with server side code easy.

2. It's fast, efficient and reduces the amount of boiled plate code.

3. If any app relies on API data, tanstack wil work liek a charm.

# QueryClient

1. It is the core part of the react-query library.
2. It manages the caching background fetching, data synchronization, and other quert-related logic.
3. It provides a centralized store for managing and chaching asynchronous data in our application.
4. syntax:-

## QueryClientProvider

1. This component is a part of react-query and is used to provide the QueryClient instance to your entire React app or aportion of it.
2. This makes the query client available via React's context API so that all the components in the tree can use the useQuery, useMutation, and other hooks provided by react query.

## New QueryClient()

1. This creates a new QueryClient instance with default settings.
2. We can configure it with options if needed (eg. setting cache time, stale time, etc)

## Syntax

```
export default function App() {
   return (
      <QueryClientProvider client={new QueryClient()}>
         <RouterProvider router={router} />
      </QueryClientProvider>
   );
}
```

# useQuery() hook

1. It is a react hook from the react query(Tanstack) library that simplifies data fetching and caching in react apps.
2. It's like having a smart assistant that handles API calls, loading states, error handling and background updates
3. All in one neat package.

#### reference link:- https://tanstack.com/query/v4/docs/framework/react/reference/useQuery

## queryKey

1. The queryKey is typically an array or string that uniquely identifies a query. It allows React Query to determine if the data in the cache is associated with a particular request.

2. used to cache data with a specific key and refresh or update data when certain dependencies change.

# gcTime (Garbage Collection Time)

1. The cacheTime is renamed as gcTime in v5 of React query
2. When we use React Query to get data, it saves the result in a local cache.
3. This means if you ask for the same data again, instead of making another api request, react Query will give you the saved data.
4. The cache updates automatically if the data changes, so you always get the latest information

### use Case

Imagine you are fetching a list of users. If u go back to the same page. react Query will "show the saved lis"t from the cache "instead of reloading it from the server", making your app faster. if a new user is added, React Query will automatically update the list.

### Note

By Default, inactive queries are garbage collected after 5 minutes. this means that the query is not being used for 5 minutes prior to which the cache for that query will be cleaned up.

## staleTime

It is a configuration option that determines how long fetched data is considered fresh before it needs to be fetched.

### Working

1. Fresh Data: When data is initially fetched or updated, it's considered fresh.

2. Stale Data: After the staleTime duration(specified in milliseconds) elapses, the data is considered stale.

3. Default Value: The default Staletime is 0ms, meaning data becomes stale immediately after being fetched, This ensures data is always up-to-date but can lead to frequent refetching

# Polling

1. In React Query, polling refers to the technique of fetching data from an API at regulr intervals to keep the UI up-to-date with the latest information.
2. This is especially useful for scenarios where data changes frequently and you want to display real-time updates without requiring the user to manually refresh the page. eg:- stock apps

### "refetchInterval" option

1. The simplest way to enable polling is to pass the "refetchInterval" option to the "useQuery" hook.
2. This option specifies the interval (in ms) at which react Query will fetch data automatically.

### "refetchIntervalInBackground" option

1. It’s a configuration option you use alongside refetchInterval.
2. It determines whether polling continues even when the browser window/tab is in the background.

# useMutation Hook

1. It is used for operations that modify data, like create, update and delete (CRUD operations)

syntax:

```
const mutation = useMutation(mutationFn,{
   // optional configuration options
})

```

we can provide various configuration options to customize the behaviour of the mutation, such as:

1. onSuccess: A callback function that runs when the mutation is successful.
2. onError: A callback function that runs if the mutation fails.
3. onSettled: A callback function that runs regardless of success or failure.
4. mutationKey: A unique key to identify the mutation in the cache.

## Mutate() function

1. The mutate() function is used to execute the mutation in react Query.
   The process is the same whether you're:
   a. Deleting data,
   b. Updating data
   c. Creating new data

2. When we call .mutate(), it tells React Query to run the mutation function defined inside the useMutation hook

3. This is needed because the mutation is an action that changes data, unlike queries, which are used to fetch data and are often outo-executed.

## useQueryClient()

The useQueryClient() hook is part of React Query (now called TanStack Query), and it gives you access to the QueryClient instance that’s managing your app’s data fetching, caching, and synchronization.

### PUT VS PATCH

PUT: Full Update

1. Replaces the entire resource with the data you send.
2. If fields are missing in the request, they may be removed or reset in the stored resource.
3. Ideal when you know the complete state of the resource.

PATCH: Partial Update

1. Updates only the fields you specify.
2. The rest of the resource stays untouched.
3. Useful for small changes or when modifying just a few fields.

# useInfiniteQuery

--> Process

1. first render
2. QueryFn will fetch 1st page
3. calculate Next page value with "getNextPageParam"
4. check if it has reached bottom & check if there is any next page "hasNextPage"
5. if yes then "fetchNextPage"

## Scroll Events

1. `window.innerHeight`: The height of the visible part of the website(the viewpot)

2. `window.scrollY`: The amount of pixels that user has scrolled down the page

3. `document.documentElement.scrollHeight`: The total height of the webpage, including the part not visible without scrolling.

when the sum of `window.innerHeight` & `window.scrollY` is approx equal to `document.documentElement.scrollHeight -1`, the user is near the bottom of the page
