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
  const previewText = `Welcome to`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Welcome to <strong>Better Auth</strong>!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
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
