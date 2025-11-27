
type FilterProps = {
  status: string;
  setStatus: (value: "All" | "Active" | "Paused") => void;
};

export default function Filter({ status, setStatus }: FilterProps) {
  return (
    <section className="mb-4">
      <label
        htmlFor="statusFilter"
        className="text-sm font-medium mr-2 text-gray-900"
      >
        Filter:
      </label>
      <select
        id="statusFilter"
        className="border border-gray-500 rounded px-3 py-2 text-sm bg-white 
                   text-gray-900 focus:outline-none focus:border-blue-600 cursor-pointer"
        value={status}
        onChange={(e) => setStatus(e.target.value as "All" | "Active" | "Paused")}
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Paused">Paused</option>
      </select>
    </section>
  );
}
