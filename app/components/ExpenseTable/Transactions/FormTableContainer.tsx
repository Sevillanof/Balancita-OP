import {ExpenseTable} from './List'
import {ExpenseForm} from './Form'
import './FormTableContainer.css'

function FormTableContainer() {
  return (
    <div className='form-table-container'>
    <ExpenseForm />
    <ExpenseTable />
    </div>
  )
}

export default FormTableContainer