"use client";

import { useEffect, useState } from "react";

type Campaign = {
  id: number;
  name: string;
  status: "Active" | "Paused";
  clicks: number;
  cost: number;
  impressions: number;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function HomePage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_BASE_URL}/campaigns`);
        if (!res.ok) {
          throw new Error("Failed to fetch campaigns");
        }

        const data: Campaign[] = await res.json();
        setCampaigns(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchCampaigns();
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Campaign Analytics Dashboard
      </h1>

      {loading && <p className="text-gray-800 text-sm">Loading campaigns…</p>}

      {error && (
        <p className="text-red-600 text-sm">
          Error: {error}. Is the backend running?
        </p>
      )}

      {!loading && !error && (
        <ul className="mt-4 space-y-1 text-sm text-gray-900">
          {campaigns.map((c) => (
            <li key={c.id}>
              {c.name} — {c.status} — {c.clicks} clicks
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
