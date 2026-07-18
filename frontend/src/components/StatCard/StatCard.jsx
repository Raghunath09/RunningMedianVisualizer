import { motion } from "framer-motion";

function StatCard({ title, value, icon, color }) {

    const numericValue = Number(value);

    const isNumber = !isNaN(numericValue);

    return (

        <motion.div

            whileHover={{
                y: -8,
                scale: 1.02,
            }}

            whileTap={{
                scale: 0.98,
            }}

            transition={{
                duration: 0.25,
            }}

            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-6
                shadow-lg
            "

        >

            {/* Background Glow */}

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

            <div className="relative flex items-center justify-between">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">

                    {title}

                </p>

                <motion.div

                    whileHover={{
                        rotate: 10,
                        scale: 1.15,
                    }}

                    className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-slate-800
                        text-2xl
                        shadow-lg
                        ${color}
                    `}

                >

                    {icon}

                </motion.div>

            </div>

            {/* Value */}

            <motion.h2

                key={value}

                initial={{
                    opacity: 0,
                    scale: 0.9,
                }}

                animate={{
                    opacity: 1,
                    scale: 1,
                }}

                transition={{
                    duration: 0.35,
                }}

                className="
                    relative
                    mt-7
                    text-5xl
                    font-extrabold
                    tracking-tight
                    text-white
                "

            >

                {isNumber ? numericValue : value}

            </motion.h2>

            {/* Footer */}

            <div className="relative mt-6 flex items-center justify-between">

                <div className="flex items-center gap-2">

                    <motion.span

                        animate={{
                            scale: [1, 1.4, 1],
                        }}

                        transition={{
                            repeat: Infinity,
                            duration: 2,
                        }}

                        className="
                            h-2.5
                            w-2.5
                            rounded-full
                            bg-emerald-400
                        "

                    />

                    <p className="text-sm text-slate-500">

                        Live Update

                    </p>

                </div>

                <span className="text-xs text-slate-600">

                    Real-Time

                </span>

            </div>

        </motion.div>

    );

}

export default StatCard;