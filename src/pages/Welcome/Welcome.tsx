import { Button, Stack, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

const useRainDropModal = () => {
  const openModal = () =>
    modals.openConfirmModal({
      title: 'RainDrop Modal',
      children: (
        <Text size="sm">
          LINE Seedは、「成長」の意味を込めて、 LINEが初めて開発したフォントシリーズです。
          ジオメトリックな形でLINEの利便性と フレンドリーなアイデンティティから
          着想を得て制作されました。
        </Text>
      ),
      labels: {
        confirm: 'Confirm',
        cancel: 'Cancel',
      },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });
  return { openModal };
};

export function Welcome() {
  const { openModal } = useRainDropModal();
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Welcome to Mantine!
      </Text>
      <Button onClick={openModal}>Click me !</Button>
      <Button
        onClick={() => {
          notifications.show({
            title: 'LINE Seed เป็นชุดตัวอักษรแรกของ LINE ',
            message: '아이덴티티에서 영감을 받았습니다. \n' + '지금 LINE Seed를 만나보세요.',
          });
        }}
      >
        Notify me !
      </Button>
    </Stack>
  );
}
