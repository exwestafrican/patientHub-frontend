import React from "react";
import { useLocation } from "react-router-dom";

export function useQuery() {
    // func source was gotten from react router docs: https://v5.reactrouter.com/web/example/query-parameters
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}