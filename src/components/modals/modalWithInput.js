import { Button, Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";


const ModalWithInput = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>Open Modal</Button>

            <Modal
                title="Modal With Input"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form>
                    <FormItem label="title">
                        <Input />
                    </FormItem>
                </Form>

            </Modal>
        </>
    );
};

export default ModalWithInput;