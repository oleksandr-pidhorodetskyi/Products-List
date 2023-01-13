export const formatDate = (date) => {
	let p = new Intl.DateTimeFormat('en-GB', {
		hour: 'numeric',
		minute: 'numeric',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	})
		.formatToParts(date)
		.reduce((acc, part) => {
			acc[part.type] = part.value;
			return acc;
		}, {});

	return `${p.hour}:${p.minute} ${p.day}.${p.month}.${p.year}`;
};
