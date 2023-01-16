import { Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import { getCompany } from "api/CompanyTable.api";
import { useCallback, useEffect, useState } from "react";

const objCompany = {
    id: null,
    name: '',
};

const CompanyModal = (props) => {

    const { visible, onOk, onCancel, id} = props;
    const [ company, setCompany ] = useState(objCompany);

    const clearCompany = () => {
        setCompany(objCompany);
    };

    const fetch = useCallback((id) => {
        //console.log(`id (modal): ${id}`);
        clearCompany();

        if( id !== null ){
            //console.log( getCompany(id) );
            setCompany(getCompany(id));
        }
    });

    useEffect(() => {
        fetch(id);
    }, [fetch]);

    return (
    <Modal mask={false}
        title="Company"
        open={visible}
        okText="SAVE"
        onCancel={onCancel}
        onOk={onOk}
    >
        <Form layout="vertical">
            <input type="hidden" value={company.id}/>
            <FormItem label="title">
                <Input value={company.name}/>
            </FormItem>
        </Form>
    </Modal>);
}

export default CompanyModal;