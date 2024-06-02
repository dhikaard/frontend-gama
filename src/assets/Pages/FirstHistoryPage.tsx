import React from 'react';
import { MantineProvider, Container, TextInput, Group, Box, Text, Badge, Card } from '@mantine/core';
import { Search } from '@tabler/icons-react';

interface ActivityItemProps {
  status: string;
  date: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ status, date }) => {
  return (
    <Card shadow="sm" padding="lg" style={{ marginBottom: '10px' }}>
      <Group position="apart">
        <Box>
          <Text weight={500 as any}>Setor sampah</Text>
          <Text color="dimmed" size="sm">Bank sampah A</Text>
        </Box>
        <Badge color={status === 'Disetujui' ? 'green' : 'blue'}>{status}</Badge>
      </Group>
      <Text size="sm" color="dimmed" style={{ marginTop: 5 }}>{date}</Text>
    </Card>
  );
};

const App: React.FC = () => {
  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <Container size="xs" style={{ marginTop: '20px' }}>
        <TextInput
          placeholder="Cari aktivitas"
          icon={<Search size={14} />}
          mb="lg"
        />
        <ActivityItem status="Menunggu Konfirmasi" date="02/03/2024" />
        <ActivityItem status="Disetujui" date="02/03/2024" />
      </Container>
    </MantineProvider>
  );
};

export default App;
