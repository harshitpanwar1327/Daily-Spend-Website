import Footer from "../components/Footer"

const RefundAndCancellationPolicy = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen overflow-y-auto">
      <div className="w-full bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 py-30 text-center flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Refund & Cancellation Policy</h2>
      </div>

      <div className="px-6 md:px-12 py-12 text-gray-600 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">1. Overview</h2>
          <p>Thank you for choosing My Daily Spend - Expense Tracker. We strive to provide the best service to help you manage your expenses effectively. This Refund and Cancellation Policy outlines the terms and conditions under which refunds and cancellations are handled for the subscription plans offered.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">2. Subscription Plans</h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            <li>Silver Plan</li>
            <li>Gold Plan</li>
            <li>Diamond Plan</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">3. Refund Policy</h2>
          <h3 className="text-lg font-semibold text-black">No Refund:</h3>
          <p>All purchases made for subscription plans (Silver, Gold, and Diamond) on My Daily Spend - Expense Tracker are non-refundable. Once a subscription is purchased, you will not be eligible for a refund, regardless of the duration left in your subscription period. This policy applies to all users and all subscription plans without exception.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">4. Cancellation Policy</h2>
          <h3 className="text-lg font-semibold text-black">Cancelling Subscriptions:</h3>
          <p>You may choose to cancel your subscription to the Silver, Gold, or Diamond plan at any time. Cancelling your subscription will stop any future billing and you will continue to have access to your subscribed plan until the end of your current billing period.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">5. Auto-Renewal</h2>
          <p>All subscriptions are set to auto-renew by default. If you do not wish to renew your subscription, you must cancel it before the end of your current billing period to avoid being charged for the next period.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">6. Changes to the Policy</h2>
          <p>Our Daily Spend - Expense Tracker reserves the right to modify or update this Refund and Cancellation Policy at any time. Any changes will be effective immediately upon posting the updated policy on our website or application. We encourage you to review this policy periodically to stay informed about our refund and cancellation practices.</p>
        </div>

        <div>
          <p>Thank you,</p>
          <strong>Shashank Panwar</strong>
          <p>DailySpend Founder</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RefundAndCancellationPolicy