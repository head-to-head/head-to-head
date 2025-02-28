// app/matchup/page.tsx
import TeamInput from "./ui/TeamInput";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Teams | Soccer Matchups",
  description: "Compare soccer teams head-to-head with historical data.",
};

export default function MatchupPage() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold">Compare Teams</h1>
      <div className="flex items-center gap-4 mt-4">
        <TeamInput placeholder="Team 1" />
        <span className="text-xl font-bold">Vs</span>
        <TeamInput placeholder="Team 2" />
      </div>
    </div>
  );
}
