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
import {
  IconMapPin,
  IconPencil,
  IconAlertTriangle,
  IconPackage,
  IconNotebook,
  IconBottle,
  IconPlus,
  IconMinus,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const dataLocal = [
  {
    bank_sampah: "Bank Sampah 1",
    item_sampah: "bottle ,cardboard, paper",
    location: "Suite 55",
  },
  {
    bank_sampah: "Bank Sampah 2",
    item_sampah: "paper, bottle",
    location: "PO Box 41613",
  },
  {
    bank_sampah: "Bank Sampah 3",
    item_sampah: "bottle",
    location: "PO Box 50058",
  },
  { bank_sampah: "Bank Sampah 4", item_sampah: "paper", location: "8th Floor" },
  {
    bank_sampah: "Bank Sampah 5",
    item_sampah: "paper, cardboard",
    location: "PO Box 57936",
  },
];

const validationSchema = Yup.object().shape({
  bankSampah: Yup.string().required(
    "Silahkan untuk memilih bank sampah terlebih dahulu"
  ),
  items: Yup.object()
    .shape({
      BotolPlastik: Yup.number()
        .min(1, "Minimal salah satu item harus bernilai 1")
        .required(),
      Kardus: Yup.number()
        .min(1, "Minimal salah satu item harus bernilai 1")
        .required(),
      Kertas: Yup.number()
        .min(1, "Minimal salah satu item harus bernilai 1")
        .required(),
    })
    .test(
      "oneOfRequired",
      "Minimal salah satu item harus bernilai 1",
      (value) => {
        return Object.values(value).some((val) => val >= 1);
      }
    ),
});

function ExchangePage() {
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState("");
  const [bankSampah, setBankSampah] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedBankSampah, setSelectedBankSampah] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const today = new Date();
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    setCurrentDate(today.toLocaleDateString("id-ID", options));
    setBankSampah(dataLocal);
  }, []);

  const IconMap = (
    <IconMapPin
      stroke={2}
      style={{ width: rem("1.25rem"), height: rem("1.25rem") }}
    />
  );

  return (
    <div className="penukaran-sampah">
      <Container display="flex" bg="#F8F9FA" h="3.75rem" className="header">
        <Title order={6} ta="center" lh="1.125rem" fw={600} size="xl">
          Penukaran
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
