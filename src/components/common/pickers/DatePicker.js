import React from 'react';
import { DayjsDatePicker } from './DayjsDatePicker';
//import { PickerProps } from 'antd/lib/date-picker/generatePicker';
//import { AppDate } from 'constants/Dates';

export const DatePicker = React.forwardRef(
    ({ className, ...props }, ref) => <DayjsDatePicker ref={ref} className={className} {...props} />,
);