import { Container, Space, Text, Center, Avatar } from '@mantine/core';
import { useUser } from '@clerk/clerk-react';

export function TypoHint() {
  const { user } = useUser();
  return (
    <Container>
      <Center maw={400} h={100} mx="auto">
        <Avatar src={user?.profileImageUrl} alt="it's me" />
        <Text fz="lg" sx={{ padding: '0 1rem' }}>
          Welcome {user?.fullName}
        </Text>
      </Center>
      <Space h="md" />
      <Text fz="xs">Extra small text</Text>
      <Text fz="sm">Small text</Text>
      <Text fz="md">Default text</Text>
      <Text fz="lg">Large text</Text>
      <Text fz="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
      <br />
    </Container>
  );
}
