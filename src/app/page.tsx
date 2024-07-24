import { SearchBar } from "@/components/ui/searchbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-primary">
      <h1 className="text-secondary text-4xl font-bold">BackTrack</h1>
      <h3 className="text-secondary">Find songs popular in:</h3>
      <SearchBar />
    </main>
  );
}
