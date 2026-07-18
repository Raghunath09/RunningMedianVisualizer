import { motion } from "framer-motion";
import {
    FaBrain,
    FaBalanceScale,
    FaCheckCircle,
} from "react-icons/fa";

function AlgorithmPanel({ statistics }) {

    if (!statistics) {

        return (

            <motion.div

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900
                    p-6
                    shadow-lg
                    flex
                    items-center
                    justify-center
                    min-h-[360px]
                "

            >

                <div className="text-center">

                    <FaBrain className="mx-auto mb-4 text-5xl text-slate-600" />

                    <h2 className="text-xl font-bold text-white">

                        Algorithm Explanation

                    </h2>

                    <p className="mt-3 text-slate-400">

                        Add your first number to visualize the running median algorithm.

                    </p>

                </div>

            </motion.div>

        );

    }

    const {
        currentMedian = 0,
        average = 0,
        minimum = 0,
        maximum = 0,
        totalNumbers = 0,
    } = statistics;

    const odd = totalNumbers % 2 !== 0;

    return (

        <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-6
                shadow-lg
            "

        >

            <div className="mb-6 flex items-center gap-3">

                <FaBrain className="text-2xl text-cyan-400" />

                <h2 className="text-xl font-bold text-white">

                    Algorithm Explanation

                </h2>

            </div>

            <div className="space-y-5">

                <div>

                    <p className="text-sm text-slate-400">

                        Current Median

                    </p>

                    <h3 className="text-3xl font-bold text-white">

                        {currentMedian}

                    </h3>

                </div>

                <div>

                    <p className="mb-2 text-sm text-slate-400">

                        Dataset Summary

                    </p>

                    <p className="text-white">

                        Total Numbers : {totalNumbers}

                    </p>

                    <p className="text-white">

                        Minimum : {minimum}

                    </p>

                    <p className="text-white">

                        Maximum : {maximum}

                    </p>

                    <p className="text-white">

                        Average : {average.toFixed(2)}

                    </p>

                </div>

                <div className="flex items-center gap-2">

                    <FaBalanceScale className="text-cyan-400" />

                    <span className="text-white">

                        {odd
                            ? "Odd Number of Elements"
                            : "Even Number of Elements"}

                    </span>

                </div>

                <div className="rounded-xl bg-slate-800 p-4">

                    <p className="font-semibold text-cyan-400">

                        Median Rule

                    </p>

                    <p className="mt-2 text-slate-300">

                        {odd
                            ? "Median = Top of Max Heap"
                            : "Median = (Top of Max Heap + Top of Min Heap) / 2"}

                    </p>

                </div>

                <div className="flex items-center gap-2 text-emerald-400">

                    <FaCheckCircle />

                    <span>

                        Running Median Updated

                    </span>

                </div>

            </div>

        </motion.div>

    );

}

export default AlgorithmPanel;