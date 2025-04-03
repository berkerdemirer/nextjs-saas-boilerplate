import { appConfig } from '@/app-config';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface VerifyEmailProps {
  username?: string;
  url?: string;
}

const VerifyEmail = ({ username, url }: VerifyEmailProps) => {
  const previewText = `Reset your ${appConfig.appName} password`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Verify your <strong>{appConfig.appName}</strong> email
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {username},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for registering with {appConfig.appName}. To complete
              your registration, please verify your email address.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={url}
              >
                Verify Email
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Or copy and paste this URL into your browser:{' '}
              <Link href={url} className="text-blue-600 no-underline">
                {url}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              If you didn&apos;t register for an account, please ignore this
              email
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export function verifyEmail(props: VerifyEmailProps) {
  return <VerifyEmail {...props} />;
}
