import React, { useState, useEffect, useCallback } from 'react';
//import { TablePaginationConfig } from 'antd';
//import { Key, DefaultRecordType } from 'rc-table/lib/interface';
import { useTranslation } from 'react-i18next';

import { Table } from '../../../components/common/Table/Table';
import { 
    //TreeTableRow, 
    //Pagination, 
    getTreeTableData } from '../../../api/table.api';
import { useMounted } from '../../../hooks/useMounted';

const initialPagination = {
    current: 1,
    pageSize: 4,
};

export const TreeTable = () => {
    
    const [tableData, setTableData] = useState({
        data: [],
        pagination: initialPagination,
        loading: false,
    });
    const { t } = useTranslation();
    const { isMounted } = useMounted();

    const fetch = useCallback((pagination) => {
        setTableData((tableData) => ({ ...tableData, loading: true }));
        getTreeTableData(pagination).then((res) => {
            if (isMounted.current) {
                setTableData({ data: res.data, pagination: res.pagination, loading: false });
            }
        });
    },
        [isMounted],
    );

    useEffect(() => {
        fetch(initialPagination);
    }, [fetch]);

    const handleTableChange = (pagination) => {
        fetch(pagination);
    };

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(selectedRowKeys, selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows) => {
            console.log(selected, selectedRows);
        },
    };

    const columns = [
        {
            title: t('common.name'),
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: t('common.age'),
            dataIndex: 'age',
            key: 'age',
            width: '12%',
        },
        {
            title: t('common.address'),
            dataIndex: 'address',
            width: '30%',
            key: 'address',
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={tableData.data}
                rowSelection={{ ...rowSelection }}
                pagination={tableData.pagination}
                loading={tableData.loading}
                onChange={handleTableChange}
                scroll={{ x: 800 }}
            />
        </>
    );
};
