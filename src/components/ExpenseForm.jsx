import "../css/ExpenseForm.css";
import {MdSend} from "react-icons/md";

const ExpenseForm = ({handleCharge, handleAmount, charge, amount, addItem}) => {
    return (
        <form onSubmit={addItem}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="expense">지출 항목</label>
                    <input
                        type="text"
                        className="form-control"
                        id="charge"
                        name="charge"
                        value={charge}
                        placeholder="예) 렌트비"
                        onChange={handleCharge}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amout">비용</label>
                    <input
                        type="number"
                        className="form-control"
                        id="amount"
                        name="amount"
                        value={amount}
                        placeholder="예) 100"
                        onChange={handleAmount}
                    />
                </div>
            </div>
            <button type="submit" className="btn">
                제출
                <MdSend className='btn-icon'/>
            </button>
        </form>
    )
}

export default ExpenseForm;