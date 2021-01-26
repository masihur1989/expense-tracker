import 'react-native-get-random-values'; //polyfill for expo
import { v4 as uuidv4 } from 'uuid';

// getPreSorter need to sort the data for ease of ui to represent.
export function getPreSorter(arr) {
    return arr.reduce((acc, d) => {
        const found = acc.find(a => a.date === d.date);
        const value = {
            id: d.id,
            title: d.title,
            date: d.date,
            description: d.description,
            location: d.location,
            total: d.total,
            status: d.status,
            category: d.category,
            user: d.user
        };

        if (!found) {
            acc.push({ id: uuidv4(), date: d.date, categoryDatas: [value] }) // not found, so need to add data property
        } else {
            found.categoryDatas.push(value);
        }

        return acc;
    }, []);
}

// getDataSorted need to sort the data for ease of ui to represent.
export function getDateSorted(arr) {
    return arr.map((obj) => {
        var result = {
            id: obj.id,
            date: obj.date,
            categoryDatas: obj.categoryDatas.reduce((acc, d) => {
                const found = acc.find(a => a.name === d.category.name);
                const value = {
                    id: d.id,
                    title: d.title,
                    description: d.description,
                    location: d.location,
                    total: d.total,
                    status: d.status,
                    inserted_by: d.user.name,
                };
                if (!found) {
                    acc.push({ id: uuidv4(), name: d.category.name, expenses: [value] }) // not found, so need to add data property
                } else {
                    found.expenses.push(value)
                }
                return acc;
            }, []),
        }

        return result;
    });
}