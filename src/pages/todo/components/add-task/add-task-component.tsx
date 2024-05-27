import styles from "./add-task-component.module.css";

type Props = {
  addTask: (name: string) => void;
};

export const AddTaskComponent: React.FC<Props> = ({ addTask }) => {
  const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = new FormData(e.currentTarget);
    const name: string = formData.get("name") as string;

    addTask(name);

    const nameInput: HTMLInputElement | null = document.querySelector("#name");

    if (nameInput) {
      nameInput.value = "";
    }
  };

  return (
    <form onSubmit={submitEvent}>
      <label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Jaffre"
          className={styles.form__name_input}
        />
      </label>
      <button type="submit" className={styles.form__name_button}>
        Añadir
      </button>
    </form>
  );
};
