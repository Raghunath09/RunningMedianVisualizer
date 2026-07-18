export const exportHistoryToCSV = (history) => {

    if (!history.length) {
        return;
    }

    const headers = [
        "Index",
        "Number",
        "Created At",
    ];

    const rows = history.map((item, index) => [

        index + 1,

        item.number,

        new Date(item.createdAt).toLocaleString(),

    ]);

    const csvContent = [

        headers,

        ...rows,

    ]
        .map(row => row.join(","))

        .join("\n");

    const blob = new Blob(
        [csvContent],
        {
            type: "text/csv;charset=utf-8;",
        }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download =
        `running-median-history-${new Date().toISOString().split("T")[0]}.csv`;

    link.click();

    URL.revokeObjectURL(url);

};