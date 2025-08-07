"use client"

export default function CalendlyWidget() {
  return (
    <div className="bg-[#0f1724] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4">
      <iframe
        src="https://calendly.com/theminaret/hvac-consult"
        width="100%"
        height="700px"
        frameBorder="0"
        className="rounded-xl"
      />
    </div>
  )
}