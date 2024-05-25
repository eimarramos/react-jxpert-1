import styles from "./list-tabs-component.module.css";

export const TabsComponent = () => (
  <ul id="form__tabs" className={styles.form__tabs}>
    <li>
      <button>
        Todos <span>3</span>
      </button>
    </li>
    <li>
      <button>
        Pendientes <span>2</span>
      </button>
    </li>
    <li>
      <button>
        Completados <span>1</span>
      </button>
    </li>
  </ul>
);
