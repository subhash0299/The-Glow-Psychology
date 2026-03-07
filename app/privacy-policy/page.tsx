import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Cookie, Link2, Server, FileText, Eye, UserX } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy – GlowFinds',
  description: 'Learn how GlowFinds collects, uses, and protects user information. Includes disclosure on Google AdSense, cookies, and affiliate links.',
  openGraph: {
    title: 'Privacy Policy – GlowFinds',
    description: 'Learn how GlowFinds collects, uses, and protects user information.',
    url: 'https://glowfinds.vercel.app/privacy-policy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy – GlowFinds',
    description: 'Learn how GlowFinds collects, uses, and protects user information.',
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'February 26, 2026'

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Legal
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">

        <section>
          <p className="text-gray-700 text-lg leading-relaxed">
            GlowFinds (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you visit <strong>glowfinds.vercel.app</strong> (the &quot;Site&quot;). By using our Site, you agree to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <FileText className="w-6 h-6 text-rose-600" />
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We do not require registration and do not directly collect personal information such as your name or email address. However, the following data may be collected automatically when you visit our Site:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside ml-2">
            <li>Browser type and version</li>
            <li>Device type (mobile, desktop, tablet)</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website or search query</li>
            <li>Approximate geographic location (country/city level)</li>
            <li>IP address (used for analytics and fraud prevention)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            This information is collected automatically by third-party services we use, described below.
          </p>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <Cookie className="w-6 h-6 text-rose-600" />
            Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Our Site uses cookies — small text files placed on your device — to improve your experience and to serve advertising. Cookies may be set by us or by third-party services operating on our Site.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Types of cookies used:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside ml-2 mb-3">
            <li><strong>Advertising cookies</strong> — used by Google AdSense to serve relevant ads based on your browsing behaviour</li>
            <li><strong>Analytics cookies</strong> — used to understand how visitors use the Site</li>
            <li><strong>Functional cookies</strong> — used to remember your preferences</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            You can control and delete cookies through your browser settings. Disabling cookies may affect the functionality of some parts of the Site.
          </p>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <Eye className="w-6 h-6 text-rose-600" />
            Google AdSense and Advertising
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We use <strong>Google AdSense</strong>, a third-party advertising service operated by Google LLC, to display advertisements on our Site. Google AdSense uses cookies and web beacons to serve ads based on your prior visits to our Site and other websites on the internet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our Site and/or other sites on the internet. This is sometimes called <strong>interest-based advertising</strong> or <strong>personalised advertising</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Google AdSense may use:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside ml-2 mb-3">
            <li>The <strong>DoubleClick cookie</strong> to serve ads across websites</li>
            <li>Device identifiers for mobile advertising</li>
            <li>Browsing history to personalise ads</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            You can opt out of personalised advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-700 underline"
            >
              Google&apos;s Ads Settings
            </a>{' '}
            or by visiting{' '}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-700 underline"
            >
              aboutads.info
            </a>
            . For more information about how Google uses data from our Site, see{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-700 underline"
            >
              Google&apos;s Privacy &amp; Terms
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <Link2 className="w-6 h-6 text-rose-600" />
            Affiliate Links Disclosure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            GlowFinds participates in affiliate marketing programmes, including the <strong>Amazon Associates Programme</strong>. This means that when you click on certain product links on our Site and make a purchase, we may earn a small commission at <strong>no additional cost to you</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Affiliate links may set cookies on your device to track purchases. These cookies are set by third-party retailers (such as Amazon.in) and are subject to their privacy policies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our editorial recommendations are independent of affiliate relationships. Products are selected based on research, ingredient analysis, and value — not commission rates.
          </p>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <Server className="w-6 h-6 text-rose-600" />
            Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Our Site uses the following third-party services that may collect data:
          </p>
          <div className="space-y-3">
            {[
              { name: 'Google AdSense', desc: 'Serves personalised and non-personalised ads. May collect device data, cookies, and browsing behaviour.', link: 'https://policies.google.com/privacy' },
              { name: 'Google Analytics (if used)', desc: 'Collects anonymised traffic data including page views, session duration, and device type.', link: 'https://policies.google.com/privacy' },
              { name: 'Vercel', desc: 'Our hosting provider. May collect server logs including IP addresses and request data.', link: 'https://vercel.com/legal/privacy-policy' },
              { name: 'Amazon Associates', desc: 'Affiliate tracking cookies set when you click product links to Amazon.in.', link: 'https://www.amazon.in/gp/help/customer/display.html?nodeId=200534380' },
            ].map(({ name, desc, link }) => (
              <div key={name} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">{name}</p>
                <p className="text-gray-700 text-sm mb-1">{desc}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 text-sm underline">
                  View Privacy Policy →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <UserX className="w-6 h-6 text-rose-600" />
            Your Rights and Choices
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You have the following options to control your data:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside ml-2">
            <li><strong>Opt out of personalised ads</strong> — visit <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-rose-600 underline">Google Ads Settings</a></li>
            <li><strong>Disable cookies</strong> — use your browser&apos;s privacy settings to block or delete cookies</li>
            <li><strong>Do Not Track</strong> — some browsers send a &quot;Do Not Track&quot; signal; our third-party partners may or may not honour this signal</li>
            <li><strong>Contact us</strong> — if you have questions about your data, email us at <a href="mailto:theglowpsychology@gmail.com" className="text-rose-600 underline">theglowpsychology@gmail.com</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Medical Disclaimer
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The content on GlowFinds is for <strong>informational and educational purposes only</strong>. It is not intended as medical advice. Always consult a qualified dermatologist or healthcare professional before making changes to your skincare routine, especially if you have a skin condition or sensitivity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Updates to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The &quot;Last updated&quot; date at the top of this page will reflect any changes. Continued use of the Site after changes are posted constitutes your acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:theglowpsychology@gmail.com" className="text-rose-600 hover:text-rose-700 underline font-medium">
              theglowpsychology@gmail.com
            </a>
          </p>
        </section>

        <nav className="pt-6 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-500 mb-2">More from GlowFinds</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="text-rose-600 hover:text-rose-700 font-medium">About</Link>
            <Link href="/how-we-review" className="text-rose-600 hover:text-rose-700 font-medium">How We Review</Link>
            <Link href="/contact" className="text-rose-600 hover:text-rose-700 font-medium">Contact</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
