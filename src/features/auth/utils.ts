import { SupabaseClient } from "@supabase/supabase-js";

export function checkUserSession(supabase: SupabaseClient){
    return async function(){
        const { data: { user } } = await supabase.auth.getUser();
        if (!user || user === null) {
            return null;
        }}
}

export function showOnboardingFlow(): boolean {
    // Placeholder logic for checking IndexedDB or localStorage
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    return !hasSeenOnboarding;

}