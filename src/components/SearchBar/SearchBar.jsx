import { Field, Form, Formik } from "formik"
import s from "./SearchBar.module.css"
const SearchBar = ({onChangeQuery}) => {
  const initialValues = {
    query: ''
  }
  const handelsubmit = (values) => {
    console.log(values)
    onChangeQuery(values.query)
  }
  return (
    <div className={s.box}>
      <Formik initialValues={initialValues} onSubmit={handelsubmit}>
        <Form className={s.form}>
          <Field name='query'
            autoComplete="off" 
            autoFocus 
            placeholder="Search images and photos"
            className={s.input}
          />
          <button className={s.submit} type='submit'>Search</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SearchBar