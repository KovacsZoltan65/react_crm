import React, { useEffect, useState, useCallback } from 'react';

import { getCompanyTableData } from 'api/CompanyTable.api';
import { useMounted } from 'hooks/useMounted';
import {
    Button,
    Space,
    Table 
} from 'antd';
import { useTranslation } from 'react-i18next';
import { notificationController } from 'controllers/notificationController';
//import { Table } from '../../../components/common/Table/Table';

const initialPagination = {
    current: 1,
    pageSize: 5
};

export const CompanyTable_old = () => {

    const { t } = useTranslation();
    const { isMounted } = useMounted();

    /* Kiválasztott azonosítók */
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    /* Töltés jelző */
    const [loading, setLoading] = useState(false);

    /* Megjelenítendő adatok kezelése */
    const [tableData, setTableData] = useState({
        data: [],
        pagination: initialPagination,
        loading: false
    });

    const fetch = useCallback((pagination) => {
        setTableData((tableData) => ({ ...tableData, loading: true }));
        getCompanyTableData(pagination).then((res) => {
            if (isMounted.current) {
                setTableData({ data: res.data, pagination: res.pagination, loading: false });
            }
        });
    }, [isMounted],
    );

    useEffect(() => {
        fetch(initialPagination);
    }, [fetch]);

    
    const handleTableChange = (pagination) => {
        fetch(pagination);
    };

    /* Törlés */
    /*
    const handleDeleteRow = (rowId) => {

        setTableData({
            ...tableData,
            data: tableData.data.filter((item) => item.id !== rowId),
            pagination: {
                ...tableData.pagination,
                total: tableData.pagination.total ?
                    tableData.pagination.total - 1 :
                    tableData.pagination.total
            }
        });

    };
    */

    const columns = [
        {
            title: 'id',
            dataIndex: 'id'
        },
        {
            title: 'name',
            dataIndex: 'name'
        }
    ];

    /* Oszlopok */
    /*const columns = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: 'name',
            dataIndex: 'name',
            render: (text) => <span>{text}</span>,
            sortDirection: ['descend', 'ascend'],
            sorter: (a, b) => a.name.localeCompare(b.name),
            showSorterTooltip: false
        },
        {
            title: 'actions',
            dataIndex: 'actions',
            width: '15%',
            render: (text, record) => {
                return (
                    <Space>
                        <Button
                            type="default"
                            onClick={() => {
                                notificationController.info({ message: t('tables.inviteMessage', { name: record.name }) });
                            }}
                        >
                            {t('tables.invite')}
                        </Button>
                        <Button
                            type="default"
                            danger
                            onClick={() => handleDeleteRow(record.id)}
                        >
                            {t('tables.delete')}
                        </Button>
                    </Space>
                );
            }
        }
    ];*/

    /* Kiválasztásváltozása */
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            //console.log('start');
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const hasSelected = selectedRowKeys.length > 0;

    return (
        <>
            <div>
                <div style={{ marginBottom: 16 }}>

                    <Button
                        type={'primary'}
                        onClick={start}
                        loading={loading}
                    >Reload</Button>

                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>

                </div>

                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={tableData.data}
                    //pagination={tableData.pagination}
                    //loading={tableData.loading}
                    //scroll={{ x: 800 }}
                    //onChange={handleTableChange}
                    //bordered
                />
            </div>
        </>
    );
};