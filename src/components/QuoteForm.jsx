import { useRef, useState } from "react";
import validator from 'validator';
import styles from './QuoteForm.module.css';

const validate = {
  name: (v) => {
    if (!v.trim()) return 'Full name is required.';
    if (v.trim().length < 2) 'Name must be at least 2 characters.';
    return '';
  },
  email: (v) => {
    if (!v.trim()) return 'Email is required.'
    return validator.isEmail(v.trim()) ? '' : 'Enter a valid email, like name@example.com.';
  },
  phone: (v) => {
    if (!v.trim()) return 'Phone number is required.';
    return validator.isMobilePhone(v.trim(), 'any') ? '' : 'Enter a valid phone number.';
  },
  insuranceType: (v) => (v ? '' : 'Please choose an insurance type.'),
};

const FIELD_ORDER = ['name', 'email', 'phone', 'insuranceType'];

function QuoteForm() {
  const [values, setValues] = useState({name: '', email: '', phone: '', insuranceType: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const refs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    insuranceType: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value}));
    setErrors((prev) => ({ ...prev, [name]: validate[name](value) }));
    setSubmitted(null);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validate[name](value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    FIELD_ORDER.forEach((n) => {
      const msg = validate[n](values[n]);
      if (msg) newErrors[n] = msg;
    });
    setErrors(newErrors);

    const firstInvalid = FIELD_ORDER.find((n) => newErrors[n]);
    if (firstInvalid) {
      refs[firstInvalid].current.focus();
      return;
    }
    setSubmitted({ ...values });
  };

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    ref: refs[name],
    required: true,
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': `${name}-error`,
    className: errors[name] ? styles.invalid : undefined,
  });

  return(
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Full name</label>
        <input type="text" autoComplete="name" {...fieldProps('name')} />
        <p id="name-error" className={styles.error} role="alert">{errors.name}</p>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input type="email" autoComplete="email" {...fieldProps('email')} />
        <p id="email-error" className={styles.error} role="alert">{errors.email}</p>
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Phone</label>
        <input type="tel" autoComplete="tel" {...fieldProps('phone')} />
        <p id="phone-error" className={styles.error} role="alert">{errors.phone}</p>
      </div>

      <div className={styles.field}>
        <label htmlFor="insuranceType">Insurance type</label>
        <select {...fieldProps('insuranceType')}>
          <option value=""> Select a type</option>
          <option value="health">Health</option>
          <option value="auto">Auto</option>
          <option value="home">Home</option>
          <option value="life">Life</option>
        </select>
        <p id="insuranceType-error" className={styles.error} role="alert">{errors.insuranceType}</p>
      </div>

      <button type="submit" className={styles.button}>Get my quote</button>

      {submitted && (
        <p className={styles.success} role="status">
          Thanks, {submitted.name}! We will contact you at {submitted.email}.
        </p>
      )}
    </form>
  );
}

export default QuoteForm;
