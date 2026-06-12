'use client'

import { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  service: string
  timeline: string
  budgetRange: string
  message: string
}

interface FormStatus {
  isSubmitting: boolean
  isSubmitted: boolean
  error: string | null
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    timeline: '',
    budgetRange: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null,
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      })

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        service: '',
        timeline: '',
        budgetRange: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
      })
    }
  }

  if (status.isSubmitted) {
    return (
      <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
        <div className="text-center">
          <div className="bg-success-100 dark:bg-success-900 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
            <svg
              className="text-success-600 dark:text-success-400 h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            Project Details Sent
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Thanks for the context. We'll review fit and respond with a practical next step within
            24 hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Tell Us About the Project
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
          A few specifics help us respond with a useful fit check instead of a generic sales call.
        </p>
      </div>

      {status.error && (
        <div className="bg-error-50 dark:bg-error-900/20 mb-6 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="text-error-400 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-error-800 dark:text-error-200 text-sm font-medium">Error</h3>
              <div className="text-error-700 dark:text-error-300 mt-2 text-sm">{status.error}</div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="focus:border-brand-500 focus:ring-brand-500 mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="John"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="focus:border-brand-500 focus:ring-brand-500 mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Work Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="focus:border-brand-500 focus:ring-brand-500 mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="focus:border-brand-500 focus:ring-brand-500 mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Company or organization"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Primary Need
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="focus:border-brand-500 focus:ring-brand-500 mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select the closest fit</option>
              <option value="custom-development">Custom business software or SaaS</option>
              <option value="ai-workflow-automation">AI workflow automation</option>
              <option value="systems-integration">Systems integration</option>
              <option value="software-modernization">Software modernization or rescue</option>
              <option value="architecture-leadership">Architecture or technical leadership</option>
              <option value="other">Not sure yet</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="timeline"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="focus:border-brand-500 focus:ring-brand-500 mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select a timeline</option>
              <option value="now">Need help now</option>
              <option value="30-days">Planning for the next 30 days</option>
              <option value="quarter">Planning this quarter</option>
              <option value="exploring">Exploring options</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="budgetRange"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Approximate Budget Range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleInputChange}
            className="focus:border-brand-500 focus:ring-brand-500 mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          >
            <option value="">Select a range if known</option>
            <option value="under-25k">Under $25k</option>
            <option value="25k-75k">$25k-$75k</option>
            <option value="75k-150k">$75k-$150k</option>
            <option value="150k-plus">$150k+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Optional, but it helps us recommend the smallest responsible next step.
          </p>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="focus:border-brand-500 focus:ring-brand-500 mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder="What business problem are you trying to solve? Include the current workflow or system, who owns the decision, and what a useful first release would accomplish."
          />
        </div>

        <button
          type="submit"
          disabled={status.isSubmitting}
          className="group bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status.isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </div>
          ) : (
            <span className="relative z-10">Send Project Context</span>
          )}
          <div className="from-brand-700 to-brand-800 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
        </button>
      </form>
    </div>
  )
}
