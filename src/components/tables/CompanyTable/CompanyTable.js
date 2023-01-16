import React, { useCallback, useState, useEffect } from "react";
import { Table, Button, Space } from "antd";
import { getCompanyTableData } from "api/CompanyTable.api";
import { useMounted } from "hooks/useMounted";
//import { useTranslation } from "react-i18next"
import CompanyModal from "components/modals/CompanyModal";

/* pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '25', '50']}} */
const initialPagination = {
    current: 1,
    defaultPageSize: 10,
    showSizeChanger: true, 
    pageSizeOptions: ['10', '25', '50']
};

export const CompanyTable = () => {
    
    //const { t } = useTranslation();
    const { isMounted } = useMounted();

    const [selectedId, setSelectedId] = useState(null);

    // =====================
    // Modal kezelés
    // =====================
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    //const showModal = () => { setIsModalOpen(true); };
    function showModal(id){
        //console.log( `id: ${id}` );
        setSelectedId(id);
        setIsModalOpen(true);
    }

    const handleOk = () => { setIsModalOpen(false); };
    const handleCancel = () => { setIsModalOpen(false); };
    // =====================

    const columns = [
        {title: 'id', dataIndex: 'id'},
        {title: 'name', dataIndex: 'name'},
        {
            title: 'actions', dataIndex: 'actions', width: '15%',
            render: (text, rec) => {
                
                return (
                    <Space>
                        <Button 
                            type="primary"
                            onClick={ () => {showModal(rec.id)} }
                            id={rec.id}
                        >{'EDIT'}</Button>
                    </Space>
                );
            }
        }
    ];

    const [tableData, setTableData] = useState({
        data: [],
        pagination: initialPagination,
        loading: false,
    });

    const fetch = useCallback((pagination) => {

        setTableData((tableData) => ({...tableData, loading: true}));

        getCompanyTableData(pagination)
            .then((res) => {
                //console.log(res);
                setTableData({
                    data: res.data,
                    pagination: res.pagination,
                    loading: false,
                });
            })
            .catch((e) => { console.log(e); });

    }, [isMounted]);

    useEffect(() => {
        fetch(initialPagination);
    }, [fetch]);

    const handleTableChange = (pagination) => {
        fetch(pagination);
    };

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    //const handleDeleteRow = (rowId) => { console.log('handleDeleteRow'); };

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
                    
                    <Button 
                        type="primary" 
                        onClick={ () => {showModal(null)} }
                    >asdasd</Button>

                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table 
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={tableData.data}
                    rowKey={(record) => record.id}
                    scroll={{ x: 800 }} bordered
                    pagination={tableData.pagination}
                    //pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '25', '50']}}
                    loading={tableData.loading}
                    onChange={handleTableChange}
                />

                <CompanyModal 
                    visible={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    id={selectedId}
                />

            </div>
        </>
    );
}

/*
//scroll={{ x: 800 }} bordered
//pagination={tableData.pagination}
//loading={tableData.loading}
//onChange={handleTableChange}
*/