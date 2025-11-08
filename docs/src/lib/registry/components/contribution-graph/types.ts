import type { Day as WeekDay } from "date-fns";

export type { WeekDay };

export type Activity = {
    date: string;
    count: number;
    level: number;
};

export type Week = Array<Activity | undefined>;

export type Labels = {
    months?: string[];
    weekdays?: string[];
    totalCount?: string;
    legend?: {
        less?: string;
        more?: string;
    };
};

export type MonthLabel = {
    weekIndex: number;
    label: string;
};
