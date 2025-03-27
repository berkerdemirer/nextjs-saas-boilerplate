import { Container, List, ListItem, Text, Title } from '@mantine/core';

export default function TermsOfService() {
  return (
    <Container size={720} my={40}>
      <Title>Terms of Service Template for SaaS Application</Title>
      <br />
      <Text>
        This Terms of Service agreement outlines the rules and regulations for
        using your SaaS platform. It establishes the legal relationship between
        your company and your users, defining responsibilities and limitations
        for both parties.
      </Text>
      <br />

      <Title order={2}>1. Introduction and Acceptance</Title>
      <Text>
        Welcome to [Your Service Name] (the "Service"), operated by [Your
        Company Name] ("we," "us," or "our"). By accessing or using our Service,
        you agree to be bound by these Terms of Service (the "Terms"). If you do
        not agree to all the terms and conditions of this agreement, you may not
        access or use the Service.
      </Text>
      <br />

      <Title order={2}>2. Service Description</Title>
      <Text>
        [Your Service Name] is a software-as-a-service platform that [briefly
        describe what your service does]. We provide this Service subject to
        these Terms.
      </Text>
      <br />

      <Title order={2}>3. Account Registration and Security</Title>
      <Title order={3}>3.1 Account Creation</Title>
      <Text>
        To use certain features of our Service, you may need to create an
        account. When registering for an account, you must provide accurate,
        current, and complete information. You are responsible for maintaining
        the confidentiality of your account credentials and for all activities
        that occur under your account.
      </Text>
      <br />

      <Title order={3}>3.2 Account Security</Title>
      <Text>
        You agree to notify us immediately of any unauthorized access to or use
        of your account. We cannot and will not be liable for any loss or damage
        arising from your failure to protect your login information, including
        your password.
      </Text>
      <br />

      <Title order={3}>3.3 Age Restriction</Title>
      <Text>
        The Service is intended for users who are at least 18 years of age. By
        using the Service, you confirm that you are at least 18 years old. If
        you are under 18, you may only use the Service under the supervision of
        a parent or legal guardian who agrees to be bound by these Terms.
      </Text>
      <br />

      <Title order={2}>4. Subscription and Payment Terms</Title>
      <Title order={3}>4.1 Subscription Plans</Title>
      <Text>
        We offer various subscription plans with different features and pricing.
        The specific details of each plan are available on our pricing page.
      </Text>
      <br />

      <Title order={3}>4.2 Free Trials</Title>
      <Text>
        We may offer free trial periods for certain subscription plans. At the
        end of the trial period, your account will automatically convert to a
        paid subscription unless you cancel before the trial ends.
      </Text>
      <br />

      <Title order={2}>5. User Responsibilities and Conduct</Title>
      <Title order={3}>5.1 Acceptable Use</Title>
      <Text>
        You agree to use the Service only for lawful purposes and in accordance
        with these Terms. You are responsible for all content and activity
        conducted under your account.
      </Text>
      <br />

      <Title order={3}>5.2 Prohibited Activities</Title>
      <Text>You agree not to:</Text>
      <List>
        <ListItem>
          Use the Service in any way that violates any applicable law or
          regulation
        </ListItem>
        <ListItem>
          Infringe upon the rights of others or engage in any unlawful,
          fraudulent, or deceptive practices
        </ListItem>
        <ListItem>
          Attempt to interfere with, compromise the system integrity or
          security, or decipher any transmissions to or from the servers running
          the Service
        </ListItem>
        <ListItem>
          Use any robot, spider, or other automated system to access the Service
        </ListItem>
        <ListItem>
          Upload invalid data, viruses, worms, or other malicious software
        </ListItem>
      </List>
      <br />

      <Title order={2}>6. Intellectual Property Rights</Title>
      <Title order={3}>6.1 Our Intellectual Property</Title>
      <Text>
        The Service and its original content, features, and functionality are
        and will remain the exclusive property of [Your Company Name] and its
        licensors. The Service is protected by copyright, trademark, and other
        laws.
      </Text>
      <br />

      <Title order={3}>6.2 Your Content</Title>
      <Text>
        You retain all rights to any content you submit, post, or display on or
        through the Service. By submitting content to the Service, you grant us
        a worldwide, non-exclusive, royalty-free license to use, reproduce,
        modify, adapt, publish, and display such content in connection with
        providing and promoting the Service.
      </Text>
      <br />

      <Title order={2}>7. Data Privacy</Title>
      <Text>
        We collect and process your personal information in accordance with our
        Privacy Policy, which is incorporated into these Terms by reference. By
        using our Service, you consent to such processing and you represent that
        all information you provide is accurate.
      </Text>
      <br />

      <Title order={2}>8. Third-Party Links and Services</Title>
      <Text>
        The Service may contain links to third-party websites or services that
        are not owned or controlled by us. We have no control over, and assume
        no responsibility for, the content, privacy policies, or practices of
        any third-party websites or services.
      </Text>
      <br />

      <Title order={2}>9. Limitation of Liability</Title>
      <Text>
        To the maximum extent permitted by law, in no event shall [Your Company
        Name], its directors, employees, partners, agents, suppliers, or
        affiliates be liable for any indirect, incidental, special,
        consequential, or punitive damages.
      </Text>
      <br />

      <Title order={2}>10. Disclaimer of Warranties</Title>
      <Text>
        The Service is provided on an "as is" and "as available" basis. [Your
        Company Name] expressly disclaims all warranties of any kind, whether
        express or implied.
      </Text>
      <List>
        <ListItem>
          The Service will function uninterrupted, secure, or available at any
          particular time or location
        </ListItem>
        <ListItem>Any errors or defects will be corrected</ListItem>
        <ListItem>
          The Service is free of viruses or other harmful components
        </ListItem>
        <ListItem>
          The results of using the Service will meet your requirements
        </ListItem>
      </List>
      <br />

      <Title order={2}>11. Indemnification</Title>
      <Text>
        You agree to defend, indemnify, and hold harmless [Your Company Name]
        and its affiliates from and against any claims, liabilities, damages,
        losses, and expenses, including reasonable attorneys' fees.
      </Text>
      <br />

      <Title order={2}>12. Term and Termination</Title>
      <Text>
        We reserve the right to terminate or suspend your account and access to
        the Service immediately, without prior notice or liability, for any
        reason, including without limitation if you breach the Terms.
      </Text>
      <br />

      <Title order={2}>13. General Provisions</Title>
      <Text>
        These Terms shall be governed by and construed in accordance with the
        laws of [Your Jurisdiction]. Any dispute arising from these Terms shall
        be resolved through [specify: arbitration/mediation/courts in your
        jurisdiction].
      </Text>
      <br />

      <Title order={2}>14. General Provisions</Title>
      <Title order={3}>14.1 Governing Law</Title>
      <Text>
        These Terms shall be governed by and construed in accordance with the
        laws of [Your Jurisdiction], without regard to its conflict of law
        provisions.
      </Text>
      <br />

      <Title order={3}>14.2 Dispute Resolution</Title>
      <Text>
        Any dispute arising from or relating to these Terms or the Service shall
        be resolved through [specify: arbitration/mediation/courts in your
        jurisdiction].
      </Text>
      <br />

      <Title order={3}>14.3 Entire Agreement</Title>
      <Text>
        These Terms, together with the Privacy Policy and any other legal
        notices published by us on the Service, constitute the entire agreement
        between you and us concerning the Service.
      </Text>
      <br />

      <Title order={3}>14.4 Waiver</Title>
      <Text>
        Our failure to enforce any right or provision of these Terms will not be
        considered a waiver of those rights. The waiver of any such right or
        provision will be effective only if in writing and signed by a duly
        authorized representative of ours.
      </Text>
      <br />

      <Title order={3}>14.5 Severability</Title>
      <Text>
        If any provision of these Terms is held to be invalid or unenforceable,
        the remaining provisions of these Terms will remain in full force and
        effect.
      </Text>
      <br />

      <Title order={3}>14.6 Assignment</Title>
      <Text>
        You may not assign or transfer these Terms, by operation of law or
        otherwise, without our prior written consent. Any attempt by you to
        assign or transfer these Terms without such consent will be null and of
        no effect. We may assign or transfer these Terms, at our sole
        discretion, without restriction.
      </Text>
      <br />

      <Title order={2}>Contact Us</Title>
      <Text>
        If you have any questions about these Terms of Service, please contact
        us at:
        <br />
        [Your Company Name]
        <br />
        [Your Address]
        <br />
        [Your Email Address]
        <br />
        [Your Phone Number]
        <br />
        Last Updated: [Date]
      </Text>
    </Container>
  );
}
