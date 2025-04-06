import { appConfig } from '@/app-config';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';

interface WelcomeEmailProps {
  username?: string;
}

const WelcomeEmail = ({ username }: WelcomeEmailProps) => {
  const previewText = `Welcome to ${appConfig.appName}!`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Welcome to <strong>{appConfig.appName}</strong>!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello {username},
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export function welcomeEmail(props: WelcomeEmailProps) {
  return <WelcomeEmail {...props} />;
}
