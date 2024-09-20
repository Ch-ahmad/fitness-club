import ProfileUpdateForm from "./profile-form";
import UpdateProfileImage from "./profile-image-form";

const UserProfilePage = () => {
  return (
    <main className="mt-[15px] px-4 w-[50%] overflow-hidden">
      <UpdateProfileImage />
      <ProfileUpdateForm />
    </main>
  );
};

export default UserProfilePage;
