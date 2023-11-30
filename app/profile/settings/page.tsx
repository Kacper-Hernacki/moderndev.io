export default function ProfileSettings() {
  return (
    <div className="mb-10 flex-col">
      <h1 className="mb-4 text-5xl font-bold gradient-span">Profile settings</h1>
      <p className="mb-14 text-xl">Manage your account below:</p>
      <div className="flex flex-col gap-8">
        <button className="btn btn-primary text-xl">Get Receipts</button>
        <button className="btn btn-primary text-xl">Get Invoices</button>
        <button className="btn btn-primary text-xl">Update Address</button>
        <button className="btn btn-primary text-xl">Update Payment Method</button>
        <button className="btn btn-primary text-xl">Manage Subscription</button>
        <h1 className="text-2xl font-bold text-center">Danger Zone</h1>
        <button className="btn btn-secondary text-xl">Delete this Account</button>
      </div>
    </div>
  );
}
