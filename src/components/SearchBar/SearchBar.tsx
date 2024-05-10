import { Formik, Form, Field, FormikHelpers, FormikValues  } from "formik";
import css from "./SearchBar.module.css";


type SearchBarProps = {
  onSubmit: (value: string) => void;
};
const SearchBar = ({ onSubmit }:SearchBarProps) => {
  const handleSubmit = (values: FormikValues,   actions: FormikHelpers<any>) : void => {
    const formattedSearch = values.search.trim().toLowerCase();
    onSubmit(formattedSearch);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button className={css.button} type="submit">
            Search 🔍
          </button>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
