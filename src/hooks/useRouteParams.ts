export default function useRouteParams(route: any, query: any, defaultValue = "Looplens") {
    return route.params[query] !== null ? route.params[query].toString() : defaultValue
}
