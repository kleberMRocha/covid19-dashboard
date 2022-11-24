import dayjs from 'dayjs';

const format = 'YYYYMMDD';

export const Utils = {
now: () => dayjs().format(format),

};