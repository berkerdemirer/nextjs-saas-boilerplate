import { Container, List, ListItem, Text, Title } from '@mantine/core';

export default function PrivacyPolicy() {
  return (
    <Container size={720} my={40}>
      <Title> Privacy Policy Template for SaaS Application</Title>
      <br />
      <Text>
        This comprehensive privacy policy template is designed specifically for
        SaaS applications. It covers the essential elements required for
        transparency with your users while protecting your business interests.
      </Text>
      <br />

      <Title order={2}>Introduction</Title>
      <Text>
        This Privacy Policy explains how [Your Company Name] ("we," "us," or
        "our") collects, uses, shares, and protects your personal information
        when you use our [Service Name] service (the "Service"). By accessing or
        using our Service, you acknowledge that you have read, understood, and
        agree to the practices described in this Privacy Policy.
      </Text>
      <br />

      <Title order={2}>Information We Collect</Title>
      <br />

      <Title order={3}>Information You Provide to Us</Title>
      <Text>
        We collect information that you voluntarily provide when using our
        Service, which may include:
      </Text>
      <List>
        <ListItem>
          Account information: When you register for an account, we collect
          information such as your name, email address, username, and password.
        </ListItem>
        <ListItem>
          Profile information: Information you add to your profile, such as job
          title, company name, and profile picture.
        </ListItem>
        <ListItem>
          Payment information: If you subscribe to our paid services, we collect
          billing details necessary to process your payment (though payment card
          details are typically processed by our payment processors).
        </ListItem>
        <ListItem>
          Communications: Information you provide when you contact our customer
          support team or communicate with other users through our Service.
        </ListItem>
        <ListItem>
          Content: Any content you upload or create within our Service,
          including documents, projects, comments, and other materials.
        </ListItem>
      </List>

      <br />
      <Title order={3}>Information We Collect Automatically</Title>
      <Text>
        When you use our Service, we automatically collect certain information,
        including:
      </Text>
      <List>
        <ListItem>
          Usage data: Information about how you interact with our Service, such
          as features you use, pages you visit, and actions you take.
        </ListItem>
        <ListItem>
          Device information: Information about the device you use to access our
          Service, including device type, operating system, browser type, IP
          address, and device identifiers.
        </ListItem>
        <ListItem>
          Cookies and similar technologies: We use cookies and similar tracking
          technologies to collect information about your browsing activities and
          preferences.
        </ListItem>
        <ListItem>
          Log data: Server logs that record your interactions with our Service,
          such as search queries and timestamp information.
        </ListItem>
      </List>

      <br />
      <Title order={2}>How We Use Your Information</Title>
      <Text>We use the information we collect for the following purposes:</Text>
      <List>
        <ListItem>To provide, maintain, and improve our Service.</ListItem>
        <ListItem>To process transactions and manage your account.</ListItem>
        <ListItem>
          To send you technical notices, updates, security alerts, and support
          messages.
        </ListItem>
        <ListItem>
          To respond to your comments, questions, and requests.
        </ListItem>
        <ListItem>
          To communicate with you about products, services, offers, promotions,
          and events.
        </ListItem>
        <ListItem>
          To monitor and analyze trends, usage, and activities in connection
          with our Service.
        </ListItem>
        <ListItem>
          To detect, prevent, and address technical issues, security breaches,
          and fraudulent activities.
        </ListItem>
        <ListItem>
          To comply with legal obligations and enforce our terms of service.
        </ListItem>
      </List>

      <br />
      <Title order={2}>How We Share Your Information</Title>
      <Text>
        We may share your personal information in the following circumstances:
      </Text>

      <br />
      <Title order={3}>Service Providers</Title>
      <Text>
        We share information with third-party vendors, consultants, and other
        service providers who perform services on our behalf, such as payment
        processing, data analysis, email delivery, hosting services, and
        customer service.
      </Text>

      <br />
      <Title order={3}>Legal Requirements</Title>
      <Text>
        We may disclose your information if required to do so by law or in
        response to valid requests by public authorities (e.g., a court or
        government agency).
      </Text>

      <br />
      <Title order={3}>Business Transfers</Title>
      <Text>
        If we are involved in a merger, acquisition, or sale of all or a portion
        of our assets, your information may be transferred as part of that
        transaction.
      </Text>

      <br />
      <Title order={3}>With Your Consent</Title>
      <Text>
        We may share your information with third parties when we have your
        consent to do so.
      </Text>

      <br />
      <Title order={3}>Data Retention</Title>
      <Text>
        We retain your personal information for as long as necessary to fulfill
        the purposes outlined in this Privacy Policy, unless a longer retention
        period is required or permitted by law. When we no longer need your
        personal information, we will securely delete or anonymize it.
      </Text>

      <br />
      <Title order={3}>Data Security</Title>
      <Text>
        We implement appropriate technical and organizational measures to
        protect your personal information against unauthorized access,
        alteration, disclosure, or destruction. However, no method of
        transmission over the Internet or electronic storage is 100% secure, so
        we cannot guarantee absolute security.
      </Text>

      <br />
      <Title order={3}>Your Rights and Choices</Title>
      <Text>
        Depending on your location, you may have certain rights regarding your
        personal information, such as:
      </Text>

      <List>
        <ListItem>
          Access: The right to request access to your personal information..
        </ListItem>
        <ListItem>
          Correction: The right to request that we correct inaccurate or
          incomplete information.
        </ListItem>
        <ListItem>
          Deletion: The right to request deletion of your personal information.
        </ListItem>
        <ListItem>
          Restriction: The right to request restriction of processing of your
          personal information.{' '}
        </ListItem>
        <ListItem>
          Portability: The right to receive your personal information in a
          structured, commonly used format.
        </ListItem>
        <ListItem>
          Objection: The right to object to our processing of your personal
          information.
        </ListItem>
      </List>

      <Text>
        To exercise any of these rights, please contact us at [Your Contact
        Email].
      </Text>

      <br />
      <Title order={2}>International Data Transfers</Title>
      <Text>
        Your information may be transferred to and processed in countries other
        than the country in which you reside. These countries may have data
        protection laws that differ from those in your country. We will take
        appropriate safeguards to ensure that your personal information remains
        protected in accordance with this Privacy Policy.
      </Text>

      <br />
      <Title order={2}>Children's Privacy</Title>
      <Text>
        Our Service is not directed to children under the age of 13 (or the
        applicable age of digital consent in your jurisdiction). We do not
        knowingly collect personal information from children. If you become
        aware that a child has provided us with personal information without
        parental consent, please contact us, and we will take steps to remove
        such information.
      </Text>

      <br />
      <Title order={2}>Changes to This Privacy Policy</Title>
      <Text>
        We may update this Privacy Policy from time to time. The updated version
        will be indicated by an updated "Revised" date and will be effective as
        soon as it is accessible. We encourage you to review this Privacy Policy
        periodically to stay informed about our information practices.
      </Text>

      <br />
      <Title order={2}>Contact Us</Title>
      <Text>
        If you have any questions about this Privacy Policy or our privacy
        practices, please contact us at: [Your Company Name] [Your Address]
        [Your Email Address] [Your Phone Number] This Privacy Policy was last
        updated on [Date].
      </Text>
    </Container>
  );
}
