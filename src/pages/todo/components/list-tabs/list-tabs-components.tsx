import { useEffect } from "react";
import styles from "./list-tabs-component.module.css";
import { Counters } from "../../../../types/counters";

type Props = {
  filter: (filter: "all" | "completed" | "pending") => void;
  counters: Counters;
};

export const TabsComponent: React.FC<Props> = ({ filter, counters }) => {
  const getButtons = (): HTMLButtonElement[] => {
    const buttons: HTMLButtonElement[] = Array.from(
      document.getElementsByClassName(styles.tab_button)
    ) as HTMLButtonElement[];

    return buttons;
  };

  const selectTab = (e: MouseEvent) => {
    const buttons: HTMLButtonElement[] = getButtons();

    buttons.forEach((button) => {
      button.classList.remove(`${styles.tab_button_active}`);
    });

    const target = e.currentTarget as HTMLButtonElement;
    target.classList.add(`${styles.tab_button_active}`);
  };

  useEffect(() => {
    const buttons: HTMLButtonElement[] = getButtons();

    buttons.forEach((button) => {
      button.addEventListener("click", selectTab);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", selectTab);
      });
    };
  });

  return (
    <ul id="form__tabs" className={styles.form__tabs}>
      <li>
        <button className={styles.tab_button} onClick={() => filter("all")}>
          Todos <span>{counters.total}</span>
        </button>
      </li>
      <li>
        <button className={styles.tab_button} onClick={() => filter("pending")}>
          Pendientes <span>{counters.pendent}</span>
        </button>
      </li>
      <li>
        <button
          className={styles.tab_button}
          onClick={() => filter("completed")}
        >
          Completados <span>{counters.done}</span>
        </button>
      </li>
    </ul>
  );
};
