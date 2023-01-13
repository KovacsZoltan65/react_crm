//import { useTranslation } from "react-i18next";

import { PageTitle } from "components/common/PageTitle/PageTitle";
import Modal01 from "components/modals/Modal01";

import * as S from "./Modals.styles";
import ModalWithInput from "components/modals/modalWithInput";
import CompanyModal from "components/modals/CompanyModal";
import { Button } from "antd";
import { useState } from "react";

const ModalsPage = () => {
    //const { t } = useTranslation();
    const [
        isComapnyModalOpen, 
        setIsCompanyModalOpen
    ] = useState(false);

    const showCompanyModal = () => {
        setIsCompanyModalOpen(true);
    };

    return (
        <>
            <PageTitle>Modals</PageTitle>
            <S.TablesWrapper>
                
                <S.Card 
                    id="basic_modal" 
                    title="Basic Modal"
                    padding="1.25rem 1.25rem 0"
                >
                    <Modal01 />
                </S.Card>

                <S.Card
                    id="modal_with_input"
                    title="Modal With Input"
                    padding="1.25rem 1.25rem 0"
                >
                    <ModalWithInput/>
                </S.Card>

                <S.Card
                    id="modal_company"
                    title="Modal Company"
                    padding="1.25rem 1.25rem 0"
                >
                    <Button 
                        type="primary" 
                        onClick={showCompanyModal}
                    >Show</Button>
                    <CompanyModal/>
                </S.Card>

            </S.TablesWrapper>
        </>
    );
};

export default ModalsPage;