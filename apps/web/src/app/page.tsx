import CaseTable from '@/components/CaseTable';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">ReputationOS Dashboard</h1>
        <CaseTable />
      </div>
    </main>
  )
}