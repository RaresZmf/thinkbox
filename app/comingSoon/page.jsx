export default function ComingSoon() {
    return(
        <div className="flex items-center justify-center h-screen w-screen bg-white flex-col gap-y-10">
            <a href="/" className="absolute top-3 left-3 text-xl text-cyan-700">Go back</a>
            <h1 className=" font-bold text-cyan-700 text-8xl">Coming Soon</h1>
            <h2 className=" font-bold text-cyan-700 text-4xl">Stay tunded</h2>
            <div className="absolute border-t-1 border-cyan-700 py-2 text-center text-xl font-bold text-cyan-400 bottom-0 w-screen">© ThinkBox 2024</div>
        </div>
    )
}