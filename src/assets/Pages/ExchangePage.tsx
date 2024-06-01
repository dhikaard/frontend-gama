import { useState, useEffect } from "react";
import { useCounter } from "@mantine/hooks";
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
  Card,
  Text,
} from "@mantine/core";
import {
  IconMapPin,
  IconInfoCircle,
  IconPackage,
  IconEgg,
  IconBottle,
  IconPlus,
  IconMinus,
} from "@tabler/icons-react";

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

function ExchangePage() {
  const IconMap = (
    <IconMapPin
      stroke={2}
      style={{ width: rem("1.25rem"), height: rem("1.25rem") }}
    />
  );
  const IconInfo = (
    <IconInfoCircle
      stroke={2}
      style={{ width: rem("1.25rem"), height: rem("1.25rem") }}
    />
  );

  const BottleIcon = <IconBottle stroke={2} style={{ color: "#1971C2" }} />;
  const PackageIcon = <IconPackage stroke={2} style={{ color: "#7950F2" }} />;
  const PaperIcon = <IconEgg stroke={2} style={{ color: "#373A40" }} />;

  const PlusIcon = (
    <IconPlus
      stroke={2}
      style={{ width: rem("1.25rem"), height: rem("1.25rem") }}
    />
  );
  const MinusIcon = (
    <IconMinus
      stroke={2}
      style={{ width: rem("1.25rem"), height: rem("1.25rem") }}
    />
  );

  const [bankSampah, setBankSampah] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // handleClose Allert
  const [showAlert, setShowAlert] = useState(true);
  const handleCloseAlert = () => setShowAlert(false);

  // Fetch nama bank sampah dari data local
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/categories")
  //     .then((res) => res.json())
  //     .then((data) => setBankSampah(data));
  // }, []);
  useEffect(() => {
    setBankSampah(dataLocal);
  }, []);

  useEffect(() => {
    const today = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    setCurrentDate(today.toLocaleDateString('id-ID', options));
  }, []);

  // Fungsi untuk melakukan pencarian
  // const filteredBankSampah = bankSampah.filter((item) =>
  //   item.toLowerCase().includes(searchValue.toLowerCase())
  // );
  const filteredBankSampah = bankSampah
    .map((item) => item.bank_sampah)
    .filter((item) => item.toLowerCase().includes(searchValue.toLowerCase()));

  const produkData = [
    {
      nama: "Minyak ½ liter",
      logo: BottleIcon,
      bgColor: "#E7F5FF",
      point: "1000 Koin / ½ liter",
      counter: useCounter(0, { min: 0 }),
    },
    {
      nama: "Beras 1 Kg",
      logo: PackageIcon,
      bgColor: "#F3F0FF",
      point: "5000 Koin / 1 kg",
      counter: useCounter(0, { min: 0 }),
    },
    {
      nama: "Telur ½ Kg",
      logo: PaperIcon,
      bgColor: "#F1F3F5",
      point: "500 Koin / ½ kg",
      counter: useCounter(0, { min: 0 }),
    },
  ];
  

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

        <Autocomplete
          className="InputSampah"
          label="Bank sampah point"
          description="Pilih bank sampah tujuan Anda."
          data={filteredBankSampah}
          value={searchValue}
          onChange={setSearchValue}
          rightSectionPointerEvents="none"
          rightSection={IconMap}
          comboboxProps={{ shadow: "md" }}
          withAsterisk
          pointer
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
              icon={IconInfo}
              onClose={handleCloseAlert}
              lh="1rem"
            >
              Jenis barang yang bisa ditukarkan terbatas, tergantung pada
              kebijakan masing-masing bank sampah.
            </Alert>
          )}
        </Flex>

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
            >
              Selanjutnya
            </Button>
          </Group>
        </Container>

        {produkData.map((produk, index) => (
          <Flex
            className="item-sampah"
            direction="row"
            align="center"
            justify="space-between"
            key={index}
            mt="sm"
          >
            <Flex className="logo" gap={20}>
              <Avatar
                variant="defalut"
                radius="md"
                size="lg"
                bg={produk.bgColor}
              >
                {produk.logo}
              </Avatar>
              <Flex direction="column" justify="center">
                <Text fw={600}>{produk.nama}</Text>
                <Text size="sm" color="#868E96">
                  {produk.point}
                </Text>
              </Flex>
            </Flex>
            <Flex className="count-item" align="center">
              <Button
                onClick={produk.counter[1].decrement}
                size="xs"
                variant="transparent"
                color="gray"
                p="0"
              >
                {MinusIcon}
              </Button>
              <Title ta="center" size="sm" fw={400} px="0.5rem">
                {produk.counter[0]}
                <Text pl="0.5rem" span c="#868E96">
                  Kg
                </Text>
              </Title>
              <Button
                onClick={produk.counter[1].increment}
                size="xs"
                variant="transparent"
                color="gray"
                p="0"
              >
                {PlusIcon}
              </Button>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </div>
  );
}

export default ExchangePage;
