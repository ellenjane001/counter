
import Count from './Counter';

export default function Main() {
    return (
        <>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0 flex gap-2.5 w-full border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <h1>Counter</h1>
                        <Count property="count" />
                        <h1>Temperature</h1>
                        <Count property="temp" />
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </>
    )
}