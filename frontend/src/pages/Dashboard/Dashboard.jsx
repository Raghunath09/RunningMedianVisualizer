import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Header from "../../components/Header/Header";
import AddNumberForm from "../../components/AddNumberForm/AddNumberForm";
import StatisticsCards from "../../components/StatisticsCards/StatisticsCards";
import MedianChart from "../../components/MedianChart/MedianChart";
import HeapViewer from "../../components/HeapViewer/HeapViewer";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
import AlgorithmExecution from "../../components/AlgorithmExecution/AlgorithmExecution";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

import toast from "react-hot-toast";

import { exportHistoryToCSV } from "../../utils/csvExport";

import {
    getStatistics,
    getHistory,
    getHeaps,
    getChartData,
    resetData,
} from "../../services/medianService";

function Dashboard() {

    // ==========================
    // State
    // ==========================

    const [statistics, setStatistics] = useState(null);

    const [history, setHistory] = useState([]);

    const [heaps, setHeaps] = useState({
        lowerHalf: [],
        upperHalf: [],
    });

    const [chartData, setChartData] = useState([]);

    const [execution, setExecution] = useState(null);

    const [showResetModal, setShowResetModal] = useState(false);

    // ==========================
    // Fetch Statistics
    // ==========================

    const fetchStatistics = async () => {

        try {

            const response = await getStatistics();

            setStatistics(response.data.data);

        } catch (error) {

            console.error(error);

        }

    };

    // ==========================
    // Fetch History
    // ==========================

    const fetchHistory = async () => {

        try {

            const response = await getHistory();

            setHistory(response.data.data);

        } catch (error) {

            console.error(error);

        }

    };

    // ==========================
    // Fetch Heap Data
    // ==========================

    const fetchHeaps = async () => {

        try {

            const response = await getHeaps();

            setHeaps(response.data.data);

        } catch (error) {

            console.error(error);

        }

    };

    // ==========================
    // Fetch Chart Data
    // ==========================

    const fetchChartData = async () => {

        try {

            const response = await getChartData();

            setChartData(response.data.data);

        } catch (error) {

            console.error(error);

        }

    };

    // ==========================
    // Refresh Dashboard
    // ==========================

    const refreshDashboard = async () => {

        await Promise.all([
            fetchStatistics(),
            fetchHistory(),
            fetchHeaps(),
            fetchChartData(),
        ]);

    };

    useEffect(() => {

        refreshDashboard();

    }, []);

    // ==========================
    // Reset Dashboard
    // ==========================

    const handleReset = async () => {

        try {

            await resetData();

            await refreshDashboard();

            toast.success("Dashboard reset successfully!");

        } catch (error) {

            console.error(error);

            toast.error("Reset failed.");

        } finally {

            setShowResetModal(false);

        }

    };

    // ==========================
    // Export CSV
    // ==========================

    const handleExport = () => {

        if (!history.length) {

            toast.error("No history available to export.");

            return;

        }

        exportHistoryToCSV(history);

        toast.success("CSV downloaded successfully!");

    };

    return (

        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

            <motion.div

                className="mx-auto max-w-7xl px-6 py-10"

                initial={{ opacity: 0, y: 30 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}

            >

                <Header
                    onReset={() => setShowResetModal(true)}
                    onExport={handleExport}
                />

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                >

                <AddNumberForm
                    onNumberAdded={async (executionResponse) => {

                        setExecution(executionResponse);

                        await refreshDashboard();

                    }}
                />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.30 }}
                >

                    <StatisticsCards
                        statistics={statistics}
                    />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                >

                    <MedianChart
                        chartData={chartData}
                    />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.60 }}
                >

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">

                        <AlgorithmExecution execution={execution} />

                        <HeapViewer heaps={heaps} />

                    </div>

                </motion.div>

                <motion.div
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75 }}
                >
                    <HistoryTable history={history} />
                </motion.div>

                <ConfirmModal

                    isOpen={showResetModal}

                    title="Reset Running Median"

                    message="This will permanently delete all inserted numbers and history."

                    onConfirm={handleReset}

                    onCancel={() => setShowResetModal(false)}

                />

            </motion.div>

        </main>

    );

}

export default Dashboard;