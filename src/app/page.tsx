import { Button } from "@/shared/components/shadcn/button";


export default function Landing() {
  return (
    <main className="font-base">
      <header className="flex flex-row items-center justify-between  max-w-6xl mx-auto p-4 rounded-b-xl">
        <div>
          <p className="text-3xl text-center font-inter font-semibold">
            Wheelhouse
          </p>
        </div>
        <div>
          <Button>
            Sign in
          </Button>
        </div>
      </header>
    </main>
  );
}
