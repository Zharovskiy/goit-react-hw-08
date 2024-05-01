import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.box}>
      <h1 className={css.title}>Welcome to the site!</h1>
      <h2 className={css.titleTwo}>Contacts book</h2>
      <p>
        A contact storage application is an application that allows users to
        conveniently store and manage their contacts. The main functions of such
        an application include:
      </p>
      <ol className={css.list}>
        <li className={css.li}>
          <span className={css.span}>Adding contacts:</span> The user can add
          new contacts by specifying their name and phone number.
        </li>
        <li className={css.li}>
          <span className={css.span}>Viewing contacts:</span> Viewing a list of
          all saved contacts is available in the application.
        </li>
        <li className={css.li}>
          <span className={css.span}>Editing and deleting contacts:</span> The
          user can edit existing contacts by making changes to their information
          or removing them from the list.
        </li>
        <li className={css.li}>
          <span className={css.span}>Contact search:</span> The application
          provides the ability to quickly search for contacts by name or phone
          number, which makes it easier to find the necessary information.
        </li>
        <li className={css.li}>
          <span className={css.span}>Storage in regional storage:</span>{" "}
          Contacts are stored in regional storage, which allows users to store
          their data and access it from different devices.
        </li>
        <li className={css.li}>
          <span className={css.span}>User-friendly interface:</span> The
          application is clear and user-friendly interface that allows users to
          easily navigate and use all its functions without unnecessary
          difficulties.
        </li>
      </ol>
      <p>
        This application helps users manage their contacts effectively,
        providing quick access to the necessary information and convenient
        organization of contact data.
      </p>
    </div>
  );
};

export default HomePage;
