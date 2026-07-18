import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    FaHistory,
    FaClock,
    FaDatabase,
    FaSearch,
} from "react-icons/fa";

function HistoryTable({ history }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredHistory = useMemo(() => {

        if (!searchTerm.trim()) {

            return history;

        }

        return history.filter(item =>
            item.number
                .toString()
                .includes(searchTerm)
        );

    }, [history, searchTerm]);

    return (

        <motion.section

            className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg"

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.5 }}

        >

            {/* Header */}

            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        📜 Insertion History

                    </h2>

                    <p className="mt-2 text-slate-400">

                        Every number processed by the Running Median Engine.

                    </p>

                </div>

                <div className="flex items-center gap-3">

                    <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">

                        <FaHistory className="text-cyan-400" />

                        <span className="text-sm font-medium text-cyan-300">

                            {history.length} Records

                        </span>

                    </div>

                </div>

            </div>

            <div className="mb-6">

                <div className="relative">

                    <FaSearch
                        className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-slate-500
                        "
                    />

                    <input

                        type="text"

                        value={searchTerm}

                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }

                        placeholder="Search by number..."

                        className="
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-slate-800
                            py-3
                            pl-12
                            pr-4
                            text-white
                            outline-none
                            transition
                            focus:border-cyan-500
                        "

                    />

                </div>

            </div>

            {/* Table */}

            <div className="overflow-x-auto rounded-2xl border border-slate-800">

                <table className="min-w-full">

                    <thead className="sticky top-0 bg-slate-800/95 backdrop-blur">

                        <tr>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">

                                #

                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">

                                Number

                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">

                                Created At

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            filteredHistory.length === 0 ?

                                (

                                    <tr>

                                        <td
                                            colSpan={3}
                                            className="py-20"
                                        >

                                            <motion.div

                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                }}

                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 2,
                                                }}

                                                className="flex flex-col items-center"

                                            >

                                                <FaDatabase
                                                    size={60}
                                                    className="text-slate-600"
                                                />

                                                <h3 className="mt-6 text-xl font-semibold text-white">

                                                    No History Yet

                                                </h3>

                                                <p className="mt-2 text-slate-500">

                                                    Add a number to start building the history.

                                                </p>

                                            </motion.div>

                                        </td>

                                    </tr>

                                )

                                :

                                (

                                    filteredHistory.map((item, index) => (

                                        <motion.tr

                                            key={index}

                                            initial={{
                                                opacity: 0,
                                                y: 10,
                                            }}

                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}

                                            transition={{
                                                delay: index * 0.03,
                                            }}

                                            className="
                                                border-t
                                                border-slate-800
                                                transition-all
                                                duration-300
                                                hover:bg-slate-800/70
                                            "

                                        >

                                            {/* Row Number */}

                                            <td className="px-6 py-5">

                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-bold text-white shadow-lg">

                                                    {index + 1}

                                                </div>

                                            </td>

                                            {/* Number */}

                                            <td className="px-6 py-5">

                                                <motion.span

                                                    whileHover={{
                                                        scale: 1.08,
                                                    }}

                                                    className="
                                                        inline-flex
                                                        rounded-full
                                                        bg-cyan-500/20
                                                        px-4
                                                        py-2
                                                        text-base
                                                        font-bold
                                                        text-cyan-400
                                                    "

                                                >

                                                    {item.number}

                                                </motion.span>

                                            </td>

                                            {/* Time */}

                                            <td className="px-6 py-5">

                                                <div className="flex items-center gap-3 text-slate-300">

                                                    <FaClock className="text-slate-500" />

                                                    {

                                                        new Date(item.createdAt)

                                                            .toLocaleString([], {

                                                                dateStyle: "medium",

                                                                timeStyle: "short",

                                                            })

                                                    }

                                                </div>

                                            </td>

                                        </motion.tr>

                                    ))

                                )

                        }

                    </tbody>

                </table>

            </div>

        </motion.section>

    );

}

export default HistoryTable;