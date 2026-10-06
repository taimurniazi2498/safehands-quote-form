 import { useState } from "react";
 import styles from './QuoteForm.module.css';

 function QuoteForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
  });
 

 const handleChange = (e) => {
  const { name, value } = e.target;
  setValues((prev) => ({ ...prev, [name]: value}));
 };

 return(
  <form className={styles.form}>
    <div className={styles.field}>
      <label htmlFor="name">Full name</label>
      <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={handleChange} required />
    </div>

    <div className={styles.field}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} required />
    </div>

    <div className={styles.field}>
      <label htmlFor="phone">Phone</label>
      <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={handleChange} required />
    </div>

    <div className={styles.field}>
      <label htmlFor="insuranceType">Insurance type</label>
      <select id="insuranceType" name="insuranceType" value={values.insuranceType} onChange={handleChange} required>
        <option value="">Select a type</option>
        <option value="health">Health</option>
        <option value="auto">Auto</option>
        <option value="home">Home</option>
        <option value="life">Life</option>
      </select>  
    </div>

    <button type="submit" className={styles.button}Get my quote></button>

  </form>
 );
}

export default QuoteForm;