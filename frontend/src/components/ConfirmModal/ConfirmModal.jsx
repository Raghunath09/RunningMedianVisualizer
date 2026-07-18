import { motion, AnimatePresence } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

function ConfirmModal({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
}) {

    return (

        <AnimatePresence>

            {

                isOpen && (

                    <motion.div

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        exit={{ opacity: 0 }}

                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"

                    >

                        <motion.div

                            initial={{
                                scale: 0.9,
                                opacity: 0,
                            }}

                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}

                            exit={{
                                scale: 0.9,
                                opacity: 0,
                            }}

                            transition={{
                                duration: 0.2,
                            }}

                            className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-2xl"

                        >

                            <div className="flex justify-center">

                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">

                                    <FaExclamationTriangle
                                        className="text-3xl text-red-400"
                                    />

                                </div>

                            </div>

                            <h2 className="mt-6 text-center text-2xl font-bold text-white">

                                {title}

                            </h2>

                            <p className="mt-3 text-center text-slate-400">

                                {message}

                            </p>

                            <div className="mt-8 flex justify-end gap-4">

                                <button

                                    onClick={onCancel}

                                    className="rounded-xl border border-slate-700 px-5 py-2 text-slate-300 transition hover:bg-slate-800"

                                >

                                    Cancel

                                </button>

                                <button

                                    onClick={onConfirm}

                                    className="rounded-xl bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600"

                                >

                                    Reset

                                </button>

                            </div>

                        </motion.div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}

export default ConfirmModal;