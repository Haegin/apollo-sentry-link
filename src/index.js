import { ApolloLink } from 'apollo-link'
import * as Sentry from '@sentry/browser'

const operationInfo = operation => ({
  type: operation.query.definitions.find(defn => defn.operation).operation,
  name: operation.operationName,
  fragments: operation.query.definitions
    .filter(defn => defn.kind === 'FragmentDefinition')
    .map(defn => defn.name.value)
    .join(', '),
})

const sentryLink = new ApolloLink((operation, forward) => {
  if (process.env.NODE_ENV === 'development') {
    console.table(operationInfo(operation))
  } else {
    Sentry.addBreadcrumb({
      category: 'graphql',
      data: operationInfo(operation),
      level: 'debug',
    })
  }
  return forward(operation)
})

export default sentryLink
