import CommunitiesSection from '@/components/CommunitiesSection'

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Communities</h1>
          <p className="text-gray-600 mt-2">
            Join communities that match your interests and connect with like-minded people.
          </p>
        </div>

        <CommunitiesSection />
      </div>
    </div>
  )
} 