import { Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";


const CompanyModal = () => {
    <Modal>
        <Form layout="vertical">
            <FormItem label="title">
                <Input/>
            </FormItem>
        </Form>
    </Modal>
}

export default CompanyModal;