import { useTranslation } from 'react-i18next';

import { BasicTable } from 'components/tables/BasicTable/BasicTable';
import { CompanyTable } from 'components/tables/CompanyTable/CompanyTable';
import { CompanyTable_02 } from 'components/tables/CompanyTable/CompanyTable_02';

import { PageTitle } from 'components/common/PageTitle/PageTitle';

import * as S from '../../components/tables/Tables/Tables.styles';

const ComapniesPage = () => {

    const { t } = useTranslation();

    return (
        <>
            <PageTitle>{'Cégek'}</PageTitle>
            <S.TablesWrapper>

                <S.Card 
                    id="company-table" 
                    title={'Companies'} 
                    padding="1.25rem 1.25rem 0"
                >
                        <CompanyTable />
                </S.Card>

                <S.Card 
                    id="company-table_02" 
                    title={'Companies'} 
                    padding="1.25rem 1.25rem 0"
                >
                    <CompanyTable_02 />
                </S.Card>

                <S.Card 
                    id="basic-table" 
                    title={t('tables.basicTable')} 
                    padding="1.25rem 1.25rem 0"
                >
                    <BasicTable />
                </S.Card>

            </S.TablesWrapper>
        </>
    );

};

export default ComapniesPage;