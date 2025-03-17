(function () {

    function formatDate(timestamp) {
        const date = new Date((+timestamp) / 1000); // Convert to Date object from timestamp in milliseconds
        const day = date.getDate(); // Get day of the month
        const month = date.toLocaleString('default', { month: 'short' }); // Get short month name
        const year = date.getFullYear(); // Get full year

        // Add suffix (st, nd, rd, th) to day
        let suffix = 'th';
        if (day === 1 || day === 21 || day === 31) suffix = 'st';
        else if (day === 2 || day === 22) suffix = 'nd';
        else if (day === 3 || day === 23) suffix = 'rd';

        return `${month} ${day}${suffix}, ${year}`; // Return formatted string
    }
    window.formatDate = formatDate;
})();