export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* 头部骨架屏 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="hidden md:flex md:items-center md:space-x-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容骨架屏 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="space-y-8">
          <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 