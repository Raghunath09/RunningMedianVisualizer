import { motion } from "framer-motion";
import {
    FaArrowDown,
    FaArrowUp,
    FaLayerGroup,
} from "react-icons/fa";

function HeapViewer({ heaps }) {

    const renderHeap = (
        heap,
        title,
        icon,
        chipColor,
        borderColor
    ) => (

        <motion.div

            whileHover={{
                y: -6,
            }}

            transition={{
                duration: 0.25,
            }}

            className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                ${borderColor}
                bg-slate-800
                p-6
                shadow-lg
            `}
        >

            {/* Glow */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-500/5
                    via-transparent
                    to-indigo-500/5
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
            />

            {/* Header */}

            <div className="relative mb-6 flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <motion.div

                        whileHover={{
                            rotate: 12,
                            scale: 1.1,
                        }}

                        className={`
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            ${chipColor}
                            text-xl
                            text-white
                            shadow-lg
                        `}
                    >

                        {icon}

                    </motion.div>

                    <div>

                        <h3 className="text-xl font-bold text-white">

                            {title}

                        </h3>

                        <p className="text-sm text-slate-400">

                            {heap.length} element{heap.length !== 1 ? "s" : ""}

                        </p>

                    </div>

                </div>

                <span className="rounded-full bg-slate-700 px-3 py-1 text-xs text-slate-300">

                    Heap

                </span>

            </div>

            {/* Elements */}

            {

                heap.length === 0 ?

                    (

                        <motion.div

                            animate={{
                                opacity: [0.8, 1, 0.8],
                            }}

                            transition={{
                                repeat: Infinity,
                                duration: 2,
                            }}

                            className="flex h-44 items-center justify-center"

                        >

                            <div className="text-center">

                                <p className="text-6xl">

                                    📭

                                </p>

                                <p className="mt-4 text-slate-400">

                                    Heap is empty

                                </p>

                            </div>

                        </motion.div>

                    )

                    :

                    (

                        <div className="flex flex-wrap gap-4">

                            {

                                heap.map((value, index) => (

                                    <motion.div

                                        key={index}

                                        initial={{
                                            opacity: 0,
                                            scale: 0.8,
                                        }}

                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}

                                        transition={{
                                            delay: index * 0.05,
                                        }}

                                        whileHover={{
                                            scale: 1.08,
                                            y: -3,
                                        }}

                                        className={`
                                            flex
                                            items-center
                                            gap-3
                                            rounded-xl
                                            ${chipColor}
                                            px-4
                                            py-3
                                            text-white
                                            shadow-lg
                                        `}
                                    >

                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-xs font-bold">

                                            {index + 1}

                                        </span>

                                        <span className="text-lg font-bold">

                                            {value}

                                        </span>

                                    </motion.div>

                                ))

                            }

                        </div>

                    )

            }

        </motion.div>

    );

    return (

        <motion.section

            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg"

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.5 }}

        >

            {/* Header */}

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        ⚙ Heap Visualization

                    </h2>

                    <p className="mt-2 text-slate-400">

                        Real-time visualization of the Two Heap algorithm.

                    </p>

                </div>

                <div className="flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">

                    <FaLayerGroup className="text-cyan-400" />

                    <span className="text-sm font-medium text-cyan-300">

                        Two Heap Strategy

                    </span>

                </div>

            </div>

            <div className="grid gap-8 lg:grid-cols-2">

                {

                    renderHeap(

                        heaps.lowerHalf,

                        "Lower Half (Max Heap)",

                        <FaArrowDown />,

                        "bg-cyan-500",

                        "border-cyan-500/20"

                    )

                }

                {

                    renderHeap(

                        heaps.upperHalf,

                        "Upper Half (Min Heap)",

                        <FaArrowUp />,

                        "bg-indigo-500",

                        "border-indigo-500/20"

                    )

                }

            </div>

        </motion.section>

    );

}

export default HeapViewer;