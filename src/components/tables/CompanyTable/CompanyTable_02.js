import React, { useState } from "react";
import { Table } from "antd";
//import { ColumnsType } from "antd/es/table";
//import { TableRowSelection } from "antd/es/table/interface";

/* Adatok */
const tableData = [];
for (let i = 0; i < 46; i++) {
    tableData.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

export const CompanyTable_02 = () => {

    /* Oszlopok */
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    /* Kiválasztott azonosítók */
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    /* Kiválasztásváltozása */
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        /*
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if(index % 2 !== 0){
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },{
                key: 'event',
                text: 'Select Event Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if(index % 2 !== 0){
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                }
            }
        ]
        */
    };

    return (
        <Table 
            rowSelection={rowSelection}
            columns={columns}
            dataSource={tableData}
        />
    );
};