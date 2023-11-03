import {useState} from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {

    const [charge, setCharge] = useState("");

    const [amount, setAmount] = useState(0);

    const [expenses, setExpenses] = useState([
        {id: 1, charge: "렌트비", amount: 1600},
        {id: 2, charge: "교통비", amount: 400},
        {id: 3, charge: "식비", amount: 1200},
        {id: 4, charge: "주거비", amount: 80000}
    ]);

    const firstTotalAmount = expenses.reduce((accum, expense)  => {
        return accum + expense.amount;
    });

    const [totalAmount, setTotalAmount] = useState(firstTotalAmount);

    const addItem = (e) => {
        e.preventDefault();

        if (charge !== "" && amount > 0) {
            const newExpense = {id: crypto.randomUUID(), charge, amount};

            // deep copy
            const newExpenses = [...expenses, newExpense];

            setExpenses(newExpenses);
            setCharge("");
            setAmount(0);
        } else {

        }
    }

    const handleDelete = (id) => {
        const newExpenses = expenses.filter(expense => expense.id !== id);
        setExpenses(newExpenses);
    }

    const handleCharge = (e) => {
        setCharge(e.target.value);
    }

    const handleAmount = (e) => {
        setAmount(e.target.valueAsNumber);
    }

    return (
        <main className="main-container">
            <h1>예산 계산기</h1>

            <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
                <ExpenseForm
                    handleCharge={handleCharge}
                    handleAmount={handleAmount}
                    charge={charge}
                    amount={amount}
                    submit={addItem}
                />
            </div>

            <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
                <ExpenseList
                    initialExpenses={expenses}
                    handleDelete={handleDelete}
                />
            </div>

            <div style={{display: 'flex', justifyContent: 'end', marginTop: '1rem'}}>
                <p style={{fontSize: '2rem'}}>
                    총지출 :
                    <span>원</span>
                </p>
            </div>
        </main>
    )
}

export default App;