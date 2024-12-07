import styles from "@/styles/Forms.module.css";

export default function UserProfileCard({ userInformation }) {
  return (
    <div className={styles.ProfileWrapper}>
      <h2>User Profile</h2>
      <p>Email: {userInformation?.email}</p>
    </div>
  );
}
