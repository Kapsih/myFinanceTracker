import { createContext, useContext, useState } from "react";
import { getCategoryColor, getDate, getId } from "../../helper";

export const ExpenseContext = createContext();

export function ExpenseProvider({children}){

    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        console.log("category", expense.category); 

        const newExpense = {
            id: getId(),
            title: expense.title,
            amount: Number(expense.amount),
            category: expense.category.name,
            date: getDate(),
            color: getCategoryColor(expense.category.name),
            icon: expense.category.icon
        };

        setExpenses([...expenses,newExpense]);
    }

    return(
        <ExpenseContext.Provider value={{expenses, addExpense}}>
            {children}
        </ExpenseContext.Provider>
    )
}

export const useExpense = () => useContext(ExpenseContext);

