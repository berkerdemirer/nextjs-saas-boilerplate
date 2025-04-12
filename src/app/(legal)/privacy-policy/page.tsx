import { appConfig } from '@/src/app-config';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="container m-auto max-w-3xl py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Privacy Policy Template for {appConfig.appName}
          </CardTitle>
          <p className="text-muted-foreground mt-4">
            This comprehensive privacy policy template is designed specifically
            for SaaS applications. It covers the essential elements required for
            transparency with your users while protecting your business
            interests.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="mb-2 text-2xl font-semibold">Introduction</h2>
            <p>
              This Privacy Policy explains how {appConfig.company?.name} (
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
              uses, shares, and protects your personal information when you use
              our {appConfig.appName} service (the &quot;Service&quot;). By
              accessing or using our Service, you acknowledge that you have
              read, understood, and agree to the practices described in this
              Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Information We Collect
            </h2>
            <h3 className="mb-2 text-xl font-semibold">
              Information You Provide to Us
            </h3>
            <p className="mb-2">
              We collect information that you voluntarily provide when using our
              Service, which may include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Account information: When you register for an account, we
                collect information such as your name, email address, username,
                and password.
              </li>
              <li>
                Profile information: Information you add to your profile, such
                as job title, company name, and profile picture.
              </li>
              <li>
                Payment information: If you subscribe to our paid services, we
                collect billing details necessary to process your payment
                (though payment card details are typically processed by our
                payment processors).
              </li>
              <li>
                Communications: Information you provide when you contact our
                customer support team or communicate with other users through
                our Service.
              </li>
              <li>
                Content: Any content you upload or create within our Service,
                including documents, projects, comments, and other materials.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold">
              Information We Collect Automatically
            </h3>
            <p className="mb-2">
              When you use our Service, we automatically collect certain
              information, including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Usage data: Information about how you interact with our Service,
                such as features you use, pages you visit, and actions you take.
              </li>
              <li>
                Device information: Information about the device you use to
                access our Service, including device type, operating system,
                browser type, IP address, and device identifiers.
              </li>
              <li>
                Cookies and similar technologies: We use cookies and similar
                tracking technologies to collect information about your browsing
                activities and preferences.
              </li>
              <li>
                Log data: Server logs that record your interactions with our
                Service, such as search queries and timestamp information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              How We Use Your Information
            </h2>
            <p className="mb-2">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>To provide, maintain, and improve our Service.</li>
              <li>To process transactions and manage your account.</li>
              <li>
                To send you technical notices, updates, security alerts, and
                support messages.
              </li>
              <li>To respond to your comments, questions, and requests.</li>
              <li>
                To communicate with you about products, services, offers,
                promotions, and events.
              </li>
              <li>
                To monitor and analyze trends, usage, and activities in
                connection with our Service.
              </li>
              <li>
                To detect, prevent, and address technical issues, security
                breaches, and fraudulent activities.
              </li>
              <li>
                To comply with legal obligations and enforce our terms of
                service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              How We Share Your Information
            </h2>
            <p className="mb-2">
              We may share your personal information in the following
              circumstances:
            </p>
            <h3 className="mb-2 text-xl font-semibold">Service Providers</h3>
            <p className="mb-2">
              We share information with third-party vendors, consultants, and
              other service providers who perform services on our behalf, such
              as payment processing, data analysis, email delivery, hosting
              services, and customer service.
            </p>
            <h3 className="mb-2 text-xl font-semibold">Legal Requirements</h3>
            <p className="mb-2">
              We may disclose your information if required to do so by law or in
              response to valid requests by public authorities (e.g., a court or
              government agency).
            </p>
            <h3 className="mb-2 text-xl font-semibold">Business Transfers</h3>
            <p className="mb-2">
              If we are involved in a merger, acquisition, or sale of all or a
              portion of our assets, your information may be transferred as part
              of that transaction.
            </p>
            <h3 className="mb-2 text-xl font-semibold">With Your Consent</h3>
            <p className="mb-2">
              We may share your information with third parties when we have your
              consent to do so.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Data Retention</h2>
            <p className="mb-2">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. When we
              no longer need your personal information, we will securely delete
              or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Data Security</h2>
            <p className="mb-2">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Your Rights and Choices
            </h2>
            <p className="mb-2">
              Depending on your location, you may have certain rights regarding
              your personal information, such as:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Access: The right to request access to your personal
                information.
              </li>
              <li>
                Correction: The right to request that we correct inaccurate or
                incomplete information.
              </li>
              <li>
                Deletion: The right to request deletion of your personal
                information.
              </li>
              <li>
                Restriction: The right to request restriction of processing of
                your personal information.
              </li>
              <li>
                Portability: The right to receive your personal information in a
                structured, commonly used format.
              </li>
              <li>
                Objection: The right to object to our processing of your
                personal information.
              </li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us at{' '}
              {appConfig.company?.email}.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              International Data Transfers
            </h2>
            <p className="mb-2">
              Your information may be transferred to and processed in countries
              other than the country in which you reside. These countries may
              have data protection laws that differ from those in your country.
              We will take appropriate safeguards to ensure that your personal
              information remains protected in accordance with this Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Children&apos;s Privacy
            </h2>
            <p className="mb-2">
              Our Service is not directed to children under the age of 13 (or
              the applicable age of digital consent in your jurisdiction). We do
              not knowingly collect personal information from children. If you
              become aware that a child has provided us with personal
              information without parental consent, please contact us, and we
              will take steps to remove such information.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-2">
              We may update this Privacy Policy from time to time. The updated
              version will be indicated by an updated &quot;Revised&quot; date
              and will be effective as soon as it is accessible. We encourage
              you to review this Privacy Policy periodically to stay informed
              about our information practices.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us at:
              <br />
              {appConfig.appName}
              <br />
              {appConfig.company?.address}
              <br />
              {appConfig.company?.email}
              <br />
              {appConfig.company?.phone}
              <br />
              This Privacy Policy was last updated on [Date].
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
