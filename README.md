# Apollo Sentry Link

A simple Apollo Link to record GraphQL queries as breadcrumbs in Sentry to aid
debugging.

## Behaviour

When added to an Apollo Client this will log GraphQL requests as they are made
as breadcrumbs in Sentry. It records the query name, type (query or mutation)
and the names of any fragments used.

In development this information is logged to the console instead.

## Usage

Add the link to your Apollo Client.

```javascript

import ApolloSentryLink from 'apollo-sentry-link'

...

const client = new ApolloClient({
  link: ApolloLink.from([
    ApolloSentryLink,
    createHttpLink({ uri: "/graphql" })
  ]),
})
```
