import { motion } from "framer-motion";
import {
    FaBrain,
    FaArrowDown,
    FaDownload,
    FaBalanceScale,
    FaLayerGroup,
    FaBullseye,
} from "react-icons/fa";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

function AlgorithmExecution({ execution }) {

    if (!execution) {

        return (

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="
                    rounded-2xl
                    bg-slate-900
                    border
                    border-slate-800
                    p-10
                    shadow-lg
                    text-center
                "
            >

                <motion.div
                    animate={{
                        rotate: [0, -8, 8, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                    }}
                >
                    <FaBrain className="mx-auto text-6xl text-cyan-500 mb-5" />
                </motion.div>

                <h2 className="text-3xl font-bold text-white">

                    Latest Algorithm Execution

                </h2>

                <p className="mt-4 text-slate-400 leading-7">

                    Insert your first number to watch how the
                    <span className="text-cyan-400 font-semibold">
                        {" "}Two Heap Algorithm{" "}
                    </span>
                    processes every step in real time.

                </p>

            </motion.div>

        );

    }

    return (

        <motion.div

            initial={{ opacity: 0, y: 25 }}

            animate={{ opacity: 1, y: 0 }}

            className="
                rounded-2xl
                bg-slate-900
                border
                border-slate-800
                p-8
                shadow-lg
            "

        >

            <div className="flex items-center gap-3 mb-8">

                <FaBrain className="text-cyan-400 text-3xl"/>

                <h2 className="text-2xl font-bold text-white">

                    Latest Algorithm Execution

                </h2>

            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
            >

                <ExecutionCard
                    icon={<FaDownload />}
                    title="Input Number"
                    value={execution.insertedNumber}
                />

                <Arrow/>

                <ExecutionCard
                    icon={<FaLayerGroup />}
                    title="Inserted Into"
                    badge
                    value={execution.targetHeap.replace("_", " ")}
                />

                <Arrow/>

                <ExecutionCard
                    icon={<FaBalanceScale />}
                    title="Rebalancing"
                    status={execution.rebalanced}
                    value={
                        execution.rebalanced
                            ? "Performed"
                            : "Not Required"
                    }
                />

                <Arrow/>

                <ExecutionCard
                    icon={<FaLayerGroup />}
                    title="Heap Sizes"
                    value={
`Max Heap : ${execution.maxHeapSize}
Min Heap : ${execution.minHeapSize}`
                    }
                />

                <Arrow/>

                <ExecutionCard
                    icon={<FaBullseye />}
                    title="Current Median"
                    value={execution.median}
                />

            </motion.div>

        </motion.div>

    );

}

function Arrow() {

    return (

        <motion.div
            animate={{
                y: [0, 6, 0],
            }}
            transition={{
                duration: 1.2,
                repeat: Infinity,
            }}
            className="flex justify-center"
        >

            <FaArrowDown className="text-cyan-500 text-lg"/>

        </motion.div>

    );

}

function ExecutionCard({

    icon,
    title,
    value,
    status,
    badge,

}) {

    return (

        <motion.div

            variants={cardVariants}

            whileHover={{
                scale: 1.02,
                y: -2,
            }}

            transition={{
                duration: 0.2,
            }}

            className="
                rounded-xl
                bg-slate-800
                border
                border-slate-700
                p-5
                shadow-md
            "

        >

            <div className="flex items-center gap-3 text-cyan-400">

                {icon}

                <span className="font-semibold">

                    {title}

                </span>

            </div>

            <div className="mt-4">

                {badge ? (

                    <span className="
                        inline-flex
                        rounded-full
                        bg-cyan-500/15
                        border
                        border-cyan-500/30
                        px-4
                        py-2
                        text-lg
                        font-bold
                        text-cyan-300
                    ">
                        {value}
                    </span>

                ) : status !== undefined ? (

                    <span
                        className={`inline-flex rounded-full px-4 py-2 text-lg font-bold ${
                            status
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-yellow-500/20 text-yellow-300"
                        }`}
                    >
                        {value}
                    </span>

                ) : (

                    <div className="whitespace-pre-line text-2xl font-bold text-white">

                        {value}

                    </div>

                )}

            </div>

        </motion.div>

    );

}

export default AlgorithmExecution;