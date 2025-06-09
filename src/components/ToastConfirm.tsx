export default function ToastConfirm({ isOpen, onConfirm, onCancel, message, title="" }: any) {
  if (!isOpen) return null

  return (
    <div className="fixed top-4 right-2 md:right-4 bg-white border-l-4 border-yellow-500 p-4 shadow-lg rounded z-50 text-sm">
      <div className="flex items-center gap-3">
        <span className="text-yellow-500">⚠️</span>
        <span className="text-gray-800">{message}</span>
        <div className="flex gap-2 ml-4">
          <button onClick={onConfirm} className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Yes</button>
          <button onClick={onCancel} className="text-black text-sm border px-3 py-1 rounded hover:bg-gray-50">Nope</button>
        </div>
      </div>
    </div>
  )
}