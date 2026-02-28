'use client'

import { Printer } from 'lucide-react'

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-rose-100 text-gray-600 hover:text-rose-600 transition-colors"
      aria-label="Print"
    >
      <Printer className="w-5 h-5" />
    </button>
  )
}
