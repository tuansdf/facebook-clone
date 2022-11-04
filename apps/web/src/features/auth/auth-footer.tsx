import Divider from "/src/features/ui/divider";

export default function AuthFooter() {
  return (
    <div className="mx-auto w-full max-w-screen-tablet space-y-3 py-8 text-xs text-gray-500">
      {/* languages */}
      <div className="flex gap-x-3">
        <span>English</span>
        <span>Tieng Viet</span>
        <span>Espanol</span>
        <span>Portugues</span>
        <span>Deustsch</span>
        <span>Italiano</span>
      </div>

      <Divider />

      {/* services */}
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <span>Sign Up</span>
        <span>Log In</span>
        <span>Messenger</span>
        <span>Facebook Lite</span>
        <span>Watch</span>
        <span>Places</span>
        <span>Games</span>
        <span>Marketplace</span>
        <span>Meta Play</span>
        <span>Oculus</span>
        <span>Portal</span>
        <span>Instagram</span>
        <span>Bulletin</span>
        <span>Local</span>
        <span>Fundraisers</span>
        <span>Services</span>
        <span>Voting Information Centre</span>
        <span>Groups</span>
        <span>About</span>
        <span>Create ad</span>
        <span>Create Page</span>
        <span>Developers</span>
        <span>Careers</span>
        <span>Privacy</span>
        <span>Cookies</span>
        <span>AdChoices</span>
        <span>Terms</span>
        <span>Help</span>
        <span>Contact uploading and non-users</span>
      </div>
    </div>
  );
}
