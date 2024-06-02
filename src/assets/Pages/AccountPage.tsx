import { useState, useEffect } from "react";
import {
  Group,
  Button,
  Flex,
  TextInput,
  Container,
  Title,
  rem,
  Text,
  Card,
  Stack
} from "@mantine/core";
function ExchangePage() {

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    setCurrentDate(today.toLocaleDateString("id-ID", options));
  }, []);

  return (
    <div className="penukaran-sampah">
      <Container display="flex" bg="#F8F9FA" h="3.75rem" className="header">
        <Title order={6} ta="center" lh="1.125rem" fw={600} size="xl">
          Profil Pengguna
        </Title>
      </Container>
      <Flex className="main" direction="column" mt="1.5rem" mb="5rem">
        <Card shadow="sm" padding="lg" radius="md" mb="0.75rem" withBorder>
          <Card.Section className="text-background">
            <Flex>
              <Text fw={500} size="lg" mr="0.5rem">
                Hai,
              </Text>
              <Text fw={700} size="lg" mb="sm">
                Roger Dias
              </Text>
            </Flex>
            <Group justify="space-between" mb="0.25rem">
              <Flex align="center">
                <Text size="1.5rem" fw={600} lh="120%" mr="8px">
                  1000
                </Text>
                <Text size="md">Koin</Text>
              </Flex>
              <Text size="1.5rem" fw={600} lh="120%" mr="8px">
                =
              </Text>
              <Flex align="center">
                <Text size="1.5rem" fw={600} lh="120%" mr="8px">
                  100.000
                </Text>
                <Text size="md">IDR</Text>
              </Flex>
            </Group>
          </Card.Section>
          <Card.Section className="text-card" color="#000">
            <Text size="md" px="1rem" py="1rem" fw={400}>
              {currentDate}
            </Text>
          </Card.Section>
        </Card>
        <Stack gap="xs">

        <TextInput
          size="md"
          radius="md"
          label="Nama Lengkap"
          withAsterisk
          value="Ardd"
          disabled
        />
        <TextInput
          size="md"
          radius="md"
          label="Alamat tempat tinggal"
          withAsterisk
          value="Jl. Candi Pawon"
          disabled
        />
        <TextInput
          size="md"
          radius="md"
          label="No. WhatsApp"
          withAsterisk
          value="08123456789"
          disabled
        />
        <TextInput
          size="md"
          radius="md"
          label="Email"
          withAsterisk
          value="email@email.com"
          disabled
        />
        </Stack>
            <Flex mt="1.85rem">

            <Button justify="left" variant="outline" color="#416835" size="md" radius="md">Keluar</Button>
            </Flex>

            <Flex >

            </Flex>

      </Flex>
    </div>
  );
}

export default ExchangePage;