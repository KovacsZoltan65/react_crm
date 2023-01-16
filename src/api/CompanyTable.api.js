//import { useEffect } from "react";
//import { Button, Space } from "antd";
//import { notificationController } from "controllers/notificationController";
import { faker } from '@faker-js/faker';

const companies = [];

/**
 * Cég adatok összeállítása
 */
//for(let i = 0; i < 46; i++){
//    companies.push({
//        id: i,
//        name: `Compnay ${i}`
//    });
//}

for( let i = 0; i < 46; i++ ){
    companies.push({
        id: faker.datatype.uuid(),
        name: faker.company.name(),
    });
}

/**
 * Cég adatok lekérése
 * @param {object} pagination 
 * @returns 
 */
export const getCompanyTableData = (pagination) => {
    return new Promise((res) => {
        setTimeout(() => {
            /*
            const data = [];
            for(let i = 0; i < 46; i++){
                data.push({
                    id: i,
                    name: `Compnay ${i}`
                });
            }
            */
            res({
                data: companies, 
                pagination: {...pagination, total: companies.length}
            });
        }, 1000);
    });
};

/**
 * Cég lekérése azonosító alapján
 * @param {int} id 
 * @returns 
 */
export const getCompany = (id) => {
    let company = companies.find((element) => {
        return element.id === id;
    });

    return company;
};