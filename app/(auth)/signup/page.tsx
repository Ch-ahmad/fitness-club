"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UserSignUp from "./user-signup";
import CoachSignUp from "./coach-signup";

export default function LoginForm() {
  return (
    <Tabs defaultValue="user-signup">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="user-signup"> User</TabsTrigger>
        <TabsTrigger value="coach-signup"> Coach</TabsTrigger>
      </TabsList>
      <TabsContent value="user-signup">
        <UserSignUp />
      </TabsContent>
      <TabsContent value="coach-signup">
        <CoachSignUp />
      </TabsContent>
    </Tabs>
  );
}
