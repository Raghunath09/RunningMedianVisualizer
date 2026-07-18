import { motion } from "framer-motion";
import {
    FaChartLine,
    FaTrash,
    FaFileCsv,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

function Header({
    onReset,
    onExport,
}) {
    return (

        <motion.header
            className="
                sticky
                top-0
                z-50
                mb-10
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                px-8
                py-6
                shadow-lg
                backdrop-blur-xl
            "
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                {/* Left Section */}

                <div className="flex items-center gap-5">

                    <motion.div
                        whileHover={{
                            rotate: 8,
                            scale: 1.08,
                        }}
                        transition={{ duration: 0.25 }}
                        className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            from-cyan-500
                            to-indigo-600
                            text-white
                            shadow-lg
                            shadow-cyan-500/30
                        "
                    >
                        <FaChartLine size={30} />
                    </motion.div>

                    <div>

                        <h1 className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">

                            Running Median Visualizer

                        </h1>

                        <p className="mt-2 text-slate-400">

                            Real-Time Median Analytics using the
                            <span className="ml-1 font-semibold text-cyan-400">
                                Two Heap Algorithm
                            </span>

                        </p>

                    </div>

                </div>

                {/* Right Section */}

                <div className="flex flex-wrap items-center gap-4">

                    {/* Live Badge */}

                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                        }}
                        className="
                            flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-emerald-500/30
                            bg-emerald-500/10
                            px-5
                            py-2
                        "
                    >

                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400"></span>

                        <span className="text-sm font-semibold text-emerald-300">

                            Live

                        </span>

                    </motion.div>

                    {/* Algorithm Badge */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-cyan-500/30
                            bg-cyan-500/10
                            px-5
                            py-2
                        "
                    >

                        <HiSparkles className="text-cyan-400" />

                        <span className="text-sm font-medium text-cyan-300">

                            Two Heap Strategy

                        </span>

                    </div>
                        <motion.button

                          whileHover={{
                              scale: 1.05,
                              y: -2,
                          }}

                          whileTap={{
                              scale: 0.95,
                          }}

                          onClick={onExport}

                          className="
                              flex
                              items-center
                              gap-2
                              rounded-full
                              border
                              border-emerald-500/30
                              bg-emerald-500/10
                              px-5
                              py-2
                              text-emerald-300
                              transition-all
                              duration-300
                              hover:bg-emerald-500/20
                              hover:shadow-lg
                              hover:shadow-emerald-500/20
                          "

                      >

                          <FaFileCsv />

                          <span className="text-sm font-medium">

                              Export CSV

                          </span>

                      </motion.button>
                        <motion.button

                          whileHover={{
                              scale: 1.05,
                              y: -2,
                          }}

                          whileTap={{
                              scale: 0.95,
                          }}

                          onClick={onReset}

                          className="
                              flex
                              items-center
                              gap-2
                              rounded-full
                              border
                              border-red-500/30
                              bg-red-500/10
                              px-5
                              py-2
                              text-red-300
                              transition-all
                              duration-300
                              hover:bg-red-500/20
                              hover:shadow-lg
                              hover:shadow-red-500/20
                          "

                          >

                          <FaTrash />

                          <span className="text-sm font-medium">

                              Reset Data

                          </span>

                      </motion.button>

                </div>

            </div>

        </motion.header>

    );
}

export default Header;