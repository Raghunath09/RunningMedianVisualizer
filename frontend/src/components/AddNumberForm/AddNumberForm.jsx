import { useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaPlus, FaSpinner } from "react-icons/fa";

import { addNumber } from "../../services/medianService";

function AddNumberForm({ onNumberAdded }) {

    const [number, setNumber] = useState("");

    const [loading, setLoading] = useState(false);

    const [shake, setShake] = useState(false);

    const inputRef = useRef(null);

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (number.trim() === "") {

            setShake(true);

            setTimeout(() => setShake(false), 400);

            toast.error("Please enter a number.");

            inputRef.current?.focus();

            return;

        }

        try {

            setLoading(true);

            const insertedNumber = Number(number);

            const response = await addNumber(insertedNumber);

            toast.success(`Added ${insertedNumber} successfully.`);

            setNumber("");

            inputRef.current?.focus();

            if (onNumberAdded) {

                onNumberAdded(response.data.data);

            }

        } catch (error) {

            console.error(error);

            toast.error("Failed to add number.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <motion.section

            className="
                mt-10
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-8
                shadow-lg
            "

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.5 }}

        >

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        ➕ Add New Number

                    </h2>

                    <p className="mt-2 text-slate-400">

                        Insert a number to update the running median instantly.

                    </p>

                </div>

                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"></div>

            </div>

            <form

                onSubmit={handleSubmit}

                className="flex flex-col gap-5 md:flex-row"

            >

                <motion.input

                    ref={inputRef}

                    animate={
                        shake
                            ? { x: [-8, 8, -6, 6, -3, 3, 0] }
                            : {}
                    }

                    type="number"

                    value={number}

                    onChange={(e) => setNumber(e.target.value)}

                    placeholder="Enter a number..."

                    className="
                        flex-1
                        rounded-xl
                        border
                        border-slate-700
                        bg-slate-800
                        px-5
                        py-4
                        text-lg
                        text-white
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-500
                        focus:border-cyan-400
                        focus:ring-4
                        focus:ring-cyan-500/20
                    "

                />

                <motion.button

                    whileHover={{
                        scale: loading ? 1 : 1.04,
                    }}

                    whileTap={{
                        scale: loading ? 1 : 0.96,
                    }}

                    disabled={loading}

                    type="submit"

                    className="
                        flex
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        px-8
                        py-4
                        font-semibold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:shadow-cyan-500/30
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "

                >

                    {

                        loading

                            ? <>

                                <FaSpinner className="animate-spin"/>

                                Adding...

                            </>

                            : <>

                                <FaPlus/>

                                Add Number

                            </>

                    }

                </motion.button>

            </form>

        </motion.section>

    );

}

export default AddNumberForm;