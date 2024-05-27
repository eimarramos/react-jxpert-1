import styles from "./add-task-component.module.css";

export const AddTaskComponent = () => {
  return (
    <form>
      <label>
        <input
          type="text"
          placeholder="Jaffre"
          className={styles.form__name_input}
        />
      </label>
      <button className={styles.form__name_button}>Añadir</button>
    </form>
  );
};
