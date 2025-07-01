# \* Tanstack Query / React Query

1. It is a library that helps us "to manage the state of data" you fetch from servers, like API's, in your React applications.

2. Now we already have "useState, useEffect and contextAPI" to manage the state but tanstack save labourios task.

### - Advantages

1. Data fetching made easy - With a simple useQuery hook, fetching data becomes super easy.

2. Built-in Loading and Error States - No need to write custom code for handling, loading, errors, or success states.

3. Automatic Caching

4. Background Re-fetching - manage stale or out-of-date data by re-fetching
   it in the background.

5. Pagination and infinite scrolling - has special tools designed for those complex use cases.

### - Veredict

1. Makes workig with server side code easy.

2. It's fast, efficient and reduces the amount of boiled plate code.

3. If any app relies on API data, tanstack wil work liek a charm.

# \* QueryClient

1. It is the core part of the react-query library.
2. It manages the caching background fetching, data synchronization, and other quert-related logic.
3. It provides a centralized store for managing and chaching asynchronous data in our application.
4. syntax:-

   <QueryClientProvider client={queryClinet}>
   <RouterProvider router={router}></RouterProvider>
   </QueryClientProvider>

## - QueryClientProvider

1. This component is a part of react-query and is used to provide the QueryClient instance to your entire React app or aportion of it.
2. This makes the query client available via React's context API so that all the components in the tree can use the useQuery, useMutation, and other hooks provided by react query.

## - New QueryClient()

1. This creates a new QueryClient instance with default settings.
2. We can configure it with options if needed (eg. setting cache time, stale time, etc)

# \* gcTime (Garbage Collection Time)

1. The cacheTime is renamed as gcTime in v5 of React query
2. When we use React Query to get data, it saves the result in a local cache.
3. This means if you ask for the same data again, instead of making another api request, react Query will give you the saved data.
4. The cache updates automatically if the data changes, so you always get the latest information

### -- use Case:

Imagine you are fetching a list of users. If u go back to the same page. react Query will show the saved list from the cache instead of reloading it from the server, making your app faster. if a new user is added, React Query will automatically update the list.

### -- Note:-

By Default, inactive queries are garbage collected after 5 minutes. this means that the query is not being used for 5 minutes prior to which the cache for that query will be cleaned up.

## - staleTime

It is a configuration option that determines how long fetched data is considered fresh before it needs to be fetched.

### -- Working:-

1. Fresh Data: When data is initially fetched or updated, it's considered fresh.

2. Stale Data: After the staleTime duration(specified in milliseconds) elapses, the data is considered stale.

3. Default Value: The default Staletime is 0ms, meaning data becomes stale immediately after being fetched, This ensures data is always up-to-date but can lead to frequent refetching
