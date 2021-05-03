import AppButton from "@components/app-button";
import AppHeading from "@components/app-heading";
import AppInput from "@components/app-input";
import PageLayout from "@components/page-layout";

export default function Login() {
  return (
    <PageLayout>
      <form action="" className="flex flex-col space-y-2 p-4 rounded bg-white">
        <AppHeading>Enter user data</AppHeading>
        <label htmlFor="email">Email</label>
        <AppInput
          type="email"
          name="email"
          placeholder="Enter email"
          id="email"
          isRequired={true}
        />
        <label htmlFor="password">Password</label>
        <AppInput
          type="password"
          name="password"
          placeholder="Enter password"
          id="password"
          idRequired={true}
        />
        <AppButton type="submit">Login</AppButton>
      </form>
    </PageLayout>
  );
}
