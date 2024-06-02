import React from 'react';
import { Container, Card, Text, Group, Badge, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function App() {
  const data = [
    {
      id: 1,
      title: 'Setor sampah',
      bank: 'Bank sampah A',
      date: '02/03/2024',
      status: 'MENUNGGU KONFIRMASI',
      statusColor: 'blue',
    },
    {
      id: 2,
      title: 'Setor sampah',
      bank: 'Bank sampah A',
      date: '02/03/2024',
      status: 'DISETUJUI',
      statusColor: 'green',
    },
  ];

  return (
    <Container style={{ padding: '16px', maxWidth: '600px' }}>
      <Input
        icon={<IconSearch size={16} />}
        placeholder="Cari aktivitas"
        radius="md"
        style={{ marginBottom: '16px' }}
      />
      {data.map((item) => (
        <Card key={item.id} shadow="sm" padding="lg" style={{ marginBottom: '16px' }}>
          <Group position="apart" style={{ marginBottom: 5 }}>
            <Text weight={500}>{item.title}</Text>
            <Badge color={item.statusColor}>{item.status}</Badge>
          </Group>
          <Text size="sm" color="dimmed">{item.bank}</Text>
          <Text size="xs" color="dimmed">{item.date}</Text>
        </Card>
      ))}
    </Container>
  );
}

export default App;
