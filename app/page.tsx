import { BannerHome, ChoiceSection, CodeSnippet, HeroComponent, HomeConversation, TechHome } from "@/components/home";
import ManageAccountButton from "@/components/subscription/manage";
import React from "react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">

      <HeroComponent />
      <ManageAccountButton />
      <BannerHome header="👨‍💻You are a Developer"
                  paragraph="You can learn anything, much faster than others"
                  description="Do not waste your potential" />
      <HomeConversation/>
      <ChoiceSection />
      <CodeSnippet />
      <BannerHome header="Explained Step by Step 🎓"
                  paragraph="Built to provide the essence of each tech"
                  description="login and start your journey" />
      <BannerHome header="No bull**it 🙆‍♂️"
                  paragraph="Play with free content before subscribing"
                  description="Eevry course has valuable free lessons 🚀" />
      <TechHome header="Tech You will learn"  />
    </main>
  );
}
