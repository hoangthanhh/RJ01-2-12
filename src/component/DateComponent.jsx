const DateComponent = ({ month, year }) => {
    // Tao ngay dau tien cua thang
    const startDate = new Date(year, month - 1, 1);
    // Tao ngay cuoi cua thang
    const endDate = new Date(year, month, 0);
    // Tao 1 mang de luu tru cac ngay dau thang den cuoi thang
    const daysOfMonth = [];
    // Lap qua tung ngay tu ngay dau thang den ngay cuoi thang
    for (let date = startDate; date < endDate; date.setDate(date.getDate() + 1)) {
        // Dinh dang cua ngay hien tai "dd/mm/yy"
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        // Lay thu cua ngay hien tai
        const dayOfWeek = date.toLocaleDateString('en', { weekday: 'short' });
        // Them ngay va thu vao mang
        daysOfMonth.push(`${formattedDate} ${dayOfWeek.toUpperCase()}`);
    }

    return (
        <div>
            <h2>Danh sach cac ngay trong thang {month}/{year}:</h2>
            <ul>
                {daysOfMonth.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default DateComponent