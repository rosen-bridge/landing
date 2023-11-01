const ArtBox = () => (
    <>
        <div className="absolute w-6 h-full pt-12 md:pb-12 top-0 right-0">
            <div className="bg-tertiary brightness-75 w-full h-full"/>
        </div>
        <div className="absolute md:hidden w-6 h-full pt-12 bottom-0 left-0">
            <div className="bg-tertiary brightness-75 w-full h-full"/>
        </div>
        <div className="absolute md:hidden w-full h-6 px-12 -bottom-6 right-0">
            <div className="bg-white w-full h-full"/>
        </div>
        <div className="hidden md:block absolute bg-white w-24 h-24 top-12 -left-36">
            <div className="absolute bg-tertiary brightness-75 w-6 h-12 top-6 right-0"/>
        </div>
    </>
)

export function Watchers() {
    return (
        <div className="bg-tertiary mt-32 mb-12">
            <div className="block grid grid-cols-1 md:grid-cols-2">
                <div className="bg-white px-12 py-6 md:p-20 relative">
                    <img src="/assets/join-watchers.png"/>
                    <ArtBox/>
                </div>
                <div className="py-12 px-0 md:px-12 text-white flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold color-quaternary leading-relaxed mb-6">
                        Who can become a Watcher?
                    </h2>
                    <p className="mb-2">Anyone. You can actively contribute to the expansion and security audit of the Rosen Bridge by becoming a Watcher. Watchers receive rewards for accurate reporting. </p>
                    <p className="mb-2"></p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold color-quaternary leading-relaxed mb-6">
                        How can I become a Watcher?
                    </h2>
                    <p className="mb-2">Configure and run the Watcher app for your desired network (In progress, so stay tuned!).</p>
                    <p className="mb-2">Top it off with enough RSN and ERG.</p>
                    <p className="mb-2">Put in collateral and receive reporting permits.</p>
                    <p>Enjoy reporting and getting rewards.</p>
                </div>
            </div>
        </div>
    )
}
