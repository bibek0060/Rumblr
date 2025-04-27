export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Rumblr. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read these terms carefully before using our services.
              </p>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Accounts</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  To use certain features of our platform, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Updating your information to keep it current</li>
                </ul>
              </div>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Conduct</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Post or share content that is illegal, harmful, or offensive</li>
                  <li>Harass, bully, or intimidate other users</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Use the platform for spam or unauthorized advertising</li>
                  <li>Attempt to gain unauthorized access to other accounts</li>
                </ul>
              </div>
            </section>

            {/* Content Guidelines */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Content Guidelines</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  When posting content on our platform, you must:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Respect intellectual property rights</li>
                  <li>Ensure content is appropriate for all audiences</li>
                  <li>Not share personal or sensitive information</li>
                  <li>Follow community guidelines and standards</li>
                </ul>
              </div>
            </section>

            {/* Privacy and Data */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data</h2>
              <p className="text-gray-600 leading-relaxed">
                We collect and process your data in accordance with our Privacy Policy. By using our platform, you consent to such processing and warrant that all data provided by you is accurate.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Modifications to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes. Your continued use of the platform after such modifications constitutes your acceptance of the updated terms.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We may terminate or suspend your account at any time for violations of these terms or for any other reason. You may also terminate your account at any time by following the account deletion process.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Email: support@rumblr.com</p>
                <p className="text-gray-600">Address: 123 Rumblr Street, Tech City, TC 12345</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-600">
          <p>By using Rumblr, you agree to these terms and conditions.</p>
        </div>
      </div>
    </div>
  )
} 