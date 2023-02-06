export const { format: formatPercent } = new Intl.NumberFormat(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

export const { format: formatDate } = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'short',
});

export const { format: formatTime } = new Intl.DateTimeFormat(undefined, {
    timeStyle: 'short',
});
