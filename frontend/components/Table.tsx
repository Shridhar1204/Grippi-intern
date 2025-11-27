type Campaign = {
  id: number;
  name: string;
  status: "Active" | "Paused";
  clicks: number;
  cost: number;
  impressions: number;
};

type TableProps = {
  campaigns: Campaign[];
  loading: boolean;
  error: string | null;
};

export default function Table({ campaigns, loading, error }: TableProps) {
  if (loading) return <div className="p-4 text-sm text-gray-900">Loading campaigns…</div>;
  if (error) return <div className="p-4 text-sm text-red-700">Error: {error}</div>;

  return (
    <section className="border border-gray-500 rounded bg-white">
      <table className="w-full text-sm">
        <thead className="bg-gray-300">
          <tr>
            <th className="px-3 py-2 text-left text-gray-900 font-medium">Campaign Name</th>
            <th className="px-3 py-2 text-left text-gray-900 font-medium">Status</th>
            <th className="px-3 py-2 text-right text-gray-900 font-medium">Clicks</th>
            <th className="px-3 py-2 text-right text-gray-900 font-medium">Cost (₹)</th>
            <th className="px-3 py-2 text-right text-gray-900 font-medium">Impressions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c, index) => (
            <tr key={c.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="px-3 py-2 text-gray-900">{c.name}</td>
              <td className="px-3 py-2">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    c.status === "Active"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-white"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td className="px-3 py-2 text-right text-gray-900">{c.clicks}</td>
              <td className="px-3 py-2 text-right text-gray-900">{c.cost.toFixed(2)}</td>
              <td className="px-3 py-2 text-right text-gray-900">{c.impressions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
