import { appConfig } from '@/app-config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfService() {
  return (
    <div className="container m-auto max-w-3xl py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Terms of Service Template for SaaS Application
          </CardTitle>
          <p className="text-muted-foreground mt-4">
            This Terms of Service agreement outlines the rules and regulations
            for using your SaaS platform. It establishes the legal relationship
            between your company and your users, defining responsibilities and
            limitations for both parties.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              1. Introduction and Acceptance
            </h2>
            <p>
              Welcome to {appConfig.appName} (the &quot;Service&quot;), operated
              by {appConfig.company?.name} (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;). By accessing or using our Service, you agree to
              be bound by these Terms of Service (the &quot;Terms&quot;). If you
              do not agree to all the terms and conditions of this agreement,
              you may not access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              2. Service Description
            </h2>
            <p>
              {appConfig.appName} is a software-as-a-service platform that{' '}
              {appConfig.appDescription}. We provide this Service subject to
              these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              3. Account Registration and Security
            </h2>
            <h3 className="mb-2 text-xl font-semibold">3.1 Account Creation</h3>
            <p>
              To use certain features of our Service, you may need to create an
              account. When registering for an account, you must provide
              accurate, current, and complete information. You are responsible
              for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account.
            </p>
            <h3 className="mb-2 text-xl font-semibold">3.2 Account Security</h3>
            <p>
              You agree to notify us immediately of any unauthorized access to
              or use of your account. We cannot and will not be liable for any
              loss or damage arising from your failure to protect your login
              information, including your password.
            </p>
            <h3 className="mb-2 text-xl font-semibold">3.3 Age Restriction</h3>
            <p>
              The Service is intended for users who are at least 18 years of
              age. By using the Service, you confirm that you are at least 18
              years old. If you are under 18, you may only use the Service under
              the supervision of a parent or legal guardian who agrees to be
              bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              4. Subscription and Payment Terms
            </h2>
            <h3 className="mb-2 text-xl font-semibold">
              4.1 Subscription Plans
            </h3>
            <p>
              We offer various subscription plans with different features and
              pricing. The specific details of each plan are available on our
              pricing page.
            </p>
            <h3 className="mb-2 text-xl font-semibold">4.2 Free Trials</h3>
            <p>
              We may offer free trial periods for certain subscription plans. At
              the end of the trial period, your account will automatically
              convert to a paid subscription unless you cancel before the trial
              ends.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              5. User Responsibilities and Conduct
            </h2>
            <h3 className="mb-2 text-xl font-semibold">5.1 Acceptable Use</h3>
            <p className="mb-2">
              You agree to use the Service only for lawful purposes and in
              accordance with these Terms. You are responsible for all content
              and activity conducted under your account.
            </p>
            <h3 className="mb-2 text-xl font-semibold">
              5.2 Prohibited Activities
            </h3>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Use the Service in any way that violates any applicable law or
                regulation
              </li>
              <li>
                Infringe upon the rights of others or engage in any unlawful,
                fraudulent, or deceptive practices
              </li>
              <li>
                Attempt to interfere with, compromise the system integrity or
                security, or decipher any transmissions to or from the servers
                running the Service
              </li>
              <li>
                Use any robot, spider, or other automated system to access the
                Service
              </li>
              <li>
                Upload invalid data, viruses, worms, or other malicious software
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              6. Intellectual Property Rights
            </h2>
            <h3 className="mb-2 text-xl font-semibold">
              6.1 Our Intellectual Property
            </h3>
            <p>
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of [Your Company Name]
              and its licensors. The Service is protected by copyright,
              trademark, and other laws.
            </p>
            <h3 className="mb-2 text-xl font-semibold">6.2 Your Content</h3>
            <p>
              You retain all rights to any content you submit, post, or display
              on or through the Service. By submitting content to the Service,
              you grant us a worldwide, non-exclusive, royalty-free license to
              use, reproduce, modify, adapt, publish, and display such content
              in connection with providing and promoting the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">7. Data Privacy</h2>
            <p>
              We collect and process your personal information in accordance
              with our Privacy Policy, which is incorporated into these Terms by
              reference. By using our Service, you consent to such processing
              and you represent that all information you provide is accurate.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              8. Third-Party Links and Services
            </h2>
            <p>
              The Service may contain links to third-party websites or services
              that are not owned or controlled by us. We have no control over,
              and assume no responsibility for, the content, privacy policies,
              or practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, in no event shall{' '}
              {appConfig.company?.name}, its directors, employees, partners,
              agents, suppliers, or affiliates be liable for any indirect,
              incidental, special, consequential, or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              10. Disclaimer of Warranties
            </h2>
            <p>
              The Service is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. {appConfig.company?.name} expressly
              disclaims all warranties of any kind, whether express or implied.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Service will function uninterrupted, secure, or available at
                any particular time or location
              </li>
              <li>Any errors or defects will be corrected</li>
              <li>
                The Service is free of viruses or other harmful components
              </li>
              <li>
                The results of using the Service will meet your requirements
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless{' '}
              {appConfig.company?.name} and its affiliates from and against any
              claims, liabilities, damages, losses, and expenses, including
              reasonable attorneys&apos; fees.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              12. Term and Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend your account and
              access to the Service immediately, without prior notice or
              liability, for any reason, including without limitation if you
              breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              13. General Provisions
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of {appConfig.company?.jurisdiction}. Any dispute arising
              from these Terms shall be resolved through [specify:
              arbitration/mediation/courts in your jurisdiction].
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              14. General Provisions
            </h2>
            <h3 className="mb-2 text-xl font-semibold">14.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of {appConfig.company?.jurisdiction}, without regard to
              its conflict of law provisions.
            </p>
            <h3 className="mb-2 text-xl font-semibold">
              14.2 Dispute Resolution
            </h3>
            <p>
              Any dispute arising from or relating to these Terms or the Service
              shall be resolved through [specify: arbitration/mediation/courts
              in your jurisdiction].
            </p>
            <h3 className="mb-2 text-xl font-semibold">
              14.3 Entire Agreement
            </h3>
            <p>
              These Terms, together with the Privacy Policy and any other legal
              notices published by us on the Service, constitute the entire
              agreement between you and us concerning the Service.
            </p>
            <h3 className="mb-2 text-xl font-semibold">14.4 Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. The waiver of any such
              right or provision will be effective only if in writing and signed
              by a duly authorized representative of ours.
            </p>
            <h3 className="mb-2 text-xl font-semibold">14.5 Severability</h3>
            <p>
              If any provision of these Terms is held to be invalid or
              unenforceable, the remaining provisions of these Terms will remain
              in full force and effect.
            </p>
            <h3 className="mb-2 text-xl font-semibold">14.6 Assignment</h3>
            <p>
              You may not assign or transfer these Terms, by operation of law or
              otherwise, without our prior written consent. Any attempt by you
              to assign or transfer these Terms without such consent will be
              null and of no effect. We may assign or transfer these Terms, at
              our sole discretion, without restriction.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
              <br />
              {appConfig.company?.name}
              <br />
              {appConfig.company?.address}
              <br />
              {appConfig.company?.email}
              <br />
              {appConfig.company?.phone}
              <br />
              Last Updated: [Date]
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
