"use client";

export function StatisticsSection() {
    return (
        <section className="py-16 px-6 md:px-12 bg-white text-black text-center">
            {/* Title & Description */}
            <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-5xl font-semibold">Our Numbers</h2>
                <p className="text-gray-600 mt-4">
                    Our knowledge and experience ensure stable work and the growth of our partners.
                </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-gray-100 p-8 w-60 h-60 flex flex-col justify-center items-center rounded-lg">
                    <h4 className="text-sm text-gray-500">Model Downloads</h4>
                    <p className="text-3xl font-bold">100K+</p>
                </div>

                <div className="bg-gray-100 p-8 w-60 h-60 flex flex-col justify-center items-center rounded-lg">
                    <h4 className="text-sm text-gray-500">Number of Parameters</h4>
                    <p className="text-3xl font-bold">2 billion</p>
                </div>

                <div className="bg-gray-100 p-8 w-60 h-60 flex flex-col justify-center items-center rounded-lg">
                    <h4 className="text-sm text-gray-500">Speech Data</h4>
                    <p className="text-3xl font-bold">165K Hours</p>
                </div>
            </div>
        </section>
    );
}
