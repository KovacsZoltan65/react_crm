export const getBalance = (id) => {
    return new Promise((res) => {
        setTimeout(() => {
            res({
                usd_balance: 3040.51,
                eth_balance: 1040.51,
                btc_balance: 5373.51,
            });
        }, 0);
    });
};

export const getTotalEarning = (id, currency) => {
    return new Promise((res) => {
        setTimeout(() => {
            res({
                total: 1520,
                prevTotal: 1320,
                currency: 'USD',
                timeline: [
                    {
                        date: Date.now() - 1000 * 60 * 60 * 24 * 7,
                        usd_value: 100,
                    },
                    {
                        date: Date.now() - 1000 * 60 * 60 * 24 * 6,
                        usd_value: 200,
                    },
                    {
                        date: Date.now() - 1000 * 60 * 60 * 24 * 5,
                        usd_value: 180,
                    },
                    {
                        date: Date.now() - 1000 * 60 * 60 * 24 * 4,
                        usd_value: 350,
                    },
                    {
                        date: Date.now() - 1000 * 60 * 60 * 24 * 3,
                        usd_value: 280,
                    },
                    {
                        date: Date.now() - 1000 * 60 * 60 * 24 * 2,
                        usd_value: 300,
                    },
                    {
                        date: Date.now() - 1000 * 60 * 60 * 24,
                        usd_value: 320,
                    },
                ],
            });
        }, 0);
    });
};
