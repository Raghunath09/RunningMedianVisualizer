import { motion } from "framer-motion";

import StatCard from "../StatCard/StatCard";

import {
    FaChartLine,
    FaCalculator,
    FaArrowDown,
    FaArrowUp,
    FaHashtag,
} from "react-icons/fa";

function StatisticsCards({ statistics }) {

    if (!statistics) {

        return (

            <section className="mt-10">

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

                    {[...Array(5)].map((_, index) => (

                        <div
                            key={index}
                            className="
                                h-44
                                animate-pulse
                                rounded-2xl
                                border
                                border-slate-800
                                bg-slate-900
                            "
                        />

                    ))}

                </div>

            </section>

        );

    }

    const cards = [

        {
            title: "Current Median",
            value: statistics.currentMedian.toFixed(2),
            icon: <FaChartLine />,
            color: "text-cyan-400",
        },

        {
            title: "Average",
            value: statistics.average.toFixed(2),
            icon: <FaCalculator />,
            color: "text-indigo-400",
        },

        {
            title: "Minimum",
            value: statistics.minimum,
            icon: <FaArrowDown />,
            color: "text-emerald-400",
        },

        {
            title: "Maximum",
            value: statistics.maximum,
            icon: <FaArrowUp />,
            color: "text-rose-400",
        },

        {
            title: "Total Numbers",
            value: statistics.totalNumbers,
            icon: <FaHashtag />,
            color: "text-amber-400",
        },

    ];

    return (

        <motion.section

            className="mt-10"

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.5 }}

        >

            {/* Section Header */}

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        📊 Statistics Overview

                    </h2>

                    <p className="mt-2 text-slate-400">

                        Live insights calculated from the current dataset.

                    </p>

                </div>

                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"></div>

            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

                {

                    cards.map((card, index) => (

                        <motion.div

                            key={card.title}

                            initial={{
                                opacity: 0,
                                y: 20,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{ once: true }}

                            transition={{
                                delay: index * 0.08,
                                duration: 0.4,
                            }}

                        >

                            <StatCard
                                title={card.title}
                                value={card.value}
                                icon={card.icon}
                                color={card.color}
                            />

                        </motion.div>

                    ))

                }

            </div>

        </motion.section>

    );

}

export default StatisticsCards;