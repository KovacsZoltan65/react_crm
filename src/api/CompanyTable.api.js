import { Button, Space } from "antd";
import { notificationController } from "controllers/notificationController";

export const getCompanyTableData = (pagination) => {
    return new Promise((res) => {
        setTimeout(() => {
            const data = [];
            for(let i = 0; i < 46; i++){
                data.push({
                    id: i,
                    name: `Compnay ${i}`
                });
            }

            res({
                data: data, 
                pagination: {...pagination, total: data.length}
            });
        }, 1000);
    });
};

export const getColumns = () => {
    return [
        {
            title: 'id',
            dataIndex: 'id'
        },
        {
            title: 'name',
            dataIndex: 'name'
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width: '15%',
            render: (text, record) => {
                return (
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => {
                                notificationController.info({ message: 'INVITE' });
                            }}
                        >
                            {'edit'}
                        </Button>
                        <Button 
                            type="primary" danger 
                            onClick={() => handleDeleteRow(record.key)}
                        >
                            {'delete'}
                        </Button>
                    </Space>
                );
            }
        }
    ];
};