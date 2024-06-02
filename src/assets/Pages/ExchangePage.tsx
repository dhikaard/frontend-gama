import { useState, useEffect } from "react";
import { useCounter } from '@mantine/hooks';
import {
  Group,
  Button,
  Flex,
  Autocomplete,
  Container,
  Title,
  rem,
  Input,
  Alert,
  Avatar,
  Text,
  Card,
} from "@mantine/core";
import { IconMapPin, IconInfoCircle, IconAlertTriangle, IconPackage, IconNotebook, IconBottle, IconPlus, IconMinus } from "@tabler/icons-react";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const dataLocal = [
  { bank_sampah: "Bank Sampah 1", item_sampah: "bottle ,cardboard, paper", location: "Suite 55" },
  { bank_sampah: "Bank Sampah 2", item_sampah: "paper, bottle", location: "PO Box 41613" },
  { bank_sampah: "Bank Sampah 3", item_sampah: "bottle", location: "PO Box 50058" },
  { bank_sampah: "Bank Sampah 4", item_sampah: "paper", location: "8th Floor" },
  { bank_sampah: "Bank Sampah 5", item_sampah: "paper, cardboard", location: "PO Box 57936" },
];

const validationSchema = Yup.object().shape({
  bankSampah: Yup.string().required('Silahkan untuk memilih bank sampah terlebih dahulu'),
  items: Yup.object().shape({
    BotolPlastik: Yup.number().min(1, 'Minimal salah satu item harus bernilai 1').required(),
    Kardus: Yup.number().min(1, 'Minimal salah satu item harus bernilai 1').required(),
    Kertas: Yup.number().min(1, 'Minimal salah satu item harus bernilai 1').required(),
  }).test('oneOfRequired', 'Minimal salah satu item harus bernilai 1', (value) => {
    return Object.values(value).some(val => val >= 1);
  })
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
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    setCurrentDate(today.toLocaleDateString('id-ID', options));
    fetch('http://127.0.0.1:8000/api/v1/waste-bank')
    .then(response => response.json())
    .then(data => setBankSampah(data))
    .catch(error => console.error('Error:', error));

      // Mengambil data dari API
  }, []);


  const produkData = [
    { nama: "Botol Plastik", logo: <IconBottle stroke={2} style={{ color: "#1971C2" }} />, bgColor: "#E7F5FF", point:"1000 Koin / ½ liter", counter: useCounter(0, { min: 0 }) },
    { nama: "Kardus", logo: <IconPackage stroke={2} style={{ color: "#7950F2" }} />, bgColor: "#F3F0FF", point:"5000 Koin / 1 kg", counter: useCounter(0, { min: 0 }) },
    { nama: "Kertas", logo: <IconNotebook stroke={2} style={{ color: "#373A40" }} />, bgColor: "#F1F3F5", point:"500 Koin / ½ kg", counter: useCounter(0, { min: 0 }) },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const itemCounts = {
      BotolPlastik: produkData[0].counter[0],
      Kardus: produkData[1].counter[0],
      Kertas: produkData[2].counter[0],
    };
  
    // Periksa apakah minimal satu item terpilih
    const isAtLeastOneSelected = Object.values(itemCounts).some(val => val > 0);
  
    if (!isAtLeastOneSelected) {
      setErrors({ ...errors, items: 'Minimal satu item harus dipilih' });
      return;
    }
  
    const values = { bankSampah: selectedBankSampah, items: itemCounts };
  
    validationSchema.validate(values, { abortEarly: false })
      .then(() => {
        console.log('Validasi sukses');
        navigate('/metode-penukaran');
      })
      .catch((err) => {
        const newErrors = err.inner.reduce((acc: Record<string, string>, error: Yup.ValidationError) => {
          return { ...acc, [error.path as string]: error.message };
        }, {});
        setErrors(newErrors);
      });
  };

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
              <Text fw={700} size="lg" mb="sm">Roger Dias</Text>
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
        <form onSubmit={handleSubmit}>
          <Autocomplete
            className="InputSampah"
            label="Bank sampah point"
            description="Pilih bank sampah tujuan Anda."
            data={bankSampah.map((item) => item.bank_sampah)}
            value={searchValue}
            onChange={(value) => {
              setSearchValue(value);
              setSelectedBankSampah(value);
              setErrors({ ...errors, bankSampah: '' });
            }}
            rightSectionPointerEvents="none"
            rightSection={IconMap}
            comboboxProps={{ shadow: "md" }}
            withAsterisk
            pointer
            error={errors.bankSampah}
            styles={{
              input: {
                borderColor: errors.bankSampah ? 'red' : '',
              },
              rightSection: {
                color: errors.bankSampah ? 'red' : '',
              },
            }}
          />

          <Flex className="label" mt="sm" direction="column">
            <Input.Label required>Jenis sampah</Input.Label>
            <Input.Description fz="sm" fw={400}>
              Pilih jenis sampah yang akan disetorkan.
            </Input.Description>

            {showAlert && (
              <Alert
                className="alert"
                mt="sm"
                variant="light"
                color="blue"
                radius="md"
                withCloseButton
                title="Perhatian!"
                icon={<IconInfoCircle />}
                onClose={() => setShowAlert(false)}
                lh="1rem"
              >
                Jenis barang yang bisa ditukarkan terbatas, tergantung pada kebijakan masing-masing bank sampah.
              </Alert>
            )}

            {errors.items && (
              <Alert
                className="alert"
                mt="sm"
                variant="light"
                color="red"
                radius="md"
                withCloseButton
                title="Perhatian!"
                icon={<IconAlertTriangle />}
                onClose={() => setShowAlert(false)}
                lh="1rem"
              >
                {errors.items}
              </Alert>
            )}

          </Flex>

          {produkData.map((produk, index) => (
            <Flex className="item-sampah" direction="row" align="center" justify="space-between" key={index} my="0.8rem">
              <Flex className="logo" gap={20}>
                <Avatar variant="defalut" radius="md" size="lg" bg={produk.bgColor}>{produk.logo}</Avatar>
                <Flex direction="column" justify="center">
                  <Text fw={600}>{produk.nama}</Text>
                  <Text size="sm" color="#868E96">
                    {produk.point}
                  </Text>
                </Flex>
              </Flex>
              <Flex className="count-item" align="center">
                <Button
                  onClick={() => {
                    produk.counter[1].decrement();
                    setErrors({ ...errors, items: '' });
                  }}
                  size="xs"
                  variant="transparent"
                  color="gray"
                  p="0"
                >
                  <IconMinus stroke={2} style={{ width: rem("1.25rem"), height: rem("1.25rem") }} />
                </Button>
                <Title ta="center" size="sm" fw={400} px="0.5rem">
                  {produk.counter[0]}
                  <Text pl="0.5rem" span c="#868E96">Kg</Text>
                </Title>
                <Button
                  onClick={() => {
                    produk.counter[1].increment();
                    setErrors({ ...errors, items: '' });
                  }}
                  size="xs"
                  variant="transparent"
                  color="gray"
                  p="0"
                >
                  <IconPlus stroke={2} style={{ width: rem("1.25rem"), height: rem("1.25rem") }} />
                </Button>
              </Flex>
            </Flex>
          ))}

          <Container
            bg="white"
            h="5rem"
            display="flex"
            bottom={0}
            left={0}
            right={0}
            className="navigation"
            mt="1rem"
            style={{ zIndex: 10 }} // Menetapkan z-index di sini
          >
            <Group
              grow
              className="NavigationGroup"
              display="flex"
              justify="center"
              align="center"
            >
              <Button
                className="NavigationBtn"
                variant="outline"
                color="#416835"
                radius="md"
                size="md"
                w="8rem"
                fullWidth
                type="button"
              >
                Kembali
              </Button>
              <Button
                className="NavigationBtn"
                variant="filled"
                color="#416835"
                radius="md"
                size="md"
                w="8rem"
                fullWidth
                type="submit"
              >
                Selanjutnya
              </Button>
            </Group>
          </Container>
        </form>
      </Flex>
    </div>
  );
}

export default ExchangePage;
