import { motion } from "framer-motion";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

function MedianChart({ chartData }) {

    if (!chartData.length) {

        return (

            <motion.section

                className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg"

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ duration: 0.5 }}

            >

                <div className="mb-8 flex items-center justify-between">

                    <div>

                        <h2 className="text-3xl font-bold text-white">

                            📈 Median Progress

                        </h2>

                        <p className="mt-2 text-slate-400">

                            Running median after every insertion.

                        </p>

                    </div>

                    <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"></div>

                </div>

                <div className="flex h-80 items-center justify-center">

                    <div className="text-center">

                        <motion.div

                            animate={{
                                scale: [1, 1.08, 1],
                            }}

                            transition={{
                                repeat: Infinity,
                                duration: 2,
                            }}

                            className="text-7xl"

                        >

                            📊

                        </motion.div>

                        <h3 className="mt-6 text-xl font-semibold text-white">

                            No Data Available

                        </h3>

                        <p className="mt-3 text-slate-400">

                            Add a few numbers to generate the running median chart.

                        </p>

                    </div>

                </div>

            </motion.section>

        );

    }

    return (

        <motion.section

            className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg"

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.5 }}

        >

            {/* Header */}

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        📈 Median Progress

                    </h2>

                    <p className="mt-2 text-slate-400">

                        Live visualization of the running median after each insertion.

                    </p>

                </div>

                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"></div>

            </div>

            {/* Chart */}

            <motion.div

                className="h-96"

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: 0.2 }}

            >

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart

                        data={chartData}

                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 10,
                        }}

                    >

                        <defs>

                            <linearGradient
                                id="medianColor"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="0"
                            >

                                <stop
                                    offset="0%"
                                    stopColor="#06b6d4"
                                />

                                <stop
                                    offset="100%"
                                    stopColor="#3b82f6"
                                />

                            </linearGradient>

                        </defs>

                        <CartesianGrid
                            stroke="#334155"
                            strokeDasharray="4 4"
                        />

                        <XAxis
                            dataKey="step"
                            tick={{ fill: "#cbd5e1" }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            tick={{ fill: "#cbd5e1" }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            contentStyle={{
                                background: "#0f172a",
                                border: "1px solid #334155",
                                borderRadius: "12px",
                                color: "#fff",
                            }}
                            formatter={(value) => [
                                Number(value).toFixed(2),
                                "Median",
                            ]}
                            labelFormatter={(label) =>
                                `Insertion #${label}`
                            }
                        />

                        <Line
                            type="monotone"
                            dataKey="median"
                            stroke="url(#medianColor)"
                            strokeWidth={4}
                            dot={{
                                r: 5,
                                strokeWidth: 2,
                            }}
                            activeDot={{
                                r: 9,
                            }}
                            animationDuration={1200}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </motion.div>

        </motion.section>

    );

}

export default MedianChart;