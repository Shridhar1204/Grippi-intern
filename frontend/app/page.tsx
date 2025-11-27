"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Table from "../components/Table";

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
  const [filterStatus, setFilterStatus] = useState<"All" | "Active" | "Paused">(
    "All"
  );

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_BASE_URL}/campaigns`);
        if (!res.ok) throw new Error("Failed to fetch campaigns");

        setCampaigns(await res.json());
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCampaigns();
  }, []);

  const filteredCampaigns =
    filterStatus === "All"
      ? campaigns
      : campaigns.filter((c) => c.status === filterStatus);

  return (
    <main className="min-h-screen flex justify-center p-8 bg-gray-200">
      <div className="w-full max-w-5xl">
        <Header />
        <Filter status={filterStatus} setStatus={setFilterStatus} />
        <Table campaigns={filteredCampaigns} loading={loading} error={error} />
      </div>
    </main>
  );
}
