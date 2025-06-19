import { useEffect } from "react"
import { checkUserSession, showOnboardingFlow } from "../utils"
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
export default function useWheelhouseAuthFlow() {
    const router = useRouter();
    const supabase = createClient();


// Create a new wheelhouse user profile
const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/home',
      },
    });

    if (error) {
      throw new Error(error.message);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    } else {
      router.push('/');
    }
  };

return {
    user : {
        user_metadata: { 
          avatar_url: 'https://theneedledrop.com/content/images/2024/11/Snapinsta.app_436509029_1098148308150186_1722421214884056536_n_1080-1.jpg',
          name: 'Irene' }

    },
    loading: false,
    handleSignIn,
    handleSignOut,
}
}
