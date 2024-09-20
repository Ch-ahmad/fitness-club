"use client";
import useMe from "@/utils/fetchHooks/useMe";
import ProfileUpdateForm from "./profile-form";
import UpdateProfileImage from "./profile-image-form";

const UserProfilePage = () => {
  const { isLoading, response, refetch } = useMe();
  if (isLoading) {
    return <>loading....</>;
  }
  return (
    <main className="  mt-[15px] px-4 w-[50%] overflow-hidden">
      <UpdateProfileImage
        image={response?.profile_image}
        first_name={response.first_name}
        refetch={refetch}
      />
      <ProfileUpdateForm
        {...response}
        refetch={refetch}
      />
    </main>
  );
};

export default UserProfilePage;
