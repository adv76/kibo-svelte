export const formatDate = (
    date: Date,
    timeZone: string,
    options?: Intl.DateTimeFormatOptions
) =>
    new Intl.DateTimeFormat(
        "en-US",
        options ?? {
            dateStyle: "long",
            timeZone,
        }
    ).format(date);

export const formatTime = (
    date: Date,
    timeZone: string,
    options?: Intl.DateTimeFormatOptions
) =>
    new Intl.DateTimeFormat(
        "en-US",
        options ?? {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone,
        }
    ).format(date);
