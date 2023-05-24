import ServerComponent from "./server-component"
import { Suspense } from "react"

export default async function Page() {
    return (
        <div>
            <h1>Page</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {/* @ts-expect-error Server Component */}
                <ServerComponent />
            </Suspense>
        </div>
    )
}
