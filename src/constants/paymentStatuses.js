import { Priority } from './enums/priorities';

export const paymentStatuses = [
    {
        id: 1,
        name: 'profile.nav.payments.status.paid',
        priority: Priority.LOW,
    },
    {
        id: 2,
        name: 'profile.nav.payments.status.scheduled',
        priority: Priority.INFO,
    },
    {
        id: 3,
        name: 'profile.nav.payments.status.pending',
        priority: Priority.MEDIUM,
    },
    {
        id: 4,
        name: 'profile.nav.payments.status.failed',
        priority: Priority.HIGH,
    },
];