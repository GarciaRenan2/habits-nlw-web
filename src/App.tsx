import "./styles/global.css";
import "./lib/dayjs";
import { Header } from "./components/Heder";
import { SummaryTable } from "./components/SummaryTable";

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <main className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </main>
    </div>
  );
}
