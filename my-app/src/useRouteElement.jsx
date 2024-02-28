import React from 'react'
import { useRoutes } from 'react-router-dom'

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <></>
    },
    {
      path: '',
      element: <></>
    }
  ])
  return routeElements
}
