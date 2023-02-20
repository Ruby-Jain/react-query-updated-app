import Characters from "./components/characters/Characters";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Characters />
        </QueryClientProvider>
    );
}

export default React.memo(App);
